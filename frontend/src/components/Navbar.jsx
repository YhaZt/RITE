import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import riteLogo from "../assets/rite-logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [researchOpen, setResearchOpen] = useState(false);
  const [innovationOpen, setInnovationOpen] = useState(false);
  const [innovationSubOpen, setInnovationSubOpen] = useState(false);
  const [centersOpen, setCentersOpen] = useState(false);
  const location = useLocation();

  // Close all dropdowns when navigation changes
  useEffect(() => {
    setIsOpen(false);
    setResearchOpen(false);
    setInnovationOpen(false);
    setCentersOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setResearchOpen(false);
    setInnovationOpen(false);
    setCentersOpen(false);
  };

  const toggleResearch = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setResearchOpen(!researchOpen);
    setInnovationOpen(false);
    setCentersOpen(false);
  };

  const toggleInnovation = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setInnovationOpen(!innovationOpen);
    setResearchOpen(false);
    setCentersOpen(false);
  };

  const toggleCenters = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCentersOpen(!centersOpen);
    setResearchOpen(false);
    setInnovationOpen(false);
  };

  const handleNormalLinkClick = () => {
    setResearchOpen(false);
    setInnovationOpen(false);
    setCentersOpen(false);
    setIsOpen(false);
  };

  // Close all dropdowns when clicking outside the navbar
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.navbar') && !e.target.closest('.navbar-links')) {
        setResearchOpen(false);
        setInnovationOpen(false);
        setCentersOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

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
        {/* Close Button - Visible only in mobile via CSS */}
        <button className="mobile-close-btn" onClick={toggleMenu} aria-label="Close menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

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
              onClick={handleNormalLinkClick}
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
          {innovationOpen && (
            <ul className="dropdown-menu" style={{ position: "absolute"}}>
              <li><NavLink to="/technology-transfer" onClick={handleNormalLinkClick}>Technology Transfer &amp; Patent Unit</NavLink></li>
              <li><a href="https://www.minsuibibes.com" target="_blank" rel="noopener noreferrer" onClick={handleNormalLinkClick}>Minsu I-BIBES</a></li>

              {/* Innovation Hub item with left-side nested submenu */}
              <li style={{ position: 'relative' }} onMouseEnter={() => setInnovationSubOpen(true)} onMouseLeave={() => setInnovationSubOpen(false)}>
                <a href="#" onClick={(e)=>e.preventDefault()} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', color: 'inherit', textDecoration: 'none', padding: '0.7rem 1.25rem', fontSize: '0.9rem', pointerEvents: 'none' }}>
                  Innovation Hub
                  <span aria-hidden style={{ opacity: 0.7 }}>▸</span>
                </a>
                {innovationSubOpen && (
                  <div style={{ position: 'absolute', top: 0, left: '252px', width: '260px', background: 'white', color: '#094A25', borderRadius: 8, boxShadow: '0 10px 30px rgba(0,0,0,0.12)', padding: '0.6rem' }}>
                    <NavLink to="/bakodhub" onClick={handleNormalLinkClick} style={{ display: 'block', padding: '0.55rem 0.6rem', borderRadius: 6, color: '#094A25', textDecoration: 'none' }}>BUKID Hub</NavLink>
                    <NavLink to="/project-mauya" onClick={handleNormalLinkClick} style={{ display: 'block', padding: '0.55rem 0.6rem', borderRadius: 6, color: '#094A25', textDecoration: 'none', marginTop: '0.25rem' }}>Project MAUYA</NavLink>
                  </div>
                )}
              </li>
            </ul>
          )}
        </li>

        <li><NavLink to="/ethics" onClick={handleNormalLinkClick}>Research Ethics Extension & Integrity</NavLink></li>
        <li><NavLink to="/extension" onClick={handleNormalLinkClick}>Extension</NavLink></li>
                {/* Research Centers Dropdown - Mobile & Desktop */}
        
        
        {/* Research Centers */}
        <li className={`dropdown ${centersOpen ? 'open' : ''}`}>
          <div className="dropdown-header">
            <NavLink
              to="/centers"
              onClick={handleNormalLinkClick}
              className="dropdown-toggle"
            >
              Research Centers
            </NavLink>
            <button
              className="dropdown-arrow"
              onClick={toggleCenters}
              aria-expanded={centersOpen}
            >
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          {centersOpen && (
            <ul className="dropdown-menu">
              <li><NavLink to="/mindoro-development" onClick={handleNormalLinkClick}>Mindoro Development and Studies Center</NavLink></li>
              <li><NavLink to="/digital-innovation" onClick={handleNormalLinkClick}>Center for Digital Innovation, Cybersecurity and Emerging Technologies</NavLink></li>
              <li><NavLink to="/environmental-studies" onClick={handleNormalLinkClick}>Center for Environmental Studies</NavLink></li>
              <li><NavLink to="/fisheries-research" onClick={handleNormalLinkClick}>Fisheries Research and Development Center</NavLink></li>
              <li><NavLink to="/mimaropa-food" onClick={handleNormalLinkClick}>MIMAROPA Food Innovation Center</NavLink></li>
              <li><NavLink to="/island-education" onClick={handleNormalLinkClick}>Center for Island Education and Sustainability</NavLink></li>
              <li><NavLink to="/peace-criminology" onClick={handleNormalLinkClick}>Center for Peace, Criminology, and Law Enforcement Studies</NavLink></li>
              <li><NavLink to="/smart-agriculture" onClick={handleNormalLinkClick}>Center for Smart Agriculture and Biosystems Innovation</NavLink></li>
              <li><NavLink to="/textile-fiber" onClick={handleNormalLinkClick}>Natural Textile Fiber Innovation Center</NavLink></li>
            </ul>
          )}
        </li>
      </div>

      {/* Hamburger icon disappears when isOpen is true */}
      <div 
        className="hamburger" 
        onClick={toggleMenu} 
        style={{ display: isOpen ? 'none' : '' }}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}