const bettingSchema = require("../models/bethistory");

const getbettinghistory = async (id) => {
    try {

        const userbettingHistory = await bettingSchema.find({ userId: { $eq: id } })
        if (userbettingHistory) {
            return userbettingHistory
        }
        else {
            return `cannot find your betting history`
        }
    }
    catch (error) {
        return `internal server error`
    }
}

module.exports = { getbettinghistory }