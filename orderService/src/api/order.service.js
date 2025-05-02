const orderDao = require("./order.dao");

module.exports.createOrder = async (orderData) => {
  try {
    console.log("orderData", orderData);
    const order = orderDao.createOrder(orderData);
    return order;
  } catch (err) {
    console.log("Error in createOrder", err);
    throw err;
  }
};
