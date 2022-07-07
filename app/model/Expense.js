const DataTypes = require('sequelize');
const sequelize = require('../database/database');

const Expense = sequelize.define('expenses', {
    name: {
        type: DataTypes.STRING,
    },
    cost: {
        type: DataTypes.INTEGER,
    },
});

module.exports = Expense;
