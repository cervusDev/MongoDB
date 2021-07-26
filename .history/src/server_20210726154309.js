const express = require('express');

const server = express()
const port = 8080
app.use(express.json())


app.listen(port, ()=> console.info('server is running!'))