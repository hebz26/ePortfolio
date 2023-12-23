import React from "react";
import "./ProjectHero.css";

function ProjectHero({ title, videoUrl, body }) {
  return (
    <section className="intro-wrapper">
      <div className="intro-container">
        {/* Top side */}
        <div className=" phero-top">
          <div className="phero-title">
            <h1>{title}</h1>
          </div>
          <div className="phero-des">{body}</div>
        </div>

        {/* bottom side */}
        <div className=" phero-bottom">
          <div className="video-container">
            {/* Video */}
            <video width="100%" height="auto" controls>
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectHero;
