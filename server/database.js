const pgp = require('pg-promise')();
const db = pgp(process.env.DATABASE_URL);
pgp.pg.defaults.ssl = true;

let getUserById = async (req,res) => {
  let queryString = "SELECT email, name, image_url, password FROM users WHERE id = $1;";
  let user = await db.one(queryString, req.params.id);
  res.send( user );
};

let postNewUser = (name, email, hashPass) => {
  let queryString = "INSERT INTO users (name, email, password) VALUES ($1, $2, $3);";
  let insert = db.none(queryString, [name, email, hashPass]);
  return insert;
}

module.exports = {
  getUserById,
  postNewUser
};