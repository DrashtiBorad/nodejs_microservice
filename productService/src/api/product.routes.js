const routes = require("express").Router();
const { verifyToken } = require("../../../middleware/authmiddleware");
const productController = require("./product.controller");

routes.post("/", verifyToken, productController.createProduct);

module.exports = routes;
