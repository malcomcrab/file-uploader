const queries = require("../queries")


exports.renderIndex = (req, res) => {
  queries.addFile()
  res.render("index", { user: req.user })
};

exports.renderSignUp = (req, res) => {
  res.render("signUpPage");
}



