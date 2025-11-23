import React from "react"; // React must be in scope for JSX
import { Link } from "react-router-dom";
import "../App.css";

const Navbar: React.FC = () => {
  return (
    <nav role="navigation" className="navbar">
      {/* Logo */}
      <h2 className="logo">Andrea Dev</h2>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li>
          <Link to="/" aria-label="Go to Basic Info page">
            Basic Info
          </Link>
        </li>
        <li>
          <Link to="/work" aria-label="Go to Work page">
            Work
          </Link>
        </li>
        <li>
          <Link to="/skills" aria-label="Go to Skills page">
            Skills
          </Link>
        </li>
        <li>
          <Link to="/resources" aria-label="Go to Resources page">
            Resources
          </Link>
        </li>
        <li>
          <Link to="/setup" aria-label="Go to Developer Setup page">
            Developer Setup
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
