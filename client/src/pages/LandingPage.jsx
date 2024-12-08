import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div className="font-sans bg-white text-black">
      
      {/* Navbar */}
      <Navbar/>

      {/* Hero Section */}
  <section
  className="text-center py-20 bg-cover bg-center relative"
  style={{
    backgroundImage: "url('https://media.istockphoto.com/id/2037006388/photo/technology-and-financial-advisory-services-concept-business-teamwork-and-working-on-digital.jpg?s=612x612&w=0&k=20&c=4zt4f-9rVD9Q_8ii_ijAmpHnzhrxWZHWNQ5ZmL8bo2Y=')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 'calc(100vh - 80px)', // Adjusting height after navbar (assuming navbar height is 80px)
  }}
>
  <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay to reduce image brightness */}
  
  <div className="container mx-auto relative z-10">
    <h1 className="text-5xl font-bold leading-tight mb-6 text-white mt-15">
      Schedule Your Meetings with Ease
    </h1>
    <p className="text-lg mb-8 text-white opacity-90">
      Organize your time efficiently, book appointments, and manage your meetings seamlessly.
    </p>
    <a
      href="/signIn"
      className="px-8 py-4 bg-green-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-green-700"
    >
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
