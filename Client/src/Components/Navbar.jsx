import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu visibility

  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center">
          <Link to="/">
            <img 
              src="/assets/images/NatyaDarpan1.png" 
              alt="Logo" 
              className="h-16 object-contain"
            />
          </Link>
        </div>

      
        <button 
          className="block lg:hidden"
          onClick={() => setIsOpen(!isOpen)} // Toggle mobile menu visibility
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            // xmlns="http://www.w3.org/2000/svg"
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
        <div className={`flex space-x-6 ${isOpen ? 'block' : 'hidden'} lg:flex`}>
          <ul className="flex space-x-4">
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
              <Link className="text-black hover:text-emerald-400 transition-colors" to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link className="text-black hover:text-emerald-400 transition-colors" to="/store">Store</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
