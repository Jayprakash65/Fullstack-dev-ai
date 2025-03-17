import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-left">
        <div className="navbar-brand">Portfolio</div>
      </div>
      <div className="navbar-right">
        <ul className="navbar-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#works">Experience</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
        </ul>
        <a href="#contact">
          <button className="contact-button">Contact</button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
