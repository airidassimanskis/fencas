const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.options("*", cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// app.use("/", require("./routes/AllRoutes"))

app.listen(5000, () => {
    console.log("Server listening on port", 5000)
})