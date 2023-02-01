import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="header">
      <div className="container">
        <h2>
          Vaibhav <span className="primary">Sutar</span>
        </h2>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#skill">Skill</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          
        </ul>
      

        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={25} style={{ color: "#333" }} />
          ) : (
            <FaBars size={25} style={{ color: "#333" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
