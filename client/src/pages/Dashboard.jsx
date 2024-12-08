import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Dashboard = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* Hero Section */}
        <section className="bg-indigo-600 text-white rounded-lg shadow p-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Welcome to MeetingMate</h1>
          <p className="text-lg mb-6">
            Revolutionize your scheduling experience. Discover effortless meeting
            management tailored for your needs.
          </p>
          <button className="bg-white text-indigo-600 px-6 py-3 rounded shadow font-bold hover:bg-gray-200">
            Get Started for Free
          </button>
        </section>

        {/* Features Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Why Choose MeetingMate?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white shadow rounded-lg p-6 text-center">
              <h3 className="text-lg font-bold text-gray-800">Easy Scheduling</h3>
              <p className="text-gray-600 mt-2">
                Schedule meetings effortlessly with a few clicks.
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-6 text-center">
              <h3 className="text-lg font-bold text-gray-800">Collaborative Tools</h3>
              <p className="text-gray-600 mt-2">
                Invite team members and manage availability seamlessly.
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-6 text-center">
              <h3 className="text-lg font-bold text-gray-800">24/7 Availability</h3>
              <p className="text-gray-600 mt-2">
                Always accessible to manage your schedule on the go.
              </p>
            </div>
          </div>
        </section>

        {/* Calendar Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Interactive Calendar
          </h2>
          <div className="bg-white shadow rounded-lg p-6">
            <Calendar className="mx-auto" onChange={setDate} value={date} />
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-gray-50 shadow rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            What Our Users Say
          </h2>
          <div className="space-y-6">
            <div className="p-6 bg-white shadow rounded-lg">
              <p className="text-gray-600">
                "MeetingMate has transformed how I schedule my meetings. It's a game
                changer for productivity!"
              </p>
              <p className="mt-2 text-right text-indigo-600 font-bold">
                - Jane Doe, Freelancer
              </p>
            </div>
            <div className="p-6 bg-white shadow rounded-lg">
              <p className="text-gray-600">
                "The collaborative tools are fantastic. Our team syncs have never been
                easier to organize."
              </p>
              <p className="mt-2 text-right text-indigo-600 font-bold">
                - John Smith, Team Lead
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Frequently Asked Questions
          </h2>
          <div className="bg-white shadow rounded-lg p-6">
            <details className="mb-4">
              <summary className="font-bold text-gray-800 cursor-pointer">
                How do I create an account?
              </summary>
              <p className="mt-2 text-gray-600">
                Creating an account is simple. Click on "Get Started for Free" and
                follow the instructions.
              </p>
            </details>
            <details className="mb-4">
              <summary className="font-bold text-gray-800 cursor-pointer">
                Can I integrate MeetingMate with other tools?
              </summary>
              <p className="mt-2 text-gray-600">
                Yes, MeetingMate supports integrations with popular tools like Google
                Calendar and Outlook.
              </p>
            </details>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="bg-indigo-600 text-white rounded-lg shadow p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Start Your Scheduling Journey Today
          </h2>
          <button className="bg-white text-indigo-600 px-6 py-3 rounded shadow font-bold hover:bg-gray-200">
            Sign Up Now
          </button>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Dashboard;
