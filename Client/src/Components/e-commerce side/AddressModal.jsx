import React, { useState, useEffect } from "react";
import { FaCheck, FaTimes } from "react-icons/fa"; // React Icons
import { useDispatch, useSelector } from "react-redux";
import { setSelectedAddress } from "../../redux/E-commerce/address/addressSlice"; // Redux action

const AddressModal = ({ isOpen, onClose, onConfirm }) => {
    const dispatch = useDispatch();
    const { addresses } = useSelector((state) => state.address);

    // Local state for address input fields
    const [address, setAddress] = useState({
        street: "",
        city: "",
        state: "",
        zip: "",
        country: "",
        phone: "",
    });

    // Reset the address form when modal is opened
    useEffect(() => {
        if (isOpen) {
            setAddress({
                street: "",
                city: "",
                state: "",
                zip: "",
                country: "",
                phone: "",
            });
        }
    }, [isOpen]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddress({
            ...address,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        if (Object.values(address).includes("")) {
            alert("Please fill in all fields");
            return;
        }

        // Dispatch the selected address to Redux store
        dispatch(setSelectedAddress(address));

        // Call onConfirm to pass the selected address to the parent (Store component)
        onConfirm(address);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
                <h2 className="text-2xl font-semibold mb-4">Enter Address</h2>
                <form className="space-y-4">
                    {/* Render address input fields */}
                    {Object.keys(address).map((key) => (
                        <div key={key} className="form-group">
                            <label className="block text-sm font-medium text-gray-700">{key}</label>
                            <input
                                type="text"
                                name={key}
                                value={address[key]}
                                onChange={handleChange}
                                placeholder={key}
                                className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                    ))}
                </form>

                {/* Action Buttons */}
                <div className="mt-6 flex justify-between">
                    <button
                        onClick={handleSubmit}
                        className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        <FaCheck className="text-white" />
                        <span>Confirm</span>
                    </button>
                    <button
                        onClick={onClose}
                        className="flex items-center space-x-2 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    >
                        <FaTimes className="text-white" />
                        <span>Cancel</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddressModal;
