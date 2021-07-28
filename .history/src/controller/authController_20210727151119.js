const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.post('/register', async (req, res)=> {
  try {
    await User.Find

    const user = await User.create(req.body)
    return res.send({user});

  } catch (err) {
    return res.status(400).send({ error: 'Registration failed'});
  };
});

module.exports = server => server.use('/auth', router);