const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  dateOfRegistration: {
    type: String,
    default: Date.now(),
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

userSchema.virtual("fullName").get(function () {
  return `${this.name} ${this.surname}`;
});

module.exports = mongoose.model("User", userSchema);
