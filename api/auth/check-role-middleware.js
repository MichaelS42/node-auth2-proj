module.exports = (role) => {
    return function (req, res, next) {
        if ((req?.decodedJwt?.role || '') === role) {
            next();
        } else {
            res.status(403).json({ you: 'have no power, here' });
        }
    }
}