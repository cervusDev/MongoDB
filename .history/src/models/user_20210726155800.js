const mongoose = require('mongoose')
const {Schema} = mongoose

const UserSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String, 
    unique: true,
    required: true,
    lowercase: true,7
  }
});