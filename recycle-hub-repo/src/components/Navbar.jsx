// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// The component now accepts props to determine the UI (logged in or not)
const Navbar = ({ showUserMenu = false, userName = "John" }) => { 
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/" className="logo-icon" style={{ textDecoration: 'none' }}>
                    <span className="logo-icon">♻️</span>
                    <span>Recycle Hub</span>
                </Link>
            </div>
            <div className="nav-links">
                {/* Router Links */}
                <Link to="/schedules" className="nav-link">Schedules</Link>
                <a href="#services" className="nav-link">Services</a>
                <a href="#contact" className="nav-link">Contact</a>

                {/* Conditional Sign-up / User Menu */}
                {showUserMenu ? (
                    <Link to="/profile" className="nav-link" style={{fontWeight: 700}}>
                        {userName} &#x25BE; 
                    </Link>
                ) : (
                    <button className="primary-button">Sign up</button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;