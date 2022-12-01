const { Router } = require("express");
const passport = require("passport");
const router = Router();

const userController = require("../controllers/user.js");

router.post("/signup", (req, res, next) => {
    passport.authenticate("local-signup", (err, user, info) => {
        //internal error
        if (err) return next(err);
        if (!user)
            return res
                .status(403)
                .json({ success: false, message: "authentication failed" });

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

        req.login(user, (loginError) => {
            if (loginError) return next(loginError);

            return res
                .status(200)
                .json({ success: true, message: "authentication successful" });
        });
    })(req, res, next);
});

router.get("/logout", (req, res) => {
    res.clearCookie("connect.sid", { path: "/" })
        .status(200)
        .json({ success: true, message: "user logout successfully" });
});

module.exports = router;
