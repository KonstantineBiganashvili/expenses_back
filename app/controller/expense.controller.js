const Expense = require('../model/Expense');

module.exports.getExpense = async (req, res) => {
    try {
        const expenses = await Expense.findAll();
        res.send(expenses);
    } catch (error) {
        res.status(422).send({ errMsg: error });
    }
};
