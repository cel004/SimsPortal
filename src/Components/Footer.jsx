import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footerContainer">
      <p className="text">
        For any inquiries or suggestions, contact us at team@simsportal.com
      </p>
      <img className="footerLogo" src="./LOGO.svg" alt="Logo" />
      <ul>
        <li><a href="#">Terms and Conditions</a></li>
        <li><a href="#">Privacy & Policies</a></li>
      </ul>
    </div>
  );
};

export default Footer;
