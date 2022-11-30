const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const userService = require('../services/user.js');
const bcrypt = require('bcrypt');
const { User } = require('../database/models');

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser(async(id, done) => {
    const user = await userService.getUserById(id)
    done(null, user)
})

passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done) => {
    const user = new User()
    user.email = email
    user.password = user.encryptPassword(password)
    await user.save()
    done(null, user)
}))

passport.use('local-signin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done) => {

    const user = await userService.getUserByEmail(email)
    console.log(user);
    if(!user) return done(null, false, console.log('no se encontro'))
    if(!user.comparePassword(password)) return done(null, false, console.log('contrasena incorrecta'))

    done(null, user)
}))