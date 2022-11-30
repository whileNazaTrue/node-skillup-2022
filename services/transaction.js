const {Transaction} = require('../database/models');
const {Op} = require('sequelize');

const getTransactions = async () => {
    const transactions = await Transaction.findAll({
            /*include: [{
                model: Role,
                as: 'role',
                attributes: ['name', 'description']
            }],*/
            //attributes: ['firstName', 'lastName', 'email', 'createdAt']
    });
    return transactions;
}

const getTransactionById = async (id) => {
    const transaction = await Transaction.findByPk(id,{
        /*include: [{
            model: Role,
            as: 'role',
            attributes: ['name', 'description']
        }],*/
    });
    return transaction;
}

const createTransaction = async (transaction) => {
    const newTransaction = await Transaction.create(transaction);
    return newTransaction;
}


const updateTransaction = async (id, transaction) => {
    const updatedTransaction = await Transaction.update(transaction, {
        where: {
            id: id
        }
    });
    return updatedTransaction;
}

const deleteTransaction = async (id) => {
    const deletedTransaction = await Transaction.destroy({
        where: {
            id: id
        }
    });
    return deletedTransaction;
}



module.exports = {getTransactions, getTransactionById, createTransaction, updateTransaction, deleteTransaction};