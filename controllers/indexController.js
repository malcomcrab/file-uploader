const queries = require("../queries")


exports.renderIndex = (req, res) => {
  const user = req.user
  if(user){
    queries.addFileAndFolder(user.id, "test")
  }
  res.render("index", { user: req.user })
};

exports.renderSignUp = (req, res) => {
  res.render("signUpPage");
}



