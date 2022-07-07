const Expense = require('../model/Expense');

module.exports.getExpense = async (req, res) => {
    const expenses = await Expense.findAll();
    res.send(expenses);
};
