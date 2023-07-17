const { Router } = require('express')
const { postUser, getUser} = require('../handler/loginHandler')

const login = Router()


login.post('/', postUser)
login.get( '/', getUser )



module.exports = login;


