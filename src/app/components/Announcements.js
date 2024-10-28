import React from "react";
import data from "../assets/data/data.json";
import "../assets/styles/Announcements.css";
import video from "../assets/icons/video logo.png";
import Image from "next/image";

const Announcements = () => {
  return (
    <div className="A-container">
      <h2 className="heading1">Announcements</h2>

      <div className="list-box">
        <ul>
          {data.announcements.map((announcement, index) => (
            <span key={index}>
              <li>{announcement.message}</li>
            </span>
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
                ></Image>
                <p>
                  {schedule.class} , {schedule.subject} | {schedule.session}
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
