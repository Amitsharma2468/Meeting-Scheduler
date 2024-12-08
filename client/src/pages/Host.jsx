import React, { useState } from "react";
import axios from "axios";

const Host = () => {
  const [formData, setFormData] = useState({
    start_time: "",
    end_time: "",
    timeZone: "",
    profilePicture: null,
  });

  const [profilePictureUrl, setProfilePictureUrl] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, profilePicture: e.target.files[0] });
  };

  const handleCreateSlot = async () => {
    try {
      const response = await axios.post("/api/slots/create", {
        start_time: formData.start_time,
        end_time: formData.end_time,
      });
      alert("Slot created successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to create slot.");
    }
  };

  const handleUpdateTimeZone = async () => {
    try {
      const response = await axios.put("/api/users/update-timezone", {
        timeZone: formData.timeZone,
      });
      alert("Time zone updated successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to update time zone.");
    }
  };

  const handleUpdateProfilePicture = async () => {
    const formDataObj = new FormData();
    formDataObj.append("profilePicture", formData.profilePicture);

    try {
      const response = await axios.post("/api/users/upload-profile-picture", formDataObj, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setProfilePictureUrl(response.data.url); // Assuming the API returns the URL of the uploaded image
      alert("Profile picture updated successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to update profile picture.");
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">Host Dashboard</h2>

        {/* Create Slot */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Create a Slot</h3>
          <div>
            <label htmlFor="start_time" className="block text-gray-700">
              Start Time
            </label>
            <input
              type="datetime-local"
              name="start_time"
              value={formData.start_time}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div>
            <label htmlFor="end_time" className="block text-gray-700">
              End Time
            </label>
            <input
              type="datetime-local"
              name="end_time"
              value={formData.end_time}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <button
            onClick={handleCreateSlot}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          >
            Create Slot
          </button>
        </div>

        {/* Update Time Zone */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Update Time Zone</h3>
          <div>
            <label htmlFor="timeZone" className="block text-gray-700">
              Time Zone
            </label>
            <select
              name="timeZone"
              value={formData.timeZone}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg"
            >
              <option value="">Select Time Zone</option>
              <option value="UTC-5">UTC-5 (Eastern Time)</option>
              <option value="UTC+0">UTC+0 (Greenwich Mean Time)</option>
              <option value="UTC+5.5">UTC+5.5 (India Standard Time)</option>
              {/* Add more time zones as needed */}
            </select>
          </div>
          <button
            onClick={handleUpdateTimeZone}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Update Time Zone
          </button>
        </div>

        {/* Update Profile Picture */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Update Profile Picture</h3>
          <div>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="block w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <button
            onClick={handleUpdateProfilePicture}
            className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600"
          >
            Upload Picture
          </button>
          {profilePictureUrl && (
            <div>
              <img
                src={profilePictureUrl}
                alt="Profile"
                className="w-24 h-24 rounded-full mt-4"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Host;
