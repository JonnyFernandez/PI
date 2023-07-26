const validate = (input) => {
    let aux = input.diets
    let error = {}

    !input.name ? error.name = "Name Require" : error.name = ''
    !input.image ? error.image = "Image Require" : error.image = ''
    !input.summary ? error.summary = "Summary Require" : error.summary = ''
    !input.healthScore ? error.healthScore = "HealthScore Require" : error.healthScore = ''
    input.steps.length < 1 ? error.steps = "Steps Require" : error.steps = ''





    if (!input.image.includes("https")) {
        error.name = 'poner URL '
    }
    if (input.name && !/^[a-zA-Z\s]{5,20}$/.test(input.name)) {
        error.name = 'Up to 5-20 characters, no numbers'
    }







    return error
}
export default validate