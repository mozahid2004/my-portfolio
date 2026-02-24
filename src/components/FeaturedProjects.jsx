import React from "react";
import { Link } from "react-router-dom";
import { featuredProjects } from "../Data/ProjectData.js";
import { Github, ExternalLink } from "lucide-react";
import "./FeaturedProjects.css";

export default function FeaturedProjects() {
  return (
    <section id="portfolio" className="fp-section">
      <div className="fp-container">

        <div className="fp-header">
          <h2>Featured Projects</h2>
          <p>Crafted with precision, performance & modern UI principles.</p>
        </div>

        <div className="fp-grid">
          {featuredProjects.map((p) => (
            <div className="fp-card" key={p.id}>

              <div className="fp-img-wrapper">
                <img src={p.img} alt={p.title} />

                <div className="fp-overlay">
                  {p.repo && (
                    <a href={p.repo} target="_blank" rel="noreferrer">
                      <Github size={20} />
                    </a>
                  )}
                  <a href={p.link} target="_blank" rel="noreferrer">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <div className="fp-content">
                <h3>{p.title}</h3>
                <p>{p.description}</p>

                <div className="fp-tags">
                  {p.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>


              </div>

            </div>
          ))}
        </div>

        <div className="fp-view-all">
          <Link to="/all-projects">View All Projects →</Link>
        </div>

      </div>
    </section>
  );
}