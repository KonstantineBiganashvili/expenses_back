const Expense = require('../model/Expense');

module.exports.getExpense = async (req, res) => {
    try {
        const expenses = await Expense.findAll();
        res.send(expenses);
    } catch (error) {
        res.status(422).send({ answer: error });
    }
};

module.exports.createExpense = async (req, res) => {
    const { name, cost } = req.body;
    const errorsArray = [];

    if (!name || !cost) {
        if (!name) errorsArray.push('Name field does not exist!');
        if (!cost) errorsArray.push('Cost field does not exist!');
        if (errorsArray.length)
            return res.status(422).send({ answer: errorsArray });
    } else {
        if (!name.trim()) errorsArray.push('Name required!');
        if (typeof cost !== 'number')
            errorsArray.push('Cost has to be a number!');
        if (errorsArray.length)
            return res.status(422).send({ answer: errorsArray });
    }

    try {
        const newExpense = await Expense.create({
            name,
            cost,
        });
        return newExpense && (await this.getExpense(req, res));
    } catch (error) {
        return res.status(422).send({ answer: error });
    }
};

module.exports.editExpenseById = async (req, res) => {
    const { name, cost } = req.body;
    const { id } = req.params;
    const errorsArray = [];

    if (!name && !cost) {
        errorsArray.push('You must change at least one field!');
    } else {
        if (name) {
            if (!name.trim()) errorsArray.push('Name must not be empty!');
        }

        if (cost) {
            if (typeof cost !== 'number')
                errorsArray.push('Cost must be a number!');
        }
    }

    if (errorsArray.length)
        return res.status(422).send({ answer: errorsArray });

    try {
        const [change] = await Expense.update(req.body, { where: { id } });
        if (change) return await this.getExpense(req, res);
        return res.status(404).send({ answer: 'Expense does not exist!' });
    } catch (error) {
        return res.status(422).send({ answer: error });
    }
};
