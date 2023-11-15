const express = require('express');
const router = express.Router();
const UserModel = require('../models/UserModel');

// Create as new user
router.get('/', async (req, res) => {
    try {
      // Fetch all user records from the database
      const users = await UserModel.findAll();
  
      // Respond with the list of users as JSON
      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

// POST route for user registration
router.post('/', async (req, res) => {
  try {
    // Extract user data from the request body
    const { username, password } = req.body;

    const user = await UserModel.create({
      username,
      password
    })
    

    // Respond with a success message or user data
    res.status(201).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
