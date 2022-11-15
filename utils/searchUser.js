const user = require("../model/userModel");

const searchUser = async (data,type) => {
  return await user.find({ [type]:data });
};

module.exports = searchUser;
