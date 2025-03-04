import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, clearCart } from "../redux/features/cart/cartSlice";
import { FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";

const Cart = () => {
    const cart = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();

    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

    return (
        <div className="p-4 mt-20">
            <h2 className="text-2xl font-bold">Shopping Cart</h2>
            
            {cart.length > 0 ? (
                <>
                    <ul>
                        {cart.map((item) => (
                            <li key={item._id} className="flex items-center gap-4 border-b p-2">
                                <img src={item.image} alt={item.name} className="w-16 h-16" />
                                <div className="flex-1">
                                    <p className="font-semibold">{item.name}</p>
                                    <p className="text-gray-500">₹{item.price}</p>
                                </div>
                                <button 
                                    onClick={() => dispatch(removeFromCart(item._id))}
                                    className="text-red-500"
                                >
                                    <FaTrash />
                                </button>
                            </li>
                        ))}
                    </ul>
                    <h3 className="text-xl font-semibold mt-4">Total: ₹{totalPrice}</h3>
                    <button
                        onClick={() => dispatch(clearCart())}
                        className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg"
                    >
                        Clear Cart
                    </button>
                </>
            ) : (
                <p className="text-gray-500 mt-4">Your cart is empty.</p>
            )}
        </div>
    );
};

export default Cart;
