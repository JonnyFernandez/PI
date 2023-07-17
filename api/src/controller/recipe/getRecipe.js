const { Recipe, Diets } = require('../../db')
const fakeApi = require('../../utils/backUp')



const getApiInfo = async () => {
  let api = await fakeApi()

  return api
};

const getDbInfo = async () => {
  return await Recipe.findAll({
    include: [{
      model: Diets,
      attributes: ['name'],
      through: {
        attributes: [],
      }
    }]
  })
};
//-----------------------------------------------------------

const allRecipeCtrl = async () => {

  const apiInfo = await getApiInfo()
  const dbInfo = await getDbInfo()

  const allInfo = apiInfo.concat(dbInfo)
  return allInfo;
}




const recipeByNameCtrl = async (name) => {
  let arr = []

  const allRecipe = await allRecipeCtrl()

  const recipeFilter = await allRecipe.filter(item => item.name.toLowerCase().includes(name.toLowerCase()))

  if (name) {
    return recipeFilter.length ? recipeFilter : 'No tenemos esa receta'
  } else {
    return allGames
  }
}

module.exports = {
  recipeByNameCtrl, allRecipeCtrl, getApiInfo
}





