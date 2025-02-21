const { PrismaClient } = require('@prisma/client')
const bcrypt = require("bcryptjs")
const prisma = new PrismaClient()

async function getAllUsers() {
  const allUsers = await prisma.users.findMany()
  console.log(allUsers)
}

async function getUserByUsername(username) {
  const user = await prisma.users.findUnique({
    where: {
      username: username,
    },
  })
  return(user)
}

async function getUserById(id) {
  const user = await prisma.users.findUnique({
    where: {
      id: id,
    },
  })
  return(user)
}

async function createNewUser(username, password) {
  const hashedPassword = await bcrypt.hash(password, 10);
  await prisma.users.create({
    data: {
      username: username,
      password: hashedPassword,
    },
  })
    const allUsers = await prisma.users.findMany({
  })
    console.dir(allUsers, { depth: null })
}

async function deleteUsers(username){
  await prisma.users.deleteMany({
  where: {
    username: {
      contains: username
    },
  },
})
}

async function createFolder(id, title){
  await prisma.users.update({
    where: {
      id: id,
    },
    data: {
      folder: {
        create: {
          folder_name: title
        },
      },
    },
    include: {
      folder: true,
    }
  })
}

async function addFileAndFolder(id, folder, url, title){
  await prisma.file.create({
    data: {
        title: title,
        url: url,
        author: {
          connect: {
            id: id,
          },
        },
        folders: {
          connectOrCreate: {
            where: {
            folder_name: folder
          },
          create: {
            owner_id: id,
            folder_name: folder,
          },
        },
      },
  },
  include: {
    folders: true,
  },
})
}

async function getFoldersByUserId(id){
   const usersFolders = await prisma.folder.findMany({
      where: {
        owner_id: id,
    },
  })
  return usersFolders
}

async function deleteSingleFolder(id, folderName){
  await prisma.folder.delete({
    where: {
      folder_name: folderName,
      owner_id: id,
    },
  })
}

  module.exports = {
    createNewUser,
    getUserByUsername,
    getUserById,
    getAllUsers,
    deleteUsers,
    createFolder,
    addFileAndFolder,
    getFoldersByUserId,
    deleteSingleFolder

  }


  
   