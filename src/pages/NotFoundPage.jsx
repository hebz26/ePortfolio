import React from "react";
import "./NotFoundPage.css";

const NotFoundPage = () => {
  return (
    <>
      <section className="NotFound-wrapper">
        <div className="paddings innerWidth flexCenter NotFound-container">
          <div className="flexColStart NotFound-left">
            <div className="NotFound-title">
              <h1>404 error</h1>
            </div>
            <div className=" NotFound-des">
              <span>
                <br />
                page not found
              </span>
            </div>
          </div>
          {/*right side*/}
          <div className="flexCenter NotFound-right">
            <div className="NotFoundimg-container">
              <img src="images/NotFound.png" alt="Page Not Found" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
