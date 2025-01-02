import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white py-8 shadow-xl border-t border-gray-400 mt-auto">
      <div className="container mx-auto px-4 md:px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
          {/* Left Section: Logo and Info */}
          <div className="w-full md:w-1/3 text-center md:text-left">
            <img
              src="/assets/images/NatyaDarpan.png"
              alt="Logo"
              className="h-16 object-contain mb-2 mx-auto md:mx-0"
            />
            <p className="text-sm text-gray-600">Explore Bharatanatyam in the Modern World.</p>
          </div>

          {/* Center Section: Links */}
          <div className="w-full md:w-1/3 text-center">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Quick Links</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li><a href="/" className="hover:text-emerald-500">Home</a></li>
              <li><a href="/about" className="hover:text-emerald-500">About</a></li>
              <li><a href="/contact" className="hover:text-emerald-500">Learn</a></li>
              <li><a href="/gallery" className="hover:text-emerald-500">Gallery</a></li>
              <li><a href="/store" className="hover:text-emerald-500">Store</a></li>
            </ul>
          </div>

          {/* Right Section: Contact */}
          <div className="w-full md:w-1/3 text-center md:text-right">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Contact Us</h3>
            <p className="text-sm flex items-center justify-center md:justify-end text-gray-600">
              <FaEnvelope className="mr-2 text-xl" />
              <a href="mailto:support@NatyaDarpan.com" className="hover:text-emerald-500">support@NatyaDarpan.com</a>
            </p>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mt-6 flex justify-center space-x-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-2xl text-gray-600 hover:text-emerald-500" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl  text-gray-600 hover:text-emerald-500" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl text-gray-600 hover:text-emerald-500" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl text-gray-600 hover:text-emerald-500" />
          </a>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-6 border-t border-gray-400 pt-4 text-sm text-gray-600">
          © 2024 NatyaDarpan. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
