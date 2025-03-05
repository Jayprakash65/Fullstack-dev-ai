import React from "react";
import "./Experience.css";

const Experience = ({ darkMode }) => {
  return (
    <div className="experience-container" id="experience">
      <div className="achievement">
        <div
          className="achievement-circle"
          style={{ color: darkMode ? "#fca311" : "#333" }}
        >
          8+
        </div>
        <span className="achievement-label" style={{ color: darkMode ? "#fff" : "#555" }}>
          Years
        </span>
        <span className="achievement-title">Experience</span>
      </div>

      <div className="achievement">
        <div
          className="achievement-circle"
          style={{ color: darkMode ? "#fca311" : "#333" }}
        >
          20+
        </div>
        <span className="achievement-label" style={{ color: darkMode ? "#fff" : "#555" }}>
          Completed
        </span>
        <span className="achievement-title">Projects</span>
      </div>
      <div className="achievement">
        <div
          className="achievement-circle"
          style={{ color: darkMode ? "#fca311" : "#333" }}
        >
          5+
        </div>
        <span className="achievement-label" style={{ color: darkMode ? "#fff" : "#555" }}>
          Companies
        </span>
        <span className="achievement-title">Work</span>
      </div>
    </div>
  );
};

export default Experience;
