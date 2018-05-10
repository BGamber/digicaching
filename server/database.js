const pgp = require('pg-promise')();
const db = pgp(process.env.DATABASE_URL);
pgp.pg.defaults.ssl = true;

let getUserByEmail = async email => {
  let queryString = 'SELECT id, username, pass FROM users WHERE email = $1;';
  let user = await db.one(queryString, [email]);
  return user;
};

let getUserByName = async name => {
  let queryString = 'SELECT id, username FROM users WHERE name ILIKE $1;';
  let user = await db.query(queryString, [name]);
  return user;
};

let getUserById = async (req, res) => {
  let queryString = "SELECT email, name, image_url, password FROM users WHERE id = $1;";
  let user = await db.one(queryString, req.params.id);
  res.send(user);
};

let getItems = (req, res) => {
  console.log(req.params);
  res.send("Items");
};

let getCollections = (req, res) => {
  console.log(req.params);
  res.send("Collections");
};

let getCaches = (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.send("Caches");
};

let postNewUser = (name, email, hashPass) => {
  let queryString = "INSERT INTO users (name, email, password) VALUES ($1, $2, $3);";
  let insert = db.none(queryString, [name, email, hashPass]);
  return insert;
};

module.exports = {
  getUserById,
  postNewUser
};