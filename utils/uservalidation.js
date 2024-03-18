const Joi = require('joi');
const userValidation = (data) => {
    const userValidationSchema = Joi.object({
        userUsername: Joi.string().required().trim().min(3).max(20),
        email: Joi.string().required().trim().email(),
        password: Joi.string().required().trim().min(8).pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%^&*])')),
    });
    return userValidationSchema.validate(data)
}


module.exports = { userValidation }
