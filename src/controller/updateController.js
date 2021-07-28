const express = require('express');

const User = require('../models/user');


const router = express.Router();

router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const { name, email, password } = req.body;

  try {

    const user = await User.findByIdAndUpdate(id, req.body);

    if (!user) {
      return res.status(404).send({ error: "user not found" });
    }

    if (name || email || password) {
      user.name = name;
      user.email = email;
      user.password = password;
    };

    const newUser = await user.save();

    res.send({
      message: 'sucess',
      user
    })
  } catch  {
    return res.status(500).send({ error: "Empty body requisition" })
  };

});

module.exports = server => server.use('/update', router);