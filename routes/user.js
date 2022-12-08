const express = require('express');
const passport = require('passport');
const router = express.Router();

const userController = require('../controllers/user.js');
const { isUser, isAdmin } = require('../middlewares/jwt.js');
const { signupValidation } = require('../validators/auth.js');
const { get } = require('./authentication.js');

router.post('/', signupValidation, userController.createUser)
    
router.use(passport.authenticate('jwt'))

router
    .get('/:id', isUser, userController.getUserById)
    .put('/:id', isUser,  userController.updateUser)
    .delete('/:id', isUser, userController.deleteUser)
    .get('/', isAdmin, userController.getUsers)

    

module.exports = router;