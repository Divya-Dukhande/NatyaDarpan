import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import client from '../lib/axios';
import toast from 'react-hot-toast';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/features/auth/authSlice"; // Assuming logout action exists in your slice

const Navbar = ({ username, isAdmin }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu visibility

  const handleLogout = async () => {
    try {
      await client.delete('/auth/logout'); // Adjust the endpoint as needed
      localStorage.removeItem("authToken")
      dispatch(logout());
      navigate("/login"); // Redirect to login page after logout
      window.location.reload(); // Refresh page after logout
      toast.success("Logout Successfull!")
    } catch (error) {
      toast.error("Logout failed!")
      console.error('Logout failed:', error);
    }
  };

  // Only render the navbar if the user is not an admin
  if (isAdmin) {
    return null; // Return nothing if user is an admin
  }

  return (
    <nav className="w-full fixed top-0 left-0 bg-white/30 backdrop-blur-md shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center">
          <Link to="/">
            <img
              src="/assets/images/NatyaDarpan.png"
              alt="Logo"
              className="h-16 object-contain"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="block lg:hidden"
          onClick={() => setIsOpen(!isOpen)} // Toggle mobile menu visibility
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Navigation Links */}
        <div className={`lg:flex items-center space-x-6 ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col lg:flex-row lg:space-x-4">
            <li>
              <Link className="text-black hover:text-emerald-400 transition-colors" to="/">Home</Link>
            </li>
            <li>
              <Link className="text-black hover:text-emerald-400 transition-colors" to="/about">About</Link>
            </li>
            <li>
              <Link className="text-black hover:text-emerald-400 transition-colors" to="/learn">Learn</Link>
            </li>
            <li>
              <Link className="text-black hover:text-emerald-400 transition-colors" to="/store">Store</Link>
            </li>
          </ul>

          {/* Authentication Buttons */}
          <div className="flex flex-col lg:flex-row lg:space-x-4 mt-4 lg:mt-0">
            {username ? (
              <button onClick={handleLogout} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">Logout</button>
            ) : (
              <>
                <Link to="/login" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">Login</Link>
                <Link to="/register" className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">Signup</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
