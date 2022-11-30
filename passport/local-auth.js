const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const userService = require('../services/user.js');
const bcrypt = require('bcrypt');
const { User } = require('../database/models/user');

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser( async(id, done) => {
    const user = await userService.getUserById(id)
    done(null, user)
})

passport.use('local', new LocalStrategy({
    usernameField: email,
    passwordField: password,
    passReqToCallback: true
}, async (req, email, password, done) => {
    const user = {
        email,
        password
    }
    await User.create(user)
    done(null, user)
}))