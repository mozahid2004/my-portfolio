import React from "react";
import "./SocialMedia.css";
import { FaWhatsapp, FaLinkedin, FaInstagram, FaYoutube, FaGithub } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="social-container">
      <a
        href="https://wa.me/8260760349"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon whatsapp"
      >
        <FaWhatsapp />
      </a>

      <a
        href="https://www.linkedin.com/in/mozahid-izhar-0a7b19268"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon linkedin"
      >
        <FaLinkedin />
      </a>

      <a
        href="https://www.instagram.com/mozahid_2004"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon instagram"
      >
        <FaInstagram />
      </a>

      <a
        href="https://www.youtube.com/@mozahid006"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon youtube"
      >
        <FaYoutube />
      </a>

      <a
        href="https://github.com/mozahid-2004"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon github"
      >
        <FaGithub />
      </a>


    </div>
  );
};

export default SocialMedia;
