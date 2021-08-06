const express = require('express');
const cors = require('cors');

const server = express();
const port = 5000;
const corsOptions = {
    origin: 'http://localhost:3002',
    optionsSucessStatus: 200
}

server.use(express.json());
server.use(cors(corsOptions));

require("./controller/authController")(server);
require("./controller/updateController")(server);
require("./controller/deleteController")(server);

server.listen(port, ()=> console.info('server is running!'));

