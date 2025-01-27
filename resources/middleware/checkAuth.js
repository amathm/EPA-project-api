const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const verify = jwt.verify(token, process.env.JWT_KEY);
        req.userData = verify; // Authorization
        next();
    } catch(error) {
        console.log(error);
        return res.status(401).json({
            message: 'Auth failed'
        });
    }
}