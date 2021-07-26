const mongoose = require('mongoose');

// userNewUrlParser:  Mongoose usa o novo sistema de url
//useUnifiedTopology: 

mongoose.connect('mongodb://localhost:27017/noderest',
{useNewUrlParser: true, useUnifiedTopology: true});

mongoose.Promise = global.Promise;

module.exports = mongoose;



