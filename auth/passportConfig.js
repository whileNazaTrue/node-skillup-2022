const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const userService = require('../services/user.js');
const bcrypt = require('bcrypt');
const { User } = require('../database/models');
const dotenv = require('dotenv');

dotenv.config();

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

    const existingUser = await userService.getUserByEmail(email)

    if(existingUser) return done(null, false,'the email already exists')

    const user = new User()
    user.firstName = req.body.firstName
    user.lastName = req.body.lastName
    user.email = email
    user.password = user.encryptPassword(password)
    user.avatarId = req.body.avatarId
    await user.save()
    done(null, user)
}))

passport.use('local-signin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
}, async (email, password, done) => {

    const user = await userService.getUserByEmail(email)
    if(!user) return done(null, false, 'user not found' )
    
    const match = await user.comparePassword(password)
    if(!match) return done(null, false, 'password is incorrect')

    done(null, user)
}))

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET;
passport.use('jwt', new JwtStrategy(opts, async function (jwt_payload, done) {
    const user = await userService.getUserByEmail(jwt_payload.email)

    if(!user) return done(null, false, 'user not found')

    return done(null, user)
}));
