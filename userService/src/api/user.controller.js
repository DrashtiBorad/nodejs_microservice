const userService = require("./user.service");

module.exports.createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json({ message: "User created successfully", user });
  } catch (err) {
    console.log("Error in createUser", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
