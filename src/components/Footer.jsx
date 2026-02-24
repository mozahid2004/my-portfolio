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

        {/* BRAND */}
        <div className="footer-col">
          <h2 className="footer-logo">Mozahid<span>Dev</span></h2>

          <p className="footer-desc">
            I build modern websites, web applications, and intuitive digital experiences.
            Let’s bring your ideas to life.
          </p>

          <div className="footer-socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="Github"><FaGithub /></a>
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

        {/* CONTACT */}
        <div className="footer-col">
          <h3>Contact</h3>

          <p>
            <FaEnvelope />
            <a href="mailto:mozahidizhar54@gmail.com">
              mozahidizhar54@gmail.com
            </a>
          </p>

          <p>
            <FaPhoneAlt />
            <a href="tel:+918260760349">
              8260760349
            </a>
          </p>

          <p>
            <FaLocationArrow />
            <a
              href="https://www.google.com/maps?q=Patna,Bihar,India"
              target="_blank"
              rel="noopener noreferrer"
            >
              Patna, Bihar, India
            </a>
          </p>

          <a href="#contact" className="footer-btn">
            Hire Me →
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} MozahidDev — All Rights Reserved
      </div>
    </footer>
  );
}