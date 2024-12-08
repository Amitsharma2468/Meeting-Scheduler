import React from 'react';

const TimezoneSelector = ({ setTimeZone }) => {
  const handleChange = (e) => {
    setTimeZone(e.target.value);
  };

  return (
    <div className="w-full md:w-1/3">
      <label htmlFor="timezone" className="block mb-2 text-gray-700">Select Time Zone</label>
      <select 
        id="timezone" 
        className="w-full p-4 border rounded-md" 
        onChange={handleChange}
      >
        <option value="Bangladesh">Bangladesh</option>
        <option value="India">India</option>
        <option value="International">International</option>
        <option value="Custom">Custom</option>
      </select>
    </div>
  );
};

export default TimezoneSelector;
