const routes = require("express").Router();
const userController = require("./user.controller");

routes.post("/create-user", userController.createUser);
routes.get("/", (res) => {
  res.send("User Service is running");
});

module.exports = routes;
