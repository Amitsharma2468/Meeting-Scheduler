import React from "react";

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={onSearchChange}
        placeholder="Search by Host Name or Time/Date"
        className="p-2 border rounded w-full md:w-64"
      />
    </div>
  );
};

export default SearchBar;
