// Courses Data Model

const { DataTypes } = require('sequelize');
const sequelize = require('../sequelizeConnection')

const Course = sequelize.define('course', {

    courseId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'course_id'
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
})

module.exports = Course;