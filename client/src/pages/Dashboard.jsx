import React, { useState } from "react";
import Navbar from "./Navbar";  // Import Navbar
import Footer from "./Footer";  // Import Footer
import Calendar from 'react-calendar';  // Import the Calendar component
import 'react-calendar/dist/Calendar.css'; // Import Calendar styles

const Dashboard = () => {
  const [date, setDate] = useState(new Date());  // Set state to manage calendar date

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />  {/* Use Navbar component */}

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Profile Picture */}
        <section className="bg-white shadow rounded-lg p-6 mb-8 flex items-center space-x-4">
          <img 
            src="https://via.placeholder.com/100" 
            alt="Profile" 
            className="w-24 h-24 rounded-full object-cover"
          />
          <div>
            <h2 className="text-xl font-bold text-gray-800">Welcome, User!</h2>
            <p className="text-gray-600 mt-2">Here’s your personalized dashboard.</p>
          </div>
        </section>

        {/* Welcome Section */}
        <section className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-800">Welcome to MeetingMate!</h2>
          <p className="text-gray-600 mt-2">
            Plan your day and manage your meetings efficiently with MeetingMate.
          </p>
        </section>

        {/* Calendar */}
        <section className="mt-8 bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-bold text-gray-800">Your Calendar</h3>
          <div className="mt-4">
            <Calendar 
              className="mx-auto" 
              onChange={setDate} 
              value={date}  // Pass the current selected date
            />
          </div>
        </section>

        {/* Quick Actions */}
        <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-800">Create Event</h3>
            <p className="text-gray-600 mt-2">Schedule a new event for your team or clients.</p>
            <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
              Create Event
            </button>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-800">Manage Availability</h3>
            <p className="text-gray-600 mt-2">Set your available time slots for meetings.</p>
            <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
              Update Availability
            </button>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-800">Invite Team</h3>
            <p className="text-gray-600 mt-2">Add team members to collaborate on scheduling.</p>
            <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
              Invite Now
            </button>
          </div>
        </section>

        {/* Upcoming Meetings */}
        <section className="mt-8 bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-bold text-gray-800">Upcoming Meetings</h3>
          <div className="mt-4">
            <ul>
              <li className="border-b py-4 flex justify-between">
                <span>Team Sync - Monday, 10 AM</span>
                <button className="text-indigo-600 hover:underline">View</button>
              </li>
              <li className="border-b py-4 flex justify-between">
                <span>Client Call - Wednesday, 2 PM</span>
                <button className="text-indigo-600 hover:underline">View</button>
              </li>
              <li className="py-4 flex justify-between">
                <span>Strategy Meeting - Friday, 11 AM</span>
                <button className="text-indigo-600 hover:underline">View</button>
              </li>
            </ul>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />  {/* Use Footer component */}
    </div>
  );
};

export default Dashboard;
