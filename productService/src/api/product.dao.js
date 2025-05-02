const Product = require("./product.modal");

module.exports.createProduct = async (productData) => {
  try {
    const product = new Product(productData);
    await product.save();
    return product;
  } catch (err) {
    console.log("Error in createUser", err);
    throw err;
  }
};
