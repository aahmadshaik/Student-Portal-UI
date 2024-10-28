// src/components/Header.js
import React from "react";
import Image from "next/image";
import Logo from "../assets/icons/Logo.png"; // Adjust the path as needed
import "../assets/styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <Image
        className="logo"
        src={Logo}
        alt="Logo"
        width={96.67}
        height={49.03}
      />
      <h1 className="custom-heading">Student Portal</h1>
      <div>
        <h1 className="userName"> Hello, Gabrisa!</h1>
        <p className="subject">class 7, Math + Science</p>
      </div>
    </header>
  );
};

export default Header;
