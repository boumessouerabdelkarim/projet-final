const mongoose = require("mongoose");
const { isEmail } = require("validator");
const schema = mongoose.Schema;
const userschema = new schema({
  pseudo: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minLength: 5,
    maxLength: 35,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    validator: [isEmail],
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    maxLength: 1000,
    minLength: 5,
  },
  picture: {
    type: String,
    default: "",
  },
  adress: {
    type: String,
    required: false,
  },
  admin: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.model("User", userschema);
module.exports = User;
