// src/components/Hero.jsx
import React from 'react';
import illustration from '../assets/recycle_illustration.png';

const Hero = () => {
  // A simple placeholder for the unique illustration
  const IllustrationPlaceholder = () => (
    <div className="hero-image-container">
      {/*
        In a real application, you would replace this with the actual SVG
        or a hosted image file of the user/bin illustration.
      */}
      <div style={{
        width: '100%',
        paddingTop: '100%', /* Creates a square aspect ratio */
        backgroundColor: '#D9FFDA', /* Light green background */
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1.2rem',
        fontWeight: '600',
        color: 'var(--primary-green)'
      }}>
        [Illustration Placeholder]
      </div>
    </div>
  );

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Waste Management &amp; Recycling Platform
        </h1>
        <p className="hero-subtitle">
          A comprehensive solution for efficient waste disposal 
          and sustainable recycling.
        </p>
        <a href="#get-started" className="primary-button">
          Get Started
        </a>
        </div>
      <div className="hero-image-container">
        <img 
          src={illustration} 
          alt="User standing next to a large recycling bin"
        />
      </div>
    </section>
  );
};

export default Hero;