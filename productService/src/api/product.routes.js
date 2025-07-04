const routes = require("express").Router();
const { verifyToken } = require("../../../middleware/authmiddleware");
const productController = require("./product.controller");

routes.get("/", (res) => {
  res.send("Product Service is running");
});
routes.post("/", verifyToken, productController.createProduct);

module.exports = routes;
