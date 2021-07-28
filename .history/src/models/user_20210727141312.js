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
  const hash = bscrypt.hash(this.)
})
const User = mongoose.model('User', UserSchema)

module.exports = User;


