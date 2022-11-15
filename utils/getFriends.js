const axios = require("axios");

const getFriends = async (data) => {

  const map = new Map();

  let followers = await axios.get(data.followers_url);
  let following = await axios.get(data.following_url.split("{/other_user}")[0]);
  followers = followers.data;
  following = following.data;
  
  for (let i = 0; i < followers.length; i++) {
    const name = followers[i].login;
    if (map.has(name)) {
      map.set(name, map.get(name) + 1);
    } else {
      map.set(name, 1);
    }
  }

  for (let i = 0; i < following.length; i++) {
    const name = following[i].login;
    if (map.has(name)) {
      map.set(name, map.get(name) + 1);
    } else {
      map.set(name, 1);
    }
  }

  const ans = [];
  map.forEach((value, key) => {
    if (value === 2) {
      ans.push({ name: key });
    }
  });
  
  return ans;
};
module.exports = getFriends;
