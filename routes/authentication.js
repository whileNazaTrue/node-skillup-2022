const { Router } = require("express");
const passport = require("passport");
const router = Router();
const jwtMiddleware = require('../middlewares/jwt');
const { signupValidation, signinValidation } = require("../validators/auth");
const authController = require('../controllers/auth')

router.post("/login", signinValidation, authController.login);

module.exports = router;
