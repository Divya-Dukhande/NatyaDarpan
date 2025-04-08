const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

// ✅ Create a new order (after successful Stripe payment)
router.post("/", async (req, res) => {
    try {
        const { user, items, address, totalPrice } = req.body;

        const newOrder = new Order({
            user,
            items,
            address,
            totalPrice,
            status: "Pending", // default status
        });

        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (err) {
        res.status(500).json({ message: "Failed to create order" });
    }
});

// ✅ Get orders for a specific user
router.get("/user/:userId", async (req, res) => {
    try {
        const orders = await Order.find({ user: req.params.userId }).sort({ createdAt: -1 });
        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: "Failed to fetch orders" });
    }
});

module.exports = router;
