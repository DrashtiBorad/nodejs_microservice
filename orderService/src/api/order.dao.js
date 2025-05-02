const Order = require("./order.modal");

module.exports.createOrder = async (orderData) => {
  try {
    const order = new Order(orderData);
    await order.save();
    return order;
  } catch (err) {
    console.log("Error in createOrder", err);
    throw err;
  }
};
