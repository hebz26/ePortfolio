import React from "react";
import "./Footer.css";

const Footer = () => {
  const copyEmailToClipboard = () => {
    const emailText = "hebasayed1603@gmail.com";
    navigator.clipboard.writeText(emailText);
    alert("Email copied to clipboard!");
  };

  return (
    <section className="footer-section">
      <div className="footer-container">
        <div className="left-div">
          <div className="footer-title">
            <h3>want to reach me?</h3>
          </div>
          <div className="emailBtn">
            <button onClick={copyEmailToClipboard}>copy email</button>
          </div>
          <div className="footerImg">
            <img src="images/footer.png" alt="" />
          </div>
        </div>
        <div className="right-div">
          <div className="more-title">
            <h3>more</h3>
            <a href="/about">about</a>
            <a href="/projects">projects</a>
            <a href="/pdf/oldresume.pdf" download="oldresume.pdf">
              resume
            </a>
          </div>
          <div className="social-title">
            <h3>social</h3>
            <a
              href="https://www.linkedin.com/in/heba-sayed6"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </a>
            <a
              href="https://github.com/hebz26"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
            <a href="/notfound">instagram</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
