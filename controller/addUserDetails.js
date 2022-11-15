const axios = require("axios");
const user = require("../model/userModel");
const getFriends = require("../utils/getFriends");

const addUserDetails = async (req, res) => {
  try {
    const isUserExist = await user.findOne({ login: req.params.userName });
    if (isUserExist) {
      res.status(200).json({
        status: "Failed",
        message: "User Already Exist",
      });
    } else {
      const { data } = await axios.get(`https://api.github.com/users/${req.params.userName}`);
      const friends = await getFriends(data);
      await user.create({ ...data, friends: friends });
      const userDetails = await user.findOne({ login: req.params.userName });
      res.status(200).json({
        status: "Success",
        message: userDetails,
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: error.message,
    });
  }
};

module.exports = addUserDetails;
