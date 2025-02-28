import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, addProduct, deleteProduct } from '../../redux/features/admin/productSlice';
import { FaTrash, FaEdit } from 'react-icons/fa';

const ProductManagement = () => {
    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.products);
    
    const [product, setProduct] = useState({
        name: '',
        price: '',
        description: ''
    });

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addProduct(product));
        setProduct({ name: '', price: '', description: '' });
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-semibold mb-4">Product Management</h2>

            {/* Product Form */}
            <div className="bg-white shadow-md p-4 rounded-lg mb-6">
                <h3 className="text-lg font-semibold mb-2">Add New Product</h3>
                <form onSubmit={handleSubmit} className="space-y-2">
                    <input type="text" name="name" placeholder="Product Name" value={product.name} onChange={handleChange} required className="w-full p-2 border rounded" />
                    <input type="number" name="price" placeholder="Price" value={product.price} onChange={handleChange} required className="w-full p-2 border rounded" />
                    <textarea name="description" placeholder="Description" value={product.description} onChange={handleChange} required className="w-full p-2 border rounded" />
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600">Add Product</button>
                </form>
            </div>

            {/* Product List */}
            <h3 className="text-lg font-semibold mb-2">Product List</h3>
            <ul className="space-y-2">
                {products.map((p) => (
                    <li key={p._id} className="flex justify-between items-center p-3 border rounded shadow-sm">
                        <div>
                            <span className="font-semibold">{p.name} - ₹{p.price}</span>
                            <p className="text-sm text-gray-600">{p.description}</p>
                        </div>
                        <button onClick={() => dispatch(deleteProduct(p._id))} className="bg-red-500 text-white p-2 rounded hover:bg-red-600">
                            <FaTrash />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductManagement;
