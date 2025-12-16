// src/components/SchedulePageV2.jsx
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
// NOTE: We will keep the Navbar simple for this component, but in a real app, 
// you'd swap the "Sign up" button for a "John v" menu if the user is logged in.

const SchedulePageV2 = () => {
  // Initial target: 2 days, 6 hours, 56 minutes, 14 seconds from now (for visual matching)
  // This is simplified and will not hold real-time across reloads without an API/backend
  const initialTime = 2 * 24 * 60 * 60 * 1000 + 6 * 60 * 60 * 1000 + 56 * 60 * 1000 + 14 * 1000;
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    // Exit if countdown is finished (or if we start negative)
    if (timeLeft <= 0) return;

    // Set up the interval to update the timer every second
    const intervalId = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1000);
    }, 1000);

    // Clean up the interval when the component unmounts or timeLeft changes
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Helper function to pad numbers with a leading zero (e.g., 6 -> 06)
  const pad = (num) => String(num).padStart(2, '0');

  // Placeholder for the illustrations (like the one in the image)
  const IllustrationBox = ({ type }) => (
    <div style={{ 
      width: '100%', 
      height: '100%', 
      backgroundColor: type === 'Left' ? '#E6F0E6' : '#F0E6F0', 
      position: 'absolute', 
      left: type === 'Left' ? '0' : 'auto',
      right: type === 'Right' ? '0' : 'auto',
      bottom: '0',
      opacity: 0.7,
      minHeight: '200px',
      zIndex: 0 // Below the text
    }}>
      {/* In a real app, this would be where you render your SVG illustration */}
    </div>
  );

  return (
    <>

      {/* 1. RENDER THE NAVBAR ONCE */}
      <Navbar showUserMenu={true} userName="John" />
      
      <div className="schedule-v2-container">
        <h1 className="schedule-v2-title">
          NEXT <span>COLLECTION</span> IN
        </h1>
        
        {/* Countdown Timer */}
        <div className="countdown-timer">
          <div className="countdown-unit">
            <div className="countdown-number">{pad(days)}</div>
            <div className="countdown-label">Days</div>
          </div>
          <div className="countdown-unit">
            <div className="countdown-number">{pad(hours)}</div>
            <div className="countdown-label">Hours</div>
          </div>
          <div className="countdown-unit">
            <div className="countdown-number">{pad(minutes)}</div>
            <div className="countdown-label">Minutes</div>
          </div>
          {/* Seconds - styled smaller on the side */}
          <div className="countdown-seconds">
            {pad(seconds)}
            <div style={{ fontSize: '0.6em', fontWeight: '400', color: 'var(--primary-green)' }}>Seconds</div>
          </div>
        </div>

        {/* Location List and Illustrations */}
        <div className="location-and-illustration">
          {/* Illustration Background */}
          <IllustrationBox type="Left" />
          <IllustrationBox type="Right" />

          <div className="location-list">
            <p className="location-item pickup">
              Pick-up Location: **Brgy. Talamban, Cebu City**
            </p>
            <p className="location-item next">
              Next Location: **Brgy. Banilad, Mandaue City**
            </p>
            <p className="location-item next">
              Next Location: **Brgy. Cabancalan, Mandaue City**
            </p>
            <p className="location-item next">
              Next Location: **Brgy. Tayud, Consolacion City**
            </p>
          </div>
          
          <p className="important-note">
            Important Note: Only registered users are eligible for reward system.
          </p>
        </div>
      </div>
    </>
  );
};

// We will need to slightly update Navbar to handle the 'John v' user state



export default SchedulePageV2;