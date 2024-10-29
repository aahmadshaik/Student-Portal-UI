import React from "react";
import data from "../assets/data/data.json";
import "../assets/styles/Announcements.css";
import video from "../assets/icons/video logo.png";
import Image from "next/image";
import SunIcon from "../assets/icons/sun.png";
import clipIcon from "../assets/icons/clipboard-text.png";

const imageMap = {
  "sun.png": SunIcon,
  "clipboard-text.png": clipIcon,
};

const Announcements = () => {
  return (
    <div className="A-container">
      <h2 className="heading1">Announcements</h2>

      <div className="list-box">
        <ul>
          {data.announcements.map((announcement, index) => (
            <li key={index} className="announcement-item">
              <Image
                src={imageMap[announcement.icon]}
                alt="icon"
                width={24}
                height={24}
              />
              <span className="announcement-text">{announcement.message}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="c-container">
        <h2 className="heading2">Your Class Schedule</h2>
        <div className="list2-box">
          <ul>
            {data.classSchedule.map((schedule, index) => (
              <li key={index} className={`classSchedule color-${index}`}>
                <Image
                  id="img"
                  className="videoLogo"
                  src={video}
                  alt="video logo"
                />
                <p>
                  {schedule.class}, {schedule.subject} | {schedule.session}
                </p>
                <h2>
                  {schedule.date} {schedule.time}
                </h2>
                <h1>{schedule.day}</h1>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
