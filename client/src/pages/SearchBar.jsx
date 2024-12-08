import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BookingPage = () => {
  const [searchTerm, setSearchTerm] = useState("");  // Search term
  const [hosts, setHosts] = useState([]);  // List of hosts
  const [filteredHosts, setFilteredHosts] = useState([]);  // Filtered list of hosts

  useEffect(() => {
    // Fetch hosts (replace with your actual API call)
    const fetchHosts = async () => {
      const data = [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Smith" },
        { id: 3, name: "Mary Johnson" },
      ];
      setHosts(data);
      setFilteredHosts(data);  // Initially show all hosts
    };
    fetchHosts();
  }, []);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter hosts based on search term
  useEffect(() => {
    const results = hosts.filter((host) =>
      host.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredHosts(results);
  }, [searchTerm, hosts]);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-4">Book a Meeting</h1>
      
      {/* Search Input */}
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search by Host Name"
        className="p-2 border rounded mb-4 w-full"
      />
      
      {/* Host List */}
      <div className="space-y-4">
        {filteredHosts.length > 0 ? (
          filteredHosts.map((host) => (
            <div key={host.id} className="p-4 border rounded shadow-sm hover:bg-gray-50">
              <Link to={`/host/${host.id}`} className="text-lg text-blue-600 font-semibold">
                {host.name}
              </Link>
            </div>
          ))
        ) : (
          <div>No hosts found</div>
        )}
      </div>
    </div>
  );
};

export default BookingPage;
