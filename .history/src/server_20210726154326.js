const express = require('express');
const { route } = require('./routes/route');

const server = express()
const port = 8080
server.use(express.json())
server.use(route)

server.listen(port, ()=> console.info('server is running!'))