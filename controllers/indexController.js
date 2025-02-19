

exports.renderIndex = (req, res) => {
  res.render("index", { user: req.user })
};

exports.renderSignUp = (req, res) => {
  res.render("signUpPage");
}



