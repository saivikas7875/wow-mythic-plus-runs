import React from "react";
import "./styles.css";

export const Footer = () => {
  return (
    <div className="footer-content">
      <a
        className="link"
        href="https://raider.io/"
        target="_blank"
        rel="noreferrer"
      >
        <p>Data is from</p>
        <img
          className="footer-image"
          src="https://cdnassets.raider.io/images/brand/Logo_Black.png"
          alt="raider.io"
        />
      </a>
    </div>
  );
};
