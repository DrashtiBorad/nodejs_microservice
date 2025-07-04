const routes = require("express").Router();
const { verifyToken } = require("../../../middleware/authmiddleware");
const orderController = require("./order.controller");

routes.get("/", (res) => {
  res.send("Order Service is running");
});
routes.post("/", verifyToken, orderController.createOrder);

module.exports = routes;
