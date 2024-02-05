import React, { useState } from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <Link to="/" className="title">
        <img src="./images/logo.png" alt="logo" width={50} />
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/home">home</NavLink>
        </li>
        <li>
          <NavLink to="/about">about</NavLink>
        </li>
        <li>
          <a href="/pdf/oldresume.pdf" download="oldresume.pdf">
            resume
          </a>
        </li>
        <li>
          <a
            href="https://github.com/hebz26"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./images/github.png"
              alt="GitHub"
              width={25}
              height={25}
              className="nav-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/heba-sayed6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./images/linkedin.png"
              alt="LinkedIn"
              width={25}
              height={25}
              className="nav-icon"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
