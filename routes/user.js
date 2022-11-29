const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.js');

router
    .get('/', userController.getUsers)
    .get('/:id', userController.getUserById)
    .post('/', userController.createUser)
    .put('/:id', userController.updateUser)
    .delete('/:id', userController.deleteUser);

module.exports = router;