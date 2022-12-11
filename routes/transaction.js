const express = require('express');
const passport = require('passport');
const router = express.Router();

const transactionController = require('../controllers/transaction.js');
const { isAdmin, isUser } = require('../middlewares/jwt.js');
const { transactionValidation, editTransactionValidation } = require('../validators/transactions.js');

router.use(passport.authenticate('jwt'))

router
    .get('/', isAdmin, transactionController.getTransactions)
    .get('/:id', isAdmin, transactionController.getTransactionById)
    .get('/user/:id', isUser, transactionController.getTransactionsByUserId)
    .post('/', isUser, transactionValidation, transactionController.createTransaction)
    .put('/:id', isUser, editTransactionValidation, transactionController.updateTransaction)
    .delete('/:id', isUser, transactionController.deleteTransaction);

/**
 * @swagger
 * components:
 *   schemas:
 *     Transaction:
 *       type: object
 *       properties:
 *         description:
 *           type: string
 *           description: Description.
 *         amount:
 *           type: integer
 *           description: Amount.
 *         userId:
 *           type: integer
 *           description: User ID.
 *         categoryId:
 *           type: integer
 *           description: Categorie ID.
 *         date:
 *           type: integer
 *           description: Date.
 *       required:
 *         - description
 *         - amount
 *         - userId
 *         - categoryId
 *         - date
 *       example:
 *         description: Depósito
 *         amount: 400
 *         userId: 1
 *         categoryId: 2
 *         date: 11-12-22
 *           
 * 
 */

/**
 * @swagger
 * /api/transactions:
 *  get:
 *    summary: Get all transactions.
 *    tags: [Transactions]
 *    responses:
 *      200:
 *        description: All transactions.
 *      401:
 *        description: Error.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:    
 *                $ref: '#/components/schemas/Transaction'
 * 
*/

/**
 * @swagger
 * /api/transactions:
 *  post:
 *    summary: Create new transaction.
 *    tags: [Transactions]
 *    requestBody: 
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object   
 *            $ref: '#/components/schemas/Transactions'
 *    responses:
 *      200:
 *        description: Transaction created.
 *      401:
 *        description: Error.
 *
 */

/**
 * @swagger
 * /api/transactions/{id}:
 *  get:
 *    summary: Get transaction by ID.
 *    tags: [Transactions]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *        type: integer
 *        required: true
 *        description: ID of the transaction.
 *    responses:
 *      200:
 *        description: All transactions.
 *      401:
 *        description: Error.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              items:    
 *                $ref: '#/components/schemas/Transaction'
 * 
 */

/**
 * @swagger
 * /api/transactions/{id}:
 *  put:
 *    summary: Update transaction.
 *    tags: [Transactions]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *        type: integer
 *        required: true
 *        description: ID of the transaction.
 *    requestBody: 
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object   
 *            $ref: '#/components/schemas/Transaction'
 *    responses:
 *      200:
 *        description: Transaction updated.
 *      401:
 *        description: Error.
 */

/**
 * @swagger
 * /api/transactions/{id}:
 *  delete:
 *    summary: Delete transaction.
 *    tags: [Transactions]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *        type: integer
 *        required: true
 *        description: ID of the transaction.
 *    responses:
 *      200:
 *        description: Transaction deleted.
 *      401:
 *        description: Error.
 */


module.exports = router;