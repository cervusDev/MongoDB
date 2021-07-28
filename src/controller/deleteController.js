const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.delete('/:id', async (req,res) => {

  const id = req.params.id;

  try {

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).send({ error: 'user not found' });
    };
    
    await user.remove();
    return res.send({ message:"successfully deleted" });

  }catch (err){
    return res.status(500).send({ error: err });
  };

});

module.exports = server => server.use("/delete", router);