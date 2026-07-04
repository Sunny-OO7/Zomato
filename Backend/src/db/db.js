const mongoose = require("mongoose");

function connectDB() {
  mongoose
    .connect("mongodb://localhost:27017/zomato")
    .then(() => {
      console.log("mongoDb Connected");
    })
    .catch((err) => {
      console.log("MonoDB connection error:", err);
    });
}

module.exports = connectDB;
