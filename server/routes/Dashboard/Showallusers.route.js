const express = require('express');
const User = require('../../models/Schemas/UsersSchema');

const router = express.Router();

// Assuming you have a User model to fetch users from your database

router.get('/showallusers', async (req, res) => {
   try {
      const users = await User.find({});
      res.json(users);

      
   } catch (error) {
      res.status(500).json({ message: 'Error fetching users', error });
   }
});

module.exports = router;