exports.getIndex = (req, res, next) => {
  res.render("index", { title: "Homepage" });
};

exports.getSignUp = (req, res, next) => {
  res.render("public/signup", { title: "Regjistrohu" });
};

exports.getLogin = (req, res, next) => {
  res.render("public/login", { title: "Kyçja në Llogari" });
};
