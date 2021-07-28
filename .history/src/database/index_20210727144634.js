const mongoose = require('mongoose');

// userNewUrlParser:  Mongoose usa o novo sistema de url
//useUnifiedTopology:  Sistema de monitoramento do banco de dados
const params = {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  useCreateIndex: true
}
mongoose.connect('mongodb://localhost:27017/noderest', params);

mongoose.Promise = global.Promise;

module.exports = mongoose;




