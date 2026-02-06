import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import riteLogo from "../assets/rite-logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [researchOpen, setResearchOpen] = useState(false);
  const [innovationOpen, setInnovationOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setResearchOpen(false);
    setInnovationOpen(false);
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

        <li className={`dropdown ${researchOpen ? 'open' : ''}`}>
          <NavLink to="/research" onClick={closeMenu} className="dropdown-toggle">
            Research & Publication Services
          </NavLink>
          <button
            className="dropdown-arrow"
            onClick={(e) => { e.preventDefault(); setResearchOpen(!researchOpen); }}
            aria-expanded={researchOpen}
            aria-label="Toggle submenu"
          >
            ▼
          </button>
          <ul className="dropdown-menu">
            <li><NavLink to="/publication-and-printing" onClick={closeMenu}>Publication and Printing Unit</NavLink></li>
            <li><NavLink to="/research-unit" onClick={closeMenu}>Research Unit</NavLink></li>
          </ul>
        </li>

        <li className={`dropdown ${innovationOpen ? 'open' : ''}`}>
          <NavLink to="/innovation" onClick={closeMenu} className="dropdown-toggle">
            Innovation
          </NavLink>
          <button
            className="dropdown-arrow"
            onClick={(e) => { e.preventDefault(); setInnovationOpen(!innovationOpen); }}
            aria-expanded={innovationOpen}
            aria-label="Toggle submenu"
          >
            ▼
          </button>
          <ul className="dropdown-menu">
            <li><NavLink to="/technology-transfer" onClick={closeMenu}>Technology Transfer &amp; Patent Unit</NavLink></li>
            <li><NavLink to="/minsu-i-bibes" onClick={closeMenu}>Minsu I-BIBES</NavLink></li>
          </ul>
        </li>

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
