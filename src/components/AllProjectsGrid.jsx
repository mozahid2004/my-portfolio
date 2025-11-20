
// AllProjectsGrid.jsx
import React, { useState } from "react";
import { allProjects } from "../Data/ProjectData.js";
import "../pages/Portfolio.css";

export default function AllProjectsGrid() {
  const [query, setQuery] = useState("");
  const [showAll, setShowAll] = useState(false);

  const filtered = allProjects.filter((p) => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return (
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      (p.tech || []).join(" ").toLowerCase().includes(q)
    );
  });

  const visible = showAll ? filtered : filtered.slice(0, 12); // show first 12 by default

  return (
    <section className="all-section" aria-label="All projects">
      <div className="container">
        <h2 className="section-title">All Projects</h2>
        <p className="section-sub">A complete list — search or explore.</p>

        <div className="grid-controls">
          <input
            type="search"
            placeholder="Search projects, tech or description..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="search-input"
          />
          <button
            className="btn ghost"
            onClick={() => {
              setQuery("");
              setShowAll(false);
            }}
          >
            Reset
          </button>
        </div>

        <div className="projects-grid">
          {visible.map((p) => (
            <article className="grid-card" key={p.id}>
              <div className="grid-media">
                <img src={p.img} alt={p.title} />
              </div>

              <div className="grid-body">
                <div className="grid-header">
                  <h3>{p.title}</h3>
                  <span className="grid-year">{p.year}</span>
                </div>

                <p className="grid-desc">{p.description}</p>

                <div className="grid-tags">
                  {(p.tech || []).map((t) => (
                    <span key={t} className="grid-tag">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="grid-actions">
                  <a href={p.link} className="btn small" target="_blank" rel="noreferrer">
                    Live
                  </a>
                  <a href="#contact" className="btn outline small">
                    Hire
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="grid-footer">
          {filtered.length === 0 && <div className="muted">No projects found.</div>}

          {filtered.length > 12 && (
            <button className="btn" onClick={() => setShowAll((s) => !s)}>
              {showAll ? "Show fewer" : `Show all (${filtered.length})`}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
