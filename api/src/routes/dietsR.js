const getDiets = require('../handler/dietsHandler')
const {Router} = require('express')

const diets = Router()

diets.get('/', getDiets)



module.exports = diets;