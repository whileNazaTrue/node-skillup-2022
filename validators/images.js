const { checkSchema } = require("express-validator");
const { validateResult } = require("../helpers/validate");
const path = require("path");

const validateImageExtension = [
    checkSchema({
        file: {
            in: ["body"],
            exists: {
                errorMessage: "the file field is missing",
                bail: true,
            },
            notEmpty: {
                errorMessage: "you must upload a file",
                bail: true,
            },
            custom: {
                options: (file) => {
                    const extension = path.extname(file.originalname).toLowerCase();
                    const supportedExtensions = [".png", ".jpg", ".svg", ".webp"];

                    if (supportedExtensions.includes(extension)) return Promise.resolve();
                    else return Promise.reject('The file extension is not supported');
                },
                bail: true
            },
        }
    }),(req, res, next) => {
        validateResult(req, res, next)
    }
];

module.exports = {
    validateImageExtension
}