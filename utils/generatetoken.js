require("dotenv").config()
const jwt = require('jsonwebtoken')

const generatetoken = async (user) => {
    const accessToken = jwt.sign(user, process.env.USER_SECRET_TOKEN)
    return accessToken;
}

module.exports = { generatetoken }