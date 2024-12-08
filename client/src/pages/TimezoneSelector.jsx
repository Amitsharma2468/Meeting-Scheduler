import React from "react";

const TimezoneSelector = ({ setTimeZone }) => {
  const handleTimezoneChange = (e) => {
    setTimeZone(e.target.value);
  };

  return (
    <div>
      <label htmlFor="timezone" className="mr-2">Select Time Zone:</label>
      <select
        id="timezone"
        onChange={handleTimezoneChange}
        className="p-2 border rounded"
      >
        <option value="Bangladesh">Bangladesh</option>
        <option value="India">India</option>
        <option value="International">International</option>
        <option value="USA">USA</option>
        {/* Add more time zones as required */}
      </select>
    </div>
  );
};

export default TimezoneSelector;
