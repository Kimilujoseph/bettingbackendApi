const bcrypt = require("bcryptjs")

const hashingPassword = async (password) => {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    return hashedPassword
}

const passwordVerification = async (userinput, userpassword) => {
    const verifiedPassword = await bcrypt.compare(userinput, userpassword);
    return verifiedPassword
}

module.exports = { hashingPassword, passwordVerification }