
const { Router } = require("express");
const indexController = require("../controllers/indexController");
const indexRouter = Router();

indexRouter.get("/", indexController.renderIndex)
indexRouter.get("/sign-up", indexController.renderSignUp)

module.exports = indexRouter;