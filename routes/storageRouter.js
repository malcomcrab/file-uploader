
const { Router } = require("express");
const storageController = require("../controllers/storageController");
const storageRouter = Router();
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })


storageRouter.post("/upload", upload.single('file'), storageController.postFile)

module.exports = storageRouter;