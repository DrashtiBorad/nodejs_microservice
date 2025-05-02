const User = require("./user.modal");

module.exports.createUser = async (userData) => {
  try {
    const user = new User(userData);
    await user.save();
    return user;
  } catch (err) {
    console.log("Error in createUser", err);
    throw err;
  }
};
