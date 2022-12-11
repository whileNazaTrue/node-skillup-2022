const { Router } = require("express");
const passport = require("passport");
const router = Router();
const jwtMiddleware = require('../middlewares/jwt');
const { signupValidation, signinValidation } = require("../validators/auth");
const authController = require('../controllers/auth')

router.post("/login", signinValidation, authController.login);

/**
 * @swagger
 * components:
 *   schemas:
 *     Auth:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           description: Email of the user.
 *         password:
 *           type: string
 *           description: Password of the user.
 *       required:
 *         - email
 *         - password
 *       example:
 *         email: alex@nothing.com
 *         password: password123
 *           
 */

/**
 * @swagger
 * /api/auth/login:
 *  post:
 *    summary: User login.
 *    tags: [Auth]
 *    requestBody: 
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object   
 *            $ref: '#/components/schemas/Auth'
 *    responses:
 *      200:
 *        description: User logged.
 *      401:
 *        description: Error.
 *
 */

module.exports = router;
