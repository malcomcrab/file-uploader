
const { Router } = require("express");
const indexController = require("../controllers/indexController");
const indexRouter = Router();

indexRouter.get("/", indexController.renderIndex)
indexRouter.get("/sign-up", indexController.renderSignUp)
indexRouter.get("/:folder/update-folder", indexController.renderUpdateFolder)
module.exports = indexRouter;