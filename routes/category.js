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

module.exports = router