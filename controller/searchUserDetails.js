const searchUser = require("../utils/searchUser");

const searchUserDetails = async (req, res) => {
  try {
    let data;
    const { login, name, type, company, location, email, bio, twitter_username } = req.query;
    if (login) {
      data = await searchUser(login, "login");
    } else if (name) {
      data = await searchUser(name, "name");
    } else if (type) {
      data = await searchUser(type, "type");
    } else if (company) {
      data = await searchUser(company, "company");
    } else if (location) {
      data = await searchUser(location, "location");
    } else if (email) {
      data = await searchUser(email, "email");
    } else if (bio) {
      data = await searchUser(bio, "bio");
    } else if (twitter_username) {
      data = await searchUser(twitter_username, "twitter_username");
    } else {
      data = 0;
    }
    if (data === 0) {
      res.status(500).json({
        status: "Failed",
        message: "Please Search From These Fields { name, type, company, location, email, bio, twitter_username } ",
      });
    } else if (data.length > 0) {
      res.status(200).json({
        status: "Success",
        message: data,
      });
    } else {
      console.log(Object.keys(req.query));
      res.status(500).json({
        status: "Failed",
        message: `No User Can Be Found From ${Object.keys(req.query)} Field`,
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: error.message,
    });
  }
};

module.exports = searchUserDetails;
