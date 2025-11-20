// FeaturedProjects.jsx
import React from "react";
import { Link } from "react-router-dom";
import { featuredProjects } from "../Data/ProjectData.js";
import "../pages/Portfolio.css";

export default function FeaturedProjects() {
  return (
    <section id="portfolio" className="featured-section">
      <div className="container">

        <h2 className="section-title">Featured Projects</h2>
        <p className="section-sub">Top work — case studies and client feedback.</p>

        <div className="timeline-container">
          <div className="timeline-line"></div>

          {featuredProjects.map((p, i) => {
            const reverse = i % 2 !== 0;

            return (
              <div className={`timeline-row ${reverse ? "reverse" : ""}`} key={p.id}>
                {/* TIMELINE DOT */}
                <div className="timeline-dot"></div>

                {/* PROJECT CARD */}
                <div className="timeline-card project-card">
                  <div className="img-box">
                    <img src={p.img} alt={p.title} />
                    <span className="year-badge">{p.year}</span>
                  </div>

                  <div className="content">
                    <h3>{p.title}</h3>
                    <p>{p.description}</p>

                    <div className="tags">
                      {p.tech.map((t) => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>

                    <div className="actions">
                      <a href={p.link} target="_blank" className="btn">View Project</a>
                      <a href="#contact" className="btn ghost">Hire Me</a>
                    </div>
                  </div>
                </div>

                {/* REVIEW CARD */}
                <div className="timeline-card review-card">
                  <div className="review-head">
                    <div className="avatar">{p.client[0]}</div>

                    <div>
                      <div className="client-name">{p.client}</div>
                      <div className="client-role">Client</div>
                    </div>

                    <div className="rating">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <span key={idx} className={idx < p.rating ? "star filled" : "star"}>
                          ★
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="review-text">“{p.review}”</p>

                  <div className="actions small">
                    <a href={p.link} target="_blank" className="btn small">See Live</a>
                    <a href="#contact" className="btn outline small">Let's Talk</a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="view-all-wrapper">
          <Link to="/all-projects" className="btn view-all-btn">
            View All Projects →
          </Link>
        </div>
      </div>
    </section>
  );
}
