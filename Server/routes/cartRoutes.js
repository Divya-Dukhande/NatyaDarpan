// routes/cartRoutes.js
const express = require('express');
const router = express.Router();
const authenticate = require('../middlewares/authMiddleware'); // Import the authenticate middleware
const {
    getCart,
    addToCart,
    removeFromCart,
    updateCartQuantity,
} = require('../controllers/cartController'); // Import controller functions

// Get user's cart
router.get('/', authenticate, getCart);

// Add product to cart
router.post('/add', authenticate, addToCart);

// Remove product from cart
router.delete('/delete/:productId', authenticate, removeFromCart);

// Update product quantity in cart
router.patch('/update/:productId', authenticate, updateCartQuantity);

module.exports = router;
