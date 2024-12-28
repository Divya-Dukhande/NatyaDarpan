import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 bg-maroon p-4 z-10">
      <div className="flex items-center justify-between">
        {/* Logo on the left */}
        <div className="flex items-center ml-4"> {/* Added ml-4 for slight margin from left */}
          <img 
            src="/assets/images/NatyaDarpan1.png" 
            alt="Logo" 
            className="h-20 object-contain" // Logo size increased to 20
          />
        </div>

        {/* Centered Navigation Links */}
        <div className="flex flex-1 justify-center items-center space-x-6"> {/* Centering links and reducing space between them */}
          <a 
            href="/" 
            className="text-golden-yellow hover:text-emerald-green transition-colors duration-300"
          >
            Home
          </a>
          <a 
            href="/about" 
            className="text-golden-yellow hover:text-emerald-green transition-colors duration-300"
          >
            About
          </a>
          <a 
            href="/contact" 
            className="text-golden-yellow hover:text-emerald-green transition-colors duration-300"
          >
            Learn
          </a>
          <a 
            href="/gallery" 
            className="text-golden-yellow hover:text-emerald-green transition-colors duration-300"
          >
            Gallery
          </a>
          <a 
            href="/store" 
            className="text-golden-yellow hover:text-emerald-green transition-colors duration-300"
          >
            Store
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
