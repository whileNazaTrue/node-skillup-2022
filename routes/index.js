const express = require('express');
const fs = require('fs');
const router = express.Router();

const PATH_ROUTES = __dirname;

const removeExtension = (fileName) => {
    return fileName.split('.').shift();
};

fs.readdirSync(PATH_ROUTES).filter((file) => {
    const name = removeExtension(file);
    if (name !== 'index' && name !== 'category'){
        router.use(`/${name}s`, require(`./${file}`));
    }else if (name === 'category'){
        const auxString = 'categories';
        router.use(`/${auxString}`, require(`./${file}`));
    }
    ;
});

module.exports = router;
