import React, { useState } from "react";
import img from "../../images/logo.png";
import "../Navbar/Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navcontainer">
      <img className="logo" src={img} alt="img" />
      <div className={`navbar ${menuOpen ? "open" : ""}`}>
        <a href="#home" className="btn-explore">
          Home
        </a>
        <a href="#quote" className="btn-explore">
          Quotes
        </a>
        <a href="#planner" className="btn-explore">
          Planner
        </a>
      </div>
      <div className="burger" onClick={toggleMenu}>
        <div className={`line ${menuOpen ? "open" : ""}`}></div>
        <div className={`line ${menuOpen ? "open" : ""}`}></div>
        <div className={`line ${menuOpen ? "open" : ""}`}></div>
      </div>
    </div>
  );
}
