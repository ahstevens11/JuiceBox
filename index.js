const PORT = 3000;
const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { client } = require('./db');
client.connect();

server.use(bodyParser.json());
server.use(morgan('dev'));


const apiRouter = require('./api');
server.use('/api', apiRouter);

server.listen(PORT, () => {
    console.log('The server is up on port', PORT)
})

