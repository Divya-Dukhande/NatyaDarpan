const Cart = require('../models/Cart');
const Product = require('../models/Product');

// Get user's cart
const getCart = async (req, res) => {
    const userId = req.user;

    try {
        const cart = await Cart.findOne({ userId }).populate('items.productId', 'name price image description');
        res.status(200).json(cart || { items: [] });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching cart', error });
    }
};


// Add product to cart
const addToCart = async (req, res) => {
    const userId = req.user; // The userId is available from the authenticate middleware
    const { productId, quantity } = req.body;

    try {
        const product = await Product.findById(productId);
        if (!product) return res.status(404).json({ message: 'Product not found' });

        let cart = await Cart.findOne({ userId });

        if (!cart) {
            cart = new Cart({ userId, items: [{ productId, quantity }] });
        } else {
            const itemIndex = cart.items.findIndex((item) => item.productId.toString() === productId);

            if (itemIndex > -1) {
                cart.items[itemIndex].quantity += quantity;
            } else {
                cart.items.push({ productId, quantity });
            }
        }

        await cart.save();
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: 'Error adding to cart', error });
    }
};

// Remove product from cart
const removeFromCart = async (req, res) => {
    const userId = req.user;
    const { productId } = req.params;

    try {
        const cart = await Cart.findOne({ userId });
        if (!cart) return res.status(404).json({ message: 'Cart not found' });

        cart.items = cart.items.filter(item => item.productId.toString() !== productId);
        await cart.save();
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: 'Error removing from cart', error });
    }
};

// Update product quantity in cart
const updateCartQuantity = async (req, res) => {
    const userId = req.user;  // The userId is available from the authenticate middleware
    const { productId } = req.params;
    const { quantity } = req.body;

    try {
        const cart = await Cart.findOne({ userId });
        if (!cart) return res.status(404).json({ message: 'Cart not found' });

        const item = cart.items.find(item => item.productId.toString() === productId);
        if (!item) return res.status(404).json({ message: 'Item not found in cart' });

        // Prevent quantity from going below 1
        if (item.quantity + quantity < 1) {
            return res.status(400).json({ message: 'Quantity cannot be less than 1' });
        }

        item.quantity += quantity;
        await cart.save();

        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: 'Error updating cart', error });
    }
};


module.exports = {
    getCart,
    addToCart,
    removeFromCart,
    updateCartQuantity,
};
