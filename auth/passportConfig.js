const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
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
    user.firstName = req.body.firstName
    user.lastName = req.body.lastName
    user.email = email
    user.password = user.encryptPassword(password)
    user.avatar = req.body.avatar
    user.roleId = req.body.roleId
    await user.save()
    done(null, user)
}))

passport.use('local-signin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
}, async (email, password, done) => {

    const user = await userService.getUserByEmail(email)
    if(!user) return done(null, false, { message: 'user not found' })
    if(!user.comparePassword(password)) return done(null, false, { message: 'password is incorrect'})

    done(null, user)
}))

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secretcode';
passport.use('jwt', new JwtStrategy(opts, async function (jwt_payload, done) {
    const user = await userService.getUserByEmail(jwt_payload.email)

    if(!user) return done(null, false, { message: 'user not found' })

    return done(null, user)
}));
