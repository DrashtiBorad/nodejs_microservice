const productService = require("./product.service");

module.exports.createProduct = async (req, res) => {
  try {
    const product = await productService.createProduct(req.body);
    res.status(201).json({ message: "Product created successfully", product });
  } catch (err) {
    console.log("Error in createProduct", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
