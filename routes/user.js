const express = require('express');
const passport = require('passport');
const router = express.Router();

const userController = require('../controllers/user.js');
const { isAdmin, isUser } = require('../middlewares/jwt.js');
const { signupValidation } = require('../validators/auth.js');

router.post('/', signupValidation, userController.createUser)
    
router.use(passport.authenticate('jwt'))

router.get('/', isAdmin, userController.getUsers)

router
    .get('/:id', userController.getUserById)
    .put('/:id', userController.updateUser)
    .delete('/:id', userController.deleteUser);

module.exports = router;