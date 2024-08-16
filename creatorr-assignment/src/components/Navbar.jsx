
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
                <Link to="/create">Create Profile</Link> 
            </div>
        </nav>
    );
};

export default Navbar;
