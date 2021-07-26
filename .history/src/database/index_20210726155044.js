const mongoose = require('mongoose');

// userNewUrlParser:  Mongoose usa o novo sistema de url
//useUnifiedTopology:  Sistema de monitoramento do banco de dados

console.log(mongoose.connect('mongodb://localhost:27017/noderest',
{useNewUrlParser: true, useUnifiedTopology: true});


module.exports = mongoose;




