const queries = require("../queries")

async function postFile(req,res,next) {
    const fileone = req.file
    const body = req.body
    const user = req.user
    console.log(body,fileone,user.id)
    await queries.addFileAndFolder(user.id, body.folder, fileone.path,  fileone.filename)
    res.redirect("/")
}

module.exports = {
    postFile
}