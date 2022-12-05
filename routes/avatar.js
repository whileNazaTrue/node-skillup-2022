const express = require('express');
const router = express.Router();
const uploadAvatar = require('../helpers/avatar.js');
const avatarController = require('../controllers/avatar.js');


router
    .get('/', avatarController.getAvatars)
    .post('/', uploadAvatar.single('myfile'), avatarController.createAvatar)
    .get('/:id', avatarController.getAvatarById)
    .delete('/:id', avatarController.deleteAvatar);

module.exports = router;