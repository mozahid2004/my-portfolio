import React from "react";
import "./Services.css";
import { FaCode, FaMobileAlt, FaPaintBrush, FaServer, FaRocket, FaShoppingCart, FaBriefcase } from "react-icons/fa";
import { MdWeb } from "react-icons/md";

const Services = () => {
  const services = [
    {
      icon: <FaCode />,
      title: "Website Development",
      desc: "Fast, modern and scalable websites built with React, JavaScript and best industry standards.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Responsive UI/UX",
      desc: "Pixel-perfect, mobile-first designs that adapt beautifully across all screens.",
    },
    {
      icon: <FaPaintBrush />,
      title: "Custom Web Designing",
      desc: "Unique, brand-focused designs built to increase engagement and conversions.",
    },
    {
      icon: <FaServer />,
      title: "Backend Development",
      desc: "Node.js API development, authentication systems, database integration and more.",
    },
    {
      icon: <FaRocket />,
      title: "Performance Optimization",
      desc: "Speed-optimized websites with SEO improvements and high performance scores.",
    },
    {
      icon: <FaShoppingCart />,
      title: "E-Commerce Solutions",
      desc: "Full e-commerce stores with payments, admin dashboard and product management.",
    },
    {
      icon: <FaBriefcase />,
      title: "Business Solutions",
      desc: "Professional business websites, CRM tools, invoice systems and automation.",
    },
    {
      icon: <MdWeb />,
      title: "Landing Page",
      desc: "High-converting landing pages for marketing campaigns and product launches.",
    },
  ];
  
  return (
    <section className="services-section" id="services">
      <div className="services-header">
        <h2>Services</h2>
        <p>I help brands and businesses with end-to-end web development solutions.</p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <span className="service-icon">{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
