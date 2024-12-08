import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

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
          <li className="hover:text-green-500">
            <Link to="/about">About Us</Link> {/* Use Link for routing */}
          </li>
          <li className="hover:text-green-500">
            <Link to="/dashboard">Dashboard</Link> {/* Use Link for routing */}
          </li>
          <li className="hover:text-green-500">
            <Link to="/contact">Contact</Link> {/* Use Link for routing */}
          </li>
        </ul>

        {/* Call-to-Action Buttons */}
        <div className="flex items-center space-x-4">
          <Link to="/login" className="hover:text-green-500">Log In</Link> {/* Use Link for routing */}
          <Link to="/signup" className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
