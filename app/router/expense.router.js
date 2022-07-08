const express = require('express');

const router = express.Router();
const controller = require('../controller/expense.controller');

router.get('/expenses', controller.getExpense);
router.post('/expenses', controller.createExpense);
router.patch('/expenses/:id', controller.editExpenseById);
router.delete('/expenses/:id', controller.deleteExpenseById);

module.exports = router;
