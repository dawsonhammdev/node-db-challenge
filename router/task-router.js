const express = require('express');

const Task = require('./project-model.js');

const router = express.Router();

router.get('/', (req,res) => {
    Task.getTasks()
    .then(task => {
        res.status(200).json(task);
    })
    .catch(err => {
        res.status(500).json({
            errMessage: 'Sorry, an error has occured with retrieving tasks'
        })
    })
})

router.post('/', (req,res) => {
    const taskData = req.body;

    Task.addTask(taskData)
    .then(task => {
        res.status(201).json(task);
    })
    .catch(err => {
        res.status(500).json({
            Message: 'Sorry, an error has occured with retrieving projects'
        })
    })
})

module.exports = router