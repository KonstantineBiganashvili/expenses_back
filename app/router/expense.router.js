const express = require('express');

const router = express.Router();
const controller = require('../controller/expense.controller');

const app = express();

router
    .route('/expenses')
    .get(controller.getExpense)
    .post(controller.createExpense);

router
    .route('/expenses/:id')
    .patch(controller.editExpenseById)
    .delete(controller.deleteExpenseById);

app.use(router);

module.exports = router;
