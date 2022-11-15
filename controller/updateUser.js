const user = require("../model/userModel");

const updateUser = async (req, res) => {
  try {
    const data = await user.findOne({ login: req.params.userName });
    if (data) {
      const data1 = await user.updateOne({ login: req.params.userName },req.body);
      console.log(data1);
      res.status(200).json({
        status: "Success",
        message: "Update Sucessful",
      });
    } else {
      res.status(500).json({
        status: "Failed",
        message: "No User Found",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: error.message,
    });
  }
};

module.exports = updateUser;
