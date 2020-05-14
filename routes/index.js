const mongoose = require("mongoose");
const express = require("express");
const User = require("../models/UserModel");
const router = express.Router();

router.get("/", (req, res) => {
  User.create({
    name: "Fortan",
    surname: "Pireva",
  }).then((user) => {
    console.log(user);
  });
  res.render("index", { title: "Homepage" });
});

module.exports = router;
