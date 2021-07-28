const mongoose  = require("../database/index");
const bscrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String, 
    unique: true,
    required: true,
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


UserSchema.prev('save', async function(next){
  const hash = await bscrypt.hash('star', 10);
})
const User = mongoose.model('User', UserSchema)

module.exports = User;


