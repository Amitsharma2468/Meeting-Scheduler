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
import HostList from './pages/HostList';
import MeetingSlots from './pages/MeetingSlots';
import SearchBar from './pages/SearchBar';
import Host from './pages/Host';

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
        <Route path="/hostlist" element={<HostList />} />
        <Route path="/meetingslots" element={<MeetingSlots />} />
        <Route path="/searchbar" element={<SearchBar />} />
        <Route path="/host" element={<Host />} />
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;
