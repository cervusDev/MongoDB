const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.post('/register', async (req, res)=> {
  const {email} = req.body;

  try {
    if(await User.findOne({email}))
      res.status(400).send({error: 'User alredy exists'})
    
    
    const user = await User.create(req.body);

    user.password = undefined;

    return res.send({user});

  } catch  {
    return res.status(400).send({ error: 'Registration failed'});
  };
});

router.post('/authenticate', async(req,res) => {
  const {email, password} = req.body;

  const user = await User.findOne({ email }).select("+password");
  
})

module.exports = server => server.use('/auth', router);
