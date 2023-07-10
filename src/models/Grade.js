const { DataTypes } = require('sequelize');
const sequelize = require('../sequelizeConnection');

const Grade = sequelize.define('grade', {

    gradeId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'grade_id'
    },
    grade: {
        type: DataTypes.INTEGER
    }
})
module.exports = Grade;