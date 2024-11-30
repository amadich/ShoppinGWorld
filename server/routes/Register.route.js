const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Usermodel = require("../models/Schemas/UsersSchema");

router.post("/register", async (req, res) => {
   const { username, email, password } = req.body;
   try {
      const user = await Usermodel.findOne({ email });
      if (user) {
         return res.json({ msg: "User already exists" });
      }
      const newUser = new Usermodel({
         username,
         email,
         password,
         datecreate: new Date().toISOString()
      });
      const salt = await bcrypt.genSalt(10);
      newUser.password = await bcrypt.hash(password, salt);
      await newUser.save();
      const payload = {
         user: {
            id: newUser.id,
            username: newUser.username,
            email: newUser.email,
            role: newUser.role
         }
      };
      jwt.sign(payload, process.env.SECRET, { expiresIn: 3600 }, (err, token) => {
         if (err) throw err;
         res.json({ token });
      });
   } catch (error) {
      console.error(error.message);
      res.status(500).send("Server error");
   }
}
);
// Login 
router.post("/login", async (req, res) => {
   const { email, password } = req.body;
   try {
      const user = await Usermodel.findOne({ email });
      if (!user) {
         return res.json({ msg: "Invalid credentials" });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
         return res.json({ msg: "Invalid credentials" });
      }
      const payload = {
         user: {
            id: user.id,
            username: user.username,
            email: user.email,
            role: user.role
         }
      };
      jwt.sign(payload, process.env.SECRET, { expiresIn: 3600 }, (err, token) => {
         if (err) throw err;
         res.json({ token });
      });
   } catch (error) {
      console.error(error.message);
      res.status(500).send("Server error");
   }
}
);

module.exports = router;