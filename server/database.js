const pgp = require("pg-promise")();
const db = pgp(process.env.DATABASE_URL);
pgp.pg.defaults.ssl = true;
const moment = require("moment");
const { generateCoordinates } = require("./coordinates");

let getUserByEmail = async email => {
  let queryString = "SELECT id, name, password FROM users WHERE email = $1;";
  let user = await db.one(queryString, [email]);
  return user;
};

let getUserByName = async name => {
  let queryString = "SELECT id, name FROM users WHERE name ILIKE $1;";
  let user = await db.query(queryString, [name]);
  return user;
};

let getUserById = async (req, res) => {
  let queryString = "SELECT id, email, name, image_url FROM users" +
    (req.params.id !== undefined ? " WHERE id = $1" : "") + ";";

  let users;
  try {
    users = await db.query(queryString, [req.params.id]);
  } catch (err) {
    res.setHeader("Content-Type", "application/json");
    res.status(422).send(JSON.stringify(err));
  };

  let queryString2 = "SELECT u.name, u.image_url FROM users u " +
    "JOIN friends f ON u.id = f.friend_id " +
    "WHERE f.user_id = $1;";

  try {
    await Promise.all(users.map(async user =>
      user.friends = await db.query(queryString2, [user.id])));
  } catch (err) {
    res.setHeader("Content-Type", "application/json");
    res.status(422).send(JSON.stringify(err));
  };

  let queryString3 = "SELECT i.id, i.name as item_name, i.description as item_description, " +
    "i.image_url as item_image_url, inv.quantity FROM inventories inv " +
    "JOIN items i ON inv.item_id = i.id" +
    " WHERE user_id = $1;";
  try {
    await Promise.all(users.map(async user =>
      user.inventory = await db.query(queryString3, [user.id])));
  } catch (err) {
    res.setHeader("Content-Type", "application/json");
    res.status(422).send(JSON.stringify(err));
  };

  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(users));
};

let getItems = async (req, res) => {
  let queryString = "SELECT name, description, image_url FROM items" +
    (req.params.id !== undefined ? " WHERE id = $1" : "") + ";";
  let items = await db.query(queryString, [req.params.id]);
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(items));
};

let getInventories = async (req, res) => {
  let queryString = "SELECT i.id, i.name as item_name, i.description as item_description, " +
    "i.image_url as item_image_url, inv.quantity FROM inventories inv " +
    "JOIN items i ON inv.item_id = i.id" +
    (req.params.id !== undefined ? " WHERE user_id = $1" : "") + ";";
  let inventories = await db.query(queryString, [req.params.id]);
  res.send(inventories);
};

let getCollections = (req, res) => {
  console.log(req.params);
  res.send("Collections");
};

let getCaches = async (req, res) => {
  let locationParams = req.query.loc.split(",");
  let location = locationParams.map(coord => parseFloat(coord));
  let queryString = "SELECT c.id, i.name as item_name, i.description as item_description, " +
    "i.image_url as item_image_url, c.createdon, c.openedon, c.latitude, c.longitude, " +
    "ST_DISTANCE(ST_POINT($1, $2), c.location) as distance " +
    "FROM caches c JOIN items i ON c.item_id = i.id ";
  let caches;
  if (req.params.id) {
    queryString += "WHERE c.id = $3;";
    caches = await db.query(queryString, [location[0], location[1], req.params.id]);
  }
  else if (req.query.bounds) {
    let boundsParams = req.query.bounds.split(",");
    let bounds = boundsParams.map(coord => parseFloat(coord));
    console.log(bounds);
    queryString += "WHERE latitude BETWEEN $4 AND $3 AND longitude BETWEEN $5 AND $6;";
    caches = await db.query(queryString, [
      location[0],
      location[1],
      bounds[0],
      bounds[1],
      bounds[2],
      bounds[3]
    ]);
  } else {
    caches = await db.query(queryString + ";", [location[0], location[1]]);
  };
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(caches));
};

let getRandomItem = () =>
  db.one("SELECT i.id FROM items i " +
    "LEFT OUTER JOIN recipes r ON i.id = r.item_id " +
    "WHERE r.ingredients IS NULL " +
    "AND i.id != 1 " +
    "ORDER BY RANDOM() LIMIT 1;");

let claimCache = async (req, res) => {
  let claimedCheck = await db.any("SELECT * FROM claims WHERE cache_id = $1 AND user_id = $2;", [req.params.id, req.jwt.userId]);
  if (claimedCheck.length > 0) {
    res.status(422).send("Cache Already Claimed By User");
  } else {
    let { latitude, longitude } = req.body;
    let { distancecheck } = await db.one("SELECT (ST_DISTANCE(ST_POINT($1, $2), location) < 50) as distancecheck " +
      "FROM caches WHERE id = $3;", [latitude, longitude, req.params.id]);
    if (distancecheck) {
      let { item_id } = await db.one("SELECT item_id FROM caches WHERE id = $1", [req.params.id]);
      let cacheItem = item_id;
      if (item_id === 1) {
        let randomItem = await getRandomItem();
        cacheItem = randomItem.id;
      };
      let queryString = "UPDATE caches " +
        "SET item_id = $1, openedon = $2 WHERE id = $3 " +
        "AND openedon IS NULL;";
      try {
        await db.none(queryString, [cacheItem, moment(), req.params.id]);
      } catch (err) {
        res.send(JSON.stringify(err));
        return;
      };
      let queryString2 = "INSERT INTO inventories " +
        "(user_id, item_id, quantity) VALUES ($1, $2, 1) " +
        "ON CONFLICT ON CONSTRAINT inventories_pkey DO " +
        "UPDATE SET quantity = inventories.quantity + 1 " +
        "WHERE inventories.user_id = $1 AND inventories.item_id = $2;";
      try {
        await db.none(queryString2, [req.jwt.userId, cacheItem]);
      } catch (err) {
        res.send(JSON.stringify(err));
        return;
      };
      let queryString3 = "INSERT INTO claims (user_id, cache_id) " +
        "VALUES ($1, $2);";
      try {
        await db.none(queryString3, [req.jwt.userId, req.params.id]);
      } catch (err) {
        res.send(JSON.stringify(err));
        return;
      };
      res.status(200).send("Cache Claimed");
    } else {
      res.status(422).send("Not Close Enough to Claim");
    };
  };
};

let postNewUser = (name, email, hashPass) => {
  let queryString = "INSERT INTO users (name, email, password) VALUES ($1, $2, $3);";
  let insert = db.none(queryString, [name, email, hashPass]);
  return insert;
};

let serverPlaceCache = async () => {
  let item_id = await getRandomItem();
  let { latitude, longitude } = generateCoordinates();
  let queryString = "INSERT INTO caches (item_id, latitude, longitude, location) " +
    "VALUES ($1, $2, $3, ST_POINT($2, $3));";
  return db.none(queryString, [item_id, latitude, longitude]);
};

let placeCache = async (req, res) => {
  let { item_id, latitude, longitude } = req.body;
  let queryString = "SELECT quantity FROM inventories " +
    "WHERE user_id = $1 AND item_id = $2;";
  let result = await db.oneOrNone(queryString, [req.jwt.userId, item_id]);
  if (result !== null && result.quantity > 0) {
    let queryString2 = "INSERT INTO caches (item_id, latitude, longitude, location, user_id) " +
      "VALUES ($1, $2, $3, ST_POINT($2, $3), $4) RETURNING id;";
    let newCache;
    try {
      newCache = await db.one(queryString2, [item_id, latitude, longitude, req.jwt.userId]);
    } catch (err) {
      res.send(JSON.stringify(err));
    };
    let queryString3 = "INSERT INTO claims (user_id, cache_id) " +
      "VALUES ($1, $2);";
    try {
      await db.none(queryString3, [req.jwt.userId, newCache.id]);
    } catch (err) {
      res.send(JSON.stringify(err));
    };
    let queryString4 = "UPDATE inventories SET quantity = inventories.quantity - 1 " +
      "WHERE user_id = $1 AND item_id = $2;";
    try {
      await db.none(queryString4, [req.jwt.userId, item_id]);
    } catch (err) {
      res.send(JSON.stringify(err));
    };
    res.send("Cache Placed");
  } else {
    res.setHeader("Content-Type", "application/json");
    res.status(422).send("Item Missing, Cannot Create Cache");
  };
};

module.exports = {
  getUserById,
  getUserByEmail,
  getUserByName,
  getItems,
  getInventories,
  getCollections,
  getCaches,
  claimCache,
  serverPlaceCache,
  placeCache,
  postNewUser
};
