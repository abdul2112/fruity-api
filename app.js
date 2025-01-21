const express = require('express')
const app = express()
const logger = require('./logger')
const cors = require('cors')

// middleware
app.use(cors())
app.use(express.json())
app.use(logger)

const fruitsRouter = require("./routes/fruits")

// const fruits = require("./fruits.json")

app.get('/', (req, res) => {
  res.send('Hello fruity!')
})

// app.get('/home', (req, res) => {
//     res.send({"name": "Abdul"})
// })

app.use("/fruits", fruitsRouter)

// app.get("/no-content", (req, res) => {
//     res.sendStatus(204)
// })

// app.get("/forbidden", (req, res) => {
//     res.status(403).send("you shall not pass!")
// })

module.exports = app