const { createUser, users } = require('../controller/login/loginCtrl')


const postUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const aux = await createUser(email, password)
        res.status(201).json(aux)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getUser = async (req, res) => {
    try {

        const getAll = await users()

        res.status(201).json(getAll)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    postUser, getUser
}