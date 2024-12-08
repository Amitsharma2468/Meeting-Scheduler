import React, { useState } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    console.log('Search for:', query);
    // Implement search functionality here
  };

  return (
    <div className="w-full md:w-1/2">
      <input 
        type="text" 
        placeholder="Search by host name, date, or time" 
        className="w-full p-4 border rounded-md focus:outline-none focus:border-green-500"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button 
        onClick={handleSearch} 
        className="bg-green-500 text-white px-4 py-2 rounded-md mt-2 hover:bg-green-600"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
