import React, { useEffect, useState } from 'react';
import client from '../lib/axios';

const Store = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState([]);
    const token = localStorage.getItem("authToken");

    // Fetch products from the backend
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await client.get('/admin/products', {
                    headers: { Authorization: `Bearer ${token}` },
                }); // Your API endpoint to fetch products
                setProducts(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching products', error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    // Add product to the cart
    const handleAddToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
        alert(`${product.name} has been added to your cart!`);
    };

    return (
        <div className="container mx-auto p-4 mt-28">
            {/* Loading Spinner */}
            {loading && <div className="text-center">Loading...</div>}

            {/* Product Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div
                        key={product._id}
                        className="border rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                    >
                        {/* Product Image */}
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            {/* Product Name and Price */}
                            <h3 className="text-lg font-semibold">{product.name}</h3>
                            <p className="text-sm text-gray-600">{product.description}</p>
                            <p className="mt-2 text-xl font-bold">₹{product.price}</p>

                            {/* Add to Cart Button */}
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

            {/* Cart (For testing purposes, you can display cart items) */}
            <div className="mt-10">
                <h2 className="text-xl font-semibold mb-4">Cart</h2>
                {cart.length > 0 ? (
                    <ul>
                        {cart.map((item, index) => (
                            <li key={index} className="mb-2">
                                {item.name} - ₹{item.price}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No items in cart</p>
                )}
            </div>
        </div>
    );
};

export default Store;