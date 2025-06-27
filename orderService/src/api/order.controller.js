const orderService = require("./order.service");

module.exports.createOrder = async (req, res) => {
  try {
    const order = await orderService.createOrder(req.body);
    res.status(201).json({ message: "order created successfully", order });
  } catch (err) {
    console.log("Error in createOrder", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
