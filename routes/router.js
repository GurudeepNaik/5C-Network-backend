const express = require("express");
const route = express.Router();
const addUserDetails=require("../controller/addUserDetails");
const searchUserDetails=require("../controller/searchUserDetails");
const deleteUser=require("../controller/deleteUser");
const updateUser=require("../controller/updateUser");
const getSortedUser=require("../controller/getSortedUser");

route.get("/sorted", getSortedUser);//GET -> https://fivec-backend.herokuapp.com/user/sorted?public_repos=true
route.get("/search", searchUserDetails); //GET -> https://fivec-backend.herokuapp.com/user/search?login=GurudeepNaik
route.post("/:userName" , addUserDetails); //POST ->  https://fivec-backend.herokuapp.com/user/GurudeepNaik
route.delete("/:userName", deleteUser);//DELETE -> https://fivec-backend.herokuapp.com/user/GurudeepNaik
route.put("/:userName", updateUser); //PUT -> https://fivec-backend.herokuapp.com/user/GurudeepNaik

route.get("*", (req, res) => {
  res.status(404).json({
    status:"Failed",
    message: "Path Not Found",
  });
});

module.exports = route;