// Add dotenv
require('dotenv').config()

// Imports/Dependencies
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = process.env.PORT || 3001

// Mongoose Database
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true, useUnifiedTopology: true
})
mongoose.connection.once('open', ()=>{
    console.log('Connected Mon')
})

// Middleware
app.use(express.json())
app.use((req, res, next)=>{
    console.log("I'm da middleware")
    next()
})
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/todos', require('./controllers/ToDos'))

// Listen
app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})