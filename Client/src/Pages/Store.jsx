import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/features/cart/cartSlice';  
import toast from 'react-hot-toast';
import client from '../lib/axios';

const Store = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();  

    // Ensure cart is always an array
    const cart = useSelector((state) => state.cart.cart || []);  

    const token = localStorage.getItem("authToken");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await client.get('/admin/products', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setProducts(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching products', error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));  
        toast.success(`${product.name} added to cart!`);
    };

    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId));  
        toast.error('Item removed from cart!');
    };

    // Safely calculate total price
    const totalPrice = cart.length > 0 ? cart.reduce((acc, item) => acc + item.price, 0) : 0;

    return (
        <div className="container mx-auto p-4 mt-28">
            {loading && <div className="text-center">Loading...</div>}

            {/* Products Display */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div
                        key={product._id}
                        className="border rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">{product.name}</h3>
                            <p className="text-sm text-gray-600">{product.description}</p>
                            <p className="mt-2 text-xl font-bold">₹{product.price}</p>

                            <button
                                onClick={() => handleAddToCart(product)}
                                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-full w-full hover:bg-blue-600 transition-colors"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Cart Section */}
            <div className="mt-10">
                <h2 className="text-xl font-semibold mb-4">Cart</h2>
                {cart.length > 0 ? (
                    <div>
                        <ul>
                            {cart.map((item) => (
                                <li key={item._id} className="mb-2 flex justify-between items-center border-b pb-2">
                                    <span>{item.name} - ₹{item.price}</span>
                                    <button 
                                        onClick={() => handleRemoveFromCart(item._id)}
                                        className="bg-red-500 text-white py-1 px-3 rounded-full hover:bg-red-600"
                                    >
                                        Remove
                                    </button>
                                </li>
                            ))}
                        </ul>
                        {/* total price */}
                        <div className="mt-4 text-lg font-semibold">
                            Total Price: ₹{totalPrice}
                        </div>
                    </div>
                ) : (
                    <p>No items in cart</p>
                )}
            </div>
        </div>
    );
};

export default Store;
