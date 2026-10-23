import React, { useState } from "react";
import logo from "./assets/logo.jpg";
import "./MyNav.css"; // Make sure your CSS file is imported

function MyNav() {
  // State to track if mobile menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle function for the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="nav-container">
        <div className="logo-box">
          <span className="logo-main">ZETTA</span>
          <span className="logo-sub">ACADEMY</span>
        </div>

        {/* Hamburger Menu Icon */}
        <div
          className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Conditional "active" class added to nav-links when menu is open */}
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <a href="#" onClick={() => setIsMenuOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setIsMenuOpen(false)}>
              Careers
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setIsMenuOpen(false)}>
              Tech blog
            </a>
          </li>

          <li className="dropdown-container">
            <a href="/services" className="dropdown-triggers">
              Services/courses
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="#">Web Design</a>
              </li>
              <li>
                <a href="#">SEO Optimization</a>
              </li>
              <li>
                <a href="#">Cloud Hoisting</a>
              </li>
              <li>
                <a href="#" style={{ fontSize: "25px", fontFamily: "cursive" }}>
                  Courses
                </a>
              </li>
              <ul>
                <li>
                  <a href="#">Digital Marketing</a>
                </li>
                <li>
                  <a href="#">Product design</a>
                </li>
                <li>
                  <a href="#">Cyber security + Ethical Hacking</a>
                </li>
                <li>
                  <a href="#">Front end web development</a>
                </li>
                <li>
                  <a href="#">Full stack software development</a>
                </li>
                <li>
                  <a href="#">Back end web development</a>
                </li>
                <li>
                  <a href="#">Project management</a>
                </li>
                <li>
                  <a href="#">Product management</a>
                </li>
              </ul>
            </ul>
          </li>

          <li>
            <a href="#" onClick={() => setIsMenuOpen(false)}>
              About
            </a>
          </li>

          <li className="apply-btn">
            <a href="#" onClick={() => setIsMenuOpen(false)}>
              Apply
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MyNav;
