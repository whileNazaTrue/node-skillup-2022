const { Router } = require("express");
const passport = require("passport");
const router = Router();
const jwtMiddleware = require('../middlewares/jwt');
const { signupValidation, signinValidation } = require("../validators/auth");


router.post("/login", signinValidation, (req, res, next) => {
    passport.authenticate("local-signin", (err, user, message) => {
        //internal error
        if (err) return next(err);
        if (message)
            return res
                .status(403)
                .json({ success: false, message});

        req.login(user, {session: false}, (loginError) => {
            if (loginError) return next(loginError);
            const token = jwtMiddleware.encode(user.dataValues)
            return res
                .status(200)
                .json({ success: true, message: "authentication successful", user: user.dataValues, token });
        });
    })(req, res, next);
});

module.exports = router;
