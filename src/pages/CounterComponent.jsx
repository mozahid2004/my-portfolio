import React from "react";
import { FaBriefcase, FaProjectDiagram, FaAward } from "react-icons/fa";
import "./CounterComponent.css";

const CounterComponent = () => {
  const stats = [
    {
      icon: <FaBriefcase />,
      number: "1+ Years",
      label: "Experience"
    },
    {
      icon: <FaProjectDiagram />,
      number: "10+",
      label: "Projects Done"
    },
    {
      icon: <FaAward/>,
      number: "5+",
      label: "Award"
    }
  ];

  return (
    <section className="counter-section">
      <div className="counter-container">
        {stats.map((item, index) => (
          <div key={index} className="counter-item">
            <span className="counter-icon">{item.icon}</span>
            <h3>{item.number}</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CounterComponent;
