const {Transaction} = require('../database/models');
const {Category} = require('../database/models');
const {User} = require('../database/models');

const getTransactions = async (page) => {
    let flag = true;
    let previous, next;

    let validatedPage = +page;
    if (validatedPage < 0) {
        validatedPage = 0;
    }
    
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
        offset: validatedPage * 10
    });

    if (!rows || rows.length === 0) {
        flag = false;
    }

    const maxPage = +count / (10) 
    previous = validatedPage == 0 ? null : (process.env.HOST + ""+ process.env.PORT)+ `/api/transactions?page=${validatedPage-1}`;
    next = rows.length < 10 || validatedPage+1 == maxPage ? null :(process.env.HOST + ""+ process.env.PORT)+ `/api/transactions?page=${validatedPage+1}`;

    return {count, rows, flag, previous, next};
}

const getTransactionsByUserId = async (userId, page) => {
    let flag = true;
    let previous, next;

    let validatedPage = +page;
    if (validatedPage < 0) {
        validatedPage = 0;
    }

    const {count, rows} = await Transaction.findAndCountAll({
        where: {userId},
        include: {
            model: Category,
            as: 'category',
            attributes: ['name', 'description']
        },
        limit: 10,
        offset: validatedPage * 10
    });

    if (!rows || rows.length === 0) {
        flag = false;
    }

    const maxPage = +count / (10) 
    previous = validatedPage == 0 ? null : `http://localhost:3000/api/transactions?page=${validatedPage-1}`;
    next = rows.length < 10 || validatedPage+1 == maxPage ? null :`http://localhost:3000/api/transactions?page=${validatedPage+1}`;

    return {count, rows, flag, previous, next};
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



module.exports = {getTransactions, getTransactionById, createTransaction, updateTransaction, deleteTransaction, getTransactionsByUserId};