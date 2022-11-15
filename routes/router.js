const express = require("express");
const route = express.Router();
const addUserDetails=require("../controller/addUserDetails");
const searchUserDetails=require("../controller/searchUserDetails");
const deleteUser=require("../controller/deleteUser");
const updateUser=require("../controller/updateUser");
const getSortedUser=require("../controller/getSortedUser");

route.get("/sorted", getSortedUser);//GET -> http://localhost:7000/user/sorted?public_repos=true
route.get("/search", searchUserDetails); //GET -> http://localhost:7000/user/search?login=GurudeepNaik
route.post("/:userName" , addUserDetails); //POST -> http://localhost:7000/user/Sabiya-123
route.delete("/:userName", deleteUser);//DELETE -> http://localhost:7000/user/GurudeepNaik
route.put("/:userName", updateUser); //PUT -> http://localhost:7000/user/GurudeepNaik

route.get("*", (req, res) => {
  res.status(404).json({
    status:"Failed",
    message: "Path Not Found",
  });
});

module.exports = route;