#! /usr/bin/env node

require("dotenv-safe").config();
const express = require("express");
const cors = require("cors");

const app = express();
let Router = express.Router;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded());
app.use("/", (req, res, next) => {
  res.sendFile(process.env.PUBLICDIR + req.url);
});
app.use((err, req, res, next) => {
  res.sendFile(process.env.PUBLICDIR + "/index.html");
});


app.listen(process.env.PORT, () => console.log("Server is now listening.", process.env.PORT));
