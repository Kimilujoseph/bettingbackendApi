const Joi = require('joi');

const bettingValidation = (data) => {
    const historyValidationSchema = Joi.object({
        sportsname: Joi.string().required().trim().min(3).max(50),
        eventsname: Joi.string().required().trim().min(3).max(100),
        marketname: Joi.string().required().trim().min(3).max(100),
        teamselection: Joi.string().required().trim().min(3).max(100),
        typeofbet: Joi.string().required().valid('multibet', 'singlebet'),
        oddsReq: Joi.number().required().positive(),
        stack: Joi.number().required().positive(),
        betfinishingtime: Joi.date().required(),
    });

    return historyValidationSchema.validate(data)
}



module.exports = { bettingValidation };