const jwt = require("jsonwebtoken");

const decode = (req, res, next) => {
    const { token } = req.body

    jwt.decode(token, 'secretcode', (err, user) => {
        //if there is not token or does not match
        if(err) return res.status(401).json({error: 'error occurred while trying to verify token'})

        req.body.user = user
        next()
    })
}

module.exports = {
    decode
}