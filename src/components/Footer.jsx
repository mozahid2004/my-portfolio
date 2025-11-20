// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaLocationArrow,
} from "react-icons/fa";

import "./Footer.css";

export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer-container">

        {/* BRAND SECTION */}
        <div className="footer-col">
          <h2 className="footer-logo">Mozahid<span>Dev</span></h2>
          <p className="footer-desc">
            I build modern websites, web applications, and intuitive digital experiences.
            Let’s bring your ideas to life.
          </p>

          <div className="footer-socials">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/all-projects">Projects</Link></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Featured Work</a></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div className="footer-col">
          <h3>Services</h3>
          <ul>
            <li>Website Development</li>
            <li>Full-Stack Web Apps</li>
            <li>UI/UX Design</li>
            <li>Hosting & Deployment</li>
            <li>SEO Optimization</li>
          </ul>
        </div>

        {/* CONTACT SECTION */}
        <div className="footer-col">
          <h3>Contact</h3>

          <p><FaEnvelope /> mozahidizhar54@gmail.com</p>
          <p><FaPhoneAlt /> +91 8260760349</p>
          <p><FaLocationArrow /> Patna, Bihar, India</p>

          <a href="#" className="footer-btn">Hire Me →</a>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} MozahidDev — All Rights Reserved
      </div>
    </footer>
  );
}
