const Joi = require('joi');

const adminValidationSchema = Joi.object({
    adminUsername: Joi.string()
        .required()
        .trim()
        .min(3)
        .max(20)
        .alphanum(),
    password: Joi.string()
        .required()
        .trim()
        .min(8)
        .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%^&*])'))
        .message('Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character!')
});

module.exports = adminValidationSchema;
