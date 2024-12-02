const express = require('express');
const Product = require('../models/Schemas/ProductSchema');

const router = express.Router();

// GET product details by ID
router.get('/products/:id', async (req, res) => {
   try {
      const productId = req.params.id;
      const product = await Product.findById(productId);

      if (!product) {
         return res.status(404).json({ message: 'Product not found' });
      }

      res.json({ product });
   } catch (error) {
      console.error('Error fetching product:', error);
      res.status(500).json({ message: 'Server error' });
   }
});

module.exports = router;