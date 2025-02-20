const queries = require("../queries")


exports.renderIndex = (req, res) => {
  const user = req.user
  if(user){
   
  }
  res.render("index", { user: req.user })
};

exports.renderSignUp = (req, res) => {
  res.render("signUpPage");
}



