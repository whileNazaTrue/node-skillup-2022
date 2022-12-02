const { checkSchema } = require("express-validator");
const { validateResult } = require("../helpers/validate");

//to edit transactions endpoint
const transactionValidation = [
    checkSchema({
        userId: {
            in: ["body"],
            exists: {
                errorMessage: "user id is missing",
                bail: true,
            },
            notEmpty: {
                errorMessage: "the user id field cannot be empty",
                bail: true,
            },
            isInt: {
                errorMessage: "the id must be a number",
                bail: true,
            },
        },
        categoryId: {
            in: ["body"],
            exists: {
                errorMessage: "category id is missing",
                bail: true,
            },
            notEmpty: {
                errorMessage: "the category id field cannot be empty",
                bail: true,
            },
            isInt: {
                errorMessage: "the id must be a number",
                bail: true,
            },
        },
        amount: {
            in: ["body"],
            exists: {
                errorMessage: "the amount is missing",
                bail: true,
            },
            notEmpty: {
                errorMessage: "the amount field cannot be emmpty",
                bail: true,
            },
        },
        date: {
            in: ["body"],
            exists: {
                errorMessage: "the date is missing",
                bail: true,
            },
            notEmpty: {
                errorMessage: "the date field cannot be empty",
                bail: true,
            },
            //is date format = AAAA/MM/DD
            isDate: {
                errorMessage: "the date must be AAAA/MM/DD",
                bail: true,
            },
        },
    }),
    (req, res, next) => {
        validateResult(req, res, next);
    },
];


module.exports = {
    transactionValidation,
}