const Order = require("../models/orderModel");
const Address = require("../models/Address");

// Create Order after payment success
exports.createOrder = async (req, res) => {
    try {
        const { cart } = req.body;

        // Get selected address for user
        const addressDoc = await Address.findOne({ userId: req.user._id });
        const selectedAddress = addressDoc?.selectedAddress;

        if (!selectedAddress) {
            return res.status(400).json({ message: "No address selected" });
        }

        const orderItems = cart.map(item => ({
            product: item.productId._id,
            quantity: item.quantity,
        }));

        const newOrder = await Order.create({
            user: req.user._id,
            orderItems,
            shippingAddress: selectedAddress,
        });

        res.status(201).json(newOrder);
    } catch (error) {
        res.status(500).json({ message: "Error creating order", error });
    }
};
