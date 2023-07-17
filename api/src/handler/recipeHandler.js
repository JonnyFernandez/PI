const { recipeByNameCtrl, allRecipeCtrl } = require('../controller/recipe/getRecipe')
const { recipeId_DB, recipeId_API } = require('../controller/recipe/getRecipeID')
const createRecipe = require('../controller/recipe/postRecipe')


const AllRecipes = async (req, res) => {
    const { name } = req.query;
    try {
        const aux = name ? await recipeByNameCtrl(name) : await allRecipeCtrl()
        res.status(200).json(aux);
    } catch (error) {
        // res.status(400).json({ error: error.message })
        res.status(400).json({ error: error.message })
    }
}

const recipeById = async (req, res) => {
    try {
        const { id } = req.params;
        const sourse = isNaN(id) ? await recipeId_DB(id) : await recipeId_API(id)
        res.status(200).json(sourse)

    } catch (error) {
        return res.status(400).json({ error: error.message })

    }


}

const postRecipe = async (req, res) => {

    try {
        const { name, image, summary, healthScore, steps, diets } = req.body;
        console.log(name, image, summary, healthScore, steps, diets);

        if (![name, image, summary, healthScore, steps, diets].every(Boolean)) {
            return res.status(400).json({ error: "Missing Data" })
        } else {
            const aux = await createRecipe(name, image, summary, healthScore, steps, diets)

            res.status(200).json(aux);
        }



    } catch (error) {
        res.status(400).json({ error: error.message })

    }




}



module.exports = {
    recipeById, AllRecipes, postRecipe
}