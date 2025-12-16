// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import the two pages we want to switch between
import LandingPage from './components/LandingPage'; 
import UserProfilePage from './components/UserProfilePage';
import SchedulePage from './components/SchedulePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* path for Landing Page (Home) */}
          <Route path="/" element={<LandingPage />} />

          {/* path for the User Profile Page */}
          <Route path="/profile" element={<UserProfilePage />} />

          {/* path for Schedule page */}
          <Route path="/schedules" element = {<SchedulePage />}/>
  
        </Routes>
      </div>
    </Router>
  );
}

export default App;