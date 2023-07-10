// enrollment table

const { DataTypes } = require('sequelize');
const sequelize = require('../sequelizeConnection');

const Enrollment = sequelize.define('enrollment', {

    enrollmentId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'enrollment_id'
    }
})

module.exports = Enrollment;