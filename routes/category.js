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
 *     Category:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Name of category.
 *         description:
 *           type: string
 *           description: Description of category.
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
 *                $ref: '#/components/schemas/Category'
 * 
*/
/**
 * @swagger
 * /api/categories:
 *  post:
 *    summary: Create new category.
 *    tags: [Categories]
 *    requestBody: 
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object   
 *            $ref: '#/components/schemas/Category'
 *    responses:
 *      200:
 *        description: Category created.
 *      401:
 *        description: Error.
 *
 */

/**
 * @swagger
 * /api/categories/{id}:
 *  get:
 *    summary: Get category by ID.
 *    tags: [Categories]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *        type: integer
 *        required: true
 *        description: ID of the category.
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
 *                $ref: '#/components/schemas/Category'
 * 
 */

/**
 * @swagger
 * /api/categories/{id}:
 *  put:
 *    summary: Update category.
 *    tags: [Categories]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *        type: integer
 *        required: true
 *        description: ID of the category.
 *    requestBody: 
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object   
 *            $ref: '#/components/schemas/Category'
 *    responses:
 *      200:
 *        description: Category updated.
 *      401:
 *        description: Error.
 */

/**
 * @swagger
 * /api/categories/{id}:
 *  delete:
 *    summary: Delete Category.
 *    tags: [Categories]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *        type: integer
 *        required: true
 *        description: ID of the category.
 *    responses:
 *      200:
 *        description: Category deleted.
 *      401:
 *        description: Error.
 */

module.exports = router