import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, decreaseQuantity, fetchCart } from '../redux/features/cart/cartSlice';
import toast from 'react-hot-toast';
import client from '../lib/axios';
import { FaShoppingCart, FaMinus, FaPlus, FaTimes } from 'react-icons/fa';

const Store = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cartOpen, setCartOpen] = useState(false);
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart.cartItems || []);
    const token = localStorage.getItem('authToken');

    // Fetch Products from the backend API
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await client.get('product/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    // Fetch Cart from backend when token is available (only once on mount)
    useEffect(() => {
        if (token) {
            dispatch(fetchCart(token)); // Dispatch action to fetch cart only once when token changes
        }
    }, [token, dispatch]);

    const handleAddToCart = async (product) => {
        dispatch(fetchCart(token));
        if (!token) {
            toast.error('Please log in to add items to the cart.');
            return;
        }

        try {
            // Dispatch action to add to cart (doesn't require refetching cart)
            dispatch(fetchCart(token));
            dispatch(addToCart({ productId: product._id, quantity: 1, token }));
            dispatch(fetchCart(token));
            toast.success(`${product.name} added to cart!`);
        } catch (error) {
            toast.error('Failed to add item to cart');
        }
    };

    const handleDecreaseQuantity = async (productId) => {
        dispatch(fetchCart(token));
        const product = cart.find(item => item.productId._id === productId);
        if (product && product.quantity > 1) {
            try {
                // Dispatch action to decrease quantity by 1
                dispatch(fetchCart(token));
                dispatch(decreaseQuantity({ productId, quantity: -1, token }));
                dispatch(fetchCart(token));
                toast.success('Quantity updated!');
            } catch (error) {
                toast.error('Failed to update quantity');
            }
        } else {
            toast.error('Cannot decrease quantity below 1');
        }
    };

    const handleRemoveFromCart = async (productId) => {
        dispatch(fetchCart(token));
        try {
            // Dispatch action to remove item from cart
            dispatch(fetchCart(token));
            dispatch(removeFromCart({ productId, token }));
            dispatch(fetchCart(token));
            toast.success('Item removed from cart!');
        } catch (error) {
            toast.error('Failed to remove item from cart');
        }
    };

    const totalPrice = cart.reduce((acc, item) => acc + item.productId.price * item.quantity, 0);

    return (
        <div className="container mx-auto p-4 mt-28 relative">
            {loading && <div className="text-center text-lg font-semibold">Loading products...</div>}

            <div className="fixed top-6 right-6 z-50">
                <button onClick={() => setCartOpen(true)} className="relative">
                    <FaShoppingCart className="w-8 h-8 text-gray-800" />
                    {cart.length > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                            {cart.length}
                        </span>
                    )}
                </button>
            </div>

            {/* Cart Sidebar */}
            <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transition-transform duration-300 z-[100] ${cartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="p-4 h-full flex flex-col">
                    <button onClick={() => setCartOpen(false)} className="absolute top-2 right-2 text-gray-600">
                        <FaTimes size={20} />
                    </button>
                    <h2 className="text-lg font-semibold">Shopping Cart</h2>
                    <div className="flex-grow overflow-y-auto mt-4">
                        {cart.length > 0 ? (
                            <ul>
                                {cart.map((item) => (
                                    <li key={item._id} className="flex justify-between items-center my-2 border-b pb-2">
                                        <div className="flex items-center gap-2">
                                            <img src={item.productId.image} alt={item.productId.name} className="w-12 h-12 object-cover rounded" />
                                            <div>
                                                <p>{item.productId.name}</p>
                                                <p className="text-sm text-gray-600">₹{item.productId.price} x {item.quantity}</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <button onClick={() => handleDecreaseQuantity(item.productId._id)} className="bg-gray-300 p-2 rounded">
                                                <FaMinus />
                                            </button>
                                            <button onClick={() => handleAddToCart(item.productId)} className="bg-gray-300 p-2 rounded">
                                                <FaPlus />
                                            </button>
                                            <button onClick={() => handleRemoveFromCart(item.productId._id)} className="bg-red-500 text-white p-2 rounded">
                                                <FaTimes />
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-sm text-gray-500 text-center">Cart is empty</p>
                        )}
                    </div>
                    <div className="mt-4 text-right font-semibold border-t pt-2">Total: ₹{totalPrice}</div>
                </div>
            </div>

            {/* Products List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div key={product._id} className="border rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">{product.name}</h3>
                            <p className="text-sm text-gray-600">{product.description}</p>
                            <p className="mt-2 text-xl font-bold">₹{product.price}</p>
                            <button onClick={() => handleAddToCart(product)} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-full w-full hover:bg-blue-600 transition-colors">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Store;

