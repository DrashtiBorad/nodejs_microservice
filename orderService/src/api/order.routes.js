const routes = require("express").Router();
const { verifyToken } = require("../../../middleware/authmiddleware");
const orderController = require("./order.controller");

routes.post("/", verifyToken, orderController.createOrder);

module.exports = routes;
