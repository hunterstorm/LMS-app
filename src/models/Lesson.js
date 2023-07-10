// Lesson Data Model

const { DataTypes } = require('sequelize');
const sequelize = require('../sequelizeConnection');

const Lesson = sequelize.define('lesson', {

    lessonId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'lesson_id'
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    }
})

module.exports = Lesson;