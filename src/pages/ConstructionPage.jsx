import React from "react";
import "./ConstructionPage.css";

const ConstructionPage = () => {
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
                this page is currently
                <br />
                under construction
              </span>
            </div>
          </div>
          {/*right side*/}
          <div className="flexCenter construction-right">
            <div className="imgg-container">
              <img src="images/construction.png" alt=" construction" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ConstructionPage;
