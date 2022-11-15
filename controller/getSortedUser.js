const sortUser = require("../utils/sortUser");

const getSortedUser = async (req, res) => {
  try {
    let data;
    const {public_repos, public_gists, followers, following, created_at, updated_at } = req.query;
    if (public_repos) {
      data = await sortUser("public_repos");
    } else if (public_gists) {
      data = await sortUser("public_gists");
    } else if (followers) {
      data = await sortUser("followers");
    } else if (following) {
      data = await sortUser("following");
    } else if (created_at) {
      data = await sortUser("created_at");
    } else if (updated_at) {
      data = await sortUser("updated_at");
    } else if (public_repos) {
      data = await sortUser("public_repos");
    } else {
      data = 0;
    }
    if (data === 0) {
      res.status(500).json({
        status: "Failed",
        message:"Please Sort From These Fields { public_repos, public_gists, followers, following, created_at, updated_at } ",
      });
    } else {
      res.status(200).json({
        status: "Success",
        message: data,
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: error.message,
    });
  }
};

module.exports = getSortedUser;
