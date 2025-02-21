const queries = require("../queries")

async function renderIndex(req, res) {
  const user = req.user
  if(user){
    const userFolders = await queries.getFoldersByUserId(user.id)
    res.render("index", { user: user, userFolders: userFolders })
  } else{
    res.render("index", { user: user, userFolders: [] })
  }
    
};



async function renderSignUp (req, res) {
  res.render("signUpPage");
}

module.exports = { 
  renderIndex,
  renderSignUp,
}

