import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle mobile menu visibility
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false); // State to toggle profile dropdown
  const isLoggedIn = true; // Assume the user is logged in for demonstration
  const userProfileImage = 'https://via.placeholder.com/40'; // Placeholder image for the user profile

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleProfileDropdown = () => setIsProfileDropdownOpen(!isProfileDropdownOpen);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-green-500">
          <Link to="/">
            Meeting Mate
          </Link>
        </div>

        {/* Desktop Menu Links */}
        <ul className="hidden md:flex space-x-6 text-black">
          <li className="hover:text-green-500">
            <Link to="/about">About Us</Link>
          </li>
          <li className="hover:text-green-500">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="hover:text-green-500">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Call-to-Action Buttons / Profile Section (Desktop View) */}
        <div className="hidden md:flex items-center space-x-4">
          {isLoggedIn ? (
            <div className="relative">
              <img 
                src={userProfileImage} 
                alt="User Profile" 
                className="w-10 h-10 rounded-full cursor-pointer border-2 border-green-500" 
                onClick={toggleProfileDropdown} 
              />
              {isProfileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg overflow-hidden z-50">
                  <Link 
                    to="/profile" 
                    className="block px-4 py-2 text-black hover:bg-green-100"
                    onClick={() => setIsProfileDropdownOpen(false)}
                  >
                    Profile Settings
                  </Link>
                  <button 
                    className="block w-full text-left px-4 py-2 text-black hover:bg-green-100"
                    onClick={() => {
                      setIsProfileDropdownOpen(false);
                      // Add logout logic here
                      console.log('User logged out');
                    }}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login" className="hover:text-green-500">Log In</Link>
              <Link to="/signup" className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <button 
          className="md:hidden text-green-500 focus:outline-none" 
          onClick={toggleMenu}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M6 18L18 6M6 6l12 12" 
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M4 6h16M4 12h16m-7 6h7" 
              />
            )}
          </svg>
        </button>

      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-6">
            <li>
              <Link to="/about" onClick={toggleMenu} className="text-black hover:text-green-500">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/dashboard" onClick={toggleMenu} className="text-black hover:text-green-500">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMenu} className="text-black hover:text-green-500">
                Contact
              </Link>
            </li>
            {isLoggedIn ? (
              <>
                <li>
                  <Link to="/profile" onClick={toggleMenu} className="text-black hover:text-green-500">
                    Profile Settings
                  </Link>
                </li>
                <li>
                  <button 
                    onClick={() => console.log('User logged out')} 
                    className="text-black hover:text-green-500"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login" onClick={toggleMenu} className="text-black hover:text-green-500">
                    Log In
                  </Link>
                </li>
                <li>
                  <Link to="/signup" onClick={toggleMenu} className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
