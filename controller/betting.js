require("../config/database");

const { bettingValidation } = require("../utils/bettingValidation")
const { calculateprofitLoss, calculateTotal } = require("../utils/calculateprofitLoss")
const bettingModel = require("../models/bethistory")


const placingBet = async (req, res) => {
    try {
        //check for joi validation
        const { error } = bettingValidation(req.body)
        if (error) {
            res.json(error.details[0].message)
            return
        } else {
            //inserting the bet into  the database
            //calculating profit loss
            const profitLoss = calculateprofitLoss(req.body.oddsReq, req.body.stack)
            console.log("profit", profitLoss)
            const total = calculateTotal(req.body.oddsReq, req.body.stack)
            const user = req.user
            const placedBetInfo = {
                userId: user,
                sportsname: req.body.sportsname,
                eventsname: req.body.eventsname,
                marketname: req.body.marketname,
                teamselection: req.body.teamselection,
                typeofbet: req.body.typeofbet,
                oddsReq: req.body.oddsReq,
                stack: req.body.stack,
                profitloss: profitLoss,
                total: total,
                betfinishingtime: req.body.betfinishingtime,
            }

            const successbet = await bettingModel.insertMany(placedBetInfo);
            res.json(successbet)
            //res.status(201).send({ message: "Bet Placed Successfully" })
        }
    }
    catch (error) {
        console.log(error)
    }
}




module.exports = { placingBet }