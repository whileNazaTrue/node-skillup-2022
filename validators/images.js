const { checkSchema } = require("express-validator");
const { validateResult } = require("../helpers/validate");
const path = require("path");

const validateImageExtension = [
    checkSchema({
        image: {
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
                options: (value) => {
                    const extension = path.extname(value).toLowerCase();
                    const avalibleExtensions = [".png", ".jpg", ".svg", ".webp"];

                    if (avalibleExtensions.includes(extension)) return Promise.resolve();
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