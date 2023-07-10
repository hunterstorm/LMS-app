const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config.dev.json');
const database = config.DB_ADDRESS;



const sequelizeConnection = new Sequelize(database, {
  define: {
    timestamps: false,
    schema: 'h_a_db',
    }   
});

module.exports = sequelizeConnection;