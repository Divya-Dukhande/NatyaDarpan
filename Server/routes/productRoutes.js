// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Create product (admin-only)
router.post('/products', async (req, res) => {
    const { name, description, price, image } = req.body;

    try {
        const newProduct = new Product({ name, description, price, image });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: 'Error creating product', error });
    }
});

// Get all products
router.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products', error });
    }
});

// Get a specific product by ID
router.get('/products/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const product = await Product.findById(id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching product', error });
    }
});

module.exports = router;
