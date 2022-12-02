const transactionService = require('../services/transaction.js');

const getTransactions = async (req, res) => {
    try {
        const { page } = req.query;

        if(req.query.userId){
            const {count, rows, flag, previous, next} = await transactionService.getTrensactionsByUser(req.query.userId, page);

            if (flag) {
                res.status(200).json({
                    total: count,
                    transactions: rows,
                    previous,
                    next
                });
            } else {
                res.status(404).json({
                    message: 'No transactions found for this page'
                });
            }
        } else{
            const {count, rows, flag, previous, next} = await transactionService.getTransactions(page);

            if (flag) {
                res.status(200).json({
                    total: count,
                    transactions: rows,
                    previous,
                    next
                });
            } else {
                res.status(404).json({
                    message: 'No transactions found for this page'
                });
            }
        }
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

const getTransactionById = async (req, res) => {
    try {
        const transaction = await transactionService.getTransactionById(req.params.id);
        if (transaction) {
            res.status(200).json(transaction);
        } else {
            res.status(404).json({error: 'Transaction not found'});
        }
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

const getTransactionsByUserId = async (req, res) => {
    try {
        const transactions = await transactionService.getTransactionsByUserId(req.params.id);
        if (transactions) {
            res.status(200).json(transactions);
        } else {
            res.status(404).json({error: 'Transactions not found'});
        }
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}


const createTransaction = async (req, res) => {
    try {
        const transaction = await transactionService.createTransaction(req.body);
        res.status(201).json(transaction);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

const updateTransaction = async (req, res) => {
    try {
        const {description, amount, date, userId, categoryId} = req.body;
        if (!amount && !date && !userId && !categoryId) {
            res.status(500).json({error: "No data was provided"});
        }else{
            const transaction = await transactionService.updateTransaction(req.params.id, req.body);
            if (transaction) {
                const updatedTransaction = await transactionService.getTransactionById(req.params.id);
                res.status(200).json(updatedTransaction);
            } else {
                res.status(404).json({error: 'Transaction not found'});
            }
        }
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

const deleteTransaction = async (req, res) => {
    try {
        const transaction = await transactionService.deleteTransaction(req.params.id);
        if (transaction) {
            res.status(204).json({transaction: 'Transaction deleted'});
        } else {
            res.status(404).json({error: 'Transaction not found'});
        }
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

module.exports = {getTransactions, getTransactionById, getTransactionsByUserId, createTransaction, updateTransaction, deleteTransaction};

