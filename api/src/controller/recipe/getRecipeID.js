const { Recipe, Diets } = require('../../db')
const axios = require('axios')
require('dotenv').config();


const recipeId_DB = async (id) => {
    const recipeID = await Recipe.findByPk(id, {
        include: [{
            model: Diets,
            attributes: ['name'],
            through: {
                attributes: [],
            }
        }],
    })

    if (!recipeID) throw new Error('Recipe not found in DB.')

    return recipeID
}


const recipeId_API = async (id) => {
   
    const aux = await axios(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.API_KEY_1}`);
    //  console.log(aux.data);
    let recipeApi = {
        id: aux.data.id,
        name: aux.data.name,
        image: aux.data.image,
        summary:aux.data.summary,
        healthScore: aux.data.healthScore,
        steps:aux.data.analyzedInstructions[0] && aux.data.analyzedInstructions[0].steps?aux.data.analyzedInstructions[0].steps.map(item=>item.step).join(" \n"):'',
        diets: aux.data.diets.map(item => item)
    }
       
       
     if(aux) return recipeApi;
        else return "recipe not found in Api"
            
      
    


}


module.exports = {
    recipeId_DB, recipeId_API
}