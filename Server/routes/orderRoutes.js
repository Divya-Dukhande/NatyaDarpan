const express = require('express');
const { getUserOrders } = require('../controllers/orderController');

const router = express.Router();

// Get orders for a specific user
router.get('/user-orders/:userId', getUserOrders);

module.exports = router;
