const user = require("../model/userModel");

const sortUser = async (type) => {
  return await user.find().sort({ [type]: 1 });
};

module.exports = sortUser;
