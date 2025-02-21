const queries = require("../queries")

async function postFile(req,res,next) {
    const fileone = req.file
    const body = req.body
    const user = req.user
    console.log(body,fileone,user.id)
    await queries.addFileAndFolder(user.id, body.folder, fileone.path,  fileone.filename)
    res.redirect("/")
}

async function createEmptyFolder(req, res) {
    const folderTitle = req.body.folderTitle
    const user = req.user
    console.log(folderTitle)
    res.redirect("/")
    await queries.createFolder(user.id, folderTitle)
}

async function deleteFolder(req, res) {
    const folderName = req.params.folder
    const userId = req.user.id
    console.log(userId, folderName)
    await queries.deleteSingleFolder(userId, folderName)
   res.redirect("/")
}

module.exports = {
    postFile,
    createEmptyFolder,
    deleteFolder
}