const jwt = require("jsonwebtoken");

const encode = (payload) => {
    return jwt.sign(payload, 'secretcode', {expiresIn: "24h"})
}

const decode = (req, res, next) => {
    const { token } = req.body

    req.body.decodeToken = jwt.decode(token, {  complete: true})

    next()
}

const verify = (req, res, next) => {
    const { token } = req.body

    jwt.verify(token, 'secretcode', (err, payload) => {
        //if there is not token or does not match
        if(err) return res.status(401).json({error: 'error occurred while trying to verify token'})

        req.body.payload = payload
        next()
    })
}

module.exports = {
    verify,
    encode,
    decode
}