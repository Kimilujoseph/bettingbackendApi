require("dotenv").config();

const mongoose = require("mongoose");


const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("database connected")

    } catch (error) {
        console.log("Its seems you are offline")
    }
}

connect()