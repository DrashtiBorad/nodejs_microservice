const Order = require("./order.modal");

module.exports.createOrder = async (orderData) => {
  try {
    let order;
    const findIfOrderExists = await Order.findOne({
      userId: orderData.userId,
      productId: orderData.productId,
    });

    if (findIfOrderExists) {
      findIfOrderExists.quantity += orderData.quantity;
      order = await findIfOrderExists.save();
    } else {
      order = new Order(orderData);
      await order.save();
    }
    return order;
  } catch (err) {
    console.log("Error in createOrder", err);
    throw err;
  }
};
