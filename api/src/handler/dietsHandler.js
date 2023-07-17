const allDiets = require('../controller/diets/dietsCtrl')


const getDiets = async (req, res) => {
    try {
        let aux = await allDiets()

        res.status(200).json(aux)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


module.exports = getDiets