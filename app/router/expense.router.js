const express = require('express');

const router = express.Router();
const controller = require('../controller/expense.controller');

router.get('/expenses', controller.getExpense);

module.exports = router;
