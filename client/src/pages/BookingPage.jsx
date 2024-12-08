import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HostList from "./HostList"; // Import HostList
import MeetingSlots from "./MeetingSlots"; // Import MeetingSlots
import TimezoneSelector from "./TimezoneSelector"; // Timezone selector component
import SearchBar from "./SearchBar"; // Search bar component
import Navbar from "./Navbar";
import Footer from "./Footer";

const BookingPage = () => {
  const [searchTerm, setSearchTerm] = useState(""); // Search term
  const [hosts, setHosts] = useState([]); // List of hosts
  const [filteredHosts, setFilteredHosts] = useState([]); // Filtered hosts based on search term
  const [selectedHost, setSelectedHost] = useState(null); // Selected host
  const [timeZone, setTimeZone] = useState("Bangladesh"); // Time zone (default)

  // Fetch host data (Replace with your actual API call)
  useEffect(() => {
    const fetchHosts = async () => {
      const data = [
        { id: 1, name: "John Doe", description: "Software Engineer", meetings: ['2024-12-10 10:00 AM', '2024-12-11 02:00 PM'] },
        { id: 2, name: "Jane Smith", description: "Product Manager", meetings: ['2024-12-12 03:00 PM', '2024-12-13 01:00 PM'] },
        { id: 3, name: "Mary Johnson", description: "UX Designer", meetings: ['2024-12-14 09:00 AM', '2024-12-15 11:00 AM'] },
      ];
      setHosts(data);
      setFilteredHosts(data); // Initially show all hosts
    };
    fetchHosts();
  }, []);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter hosts based on search term (by name)
  useEffect(() => {
    if (searchTerm === "") {
      setFilteredHosts(hosts);
    } else {
      const results = hosts.filter((host) =>
        host.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        host.meetings.some((meeting) => meeting.includes(searchTerm)) // Search by meeting time/date
      );
      setFilteredHosts(results);
    }
  }, [searchTerm, hosts]);

  return (
     <div className="font-sans bg-white text-black">
      
      {/* Navbar */}
      <Navbar/>
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
          <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
        </div>

        {/* Display Hosts or Meeting Slots */}
        {selectedHost ? (
          <MeetingSlots host={selectedHost} setSelectedHost={setSelectedHost} timeZone={timeZone} />
        ) : (
          <HostList hosts={filteredHosts} setSelectedHost={setSelectedHost} />
        )}
      </main>
      </div>
      <Footer/>
    </div>
  );
};

export default BookingPage;
