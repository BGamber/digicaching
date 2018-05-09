const pgp = require('pg-promise')();
const db = pgp(process.env.DATABASE_URL);
pgp.pg.defaults.ssl = true;

let getUserById = async (req,res) => {
  let queryString = "SELECT email, name, image_url, password FROM users WHERE id = $1;";
  let user = await db.one(queryString, req.params.id);
  res.send( user );
};

module.exports = {
  getUserById
};