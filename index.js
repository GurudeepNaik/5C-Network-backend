const express = require("express");
const mongoose = require("mongoose");
const Route = require("./routes/router");
const cors = require("cors");
const app = express();
const PORT=require("./constant/PORT")


mongoose.connect("mongodb://localhost:27017/githubApi", (err) => {
  if (err) console.log(err);
  else console.log("Database Connected Sucessfully");
});

app.use(cors());
app.use(express.json());
app.use("/user", Route);

app.get("*", (req, res) => {
  res.status(404).json({
    message: "Path Not Found",
  });
});

app.listen(PORT, () => {
  console.log(`App is Running at ${PORT}`);
});