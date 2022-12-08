const express = require('express');
const passport = require('passport');
const router = express.Router();

const transactionController = require('../controllers/transaction.js');
const { isAdmin, isUser } = require('../middlewares/jwt.js');
const { transactionValidation } = require('../validators/transactions.js');

router.use(passport.authenticate('jwt'))

router
    .get('/', isAdmin, transactionController.getTransactions)
    .get('/:id', isAdmin, transactionController.getTransactionById)
    .get('/user/:id', isUser, transactionController.getTransactionsByUserId)
    .post('/', isUser, transactionValidation, transactionController.createTransaction)
    .put('/:id', isUser, transactionController.updateTransaction)
    .delete('/:id', isUser, transactionController.deleteTransaction);

module.exports = router;