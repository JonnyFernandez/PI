const fakeApi = require('../../utils/backUp')
const {Diets} = require('../../db')

const allDiets = async() => {
    let arr = []

    const dietsApi = await fakeApi()

    const diets = dietsApi.map(item => item.diets)

     diets.map(item => { 
        for (let i = 0; i < item.length; i++)  
        arr.push(item[i])
    })
   
    arr.forEach(item => {
        Diets.findOrCreate({ where: { name: item } })
    });

    let findDiets = await Diets.findAll()
    return findDiets

};


module.exports = allDiets;