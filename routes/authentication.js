const { Router } = require('express');
const passport = require('passport');
const router = Router()

const userController = require('../controllers/user.js');
const { signinValidation, signupValidation } = require('../validators/auth.js');

// router.post('/login', (req, res) => {
//     const { email, password } = req.body
//     if(!email || !password) res.status(400).json({error: 'missing data'})

// })

router.post('/signup', signupValidation, passport.authenticate('local-signup', {
    successMessage: 'success',
    failureMessage: 'failure',
    passReqToCallback: true
}),(req,res) => {
    res.json('ok')
})

router.post('/signin', signinValidation, passport.authenticate('local-signin', {
    successMessage: 'success',
    failureMessage: 'failure',
    passReqToCallback: true
}),(req, res) => {
    res.json('ok')
})

router.get('/logout',(req, res) =>{
    res.clearCookie('connect.sid', {path: '/'}).status(200).send('deslog')
})

module.exports = router