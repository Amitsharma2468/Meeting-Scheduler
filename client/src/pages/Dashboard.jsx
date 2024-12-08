import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">MeetingMate</h1>
          <nav className="space-x-4">
            <a href="#" className="text-gray-600 hover:text-indigo-600">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600">
              Team
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600">
              Settings
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <section className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-800">Welcome to MeetingMate!</h2>
          <p className="text-gray-600 mt-2">
            Plan your day and manage your meetings efficiently with MeetingMate.
          </p>
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
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} MeetingMate. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
