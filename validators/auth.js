const { check, checkSchema } = require("express-validator");
const { validateResult } = require("../helpers/validate");

const signinValidation = [
    checkSchema({
        email: {
            in: ["body"],
            exists: {
                errorMessage: "the email is missing",
                bail: true,
            },
            notEmpty: {
                errorMessage: "the email cannot be empty",
                bail: true,
            },
            isString: {
                errorMessage: "the email must a string",
                bail: true,
            },
            isEmail: {
                errorMessage: "the email is invalid",
                bail: true,
            },
            normalizeEmail: true,
        },
        password: {
            in: ["body"],
            exists: {
                errorMessage: "the password is missing",
                bail: true,
            },
            notEmpty: {
                errorMessage: "the password cannot be empty",
                bail: true,
            },
            isString: {
                errorMessage: "the password must a string",
                bail: true,
            },
        },
    }),
    (req, res, next) => {
        validateResult(req, res, next);
    },
];

const signupValidation = [
    checkSchema({
        firstName: {
            in: ["body"],
            exists: {
                errorMessage: "the first name is missing",
                bail: true,
            },
            notEmpty: {
                errorMessage: "the first name cannot be empty",
                bail: true,
            },
            isAlpha: {
                errorMessage: "The first name must only contain letters"
            },
            isString: {
                errorMessage: "the first name must a string",
                bail: true,
            },
        },
        lastName: {
            in: ["body"],
            exists: {
                errorMessage: "the last name is missing",
                bail: true,
            },
            notEmpty: {
                errorMessage: "the last name cannot be empty",
                bail: true,
            },
            isAlpha: {
                errorMessage: "The last name must only contain letters"
            },
            isString: {
                errorMessage: "the last name must a string",
                bail: true,
            },
        },
        email: {
            in: ["body"],
            exists: {
                errorMessage: "the email is missing",
                bail: true,
            },
            notEmpty: {
                errorMessage: "the email cannot be empty",
                bail: true,
            },
            isString: {
                errorMessage: "the email must a string",
                bail: true,
            },
            isEmail: {
                errorMessage: "the email is invalid",
                bail: true,
            },
            normalizeEmail: true,
        },
        password: {
            in: ["body"],
            exists: {
                errorMessage: "the password is missing",
                bail: true,
            },
            notEmpty: {
                errorMessage: "the password cannot be empty",
                bail: true,
            },
            isString: {
                errorMessage: "the password must a string",
                bail: true,
            },
        },
        avatar: {
            in: ["body"],
            optional: true,
            isURL: {
                errorMessage: "the avatar must be a link",
            },
        },
    }),
    (req, res, next) => {
        validateResult(req, res, next);
    },
];

module.exports = {
    signinValidation,
    signupValidation,
};
