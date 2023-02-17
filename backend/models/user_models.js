const { Sequelize } = require("sequelize");


module.exports = (Sequelize) =>{
    Sequelize.define('admin',{
        id:{
            type: Sequelize.INTERGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        email:{
            type: Sequelize.STRING(200),
            allowNull: false
        },
        password:{
            type: Sequelize.STRING(200)
        }
    })
}