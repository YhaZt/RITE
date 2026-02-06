import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import riteLogo from "../assets/rite-logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <NavLink to="/" onClick={closeMenu}>
          <img src={riteLogo} alt="RITE Logo" className="logo-img" />
        </NavLink>
      </div>
      
      <div className={`navbar-links ${isOpen ? "active" : ""}`}>
        <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
        <li><NavLink to="/about" onClick={closeMenu}>About</NavLink></li>
        <li><NavLink to="/research" onClick={closeMenu}>Research & Public Service</NavLink></li>
        <li><NavLink to="/innovation" onClick={closeMenu}>Innovation</NavLink></li>
        <li><NavLink to="/ethics" onClick={closeMenu}>Research Ethics Extension & Integrity</NavLink></li>
        <li><NavLink to="/extension" onClick={closeMenu}>Extension</NavLink></li>
        <li><NavLink to="/centers" onClick={closeMenu}>Research Centers</NavLink></li>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span className={`bar ${isOpen ? "active" : ""}`}></span>
        <span className={`bar ${isOpen ? "active" : ""}`}></span>
        <span className={`bar ${isOpen ? "active" : ""}`}></span>
      </div>
    </nav>
  );
}
