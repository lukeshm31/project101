const express = require('express');
const User = require('../models/users'); // Assuming your model is in a 'models' directory

const usersRouter = express.Router();

// Route to fetch all users
usersRouter.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

// Route to fetch a specific user by ID
usersRouter.get('/:id', async (req, res) => {
  try {
    const user = await User.findOne({"userid":req.params.id})
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user....' });
  }
});

module.exports = usersRouter;