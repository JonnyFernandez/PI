const validate = (input) => {
    let aux = input.diets
    let error = {}

    !input.name ? error.name = "Name Require" : error.name = ''
    !input.image ? error.image = "Image Require" : error.image = ''
    !input.summary ? error.summary = "Summary Require" : error.summary = ''
    !input.healthScore ? error.healthScore = "HealthScore Require" : error.healthScore = ''
    !input.steps ? error.steps = "Steps Require" : error.steps = ''
     !Object.keys(aux) ? error.diets = "Diets Require" : error.diets = ''




    return error
}
export default validate