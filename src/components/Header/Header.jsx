import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./images/logo.png" alt="logo" width={50} />
        <div className="flexCenter h-menu">
          <a href="/home">home</a>
          <a href="/about">about</a>

          <a href="/pdf/oldresume.pdf" download="oldresume.pdf">
            resume
          </a>
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
          {/*
            <button className='button'>
            <a href=''>Contact
                
            </a>
  </button> */}
        </div>
      </div>
    </section>
  );
};

export default Header;
