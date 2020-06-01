const MenuModel = require("../models/MenuModel");
exports.getIndex = (req, res, next) => {
  MenuModel.find({})
    .limit(3)
    .exec(function (err, products) {
      return res.render("index", { title: "Homepage", products: products });
    });
};

exports.getSignUp = (req, res, next) => {
  res.render("public/signup", { title: "Regjistrohu" });
};

exports.getLogin = (req, res, next) => {
  res.render("public/login", { title: "Kyçja në Llogari" });
};
