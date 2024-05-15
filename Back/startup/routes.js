const express = require("express");
const user = require("../controller/userController.js");

const routes = express.Router();

routes.post("/api/user", user.create);

module.exports = routes;