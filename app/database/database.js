const Sequelize = require('sequelize');

const sequelize = new Sequelize('expensesdb', 'kote', 'kote', {
    host: 'localhost',
    dialect: 'postgres',
    define: {
        timestamps: true,
    },
});

module.exports = sequelize;
