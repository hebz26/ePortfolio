import React, { useEffect } from "react";
import ProjectHero from "../components/ProjectHeader/ProjectHero";

const GlobePage = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ProjectHero
        title="Project 1"
        videoUrl="videos/footage.mp4"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
    </>
  );
};

export default GlobePage;
