const { validationResult } = require("express-validator");
const fs = require('fs');
const storagePath = `${__dirname}/../storage`

const validateResult = (req, res, next) => {
    try {
        validationResult(req).throw();
        return next();
    } catch (error) {
        if(req.file) fs.unlink(`${storagePath}/${req.file.filename}`)
        return res.status(422).json({ errors: error.array() });
    }
};

module.exports = {
    validateResult,
};
