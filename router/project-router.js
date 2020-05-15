const express = require('express');

const Project = require('./project-model.js');

const router = express.Router();

//GET ALL PROJECTS

router.get('/', (req,res) => {
    Project.getAllProjects()
    .then(projects => {
        res.status(200).json(projects);
    })
    .catch(err => {
        res.status(500).json({
            errMessage: 'Sorry, an error has occured with retrieving projects'
        })
    })
})

router.post('/', (req,res) => {
    const projectData = req.body;

    Project.addProject(projectData)
    .then(pro => {
        res.status(201).json(pro);
    })
    .catch(err => {
        res.status(500).json({
            Message: 'Sorry, an error has occured with retrieving projects'
        })
    })
})


module.exports = router