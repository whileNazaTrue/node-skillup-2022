const express = require('express');
const router = express.Router();
const uploadAvatar = require('../helpers/avatar.js');
const avatarController = require('../controllers/avatar.js');
const { validateImageExtension } = require('../validators/images.js');
const passport = require('passport');
const { isAdmin } = require('../middlewares/jwt.js');

router.use(passport.authenticate('jwt'))

router
    .post('/', uploadAvatar.single('myfile'), validateImageExtension, avatarController.createAvatar)

router
    .use(isAdmin)
    .get('/', avatarController.getAvatars)
    .get('/:id', avatarController.getAvatarById)
    .delete('/:id', avatarController.deleteAvatar);

module.exports = router;