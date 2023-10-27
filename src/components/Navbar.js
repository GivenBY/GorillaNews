import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <ul className="navbar-items">
          <li className="navbar-list">
            <Link to="/">General</Link>
          </li>
          <li className="navbar-list">
            <Link to="/business">Business</Link>
          </li>
          <li className="navbar-list">
            <Link to="/entertainment">Entertainment</Link>
          </li>
          <li className="navbar-list">
            <Link to="/health">Health</Link>
          </li>
          <li className="navbar-list">
            <Link to="/science">Science</Link>
          </li>
          <li className="navbar-list">
            <Link to="/sports">Sports</Link>
          </li>
          <li className="navbar-list">
            <Link to="/technology">Technology</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
