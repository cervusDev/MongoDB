const express = require('express');

const server = express()
const port = 8080

server.use(express.json())
require("./controller/authController")(app)

server.listen(port, ()=> console.info('server is running!'))