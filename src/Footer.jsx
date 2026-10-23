import React from "react";



function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <div className="footer-container">
        
        {/* Left Side: Modern Cyberpunk Logo */}
        <div className="footer-brand">
          <div className="logo-box">
            <span className="logo-main">ZETTA</span>
            <span className="logo-sub">ACADEMY</span>
          </div>
          <p className="footer-tagline">Scaling technical talent and creative mastery for tomorrow's economy.</p>
        </div>

        {/* Right Side: Quick Links Column Grid */}
        <div className="footer-links-grid">
          <div className="footer-column">
            <h4>Programs</h4>
            <a href="#bootcamps">Bootcamps</a>
            <a href="#enterprise">Enterprise Solutions</a>
            <a href="#mentorship">1-on-1 Coaching</a>
          </div>
          <div className="footer-column">
            <h4>Academy</h4>
            <a href="#about">About Us</a>
            <a href="#careers">Careers</a>
            <a href="#blog">Tech Blog</a>
          </div>
          <div className="footer-column">
            <h4>Legal</h4>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>

      </div>

      {/* Bottom Copyright Strip */}
      <div className="footer-bottom">
        <p>&copy; {currentYear} Zetta Academy. All rights reserved.</p>
      </div>
    </footer>
  );
}





export default Footer