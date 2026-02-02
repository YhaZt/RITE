import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">MinSU RITE</div>
      <ul className="navbar-links">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/research">Research</NavLink></li>
        <li><NavLink to="/extension">Extension</NavLink></li>
        <li><NavLink to="/innovation">Innovation</NavLink></li>
        <li><NavLink to="/ethics">Research Ethics</NavLink></li>
        <li><NavLink to="/centers">Research Centers</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  );
}
