const express = require('express');

const server = express()
const port = 3000;

server.use(express.json())
require("./controller/authController")(server)

server.listen(port, ()=> console.info('server is running!'))

