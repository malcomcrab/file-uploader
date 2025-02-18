const queries = require("../queries")
const session = require("express-session");
const passport = require("passport");
const { body, validationResult } = require("express-validator");
const LocalStrategy = require('passport-local').Strategy;

 const alphaErr = "must only contain letters.";
 const lengthErr = "must be between 1 and 10 characters.";
 
 const validateUser = [
   body("username").trim()
     .isAlpha().withMessage(`First name ${alphaErr}`)
     .isLength({ min: 1, max: 10 }).withMessage(`Username ${lengthErr}`),
   body("password").trim()
     .isAlpha().withMessage(`Last name ${alphaErr}`)
     .isLength({ min: 1, max: 10 }).withMessage(`Password ${lengthErr}`),
 ];
 

const createUser = [
    validateUser,
    (req, res) => {   
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).render("signUpPage", {
            title: "signUpPage",
            errors: errors.array(),
          });
        } 
        try {
            const {username,password} = req.body
            queries.createNewUser(username, password);
            res.redirect("/");
           } catch (error) {
              console.error(error);
              next(error);
             }
        
    }
]

passport.use(
    new LocalStrategy(async (username, password, done) => {
      try {
       const user = await queries.getUserByUsername(username)
        
  
        if (!user) {
          return done(null, false, { message: "Incorrect username" });
        }
        const match = await bcrypt.compare(password, user.password);
if (!match) {
  // passwords do not match!
  return done(null, false, { message: "Incorrect password" })
}

        return done(null, user);
      } catch(err) {
        return done(err);
      }
    })
  );
  
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {

    try {
      const user = await queries.getUserById(id)
      done(null, user);
    } catch (err) {
      done(err);
    }
  });
  
  async function userLogIn(){
      passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/"
    })
  };
  
  

// async function userLogIn(req,res){
//     const username = req.body.username
//     const user = await queries.getUserById(username)
//     console.log(user)
//     res.redirect("/")
// }

module.exports = {
    userLogIn,
    createUser
}
