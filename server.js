// Add dotenv
require('dotenv').config()

// Imports/Dependencies
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = process.env.PORT || 3001
const cors = require('cors')

// Mongoose Database
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true, useUnifiedTopology: true
})
mongoose.connection.once('open', ()=>{
    console.log('Connected Mon')
})

// Middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

// Routes
app.use('/todos', require('./controllers/ToDos'))

// Listen
app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})