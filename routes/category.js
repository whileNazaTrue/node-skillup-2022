const express = require('express')
const passport = require('passport')
const router = express.Router()
const categoryController = require('../controllers/category')
const { isAdmin } = require('../middlewares/jwt')


router
    .use(passport.authenticate('jwt'), isAdmin)
    .get('/', categoryController.getCategories)
    .get('/:id', categoryController.getCategoryById)
    .post('/', categoryController.createCategory)
    .put('/:id', categoryController.updateCategory)
    .delete('/:id', categoryController.deleteCategory)

/**
 * @swagger
 * components:
 *   schemas:
 *     Categorie:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Name of categorie.
 *         description:
 *           type: string
 *           description: Description of categorie.
 *       required:
 *         - name
 *         - description
 *       example:
 *         name: Ingresos
 *         description: Depósito
 *           
 */

/**
 * @swagger
 * /api/categories:
 *  get:
 *    summary: Get all categories.
 *    tags: [Categories]
 *    responses:
 *      200:
 *        description: All categories.
 *      401:
 *        description: Error.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:    
 *                $ref: '#/components/schemas/Categorie'
 * 
*/
/**
 * @swagger
 * /api/categories:
 *  post:
 *    summary: Create new categorie.
 *    tags: [Categories]
 *    requestBody: 
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object   
 *            $ref: '#/components/schemas/Categorie'
 *    responses:
 *      200:
 *        description: Categorie created.
 *      401:
 *        description: Error.
 *
 */

/**
 * @swagger
 * /api/categories/{id}:
 *  get:
 *    summary: Get categorie by ID.
 *    tags: [Categories]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *        type: integer
 *        required: true
 *        description: ID of the categorie.
 *    responses:
 *      200:
 *        description: All categories.
 *      401:
 *        description: Error.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              items:    
 *                $ref: '#/components/schemas/Categorie'
 * 
 */

/**
 * @swagger
 * /api/categories/{id}:
 *  put:
 *    summary: Update categorie.
 *    tags: [Categories]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *        type: integer
 *        required: true
 *        description: ID of the categorie.
 *    requestBody: 
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object   
 *            $ref: '#/components/schemas/Categorie'
 *    responses:
 *      200:
 *        description: Categorie updated.
 *      401:
 *        description: Error.
 */

/**
 * @swagger
 * /api/categories/{id}:
 *  delete:
 *    summary: Delete categorie.
 *    tags: [Categories]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *        type: integer
 *        required: true
 *        description: ID of the categorie.
 *    responses:
 *      200:
 *        description: Categorie deleted.
 *      401:
 *        description: Error.
 */

module.exports = router