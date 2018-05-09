const pgp = require('pg-promise')();
const db = pgp(process.env.DATABASE_URL);
pgp.pg.defaults.ssl = true;

let findUserByEmail = async email => {
  let queryString = "SELECT id, username, password FROM users WHERE email = $1;";
  let user = await db.query(queryString, [email]);
  return user;
};

let getUser = ((req, res) => {

  console.log('getUser: ', req.params);
  res.send("Users");
});

// let getUser = async (req, res) => {
//   let id = req.params.id;
//   let queryString = "SELECT id, name, email, image_url, passord FROM users WHERE id = $1;";
//   let { encounter_list } = await db.one(queryString, id);
//   res.setHeader("Content-Type", "application/json");
//   res.send(encounter_list);
// };

module.exports = {
  findUserByEmail,
  getUser
};