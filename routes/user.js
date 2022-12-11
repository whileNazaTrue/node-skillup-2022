const express = require('express');
const passport = require('passport');
const router = express.Router();

const userController = require('../controllers/user.js');
const { isUser, isAdmin } = require('../middlewares/jwt.js');
const { signupValidation, editMailValidation } = require('../validators/auth.js');
const { get } = require('./authentication.js');

router.post('/', signupValidation, userController.createUser)
    
router.use(passport.authenticate('jwt'))

router
    .get('/:id', isUser, userController.getUserById)
    .put('/:id', isUser, editMailValidation, userController.updateUser)
    .delete('/:id', isUser, userController.deleteUser)
    .get('/', isAdmin, userController.getUsers)

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         firstName:
 *           type: string
 *           description: Firstname.
 *         LastName:
 *           type: string
 *           description: Lastname.
 *         email:
 *           type: string
 *           description: Email.
 *         password:
 *           type: string
 *           description: Password.
 *         avatarId:
 *           type: integer
 *           description: Avatar ID.
 *         roleId:
 *           type: integer
 *           description: Role ID.
 *       required:
 *         - firstName
 *         - lastName
 *         - email
 *         - password
 *         - avatarId
 *         - roleId
 *       example:
 *         firstName: Alex
 *         lastName: Smith
 *         email: alex@nothing.com
 *         password: password123
 *         avatarId: 1
 *         roleId: 2
 *           
 * 
 */

/**
 * @swagger
 * /api/users:
 *  get:
 *    summary: Get all users.
 *    tags: [Users]
 *    responses:
 *      200:
 *        description: All users.
 *      401:
 *        description: Error.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:    
 *                $ref: '#/components/schemas/User'
 * 
*/
/**
 * @swagger
 * /api/users:
 *  post:
 *    summary: Create new user.
 *    tags: [Users]
 *    requestBody: 
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object   
 *            $ref: '#/components/schemas/User'
 *    responses:
 *      200:
 *        description: User created.
 *      401:
 *        description: Error.
 *
 */

/**
 * @swagger
 * /api/users/{id}:
 *  get:
 *    summary: Get user by ID.
 *    tags: [Users]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *        type: integer
 *        required: true
 *        description: ID of the user.
 *    responses:
 *      200:
 *        description: All users.
 *      401:
 *        description: Error.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              items:    
 *                $ref: '#/components/schemas/User'
 * 
 */

/**
 * @swagger
 * /api/users/{id}:
 *  put:
 *    summary: Update user.
 *    tags: [Users]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *        type: integer
 *        required: true
 *        description: ID of the user.
 *    requestBody: 
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object   
 *            $ref: '#/components/schemas/User'
 *    responses:
 *      200:
 *        description: User updated.
 *      401:
 *        description: Error.
 */

/**
 * @swagger
 * /api/users/{id}:
 *  delete:
 *    summary: Delete user.
 *    tags: [Users]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *        type: integer
 *        required: true
 *        description: ID of the user.
 *    responses:
 *      200:
 *        description: User deleted.
 *      401:
 *        description: Error.
 */

module.exports = router;