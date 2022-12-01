const { check } = require("express-validator");
const { validateResult } = require("../helpers/validate");

const loginValidation = (req, res, next) => [
    check("email").exists().isEmail().normalizeEmail().not().isEmpty(),
    check("password").exists().not().isEmpty(),
    (req, res, next) => {
        validateResult(req, res, next);
    },
];

const registerValidation = (req, res, next) => [
    check('fisrtName').exists().not().isEmpty(),
    check('lastName').exists().not().isEmpty(),
    check("email").exists().isEmail().normalizeEmail().not().isEmpty(),
    check("password").exists().isLength({min: 5}).not().isEmpty(),
    check('avatar').trim().escape(),
    // check("roleId").exists().not().isEmpty(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = {
    loginValidation,
    registerValidation
};
