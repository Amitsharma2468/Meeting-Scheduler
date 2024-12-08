import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        formData
      );

      console.log("Login Response:", response.data);

      const { token, user } = response.data;

      if (token && user?.role) {
        // Save the token in localStorage
        localStorage.setItem("authToken", token);

        // Navigate based on the role
        if (user.role === "host") {
          navigate("/hosttimeslot"); // Redirect to host page
        } else if (user.role === "guest") {
          navigate("/bookingpage"); // Redirect to guest page
        } else {
          setError("Invalid user role. Please contact support.");
        }
      } else {
        setError("Invalid server response. Please try again.");
      }
    } catch (error) {
      console.error("Login Error:", error);

      if (error.response && error.response.data) {
        setError(error.response.data.message || "An error occurred. Please try again.");
      } else {
        setError("Network error or server not reachable.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('businessman-working-laptop.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white/70 shadow-lg rounded-lg p-8 max-w-md w-full border backdrop-blur-sm">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
          Log In to Your Account
        </h2>
        {error && (
          <p className="text-red-600 text-center mb-4 font-semibold">{error}</p>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-gray-800 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email address"
              className="w-full px-4 py-3 text-gray-800 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-gray-800 font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
              className="w-full px-4 py-3 text-gray-800 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-green-500 text-white font-semibold text-lg py-3 rounded-lg shadow-md hover:bg-green-600 hover:shadow-lg transition-all duration-300 ${
                loading ? "opacity-50" : ""
              }`}
            >
              {loading ? "Logging in..." : "Log In"}
            </button>
          </div>
        </form>

        {/* Sign Up Redirect */}
        <p className="text-center text-gray-800 mt-4">
          Don't have an account?{" "}
          <a href="/signup" className="text-green-600 font-semibold hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
