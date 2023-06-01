const express = require("express");
const router = express.Router();

// Data
const ToDo = require("../models/ToDo");
const todos = [
    {
        text: 'Finish To Do App',
        complete: false
    },
    {
        text: 'Stress about everything',
        complete: true
    },
    {
        text: "It's fine, everything's fine",
        complete: false 
    }
]

// Index GET /things
router.get("/", async (req, res) => {
  try {
    const allToDo = await ToDo.find({});
    res.json(allToDo);
  } catch (err) {
    console.log(err);
  }
});

// New GET /things/new

// Destroy DELETE /things/:id
router.delete("/:id", async (req, res) => {
  const deletedTodo = await ToDo.findByIdAndRemove(req.params.id);
  res.json(deletedTodo);
});

// Update PUT /things/:id
router.put("/:id", async (req, res) => {
  const updatedTodo = await ToDo.findByIdAndUpdate(req.params.id, req.body);
  res.json(updatedTodo);
});

// Create POST /things
router.post("/", async (req, res) => {
  try {
    const createdTodo = await ToDo.create(req.body);
    res.json(createdTodo);
  } catch (err) {
    console.log(err.message);
  }
});

router.get("/seed", async (req, res) => {
  await ToDo.deleteMany({});
  await ToDo.insertMany(todos);
  res.send("ToDos added");
});

// Edit GET /things/:id/edit

// Show GET /things/:id
router.get("/:id", async (req, res) => {
  const todo = await ToDo.findById(req.params.id);
  res.json(todo);
});

module.exports = router;
