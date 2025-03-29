const express = require('express');
const router = express.Router();
const Stripe = require('stripe');
const stripe = Stripe('sk_test_51R808NRZIiJas0mAs8HEogNCmT5u1MjD1QxhrN79jlm1JNrTdMY1GOekgUDZy2syN6nI1iDYs6EL4IoPJ2eoLH0X00Was6UlS5'); 

router.post('/create-checkout-session', async (req, res) => {
    try {
        const { cart, userId } = req.body;
        const lineItems = cart.map(item => ({
            price_data: {
                currency: 'inr',
                product_data: { name: item.productId.name },
                unit_amount: item.productId.price * 100,
            },
            quantity: item.quantity,
        }));

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: lineItems,
            mode: 'payment',
            success_url: 'http://localhost:5173/success',
            cancel_url: 'http://localhost:5173/cancel',
        });

        res.json({ id: session.id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
