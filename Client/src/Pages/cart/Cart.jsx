import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decreaseQuantity, removeFromCart, clearCart, fetchCart } from "../../redux/features/cart/cartSlice";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";  // For displaying success/error messages

const Cart = () => {
    const dispatch = useDispatch();
    const { cartItems, totalPrice, loading } = useSelector((state) => state.cart);
    const token = localStorage.getItem("authToken");
    console.log(cartItems)
    // Fetch cart on component mount
    useEffect(() => {
        if (token) {
            dispatch(fetchCart(token));
        }
    }, [dispatch, token]);

    const handleAddToCart = async (item) => {
        try {
            await dispatch(addToCart({ productId: item._id, quantity: 1, token }));
            toast.success(`${item.name} added to cart!`);
        } catch (error) {
            toast.error("Failed to add item to cart");
        }
    };

    const handleDecreaseQuantity = async (itemId) => {
        try {
            await dispatch(decreaseQuantity({ productId: itemId, token }));
            toast.info("Quantity updated!");
        } catch (error) {
            toast.error("Failed to update quantity");
        }
    };

    const handleRemoveFromCart = async (itemId) => {
        try {
            await dispatch(removeFromCart({ productId: itemId, token }));
            toast.error("Item removed from cart!");
        } catch (error) {
            toast.error("Failed to remove item from cart");
        }
    };

    const handleClearCart = async () => {
        try {
            await dispatch(clearCart({ token }));
            toast.error("Cart cleared!");
        } catch (error) {
            toast.error("Failed to clear cart");
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>

            {loading ? (
    <p>Loading cart...</p>
) : cartItems.length === 0 ? (
    <p>Cart is empty!</p>
) : (
    <div>
        {cartItems.map((item) => (
            <div key={item._id} className="flex justify-between items-center p-2 border-b">
                <div>
                    <h3>{item.name}</h3>
                    <p>₹{item.price} x {item.quantity}</p>
                </div>
                <div className="flex gap-2">
                    <button onClick={() => handleDecreaseQuantity(item._id)}>
                        <FaMinus />
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleAddToCart(item)}>
                        <FaPlus />
                    </button>
                    <button onClick={() => handleRemoveFromCart(item._id)}>
                        <FaTrash className="text-red-500" />
                    </button>
                </div>
            </div>
        ))}

        <h3 className="text-lg font-bold mt-4">Total: ₹{totalPrice}</h3>
        <button className="bg-red-500 text-white p-2 mt-2" onClick={handleClearCart}>
            Clear Cart
        </button>
    </div>
)}

        </div>
    );
};

export default Cart;
