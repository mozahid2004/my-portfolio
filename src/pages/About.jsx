import React from "react";
import "./About.css";
import MyAboutpic from "../assets/MyAboutPic.png";

export default function About() {
  return (
    <section id="about" className="about-unique">
      <div className="about-wrapper">

        {/* LEFT PANEL — IMAGE + HIGHLIGHTS */}
        <div className="about-left">
          <div className="profile-card">
            <div className="glow-circle"></div>
            <img src={MyAboutpic} alt="profile" className="profile-img" />
          </div>

          <div className="highlight-box">
            <h3>1+ Years Experience</h3>
            <p>Building modern web apps & digital brands</p>
          </div>

          <div className="highlight-box">
            <h3>Entrepreneur</h3>
            <p>Founder of a Web Agency, helping businesses grow</p>
          </div>
        </div>

        {/* RIGHT PANEL — CONTENT */}
        <div className="about-right">
          <h2 className="about-heading">Who I Am</h2>

          <p className="about-desc">
            I’m <span className="highlight-color">Mozahid Izhar</span>, a
            passionate <b>Web Developer</b> and <b>Entrepreneur</b> who loves
            creating impactful digital products that solve real problems.
            I help startups, brands and individuals build identity using modern
            technology, UI/UX, and creative strategy.
          </p>

          <h3 className="sub-heading">My Skills</h3>

          {/* FLOATING SKILL CARDS */}
          <div className="skills-floating">
            <div className="skill-card">
              <img src="../../Public/Icons/HTMLIcon.jpeg" alt="HTML" />
              <p>HTML</p>
            </div>

            <div className="skill-card">
              <img src="../../Public/Icons/CSSIcon.jpeg" alt="CSS" />
              <p>CSS</p>
            </div>

            <div className="skill-card">
              <img src="../../Public/Icons/JavaScriptIcon.jpeg" alt="JS" />
              <p>JavaScript</p>
            </div>

            <div className="skill-card">
              <img src="../../Public/Icons/ReactIcon.jpeg" alt="React" />
              <p>React</p>
            </div>

            <div className="skill-card">
              <img src="../../Public/Icons/NodeIcon.jpeg" alt="Node" />
              <p>Node.js</p>
            </div>

            <div className="skill-card">
              <img src="../../Public/Icons/MongoDBIcon.jpeg" alt="Mongo" />
              <p>MongoDB</p>
            </div>

            <div className="skill-card">
              <img src="../../Public/Icons/GitIcon.jpeg" alt="Git" />
              <p>MongoDB</p>
            </div>

            <div className="skill-card">
              <img src="../../Public/Icons/GithubIcon.jpeg" alt="GitHub" />
              <p>MongoDB</p>
            </div>

          </div>
          
          <a
            href="#footer"
            className="connect-btn"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#footer").scrollIntoView({
                behavior: "smooth"
              });
            }}
          >
            Let's Connect
          </a>

        </div>
      </div>
    </section>
  );
}
