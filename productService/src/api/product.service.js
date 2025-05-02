const productDao = require("./product.dao");

module.exports.createProduct = async (productData) => {
  try {
    const product = await productDao.createProduct(productData);
    return { product };
  } catch (err) {
    console.log("Error in createUser", err);
    throw err;
  }
};
