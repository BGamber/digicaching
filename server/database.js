const pgp = require("pg-promise")();
const db = pgp(process.env.DATABASE_URL);
pgp.pg.defaults.ssl = true;
const moment = require('moment');

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
  let users = await db.query(queryString, [req.params.id]);
  let queryString2 = "SELECT u.name, u.image_url FROM users u " +
    "JOIN friends f ON u.id = f.friend_id " +
    "WHERE f.user_id = $1;";
  await Promise.all(users.map(async user =>
    user.friends = await db.query(queryString2, [user.id])));
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
  let queryString = "SELECT item_id, quantity FROM inventories" +
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
    "i.image_url as item_image_url, c.createdon, c.openedon, c.longitude, c.latitude, " +
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
    queryString += "WHERE longitude BETWEEN $3 AND $4 AND latitude BETWEEN $5 AND $6;";
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

let claimCache = async (req, res) => {
  let claimedCheck = await db.any("SELECT * FROM claims WHERE cache_id = $1;", [req.params.id]);
  if (claimedCheck.length > 0) {
    res.status(422).send("Cache Already Claimed By User");
  } else {
    let { longitude, latitude } = req.body;
    let { distancecheck } = await db.one("SELECT (ST_DISTANCE(ST_POINT($1, $2), location) < 50) as distancecheck " +
      "FROM caches WHERE id = $3;", [longitude, latitude, req.params.id]);
    if (distancecheck) {
      let { item_id } = await db.one("SELECT item_id FROM caches WHERE id = $1", [req.params.id]);
      let cacheItem = item_id;
      if (item_id === 1) {
        let randomItem = await db.one("SELECT i.id FROM items i " +
          "LEFT OUTER JOIN recipes r ON i.id = r.item_id " +
          //"WHERE i.theme_id = {USER'S CURRENT THEME} (Send theme in request when implemented) 
          "WHERE r.ingredients IS NULL " +
          "AND i.id != 1 " +
          "ORDER BY RANDOM() LIMIT 1;");
        cacheItem = randomItem;
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

let postNewCache = (cache) => {
  let { item_id, longitude, latitude } = cache;
  let queryString = "INSERT INTO caches (item_id, longitude, latitude, location) " +
    "VALUES ($1, $2, $3, ST_POINT($2, $3));"
  let insert = db.none(queryString, [item_id, longitude, latitude]);
  return insert;
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
  postNewUser
};
