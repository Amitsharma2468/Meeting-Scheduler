import React from 'react';

const Navbar = () => {
  return (
   <nav className="bg-white shadow-md">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-green-600">Meeting Mate</h1>
          <div className="flex space-x-6">
            <a href="#about" className="text-gray-700 hover:text-green-600">About Us</a>
            <a href="/signIn" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
              Sign In
            </a>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
