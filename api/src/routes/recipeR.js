const {Router} = require('express')
const {recipeById, AllRecipes, postRecipe} = require('../handler/recipeHandler')
const recipe = Router()


recipe.get('/:id', recipeById)

recipe.get('/', AllRecipes)

recipe.post('/', postRecipe)



module.exports = recipe;