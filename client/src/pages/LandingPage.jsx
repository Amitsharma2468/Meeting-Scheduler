import React from 'react';
import Navbar from './Navbar';

const LandingPage = () => {
  return (
    // navbar
    <div className="bg-white text-black">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Schedule Meetings in Seconds
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          Eliminate back-and-forth emails. Set your availability, share your link, and let others book time with you instantly.
        </p>
        <button className="bg-green-500 text-white font-bold py-3 px-6 rounded-full hover:bg-green-600 transition duration-300">
          Get Started for Free
        </button>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Choose Our Scheduler?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12">
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition">
            <div className="w-16 h-16 flex items-center justify-center bg-green-500 text-white rounded-full mb-6">
              📅
            </div>
            <h3 className="text-xl font-semibold mb-4">Easy Scheduling</h3>
            <p>
              Share your calendar with a single link and let others pick a time that works for them.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition">
            <div className="w-16 h-16 flex items-center justify-center bg-green-500 text-white rounded-full mb-6">
              ⏰
            </div>
            <h3 className="text-xl font-semibold mb-4">Time Zone Detection</h3>
            <p>
              Automatically adjust for time zones so you never miss an appointment.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition">
            <div className="w-16 h-16 flex items-center justify-center bg-green-500 text-white rounded-full mb-6">
              🔗
            </div>
            <h3 className="text-xl font-semibold mb-4">Calendar Integration</h3>
            <p>
              Sync with Google Calendar, Outlook, and more to keep your schedule up-to-date.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12">
          {/* Step 1 */}
          <div className="text-center">
            <div className="w-16 h-16 flex items-center justify-center bg-green-500 text-white rounded-full mb-6">
              1️⃣
            </div>
            <h3 className="text-xl font-semibold mb-4">Set Your Availability</h3>
            <p>
              Choose your available time slots to avoid double bookings.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="w-16 h-16 flex items-center justify-center bg-green-500 text-white rounded-full mb-6">
              2️⃣
            </div>
            <h3 className="text-xl font-semibold mb-4">Share Your Link</h3>
            <p>
              Share your booking link via email or social media.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="w-16 h-16 flex items-center justify-center bg-green-500 text-white rounded-full mb-6">
              3️⃣
            </div>
            <h3 className="text-xl font-semibold mb-4">Get Booked Instantly</h3>
            <p>
              Let invitees choose a time that works for them, and you’re all set!
            </p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-green-500 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Simplify Your Scheduling?
        </h2>
        <button className="bg-white text-green-500 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition duration-300">
          Get Started Now
        </button>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-100 text-center">
        <p className="text-sm">&copy; 2024 Meeting Scheduler. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
