// Assignment data model

const { DataTypes } = require('sequelize');
const sequelize = require('../sequelizeConnection');

const Assignment = sequelize.define('assignment', {

    assignmentId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'assignment_id'
    },  
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },  
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    deadline: {
        type: DataTypes.DATE,
        allowNull: false
    }
})

module.exports = Assignment;