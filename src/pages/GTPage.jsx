import React, { useEffect } from "react";
import ProjectHero from "../components/ProjectHeader/ProjectHero";
import "./common.css";

const GTPage = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ProjectHero
        title="Shop UI - Globetrotter Smoothies"
        videoUrl="videos/gbdemo.mp4"
        body="
        I crafted a vibrant website for a smoothie shop, ensuring an appealing online presence. I designed the shop's visual identity using Adobe Illustrator and Photoshop. I designed the brand elements using Adobe Illustrator. Using React and Next.js, I then brought the envisioned smoothie shop website to life, focusing on creating a seamless and user-friendly online experience."
      />

      <div className="links-container">
        <a
          href="https://github.com/hebz26/globetrotter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Click here to see the code</button>
        </a>
      </div>
    </>
  );
};

export default GTPage;
