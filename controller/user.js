require('../config/database')

const userSchema = require("../models/user")
const { userValidation } = require("../utils/uservalidation")
const { hashingPassword, passwordVerification } = require("../utils/hashingpassword")
const { getbettinghistory } = require("../utils/bettingHistory")
const { generatetoken } = require("../utils/generatetoken")
const userSignUp = async (req, res) => {
    try {
        //validate the user input
        const { error } = userValidation(req.body);
        if (error) {
            res.json(error.details[0].message);
            return
        }
        else {
            //password encryption

            const hashedPassword = await hashingPassword(req.body.password)

            const userdata = {
                userUsername: req.body.userUsername,
                email: req.body.email,
                password: hashedPassword
            }
            await userSchema.insertMany(userdata)
            res.status(201).send({ message: "user successfully registered" })
        }

    }
    catch (error) {
        res.status(500).send("internal server error")
    }

}

const userLogin = async (req, res) => {
    try {
        const { error } = userValidation(req.body);
        if (error) {
            res.json(error.details[0].message);
            return
        } else {
            const userdata = {
                userUsername: req.body.userUsername,
                email: req.body.email,
                password: req.body.password
            }

            //check whether user exists
            const userExist = await userSchema.findOne({ userUsername: userdata.userUsername });

            if (userExist) {
                //we verify the password
                const verifyPassword = await passwordVerification(userdata.password, userExist.password)
                console.log(userExist.id)
                if (verifyPassword) {

                    const accessToken = await generatetoken({ _id: userExist.id })
                    console.log("accesstoken", accessToken)
                    res.json("successfully logged in")
                }
                else {

                    res.json("password or email is not correct")
                }
            }
        }
    }
    catch (error) {
        res.status(500).send({ message: "internal server error" })
    }
}


const userDashboard = async (req, res) => {
    try {
        //get your betting history
        const id = req.user
        const bettingHistory = await getbettinghistory(id)
        res.json(bettingHistory)
    }
    catch (error) {
        res.json("internal server error")
    }
}

module.exports = { userSignUp, userLogin, userDashboard }