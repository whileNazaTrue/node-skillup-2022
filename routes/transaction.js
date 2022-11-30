const express = require('express');
const router = express.Router();

const transactionController = require('../controllers/transaction.js');

router
    .get('/', transactionController.getTransactions)
    .get('/:id', transactionController.getTransactionById)
    .post('/', transactionController.createTransaction)
    .put('/:id', transactionController.updateTransaction)
    .delete('/:id', transactionController.deleteTransaction);

module.exports = router;