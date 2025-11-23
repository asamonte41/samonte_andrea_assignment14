import React from "react"; // add this to the top of Navbar.tsx and other pages
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {" "}
      <h2 className="logo">Andrea Dev</h2>
      <ul className="nav-links">
        <li>
          <Link to="/">Basic Info</Link>
        </li>
        <li>
          <Link to="/work">Work</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/resources">Resources</Link>
        </li>
        <li>
          <Link to="/setup">Developer Setup</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
