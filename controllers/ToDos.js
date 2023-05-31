const express = require('express')
const router = express.Router()

// Data
const ToDos = require('../models/ToDo')

// Index GET /things
router.get('/todos', async (req, res)=>{
    const todos = await ToDos.find({})
    res.json(todos)
})

// New GET /things/new


// Destroy DELETE /things/:id
router.delete('/todos/:id', async (req, res)=>{
    await ToDos.findByIdAndRemove(req.params.id)
})

// Update PUT /things/:id
router.put('/todos/:id', async (req, res)=>{
    const todo = await ToDos.findByIdAndUpdate(req.params.id, req.body)
    res.json(todo)
})

// Create POST /things	
router.post('/todos', async (req, res)=>{
    try {
        const todo = await ToDos.create(req.body)
        res.json(todo)
    }
    catch(err) {
        console.log(err.message)
    }
})

// Edit GET /things/:id/edit


// Show GET /things/:id
router.get('/todos/:id', async (req, res)=>{
    const todo = await ToDos.findById(req.params.id)
    res.json(todo)
})

module.exports = router

