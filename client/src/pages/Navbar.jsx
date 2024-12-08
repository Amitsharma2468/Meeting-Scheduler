import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-green-500">
          Meeting Mate
        </div>

        {/* Menu Links */}
        <ul className="hidden md:flex space-x-6 text-black">
          <li className="hover:text-green-500"><a href="#about">About Us</a></li>
          <li className="hover:text-green-500"><a href="#dashboard">Dashboard</a></li>
          <li className="hover:text-green-500"><a href="#contact">Contact</a></li>
        </ul>

        {/* Call-to-Action Buttons */}
        <div className="flex items-center space-x-4">
          <a href="/login" className="hover:text-green-500">Log In</a>
          <a href="/signup" className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
