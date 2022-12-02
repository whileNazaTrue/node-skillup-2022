const {Transaction} = require('../database/models');
const {Category} = require('../database/models');
const {User} = require('../database/models');

const getTransactions = async (page) => {
    const {count, rows} = await Transaction.findAndCountAll({
        include: [{
            model: Category,
            as: 'category',
            attributes: ['name', 'description']
        }, {
            model: User,
            as: 'user',
            attributes: ['firstName', 'lastName', 'email']
        }],
        limit: 10,
        offset: +page * 10
    });

    return {count, rows};
}

const getTrensactionsByUser = async (userId, page) => {
    const {count, rows} = await Transaction.findAndCountAll({
        where: {userId},
        include: {
            model: Category,
            as: 'category',
            attributes: ['name', 'description']
        },
        limit: 10,
        offset: +page * 10
    });

    return {count, rows};
}

const getTransactionById = async (id) => {
    const transaction = await Transaction.findByPk(id,{
        include: [{
            model: Category,
            as: 'category',
            attributes: ['name', 'description']
        }, {
            model: User,
            as: 'user',
            attributes: ['firstName', 'lastName', 'email']
        }]
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



module.exports = {getTransactions, getTransactionById, createTransaction, updateTransaction, deleteTransaction, getTrensactionsByUser};