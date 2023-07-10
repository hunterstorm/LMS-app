// User Data model

const { DataTypes } = require('sequelize');
const sequelize = require('../sequelizeConnection')

const User = sequelize.define('user', {

    userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'user_id'
    },
    username: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING,
        field: "first_name",
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        field: "last_name",
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = User;