const mongoose = require("mongoose")


const historySchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    sportsname: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    eventsname: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    marketname: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    teamselection: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    typeofbet: {
        type: mongoose.Schema.Types.String,
        required: true,
        enum: ["multibet", "singlebet"],
    },
    oddsReq: {
        type: mongoose.Schema.Types.Decimal128,
        required: true
    },
    stack: {
        type: mongoose.Schema.Types.Number,
        required: true,

    },

    commission: {
        type: mongoose.Schema.Types.Number,
        default: 50
    },

    profitloss: {
        type: mongoose.Schema.Types.Number,
        required: true,
    },

    total: {
        type: mongoose.Schema.Types.Number,
        required: true
    },

    betplacingtime: {
        type: mongoose.Schema.Types.Date,
        default: Date.now,
        immutable: true,
    },
    betfinishingtime: {
        type: mongoose.Schema.Types.Date,
        required: true,
    }
})

module.exports = mongoose.model("bethistory", historySchema)