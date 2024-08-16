// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-logo">CreatoRRR</div>
            <div className="nav-links">
                <Link to="/">Profile</Link>
                <Link to="/edit">Edit</Link>
                <Link to="/search">Search</Link>
            </div>
        </nav>
    );
};

export default Navbar;
