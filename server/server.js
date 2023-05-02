const express = require("express")
const cors = require("cors")
const app = express()

const loginAdmin = require("./controller.js")

app.use(cors())
app.options("*", cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.post("/loginadmin", loginAdmin)

app.listen(5000, () => {
    console.log("Server listening on port", 5000)
})