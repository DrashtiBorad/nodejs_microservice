const routes = require("express").Router();
const { verifyToken } = require("../../../middleware/authmiddleware");
const orederController = require("./order.controller");

routes.post("/", verifyToken, orederController.createOrder);

module.exports = routes;
