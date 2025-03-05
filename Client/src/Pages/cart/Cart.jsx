import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decreaseQuantity, removeFromCart, clearCart } from "../redux/cartSlice";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";

const Cart = () => {
    const dispatch = useDispatch();
    const { cartItems, totalPrice } = useSelector((state) => state.cart);

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>

            {cartItems.length === 0 ? (
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
                                <button onClick={() => dispatch(decreaseQuantity(item._id))}>
                                    <FaMinus />
                                </button>
                                <span>{item.quantity}</span>
                                <button onClick={() => dispatch(addToCart(item))}>
                                    <FaPlus />
                                </button>
                                <button onClick={() => dispatch(removeFromCart(item._id))}>
                                    <FaTrash className="text-red-500" />
                                </button>
                            </div>
                        </div>
                    ))}

                    <h3 className="text-lg font-bold mt-4">Total: ₹{totalPrice}</h3>
                    <button className="bg-red-500 text-white p-2 mt-2" onClick={() => dispatch(clearCart())}>
                        Clear Cart
                    </button>
                </div>
            )}
        </div>
    );
};

export default Cart;
