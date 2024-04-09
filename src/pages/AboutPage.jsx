import React from "react";
import "./about.css";
const AboutPage = () => {
  return (
    <section className="about-wrapper">
      <div className="about-container">
        {/*left side*/}
        <div className="about-left">
          <div className="about-title">
            <h1>Hello!</h1>
          </div>
          <div className=" about-des">
            <span>
              I'm Heba Sayed, a driven and enthusiastic student pursuing a
              Bachelor's degree in Software Engineering. Currently approaching
              my senior year, I am deeply passionate about front-end development
              and design. Combining my technical skills with a keen eye for
              aesthetics, I strive to create visually stunning and user-friendly
              digital experiences. My journey in software engineering has been
              marked by a relentless pursuit of knowledge and a commitment to
              pushing the boundaries of innovation. Beyond the classroom, I
              actively seek opportunities to apply my skills through
              internships, projects, and collaborations. With a strong
              foundation in software engineering principles and a creative
              mindset, I am excited to continue my journey and make a meaningful
              impact in the tech industry.
            </span>
          </div>
        </div>
        {/*right side*/}
        <div className="about-right">
          <div className="about-image-container">
            <img src="images/me.png" alt="picture of me" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
