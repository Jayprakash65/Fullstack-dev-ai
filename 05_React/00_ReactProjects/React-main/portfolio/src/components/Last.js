import React from "react";
import "./Last.css";

const Last = () => {
  return (
    <div className="footer-container footer-spacing">
      <div className="gradient-bg"></div>
      
      <div className="footer-content">
        <span className="footer-email">contact@username.com</span>
        <div className="social-icons">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Last;

