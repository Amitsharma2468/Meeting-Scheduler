import React, { useState } from 'react';
import HostList from './pages/HostList';
import MeetingSlots from './pages/MeetingSlots';
import SearchBar from './pages/SearchBar';
import TimezoneSelector from './pages/TimezoneSelector';

const BookingPage = () => {
  const [selectedHost, setSelectedHost] = useState(null);
  const [timeZone, setTimeZone] = useState('Bangladesh');

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <header className="bg-green-600 py-10 text-center text-white">
        <h1 className="text-4xl font-bold">Book a Meeting</h1>
        <p className="text-lg mt-2">Find available meeting slots and book at your convenience</p>
      </header>

      <main className="container mx-auto py-10 px-6">
        
        {/* Timezone Selector and Search Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <TimezoneSelector setTimeZone={setTimeZone} />
          <SearchBar />
        </div>

        {/* Display Hosts or Meeting Slots */}
        {selectedHost ? (
          <MeetingSlots host={selectedHost} setSelectedHost={setSelectedHost} timeZone={timeZone} />
        ) : (
          <HostList setSelectedHost={setSelectedHost} />
        )}
        
      </main>
    </div>
  );
};

export default BookingPage;
