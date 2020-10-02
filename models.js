const {Sequelize, Model, DataTypes} = require('sequelize')
const sequelize = new Sequelize('sqlite::memory:')

class Restaurant extends Model {}
Restaurant.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING
}, {sequelize: sequelize, modelName: 'restaurant'})

class Menu extends Model {}
Menu.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING
}, {sequelize: sequelize, modelName: 'menu'})

Restaurant.hasMany(Menu)
Menu.belongsTo(Restaurant)

module.exports = {Restaurant, Menu, sequelize}
