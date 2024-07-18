const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:1234@cluster0.uzbzi7b.mongodb.net/paytm");

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
});

const User = mongoose.model("User", userSchema);

module.exports = {
  User,
};
