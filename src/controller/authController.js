const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user'); 
const auth = require('../config/auth.json');

const router = express.Router();

function generateToken(params = {}) {
  const token = jwt.sign(params, auth.secret, {
    expiresIn: 86400,
  });

  return token;
}

router.post('/register', async (req, res)=> {
  const { email } = req.body;

  try {

    if (await User.findOne({ email })) {
      res.status(400).send({ error: 'User alredy exists' });
    };
    
    const user = await User.create(req.body);

    user.password = undefined;

    return res.send({ 
      user,
      token: generateToken({ id: user.id }),
     });

  } catch  {
    return res.status(400).send({ error: 'Registration failed'});
  };
  
});

router.post('/authenticate', async(req,res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return res.status(400).send({ error: "user not found" });
  };

  if (!await bcrypt.compare(password, user.password)) {
    return res.status(400).send({ error: "Invalid Password" });
  };

  user.password = undefined;

  res.send({ 
    user,
    token: generateToken({ id: user.id }),
   });

});

module.exports = server => server.use('/auth', router);
