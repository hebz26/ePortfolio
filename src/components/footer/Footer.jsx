import React from "react";
import "./Footer.css";

const Footer = () => {
  const copyEmailToClipboard = () => {
    const emailText = "hebasayed1603@gmail.com";
    navigator.clipboard.writeText(emailText);
    alert("Email copied to clipboard!");
  };

  return (
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
          <a href="">about</a>
          <a href="">projects</a>
          <a href="">resume</a>
        </div>
        <div className="social-title">
          <h3>social</h3>
          <a href="">linkedin</a>
          <a href="">github</a>
          <a href="">instagram</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
