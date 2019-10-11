const express = require("express");

const ProjectRouter = require("./projects/projectRouter.js");

const server = express();

server.use(express.json());

server.use("/projects", ProjectRouter);

server.get("/", (req, res) => {
  res.status(200).send(`<h2>It's Working!</h2>`);
});

module.exports = server;
