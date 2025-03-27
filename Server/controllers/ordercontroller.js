import Order from '../models/Order.js';

// ✅ Get user-specific orders
export const getUserOrders = async (req, res) => {
    try {
        const { userId } = req.params;
        const orders = await Order.find({ user: userId }).populate('cart.productId');

        if (!orders.length) {
            return res.status(404).json({ message: 'No orders found.' });
        }

        res.json(orders);
    } catch (error) {
        console.error("Error fetching orders:", error);
        res.status(500).json({ message: 'Server error' });
    }
};
