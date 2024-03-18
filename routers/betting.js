const route = require("express").Router();
const { placingBet } = require("../controller/betting")
const { verifyToken } = require("../middleware/verification")

route.post("/create", verifyToken, placingBet)

module.exports = route