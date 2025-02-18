const queries = require("../queries")
 // This just shows the new stuff we're adding to the existing contents
 const { body, validationResult } = require("express-validator");

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
 
 // We can pass an entire array of middleware validations to our controller.
 
exports.createUser = [
    validateUser,
    (req, res) => {   
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).render("signUpPage", {
            title: "signUpPage",
            errors: errors.array(),
          });
        } 
        const {username,password} = req.body
        queries.createNewUser(username, password);
        res.redirect("/");
    }
]

 
 
