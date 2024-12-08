import React from "react";

const MeetingSlots = ({ host, setSelectedHost, timeZone }) => {
  return (
    <div>
      <button onClick={() => setSelectedHost(null)} className="text-green-500 underline mb-4">
        Back to Host List
      </button>

      <h2 className="text-3xl font-bold mb-4">Available Slots for {host.name}</h2>
      <p className="mb-2 text-gray-600">Time Zone: {timeZone}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {host.meetings.map((slot, index) => (
          <div key={index} className="bg-green-100 p-4 rounded shadow-md text-center">
            <p className="text-lg font-semibold">{slot}</p>
            <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Book Slot
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetingSlots;
