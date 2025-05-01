const User = require("./user.modal");

module.exports.createUser = async (userData) => {
  try {
    const project = new User(userData);
    await project.save();
    return project;
  } catch (err) {
    console.log("Error in createUser", err);
    throw err;
  }
};
