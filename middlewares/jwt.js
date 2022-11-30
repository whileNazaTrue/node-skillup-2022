const jwt = require("jsonwebtoken");

const encode = (payload) => {
    return jwt.sign(payload, "secretcode", { expiresIn: "24h" });
};

const decode = (req, res, next) => {
    const token = req.headers["authorization"];

    req.body.decodedToken = jwt.decode(token, { complete: true });

    next();
};

const isUser = (req, res, next) => {
    const token = req.headers["authorization"];

    const user = verify(token);

    if (user instanceof Error)
        return res
            .status(401)
            .json({ error: "error occurred while trying to verify token" });

    if (user.rolesId >= 0) return next();

    return res.status(403).json({ error: "not authorized" });
};

const isAdmin = (req, res, next) => {
    const token = req.headers["authorization"];

    const user = verify(token);

    if (user instanceof Error)
        return res
            .status(401)
            .json({ error: "error occurred while trying to verify token" });

    if (user.rolesId === 1) return next();

    return res.status(403).json({ error: "not authorized" });
};

const verify = (token) => {
    return jwt.verify(token, "secretcode", (err, payload) => {
        //if there is not token or does not match
        if (err) return new Error();

        return payload;
    });
};

module.exports = {
    verify,
    encode,
    decode,
};
