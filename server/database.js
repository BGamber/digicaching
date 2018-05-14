const pgp = require("pg-promise")();
const db = pgp(process.env.DATABASE_URL);
pgp.pg.defaults.ssl = true;

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
  let queryString = "SELECT id, item_id, createdon, openedon, longitude, latitude, " +
    "ST_DISTANCE(ST_POINT($1, $2), location) as distance " +
    "FROM caches ";
  let caches;
  if (req.params.id) {
    queryString += "WHERE id = $3;";
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
  postNewUser
};
