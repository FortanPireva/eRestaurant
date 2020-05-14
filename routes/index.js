const mongoose = require("mongoose");
const express = require("express");
const User = require("../models/UserModel");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Homepage" });
});

module.exports = router;
