const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { findUserByEmail } = require('./database');

let checkToken = async (req, res, next) => {
  let { authorization: Bearertoken } = req.headers;
  let token = Bearertoken.split(" ")[1];
  let payload;
  try {
    payload = jwt.verify(token, process.env.SIGNATURE);
  } catch (err) {
    console.log(err);
  }

  if (payload) {
    req.jwt = payload;
    next();
  } else {
    res.send(401);
  }
};

let createToken = user =>
  jwt.sign(
    { userId: user.id },
    process.env.SIGNATURE,
    { expiresIn: '7d' }
  );

let userLogin = async (req, res) => {
  let { email, password } = req.body;
  let user = await findUserByEmail(email);

  let isValid = await bcrypt.compare(password, user.pass);
  if (isValid) {
    let token = createToken(user);
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify({ token }));
  } else {
    res.sendStatus(401, "Missing/Incorrect Password");
  }
};

let userRegister = async (req, res) => {
  res.send("You went to Register!");
};

module.exports = {
  checkToken,
  createToken,
  userLogin,
  userRegister
};
