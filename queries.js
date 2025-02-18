const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function toe() {
  // ... you will write your Prisma Client queries here
  const allUsers = await prisma.users.findMany()
  console.log(allUsers)
}

async function createNewUser(username, password) {
  await prisma.users.create({
    data: {
      username: username,
      password: password,
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

  module.exports = {
    createNewUser,
    toe,
    deleteUsers
  }


  
   