const {Login} = require('../../db')


const createUser = async(email, password) => {
      const aux = await Login.create({email, password})
      return aux
}


const users = async () => {
     const getAll = await Login.findAll()
     return getAll
}

module.exports={
    createUser, users
}