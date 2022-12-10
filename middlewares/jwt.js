const jwt = require("jsonwebtoken");

const encode = (payload) => {
    return 'Bearer ' + jwt.sign(payload, process.env.SECRET, { expiresIn: "24h" });
};

const decode = (req, res, next) => {
    const token = req.headers["authorization"]
    if(!token) return res.status(401).json({ error: 'no token was send' })
    const modToken = token.split(' ')[1];

    req.body.decodedToken = jwt.decode(modToken, { complete: true });

    next();
};

const isUser = (req, res, next) => {
    const token = req.headers["authorization"];
    //for /transactions?id=
    let id = req.query.userId
    //for /user/:id

    if(!id) id = req.params.id

    const user = verify(token);

    if(user instanceof Error)return res.status(401).json({ error: "error occurred while trying to verify token" });
    
    if(!id && user.roleId <= 2) return next();
    if(id && id == user.id) return next()
    if(user.roleId === 1) return next()


    return res.status(403).json({ error: "not authorized" });
};

const isAdmin = (req, res, next) => {
    const token = req.headers["authorization"];
    const user = verify(token);

    if (user instanceof Error)return res.status(401).json({ error: "error occurred while trying to verify token" });

    if (user.roleId === 1) return next();

    return res.status(403).json({ error: "not authorized" });
};

const verify = (token) => {
    if(!token) return new Error()

    const modToken = token.split(' ')[1]
    return jwt.verify(modToken, process.env.SECRET, (err, payload) => {
        //if there is not token or does not match
        if (err) return new Error();

        return payload;
    });
};

module.exports = {
    verify,
    encode,
    decode,
    isUser,
    isAdmin
};
