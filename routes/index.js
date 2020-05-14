const mongoose = require("mongoose");
const express = require("express");
const User = require("../models/UserModel");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Homepage" });
});

router.get("/login", (req, res) => {
  res.render("public/login", { title: "Kyçja në Llogari" });
});

router.get("/signup", (req, res) => {
  res.render("public/signup", { title: "Regjistrohu" });
});
module.exports = router;
