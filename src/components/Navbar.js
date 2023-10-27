import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <ul className="navbar-items">
          <li className="navbar-list">
            <a href="/">General</a>
          </li>
          <li className="navbar-list">
            <a href="/business">Business</a>
          </li>
          <li className="navbar-list">
            <a href="/entertainment">Entertainment</a>
          </li>
          <li className="navbar-list">
            <a href="/health">Health</a>
          </li>
          <li className="navbar-list">
            <a href="/science">Science</a>
          </li>
          <li className="navbar-list">
            <a href="/sports">Sports</a>
          </li>
          <li className="navbar-list">
            <a href="/technology">Technology</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
