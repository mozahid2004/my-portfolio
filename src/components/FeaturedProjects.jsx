import React from "react";
import { Link } from "react-router-dom";
import { featuredProjects } from "../Data/ProjectData.js";
import { Github, ExternalLink } from "lucide-react";
import "./FeaturedProjects.css";

export default function FeaturedProjects() {
  return (
    <section id="portfolio" className="fp-section">
      <div className="fp-container">

        <h2 className="fp-title">Featured Projects</h2>
        <p className="fp-sub">Innovation, technology, and real client satisfaction.</p>

        <div className="fp-grid">
          {featuredProjects.map((p) => (
            <div className="fp-card" key={p.id}>

              {/* IMAGE WITH HOVER ICONS */}
              <div className="fp-img-wrapper">
                <img src={p.img} alt={p.title} className="fp-img" />

                <div className="fp-overlay">
                  <a href={p.repo} target="_blank" className="fp-icon-btn">
                    <Github size={22} />
                  </a>
                  <a href={p.link} target="_blank" className="fp-icon-btn">
                    <ExternalLink size={22} />
                  </a>
                </div>
              </div>

              {/* CONTENT */}
              <div className="fp-content">
                <h3 className="fp-project-title">{p.title}</h3>
                <p className="fp-desc">{p.description}</p>

                <div className="fp-tags">
                  {p.tech.map((t) => (
                    <span key={t} className="fp-tag">{t}</span>
                  ))}
                </div>

                {/* CUSTOMER REVIEW */}
                <div className="fp-review-box">
                  <div className="fp-stars">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <span key={idx} className={idx < p.rating ? "star filled" : "star"}>★</span>
                    ))}
                  </div>

                  <p className="fp-review-text">“{p.review}”</p>
                  <div className="fp-review-client">— {p.client}</div>
                </div>

              </div>
            </div>
          ))}
        </div>

        <div className="fp-view-all">
          <Link to="/all-projects" className="fp-all-btn">View All Projects →</Link>
        </div>

      </div>
    </section>
  );
}
