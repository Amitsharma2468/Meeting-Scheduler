import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const HostTimeSlot = () => {
  const [timeSlots, setTimeSlots] = useState([
    { id: 1, date: '2024-12-15', time: '10:00 AM', status: 'available' },
    { id: 2, date: '2024-12-16', time: '2:00 PM', status: 'booked' },
  ]);
  const [newSlot, setNewSlot] = useState({ date: '', time: '', status: 'available' });

  const handleAddSlot = () => {
    const newSlotObj = { ...newSlot, id: timeSlots.length + 1 };
    setTimeSlots([...timeSlots, newSlotObj]);
    setNewSlot({ date: '', time: '', status: 'available' }); // Reset the form after adding
  };

  const handleDeleteSlot = (id) => {
    setTimeSlots(timeSlots.filter((slot) => slot.id !== id));
  };

  const handleEditSlot = (id, updatedSlot) => {
    setTimeSlots(
      timeSlots.map((slot) => (slot.id === id ? { ...slot, ...updatedSlot } : slot))
    );
  };

  return (
      <div className="font-sans bg-white text-black">
      
      {/* Navbar */}
      <Navbar/>

    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-semibold mb-6 text-gray-900">Manage Your Time Slots</h1>

      {/* Create Time Slot Form */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-green-500 mb-4">Create a New Time Slot</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <input
            type="date"
            value={newSlot.date}
            onChange={(e) => setNewSlot({ ...newSlot, date: e.target.value })}
            className="px-4 py-2 border rounded-md"
          />
          <input
            type="time"
            value={newSlot.time}
            onChange={(e) => setNewSlot({ ...newSlot, time: e.target.value })}
            className="px-4 py-2 border rounded-md"
          />
          <select
            value={newSlot.status}
            onChange={(e) => setNewSlot({ ...newSlot, status: e.target.value })}
            className="px-4 py-2 border rounded-md"
          >
            <option value="available">Available</option>
            <option value="booked">Booked</option>
          </select>
        </div>
        <button
          onClick={handleAddSlot}
          className="mt-4 px-8 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600"
        >
          Add Slot
        </button>
      </div>

      {/* Time Slots Table */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Existing Time Slots</h2>
        <table className="w-full text-left table-auto">
          <thead>
            <tr>
              <th className="py-2 px-4 text-gray-600">Date</th>
              <th className="py-2 px-4 text-gray-600">Time</th>
              <th className="py-2 px-4 text-gray-600">Status</th>
              <th className="py-2 px-4 text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {timeSlots.map((slot) => (
              <tr key={slot.id}>
                <td className="py-2 px-4">{slot.date}</td>
                <td className="py-2 px-4">{slot.time}</td>
                <td className={`py-2 px-4 ${slot.status === 'available' ? 'text-green-500' : 'text-red-500'}`}>
                  {slot.status}
                </td>
                <td className="py-2 px-4">
                  <button
                    onClick={() => handleEditSlot(slot.id, { status: slot.status === 'available' ? 'booked' : 'available' })}
                    className="px-4 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  >
                    Toggle Status
                  </button>
                  <button
                    onClick={() => handleDeleteSlot(slot.id)}
                    className="ml-4 px-4 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default HostTimeSlot;
