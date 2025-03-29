// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addToCart, removeFromCart, decreaseQuantity, fetchCart } from '../redux/E-commerce/cart/cartSlice';
// import { selectUser } from "../redux/features/auth/authSlice"
// import toast from 'react-hot-toast';
// import client from '../lib/axios';
// import { FaShoppingCart, FaMinus, FaPlus, FaTimes } from 'react-icons/fa';

// const Store = () => {
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [cartOpen, setCartOpen] = useState(false);
//     const [isAddressModalOpen, setIsAddressModalOpen] = useState(false); // State for Address Modal
//     const [addressForm, setAddressForm] = useState({
//         street: '',
//         city: '',
//         state: '',
//         zip: '',
//         country: '',
//         phone: ''
//     }); // Local state for address form


//     const dispatch = useDispatch();
//     const cart = useSelector((state) => state.cart.cartItems || []);
//     const user = useSelector(selectUser);
//     const token = localStorage.getItem('authToken');

//     // Fetch Products
//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 const response = await client.get('product/products');
//                 setProducts(response.data);
//             } catch (error) {
//                 console.error('Error fetching products:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchProducts();
//     }, []);

//     // Fetch Cart when token is available
//     useEffect(() => {
//         if (token) {
//             dispatch(fetchCart(token));
//         }
//     }, [token, dispatch]);

//     const handleAddToCart = (product) => {
//         if (!token) {
//             toast.error('Please log in to add items to the cart.');
//             return;
//         }
//         dispatch(addToCart({ productId: product._id, quantity: 1, token }));
//         toast.success(`${product.name} added to cart!`);
//     };

//     const handleDecreaseQuantity = (productId) => {
//         const product = cart.find(item => item.productId._id === productId);
//         if (product && product.quantity > 1) {
//             dispatch(decreaseQuantity({ productId, quantity: -1, token }));
//             toast.success('Quantity updated!');
//         } else {
//             toast.error('Cannot decrease quantity below 1');
//         }
//     };

//     const handleRemoveFromCart = (productId) => {
//         dispatch(removeFromCart({ productId, token }));
//         toast.success('Item removed from cart!');
//     };

//     const handleBuyNow = async () => {
//         if (!token) {
//             toast.error('Please log in to proceed with checkout.');
//             return;
//         }

//         if (Object.values(addressForm).includes('')) {
//             toast.error('Please fill in all address fields!');
//             return;
//         }

//         try {
//             const response = await client.post('address/add', { userId: user._id, ...addressForm, cart });
//             if (response.status === 200) {
//                 toast.success('Order placed successfully!');
//                 dispatch(fetchCart(token)); // Refresh the cart
//             }
//         } catch (error) {
//             toast.error('Failed to place order.');
//         }
//     };

//     const totalPrice = cart.reduce((acc, item) => acc + item.productId.price * item.quantity, 0);

//     const handleAddressChange = (e) => {
//         const { name, value } = e.target;
//         setAddressForm({
//             ...addressForm,
//             [name]: value
//         });
//     };

//     return (
//         <div className="container mx-auto p-4 mt-28 relative">
//             {loading && <div className="text-center text-lg font-semibold">Loading products...</div>}

//             <div className="fixed top-6 right-6 z-50">
//                 <button onClick={() => setCartOpen(true)} className="relative">
//                     <FaShoppingCart className="w-8 h-8 text-gray-800" />
//                     {cart.length > 0 && (
//                         <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
//                             {cart.length}
//                         </span>
//                     )}
//                 </button>
//             </div>

//             {/* Cart Sidebar */}
//             <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transition-transform duration-300 z-[100] ${cartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
//                 <div className="p-4 h-full flex flex-col">
//                     <button onClick={() => setCartOpen(false)} className="absolute top-2 right-2 text-gray-600">
//                         <FaTimes size={20} />
//                     </button>
//                     <h2 className="text-lg font-semibold">Shopping Cart</h2>
//                     <div className="flex-grow overflow-y-auto mt-4">
//                         {cart.length > 0 ? (
//                             <ul>
//                                 {cart.map((item) => (
//                                     <li key={item._id} className="flex justify-between items-center my-2 border-b pb-2">
//                                         <div className="flex items-center gap-2">
//                                             <img src={item.productId.image} alt={item.productId.name} className="w-12 h-12 object-cover rounded" />
//                                             <div>
//                                                 <p>{item.productId.name}</p>
//                                                 <p className="text-sm text-gray-600">₹{item.productId.price} x {item.quantity}</p>
//                                             </div>
//                                         </div>
//                                         <div className="flex gap-2">
//                                             <button onClick={() => handleDecreaseQuantity(item.productId._id)} className="bg-gray-300 p-2 rounded">
//                                                 <FaMinus />
//                                             </button>
//                                             <button onClick={() => handleAddToCart(item.productId)} className="bg-gray-300 p-2 rounded">
//                                                 <FaPlus />
//                                             </button>
//                                             <button onClick={() => handleRemoveFromCart(item.productId._id)} className="bg-red-500 text-white p-2 rounded">
//                                                 <FaTimes />
//                                             </button>
//                                         </div>
//                                     </li>
//                                 ))}
//                             </ul>
//                         ) : (
//                             <p className="text-sm text-gray-500 text-center">Cart is empty</p>
//                         )}
//                     </div>
//                     {cart.length > 0 && (
//                         <div className="mt-4 text-right font-semibold border-t pt-2">
//                             <p>Total: ₹{totalPrice}</p>
//                             <button onClick={() => setIsAddressModalOpen(true)} className="mt-2 bg-green-500 text-white py-2 px-4 rounded-full w-full hover:bg-green-600 transition-colors">
//                                 Buy Now
//                             </button>
//                         </div>
//                     )}
//                 </div>
//             </div>

//             {/* Products List */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                 {products.map((product) => (
//                     <div key={product._id} className="border rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
//                         <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
//                         <div className="p-4">
//                             <h3 className="text-lg font-semibold">{product.name}</h3>
//                             <p className="text-sm text-gray-600">{product.description}</p>
//                             <p className="mt-2 text-xl font-bold">₹{product.price}</p>
//                             <button onClick={() => handleAddToCart(product)} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-full w-full hover:bg-blue-600 transition-colors">
//                                 Add to Cart
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* Address Form Modal */}
//             {isAddressModalOpen && (
//                 <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
//                     <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
//                         <h2 className="text-2xl font-semibold mb-4">Enter Address</h2>
//                         <form className="space-y-4">
//                             {/* Render address input fields */}
//                             {Object.keys(addressForm).map((key) => (
//                                 <div key={key} className="form-group">
//                                     <label className="block text-sm font-medium text-gray-700">{key}</label>
//                                     <input
//                                         type="text"
//                                         name={key}
//                                         value={addressForm[key]}
//                                         onChange={handleAddressChange}
//                                         placeholder={key}
//                                         className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                                     />
//                                 </div>
//                             ))}
//                         </form>

//                         {/* Action Buttons */}
//                         <div className="mt-6 flex justify-between">
//                             <button
//                                 onClick={handleBuyNow}
//                                 className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                             >
//                                 Confirm
//                             </button>
//                             <button
//                                 onClick={() => setIsAddressModalOpen(false)}
//                                 className="flex items-center space-x-2 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
//                             >
//                                 Cancel
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Store;


import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, decreaseQuantity, fetchCart } from '../redux/E-commerce/cart/cartSlice';
import { selectUser } from "../redux/features/auth/authSlice";
import toast from 'react-hot-toast';
import client from '../lib/axios';
import { FaShoppingCart, FaMinus, FaPlus, FaTimes } from 'react-icons/fa';
import { loadStripe } from "@stripe/stripe-js";

const Store = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cartOpen, setCartOpen] = useState(false);
    const [isAddressModalOpen, setIsAddressModalOpen] = useState(false); // State for Address Modal
    const [addressForm, setAddressForm] = useState({
        street: '',
        city: '',
        state: '',
        zip: '',
        country: '',
        phone: ''
    }); // Local state for address form
    const [searchQuery, setSearchQuery] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [selectedPriceRange, setSelectedPriceRange] = useState('');

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cartItems || []);
    const user = useSelector(selectUser);
    const token = localStorage.getItem('authToken');

    // Fetch Products
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

    // Fetch Cart when token is available
    useEffect(() => {
        if (token) {
            dispatch(fetchCart(token));
        }
    }, [token, dispatch]);

    const handleAddToCart = (product) => {
        if (!token) {
            toast.error('Please log in to add items to the cart.');
            return;
        }
        dispatch(addToCart({ productId: product._id, quantity: 1, token }));
        toast.success(`${product.name} added to cart!`);
    };

    const handleDecreaseQuantity = (productId) => {
        const product = cart.find(item => item.productId._id === productId);
        if (product && product.quantity > 1) {
            dispatch(decreaseQuantity({ productId, quantity: -1, token }));
            toast.success('Quantity updated!');
        } else {
            toast.error('Cannot decrease quantity below 1');
        }
    };

    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart({ productId, token }));
        toast.success('Item removed from cart!');
    };

    const handleBuyNow = async () => {
        if (!token) {
            toast.error('Please log in to proceed with checkout.');
            return;
        }

        if (Object.values(addressForm).includes('')) {
            toast.error('Please fill in all address fields!');
            return;
        }

        try {
            const orderResponse = await client.post('address/add', { userId: user._id, ...addressForm, cart });
            if (orderResponse.status === 200) {
                toast.success('Order placed successfully!');
                dispatch(fetchCart(token)); // Refresh the cart
            }

            const paymentResponse = await client.post('payment/create-checkout-session', {
                userId: user._id,
                cart,
                success_url: window.location.origin + "/success",
                cancel_url: window.location.origin + "/store"  
            });

            const stripe = await loadStripe("pk_test_51R808NRZIiJas0mAbPe3Dl9PJIBlZYyleNSXqy133HUn0gcRVnCXarN2jvReZuZ0gm493ruu9TmnAYSeiTfhitIQ00V39DiujY");
            const { id } = paymentResponse.data;

            const result = await stripe.redirectToCheckout({ sessionId: id });

            if (result.error) {
                toast.error(result.error.message);
            }
        } catch (error) {
            toast.error('Failed to initiate payment or place order.');
        }
    };
    const totalPrice = cart.reduce((acc, item) => acc + item.productId.price * item.quantity, 0);

    const handleAddressChange = (e) => {
        const { name, value } = e.target;
        setAddressForm({
            ...addressForm,
            [name]: value
        });
    };

    const handlePriceChange = (e) => {
        const value = e.target.value;
        setSelectedPriceRange(value);

        switch (value) {
            case "0-500":
                setMinPrice(0);
                setMaxPrice(500);
                break;
            case "500-1000":
                setMinPrice(500);
                setMaxPrice(1000);
                break;
            case "1000-2000":
                setMinPrice(1000);
                setMaxPrice(2000);
                break;
            case "2000-5000":
                setMinPrice(2000);
                setMaxPrice(5000);
                break;
            case "5000-10000":
                setMinPrice(5000);
                setMaxPrice(10000);
                break;
            default:
                setMinPrice('');
                setMaxPrice('');
        }
    };

    const handleClearFilters = () => {
        setSearchQuery('');
        setMinPrice('');
        setMaxPrice('');
        setSelectedPriceRange('');
    };

    // Filtering products based on search query and price range
    const filteredProducts = products.filter((product) => {
        const matchesSearch = product.name?.toLowerCase().includes(searchQuery.toLowerCase().trim());
        const matchesPrice = (!minPrice || product.price >= parseFloat(minPrice)) && (!maxPrice || product.price <= parseFloat(maxPrice));
        return matchesSearch && matchesPrice;
    });

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
                    {cart.length > 0 && (
                        <div className="mt-4 text-right font-semibold border-t pt-2">
                            <p>Total: ₹{totalPrice}</p>
                            <button onClick={() => setIsAddressModalOpen(true)} className="mt-2 bg-green-500 text-white py-2 px-4 rounded-full w-full hover:bg-green-600 transition-colors">
                                Buy Now
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Filters Section */}
            <div className="mb-4 flex flex-wrap gap-4 items-center">
                <input
                    type="text"
                    placeholder="Search product..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="p-2 border border-gray-300 rounded w-64"
                />

                {/* Price Range Dropdown */}
                <select value={selectedPriceRange} onChange={handlePriceChange} className="p-2 border border-gray-300 rounded w-48">
                    <option value="">Select Price Range</option>
                    <option value="0-500">₹0 - ₹500</option>
                    <option value="500-1000">₹500 - ₹1000</option>
                    <option value="1000-2000">₹1000 - ₹2000</option>
                    <option value="2000-5000">₹2000 - ₹5000</option>
                    <option value="5000-10000">₹5000 - ₹10000</option>
                </select>

                <button onClick={handleClearFilters} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                    Clear Filters
                </button>
            </div>

            {/* Products List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                    <div key={product._id} className="border rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                        <img src={product.image} alt={product.name} className="w-full h-56 object-cover" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold">{product.name}</h3>
                            <p className="text-lg text-gray-600">₹{product.price}</p>
                            <button onClick={() => handleAddToCart(product)} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded w-full hover:bg-blue-600 transition-colors">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {/* Address Form Modal */}
            {isAddressModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
                        <h2 className="text-2xl font-semibold mb-4">Enter Address</h2>
                        <form className="space-y-4">
                            {/* Render address input fields */}
                            {Object.keys(addressForm).map((key) => (
                                <div key={key} className="form-group">
                                    <label className="block text-sm font-medium text-gray-700">{key}</label>
                                    <input
                                        type="text"
                                        name={key}
                                        value={addressForm[key]}
                                        onChange={handleAddressChange}
                                        placeholder={key}
                                        className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                </div>
                            ))}
                        </form>

                        {/* Action Buttons */}
                        <div className="mt-6 flex justify-between">
                            <button
                                onClick={handleBuyNow}
                                className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                                Confirm
                            </button>
                            <button
                                onClick={() => setIsAddressModalOpen(false)}
                                className="flex items-center space-x-2 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};


export default Store;
