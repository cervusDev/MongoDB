const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.post('/register', async (req, res)=> {
  const {email} = req.body;

  try {
    if(await User.findOne({email})){
      res.status(400).send({error: 'User alredy exists'})
    }
    
    const user = await User.create(req.body)
    user.
    return res.send({user});

  } catch (err) {
    return res.status(400).send({ error: 'Registration failed'});
  };
});

module.exports = server => server.use('/auth', router);
