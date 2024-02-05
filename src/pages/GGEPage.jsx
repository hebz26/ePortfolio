import React, { useEffect } from "react";
import ProjectHero from "../components/ProjectHeader/ProjectHero";
import "./common.css";

const GGEPage = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ProjectHero
        title="Landing Page - GGE"
        videoUrl="videos/gge-landing-page.mp4"
        body="I designed a captivating landing page for Green Gather Events, an eco-friendly event planning company. Starting with Adobe Illustrator, I created the brand identity and then used Figma to shape the website's UI. Finally, I developed the website using HTML, CSS, and Bootstrap JS."
      />

      <div className="links-container">
        <a
          href="https://hebz26.github.io/GGE-Landing-Page/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Click here to visit the website</button>
        </a>
        <a
          href="https://github.com/hebz26/GGE-Landing-Page"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Click here to see the code</button>
        </a>
      </div>
    </>
  );
};

export default GGEPage;
