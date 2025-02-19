const { Router } = require("express");
const usersController = require("../controllers/usersController");
const usersRouter = Router();
const passport = require("passport");

usersRouter.post("/create-user", usersController.createUser)
usersRouter.post(
    "/log-in",
    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/"
    })
  );
usersRouter.get("/log-out", usersController.logOutUser)

module.exports = usersRouter;