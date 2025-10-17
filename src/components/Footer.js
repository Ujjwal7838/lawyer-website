import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        
        <div className="footer-section">
          <h3>NyayConnect</h3>
          <p>Your Bridge to Justice, Simplified.</p>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/home">Find Lawyers</Link></li>
            <li><Link to="/appointments">My Appointments</Link></li>
            <li><Link to="/login">Login / Sign Up</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>contact@nyayconnect.com</p>
        </div>
        
      </div>
      
      <div className="footer-bottom">
        <p>© 2025 NyayConnect. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;