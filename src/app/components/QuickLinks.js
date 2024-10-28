import React from "react";
import data from "../assets/data/data.json";
import "../assets/styles/QuickLinks.css";

const quickLinks = () => {
  const colors = ["#4749B3", "#E66DFF", "#6669FE"];

  return (
    <div className="quick-links-container">
      <h2 className="headingLink">Quick Links</h2>

      <ul className="quick-links-list">
        {data.quickLinks.map((link, index) => (
          <li
            key={index}
            // className="quick-link-item"
            className={`quick-link-item color-${index}`}
          >
            <h3>{link.name}</h3>
            <a className="linkDisc">{link.description}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default quickLinks;
