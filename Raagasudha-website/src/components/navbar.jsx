import React from 'react';
import '../style/navbar.css';
import Image from '../assets/Logo.jpg'
function Navbar() {
    return (
        <div className="navbar">
            <img src={Image} alt="Logo" className="logo"/>
            <div className="nav-links">
                <a href="/">Home</a>
                <a href="/classes">Classes</a>
                <a href="/pradarshana">Pradarshana</a>
            </div>
        </div>
    );
}

export default Navbar;
