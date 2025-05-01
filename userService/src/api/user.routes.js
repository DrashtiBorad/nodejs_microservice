const routes = require("express").Router();
const userController = require("./user.controller");

routes.post("/", userController.createUser);

module.exports = routes;
