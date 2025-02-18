const { Router } = require("express");
const usersController = require("../controllers/usersController");
const usersRouter = Router();

usersRouter.post("/create-user", usersController.createUser)
usersRouter.post("/log-in", usersController.userLogIn)

module.exports = usersRouter;