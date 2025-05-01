const userDao = require("./user.dao");
const jwt = require("jsonwebtoken");

module.exports.generateToken = async (userId) => {
  try {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    return token;
  } catch (err) {
    console.log("Error in generateToken", err);
  }
};

module.exports.createUser = async (userData) => {
  try {
    const user = await userDao.createUser(userData);
    const token = await this.generateToken(user._id);
    return { user, token };
  } catch (err) {
    console.log("Error in createUser", err);
    throw err;
  }
};
