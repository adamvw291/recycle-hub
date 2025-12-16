import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
      </main>
    </>
  );
};

export default LandingPage;