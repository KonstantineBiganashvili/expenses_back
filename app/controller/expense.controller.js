const Expense = require('../model/Expense');

module.exports.getExpense = async (req, res) => {
    try {
        const expenses = await Expense.findAll();
        res.send(expenses);
    } catch (error) {
        res.status(422).send({ errMsg: error });
    }
};

module.exports.createExpense = async (req, res) => {
    const { name, cost } = req.body;
    const errorsArray = [];

    if (!name.trim()) errorsArray.push('Name required!');
    if (typeof cost !== 'number') errorsArray.push('Cost has to be a number!');
    if (errorsArray.length) return res.status(422).send(errorsArray);

    try {
        const newExpense = await Expense.create({
            name,
            cost,
        });
        return newExpense && (await this.getExpense(req, res));
    } catch (error) {
        return res.send(error);
    }
};
