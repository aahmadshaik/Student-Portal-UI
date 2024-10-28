"use client";
import React, { useState } from "react";
import "../assets/styles/ClassRecordings.css";
import data from "../assets/data/data.json";
import Image from "next/image";
import liveClass from "../assets/icons/liveClass.png";

const ClassRecordings = () => {
  const [zoomed, setZoomed] = useState(false);
  const [currentImage, setCurrentImage] = useState(null); // Track the current image being zoomed

  const handleImageClick = (index) => {
    setCurrentImage(index); // Set the current image index
    setZoomed(true); // Show the zoomed state
  };

  const handleCloseZoom = () => {
    setZoomed(false); // Close the zoomed view when clicking outside
    setCurrentImage(null); // Reset the current image
  };

  return (
    <div className="ClassRecordings">
      <h2 className="Class-Heading">Access Class Recordings</h2>
      <div className="ClassRecordings-container">
        <input
          className="Search-Bar"
          type="search"
          placeholder="Search For Class Recordings"
        />
        <div className="Filter-Options">
          <p className="left-element">Filter By:</p>
          <select className="middle-element" id="options">
            <option value="">This Week</option>
            <option value="math">Math</option>
            <option value="science">Science</option>
            <option value="history">History</option>
            <option value="english">English</option>
          </select>
          <select className="third-element" id="options">
            <option value="">All Subjects</option>
            <option value="math">Math</option>
            <option value="science">Science</option>
            <option value="history">History</option>
            <option value="english">English</option>
          </select>
        </div>

        <ul>
          {data.recording.map((recording, index) => (
            <li key={index} className={`recording-item colors-${index}`}>
              <div className="video" onClick={() => handleImageClick(index)}>
                <Image
                  src={liveClass}
                  alt="live class"
                  className={`recording-image ${
                    zoomed && currentImage === index ? "zoomed" : ""
                  }`}
                />
                <span className="play-now">Play Now</span>
              </div>
              <p className="class-name">
                {recording.class} - {recording.subject}
              </p>
              <p className="session-info">{recording.session}</p>
              <p className="recording-date">{recording.date}</p>
            </li>
          ))}
        </ul>

        {/* Overlay with zoomed image and Class Heading */}
        {zoomed && (
          <div className="overlay" onClick={handleCloseZoom}>
            <div className="overlay-content">
              {/* <h2 className="Class-Heading zoomed-heading">
                Fundamentals of Organic Chemistry
              </h2> */}
              <Image
                src={liveClass}
                alt="Zoomed class"
                className="zoomed-image"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClassRecordings;
