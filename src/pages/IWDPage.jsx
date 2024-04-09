import React, { useEffect } from "react";
import ProjectHero from "../components/ProjectHeader/ProjectHero";
import "./common.css";

const IWDPage = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ProjectHero
        title="IWD Summit 2024"
        videoUrl="videos/iwdsummit.mp4"
        body="
        I worked collaboratively within a team to design and develop the website for the International Women’s Day Summit in Detroit, sponsored by Google's Women Techmakers. We utilized React and Tailwind to create a robust and dynamic web platform. The website boasts seamless navigation, intuitive pagination, and fully responsive design, all meticulously crafted to ensure optimal user experience across various devices. Additionally, our implementation adheres to best practices, including modularization, code versioning, and continuous integration, to deliver a high-quality and maintainable product. "
      />
      <div className="links-container">
        <a
          href="https://www.iwdsummit.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Visit Website</button>
        </a>
      </div>
    </>
  );
};

export default IWDPage;
