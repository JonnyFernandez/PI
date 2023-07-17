const { Router } = require('express');
const recipe = require('./recipeR')
const diets = require('./dietsR')
const login = require('./loginR')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.use('/recipes', recipe)
router.use('/diets', diets)
router.use('/log', login)

module.exports = router;
