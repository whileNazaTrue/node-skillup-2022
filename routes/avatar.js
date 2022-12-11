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

/**
 * @swagger
 * components:
 *   schemas:
 *     Avatar:
 *       type: object
 *       properties:
 *         url:
 *           type: string
 *           description: URL of the avatar.
 *         filename:
 *           type: string
 *           description: Filename of the avatar.
 *       required:
 *         - url
 *         - filename
 *       example:
 *         url: example
 *         filename: example
 *           
 */

/**
 * @swagger
 * /api/avatars:
 *  get:
 *    summary: Get all avatars.
 *    tags: [Avatars]
 *    responses:
 *      200:
 *        description: All avatars.
 *      401:
 *        description: Error.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:    
 *                $ref: '#/components/schemas/Avatar'
 * 
*/
/**
 * @swagger
 * /api/avatars:
 *  post:
 *    summary: Create new avatar.
 *    tags: [Avatars]
 *    requestBody: 
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object   
 *            $ref: '#/components/schemas/Avatar'
 *    responses:
 *      200:
 *        description: Avatar created.
 *      401:
 *        description: Error.
 *
 */

/**
 * @swagger
 * /api/avatars/{id}:
 *  get:
 *    summary: Get avatar by ID.
 *    tags: [Avatars]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *        type: integer
 *        required: true
 *        description: ID of the avatar.
 *    responses:
 *      200:
 *        description: All avatars.
 *      401:
 *        description: Error.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              items:    
 *                $ref: '#/components/schemas/Avatar'
 * 
 */

/**
 * @swagger
 * /api/avatars/{id}:
 *  delete:
 *    summary: Delete avatar.
 *    tags: [Avatars]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *        type: integer
 *        required: true
 *        description: ID of the avatar.
 *    responses:
 *      200:
 *        description: Avatar deleted.
 *      401:
 *        description: Error.
 */

module.exports = router;