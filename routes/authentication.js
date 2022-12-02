const { Router } = require("express");
const passport = require("passport");
const router = Router();
const jwtMiddleware = require('../middlewares/jwt');


router.post("/signup", (req, res, next) => {
    passport.authenticate("local-signup", {session: false}, (err, user, info) => {
        //internal error
        if (err) return next(err);
        if (!user)
            return res
                .status(400)
                .json({ success: false, message: "user creation failed" });

        return res
            .status(200)
            .json({ success: true, message: "user created successfully" });
    })(req, res, next);
});

router.post("/signin", (req, res, next) => {
    passport.authenticate("local-signin", (err, user, info) => {
        //internal error
        if (err) return next(err);
        if (!user)
            return res
                .status(403)
                .json({ success: false, message: "authentication failed" });

        req.login(user, {session: false}, (loginError) => {
            if (loginError) return next(loginError);
            const token = jwtMiddleware.encode(user.dataValues)
            return res
                .status(200)
                .json({ success: true, message: "authentication successful", token });
        });
    })(req, res, next);
});

router.get("/logout", (req, res) => {
    res.clearCookie("connect.sid", { path: "/" })
        .status(200)
        .json({ success: true, message: "user logout successfully" });
});

module.exports = router;
