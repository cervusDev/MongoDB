const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.post('/register', async (req, res)=> {
  try {
    const user = await User.createIndexes(req.body)
    return res.send({user});

  } catch (err) {
    return res.status(400).send({ error: 'Registration failed'});
  };
});

module.exports = server => server.use('/auth', router);