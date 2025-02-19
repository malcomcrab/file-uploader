const { PrismaClient } = require('@prisma/client')
const bcrypt = require("bcryptjs")
const prisma = new PrismaClient()

async function getAllUsers() {
  // ... you will write your Prisma Client queries here
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

async function addFile(id){
  await prisma.users.update({
    where: {
      id: id,
    },
    data: {
      files: {
        create: {
          title: 'My first post'
        },
      },
    },
    include: {
      files: true,
    },
  })
} 


  module.exports = {
    createNewUser,
    getUserByUsername,
    getUserById,
    getAllUsers,
    deleteUsers,
    addFile
  }


  
   