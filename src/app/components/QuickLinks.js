import React from "react";
import data from "../assets/data/data.json";
import "../assets/styles/QuickLinks.css";
import Image from "next/image";

import canvasIcon from "../assets/icons/canvas.png";
import liveClassIcon from "../assets/icons/personalcard.png";
import contactTeacherIcon from "../assets/icons/Group.png";

const imageMap = {
  "canvas.png": canvasIcon,
  "personalcard.png": liveClassIcon,
  "Group.png": contactTeacherIcon,
};

const QuickLinks = () => {
  return (
    <div className="quick-links-container">
      <h2 className="headingLink">Quick Links</h2>

      <ul className="quick-links-list">
        {data.quickLinks.map((link, index) => (
          <li key={index} className={`quick-link-item color-${index}`}>
            <Image
              className="quickLinks-logo"
              src={imageMap[link.logo]}
              alt={link.name}
              width={25}
              height={25}
            />
            <h3>{link.name}</h3>
            <a className="linkDisc">{link.description}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuickLinks;
