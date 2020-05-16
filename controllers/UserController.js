const UserModel = require("../models/UserModel");
exports.postLogin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  UserModel.findOne({ email }).then((user) => {
    if (user.password === password) {
      if (user.isAdmin) {
        res.redirect("/admin/");
        return;
      }
      res.render("user/index", {
        title: `Mirëserdhe ${user.fullName}`,
        fullName: user.fullName,
      });
      return;
    }
    res.redirect("/signup");
  });
};

exports.postSignUp = async (req, res, next) => {
  const name = req.body.name;
  const surname = req.body.surname;
  const email = req.body.email;
  const password = req.body.confirmPassword;
  const confirmPassword = req.body.confirmPassword;

  if (password !== confirmPassword || email === "") {
    res.render("public/signup", {
      title: "Sign up",
    });
  }
  const User = new UserModel({
    name,
    surname,
    email,
    password,
  });
  User.save().then((user) => {
    if (user) {
      console.log(user);

      res.render("public/login", {
        title: "Kycu",
      });
    }
  });
};
//test for contributor