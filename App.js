
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Booking from './Booking';
import './App.css';

function App() {
  return (
    <Router>
      {/* Routing concept used */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/book/:id" element={<Booking />} />
      </Routes>
    </Router>
  );
}

export default App;
