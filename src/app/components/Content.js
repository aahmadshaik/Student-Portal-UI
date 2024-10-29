import React from "react";
import Announcements from "./Announcements";
import QuickLinks from "./QuickLinks";
import "../assets/styles/Content.css";
import ClassRecordings from "./ClassRecordings";

const Content = () => {
  return (
    <div className="container">
      <Announcements />
      <QuickLinks />
      <ClassRecordings />
    </div>
  );
};

export default Content;
