const express = require('express');
const Product = require('../../models/Schemas/ProductSchema');

const router = express.Router();

// Assuming you have a Product model

// POST request to add a new product
router.post('/addProduct', async (req, res) => {
   try {
      const { name, price, description , image } = req.body;

      // Create a new product
      const newProduct = new Product({
         name,
         price,
         description,
         image
      });

      // Save the product to the database
      await newProduct.save();

      res.status(201).json({ message: 'Product added successfully', product: newProduct });
   } catch (error) {
      res.status(500).json({ message: 'Server error', error });
   }
});

// get all products
router.get('/products', async (req, res) => {
   try {
      const products = await Product.find();
      res.status(200).json({ products });
   } catch (error) {
      res.status(500).json({ message: 'Server error', error });
   }
});

module.exports = router;