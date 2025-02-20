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

module.exports = {
    postFile,
    createEmptyFolder
}