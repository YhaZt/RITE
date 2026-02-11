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

  const toggleResearch = (e) => {
    e.preventDefault();
    setResearchOpen(!researchOpen);
    setInnovationOpen(false); // close other dropdown
  };

  const toggleInnovation = (e) => {
    e.preventDefault();
    setInnovationOpen(!innovationOpen);
    setResearchOpen(false); // close other dropdown
  };

  const handleNormalLinkClick = () => {
    setResearchOpen(false);
    setInnovationOpen(false);
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <NavLink to="/" onClick={handleNormalLinkClick}>
          <img src={riteLogo} alt="RITE Logo" className="logo-img" />
        </NavLink>
      </div>
      
      {/* The background overlay to dim the page when menu is open */}
      {isOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}

      <div className={`navbar-links ${isOpen ? "active" : ""}`}>
        <li><NavLink to="/" onClick={handleNormalLinkClick}>Home</NavLink></li>
        <li><NavLink to="/about" onClick={handleNormalLinkClick}>About</NavLink></li>

        {/* Research & Publication Services */}
        <li className={`dropdown ${researchOpen ? 'open' : ''}`}>
          <div className="dropdown-header">
            <NavLink
              to="/research"
              onClick={toggleResearch}
              className="dropdown-toggle"
            >
              Research & Publication Services
            </NavLink>
            <button
              className="dropdown-arrow"
              onClick={toggleResearch}
              aria-expanded={researchOpen}
            >
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <ul className="dropdown-menu">
            <li><NavLink to="/publication-and-printing" onClick={handleNormalLinkClick}>Publication and Printing Unit</NavLink></li>
            <li><NavLink to="/research-unit" onClick={handleNormalLinkClick}>Research Unit</NavLink></li>
          </ul>
        </li>

        {/* Innovation */}
        <li className={`dropdown ${innovationOpen ? 'open' : ''}`}>
          <div className="dropdown-header">
            <NavLink
              to="/innovation"
              onClick={toggleInnovation}
              className="dropdown-toggle"
            >
              Innovation
            </NavLink>
            <button
              className="dropdown-arrow"
              onClick={toggleInnovation}
              aria-expanded={innovationOpen}
            >
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <ul className="dropdown-menu">
            <li><NavLink to="/technology-transfer" onClick={handleNormalLinkClick}>Technology Transfer &amp; Patent Unit</NavLink></li>
            <li><NavLink to="/minsu-i-bibes" onClick={handleNormalLinkClick}>Minsu I-BIBES</NavLink></li>
          </ul>
        </li>

        <li><NavLink to="/ethics" onClick={handleNormalLinkClick}>Research Ethics Extension & Integrity</NavLink></li>
        <li><NavLink to="/extension" onClick={handleNormalLinkClick}>Extension</NavLink></li>
        <li><NavLink to="/centers" onClick={handleNormalLinkClick}>Research Centers</NavLink></li>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span className={`bar ${isOpen ? "active" : ""}`}></span>
        <span className={`bar ${isOpen ? "active" : ""}`}></span>
        <span className={`bar ${isOpen ? "active" : ""}`}></span>
      </div>
    </nav>
  );
}
