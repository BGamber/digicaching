#! /usr/bin/env node

require("dotenv-safe").config();
const express = require("express");
const cors = require("cors");
const {
  userLogin,
  userRegister,
  checkToken,
  createToken
} = require("./users");

const { getUserById } = require("./database");

const app = express();
let Router = express.Router;

let getItems = ((req, res) => {
  console.log(req.params);
  res.send("Items");
});

let getCollections = ((req, res) => {
  console.log(req.params);
  res.send("Collections");
});

let getCaches = ((req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.send("Caches");
});

let auth = new Router();
auth.post("/login", userLogin);
auth.post("/register", userRegister);

let api = new Router();
api.get("/users/:id?", getUserById);
api.get("/items/:id?", getItems);
api.get("/collections/:id?", getCollections);
api.get("/caches/:id?", getCaches);

app.use(cors());

app.use(express.json());
app.use(express.urlencoded());
app.use("/auth", auth);
app.use("/api", checkToken, api);
app.use("/", (req, res, next) => {
  let file = process.env.PUBLICDIR + req.url;
  res.sendFile(process.env.PUBLICDIR + req.url);
});
app.use((err, req, res, next) => {
  res.sendFile(process.env.PUBLICDIR + "/index.html");
});

app.listen(process.env.PORT || 3000, () => console.log("Server is now listening.", process.env.PORT || 3000));