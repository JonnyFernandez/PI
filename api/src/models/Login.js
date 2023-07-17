const { DataTypes } = require('sequelize');


module.exports = (sequelize)=>{
    sequelize.define('login', {
        id:{
            type: DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4(),
            allowNull:false,
            primaryKey:true,

        },
        email:{
            type:DataTypes.STRING,
            allowNull:false
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        },
    },{timestamps:false})
};