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
        body="I designed and developed a captivating landing page for Green Gather Events, an eco-friendly event planning company. I developed the website using HTML, CSS, and Bootstrap JS."
      />

      <div className="links-container">
        <a
          href="https://hebz26.github.io/GGE-Landing-Page/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Visit the website</button>
        </a>
        <a
          href="https://github.com/hebz26/GGE-Landing-Page"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>See the code</button>
        </a>
        <a
          href="https://www.instagram.com/p/C1XQbccrHjH/?img_index=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>See the brand</button>
        </a>
      </div>
      <div className="paras">
        <p>
          This project was for a design brief by The Brief Collective on
          Instagram. I carefully designed the brand's identity using Adobe
          Illustrator. I used Figma to create a mockup for the website and then
          started developing. I used Bootstrap JS mainly for the navigation.{" "}
        </p>
      </div>
    </>
  );
};

export default GGEPage;
