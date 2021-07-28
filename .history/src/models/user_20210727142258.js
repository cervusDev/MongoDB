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
  createdAt: {
    date: Date,
    default: Date
  }
});

UserSchema.pre('save', async (next) => {
  const hash = await bscrypt.hash(this.password, 10)
  this.password = hash;
})
const User = mongoose.model('User', UserSchema)

module.exports = User;


