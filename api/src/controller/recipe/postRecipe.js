const { Recipe, Diets } = require('../../db')

const createRecipe = async (name, image, summary, healthScore, steps, diets) => {

    const newRecipe = await Recipe.create({ name, image, summary, healthScore, steps })

    const dietsDB = await Diets.findAll({ where: { name: diets } })

    if(dietsDB.length<1){
        return "Dieta no incluida"
    }

    await newRecipe.addDiets(dietsDB)

    return "receta creada"

}

module.exports = createRecipe;