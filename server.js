const express = require('express');

// const ProjectRouter = require('./router/project-router.js');

const server = express();

server.use(express.json());

// server.use('/api/projects', ProjectRouter);

server.get('/', (req, res) => {
    res.send('Lets write some awesome code!');
})

module.exports = server;