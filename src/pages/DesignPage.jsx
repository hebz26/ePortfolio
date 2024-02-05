import React from "react";
import "./ConstructionPage.css";

const DesignPage = () => {
  return (
    <>
      <section className="construction-wrapper">
        <div className="paddings innerWidth flexCenter construction-container">
          <div className="flexColStart construction-left">
            <div className="construction-title">
              <h1>sorry about that!</h1>
            </div>
            <div className=" construction-des">
              <span>
                {" "}
                This page is currently
                <br />
                under construction.
              </span>
              <span>
                <br /> Please visit my
                <br />
                <a
                  href="https://www.instagram.com/hebzstudio/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <b>
                    <u>Instagram</u>
                  </b>
                </a>{" "}
                to see my work.
              </span>
            </div>
          </div>
          {/*right side*/}
          <div className="flexCenter construction-right">
            <div className="imgg-container">
              <a
                href="https://www.instagram.com/hebzstudio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="images/instagram-icon.png"
                  alt="Instagram"
                  width={350}
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DesignPage;
