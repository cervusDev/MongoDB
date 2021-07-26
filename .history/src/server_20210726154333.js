const express = require('express');
const { route } = require('./routes/route');

const server = express()
const port = 808
server.use(route)

server.use(express.json())

server.listen(port, ()=> console.info('server is running!'))