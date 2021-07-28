const mongoose  = require("../database/index");
const bscrypt = require('bcryptjs');
const increment = require('mongoose-auto-increment');

increment.initialize(mongoose);

const UserSchema = new mongoose.Schema({
  _id:{  
    type: mongoose.Schema.Types.ObjectId
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String, 
    required: true,
    unique: true,
    lowercase: true,
  }, 
  password: {
    type: String, 
    required: true,
    select: false,
  },
  createAt: {
    type: Date,
    required: true,
    default: Date.now,
  }
});


UserSchema.pre('save', async function(){
  const hash = await bscrypt.hash(this.password, 10);
  this.password = hash;

});

UserSchema.plugin(increment.plugin, {
  model: 'User', field: '_id',
  startAt: 1,
  incrementBy: 1
});

const User = mongoose.model('User', UserSchema)

module.exports = User;


