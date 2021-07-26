const express = require('express');

const server = express()
const port = 8080
server.use(express.json())
server.use(rou)

server.listen(port, ()=> console.info('server is running!'))