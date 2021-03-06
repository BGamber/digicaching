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

const {
  getUserById,
  getItems,
  getInventories,
  getCollections,
  getCaches,
  claimCache,
  placeCache
} = require("./database");

const app = express();
let Router = express.Router;

let auth = new Router();
auth.post("/login", userLogin);
auth.post("/register", userRegister);

let api = new Router();
api.get("/users/:id?", getUserById);
api.get("/items/:id?", getItems);
api.get("/inventories/:id?", getInventories);
api.get("/collections/:id?", getCollections);
api.get("/caches/:id?", getCaches);
api.put("/caches/:id/claim", claimCache);
api.post("/caches/place", placeCache);

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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