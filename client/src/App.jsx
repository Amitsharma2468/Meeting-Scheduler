import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import SignUp from './pages/Signup';
import Login from './pages/Login';
import HostTimeSlot from './pages/HostTimeSlot';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import BookingPage from './pages/BookingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hosttimeslot" element={<HostTimeSlot />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bookingpage" element={<BookingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
