const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    userUsername: {
        type: mongoose.Schema.Types.String,
        required: true,

    },
    email: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    password: {
        type: mongoose.Schema.Types.String,
        required: true
    }
})

module.exports = mongoose.model("adminSchema", UserSchema)