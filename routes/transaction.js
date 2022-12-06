const express = require('express');
const passport = require('passport');
const router = express.Router();

const transactionController = require('../controllers/transaction.js');
const { isAdmin, isUser, decode } = require('../middlewares/jwt.js');
const { transactionValidation } = require('../validators/transactions.js');

router.use(passport.authenticate('jwt'))

router
    .get('/', isUser, transactionController.getTransactions)
    .get('/:id', isAdmin, transactionController.getTransactionById)
    .get('/user/:id', decode, isUser, transactionController.getTransactionsByUserId)
    .post('/', transactionValidation, transactionController.createTransaction)
    .put('/:id', transactionController.updateTransaction)
    .delete('/:id', transactionController.deleteTransaction);

module.exports = router;