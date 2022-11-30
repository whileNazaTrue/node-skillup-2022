const express = require('express')
const router = express.Router()

const categoryController = require('../controllers/category')

router
    .get('/', categoryController.getCategories)
    .get('/:id', categoryController.getCategoryById)
    .post('/', categoryController.createCategory)
    .put('/:id', categoryController.updateCategory)

module.exports = router