const jwt = require('jsonwebtoken');

const verifyToken = async (req, res, next) => {
    //access the token

    const authHeader = req.headers['authorization']
    const token = authHeader.split(' ')[1]


    if (!token) return res.status(401).send("Access denied");

    try {
        jwt.verify(token, process.env.USER_SECRET_TOKEN, (err, user) => {
            if (err) return res.status(401).send('Access Denied')
            req.user = user;
            next()
        });

    }
    catch (error) {
        res.status(500).send("Internal server error")
    }
}

module.exports = { verifyToken };