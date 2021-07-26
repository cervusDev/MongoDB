const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.post('/register', (req, res)=> {
  try {
    const user = User.create(req.body)
    return res.send({user})
  } ca
})