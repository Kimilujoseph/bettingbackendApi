const router = require("express").Router()
const { userSignUp, userLogin, userDashboard } = require("../controller/user")
const { verifyToken } = require("../middleware/verification")

router.post("/signin", userSignUp)
router.post("/login", userLogin)
router.get("/userdashboard", verifyToken, userDashboard)

module.exports = router