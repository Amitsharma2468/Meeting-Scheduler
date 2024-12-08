import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div className="font-sans bg-white text-black">
      
      {/* Navbar */}
      <Navbar/>

      {/* Hero Section */}
      <section className="text-center py-20 bg-white">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold leading-tight mb-6 text-gray-900">
            Schedule Your Meetings with Ease
          </h1>
          <p className="text-lg mb-8 text-gray-600">
            Organize your time efficiently, book appointments, and manage your meetings seamlessly.
          </p>
          <a href="/signIn" className="px-8 py-4 bg-green-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-green-700">
            Get Started
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8 text-gray-900">Our Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <img src="/images/booking.png" alt="Booking" className="w-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Easy Booking</h3>
              <p className="text-gray-600">Book appointments with hosts in just a few clicks.</p>
            </div>

            <div className="p-6 bg-white shadow-lg rounded-lg">
              <img src="/images/search.png" alt="Search" className="w-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Advanced Search</h3>
              <p className="text-gray-600">Find available slots, hosts, and preferred times effortlessly.</p>
            </div>

            <div className="p-6 bg-white shadow-lg rounded-lg">
              <img src="/images/manage.png" alt="Manage" className="w-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Host Management</h3>
              <p className="text-gray-600">Manage your time slots, add new ones, and delete them anytime.</p>
            </div>

          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8 text-gray-900">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">1. Sign Up</h3>
              <p className="text-gray-600">Create an account as a Host or Guest to get started.</p>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">2. Choose a Slot</h3>
              <p className="text-gray-600">Browse hosts, view available time slots, and pick your preferred time.</p>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">3. Book & Relax</h3>
              <p className="text-gray-600">Confirm your booking and relax! Manage everything in your dashboard.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>

    </div>
  );
};

export default LandingPage;
