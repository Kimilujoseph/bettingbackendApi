require("dotenv").config()
const express = require("express")
const app = express();
const port = process.env.PORT || 4000
const userroute = require("./routers/user");
const adminroute = require("./routers/admin");
const betting = require("./routers/betting");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(userroute)
app.use(adminroute);
app.use(betting)

app.listen(port, () => console.log(`the server is listening on port ${port}`))