const orderDao = require("./order.dao");

module.exports.createOrder = async (orderData) => {
  try {
    const order = orderDao.createOrder(orderData);
    console.log("orderData", orderData.userId);
    return order;
  } catch (err) {
    console.log("Error in createOrder", err);
    throw err;
  }
};
