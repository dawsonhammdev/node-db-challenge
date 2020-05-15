const express = require('express');

const apiRouter = require('./api/apiRouter');

const server = express();

server.use(express.json());

server.use('/api', apiRouter);

server.get('/', (req, res) => {
    res.send('Lets write some awesome code!');
})



module.exports = server;