const express = require('express');

const Resources = require('./project-model.js');

const router = express.Router();

router.get('/', (req,res) => {
    Resources.getResources()
    .then(resource => {
        res.status(200).json(resource);
    })
    .catch(err => {
        res.status(500).json({
            errMessage: 'Sorry, an error has occured with retrieving resources'
        })
    })
})

router.post('/', (req,res) => {
    const resourceData = req.body;

    Resources.addResource(resourceData)
    .then(resource => {
        res.status(201).json(resource);
    })
    .catch(err => {
        res.status(500).json({
            Message: 'Sorry, an error has occured with retrieving projects'
        })
    })
})

module.exports = router