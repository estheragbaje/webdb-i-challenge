const express = require("express");

const accountRouter = require("./accounts/account-router.js");

const db = require("./data/dbConfig.js");

const server = express();

server.use(express.json());

server.use("/api/accounts", accountRouter);

server.get("/", (req, res) => {
  res.send("<h4>Creating DB Helpers with Knex</h4>");
});

module.exports = server;
