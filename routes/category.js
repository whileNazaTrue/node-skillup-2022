const express = require('express')
const router = express.Router()
const categoryController = require('../controllers/category')
const { isAdmin } = require('../middlewares/jwt')

router
    .get('/', categoryController.getCategories)
    .get('/:id', categoryController.getCategoryById)

router.use(isAdmin)

router
    .post('/', categoryController.createCategory)
    .put('/:id', categoryController.updateCategory)
    .delete('/:id', categoryController.deleteCategory)

module.exports = router