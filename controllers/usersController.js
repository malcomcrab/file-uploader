const queries = require("../queries")

exports.createUser = (req, res) => {
    const {username,password} = req.body
    queries.createNewUser(username, password);
    res.redirect("/");
      
  };
  

 
  