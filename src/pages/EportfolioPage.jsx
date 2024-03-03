import React, { useEffect } from "react";
import ProjectHero from "../components/ProjectHeader/ProjectHero";
import "./common.css";

const EportfolioPage = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ProjectHero
        title="My Eportfolio"
        videoUrl="videos/portdemo.mp4"
        body="I built my ePortfolio using React with Vite as the build tool, showcasing a technical fusion of design and development. I deployed it using Netlify."
      />

      <div className="links-container">
        <a
          href="https://github.com/hebz26/ePortfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Click here to see the code</button>
        </a>
      </div>
    </>
  );
};

export default EportfolioPage;
