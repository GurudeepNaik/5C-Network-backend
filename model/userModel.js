const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  isDeleted: { type: Boolean, default: false , required: true},
  login: { type: String, unique: true },
  id: { type: Number, unique: true },
  node_id: { type: String },
  avatar_url: { type: String },
  gravatar_id: { type: String },
  url: { type: String },
  html_url: { type: String },
  followers_url: { type: String },
  following_url: { type: String },
  gists_url: { type: String },
  starred_url: { type: String },
  subscriptions_url: { type: String },
  organizations_url: { type: String },
  repos_url: { type: String },
  events_url: { type: String },
  received_events_url: { type: String },
  type: { type: String },
  site_admin: { type: Boolean },
  name: { type: String },
  company: { type: String },
  blog: { type: String },
  location: { type: String },
  email: { type: String },
  hireable: { type: String },
  bio: { type: String },
  twitter_username: { type: String },
  public_repos: { type: Number },
  public_gists: { type: Number },
  followers: { type: Number },
  following: { type: Number },
  created_at: { type: String },
  updated_at: { type: String },
  friends: [{ name: { type: String } },
  ],
});
userSchema.pre("find", function () {
  this.where({ isDeleted: false });
});

userSchema.pre("findOne", function () {
  this.where({ isDeleted: false });
});

const user = mongoose.model("User", userSchema);

module.exports = user;
