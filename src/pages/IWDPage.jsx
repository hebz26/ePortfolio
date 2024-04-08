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
        I collaborated closely with a team of developers to create the IWD Summit website (iwdsummit.com).
           I styled various components in the website, adhering to the concepts of code reusability wherever possible.
          I dynamically populated agenda view based on master list of agenda items.
          I engaged in continuous user acceptance testing and agile development techniques to refine end user experience.
          I incorporated responsive design into all elements, making them adaptable across all screen sizes. We used React and Tailwind CSS."
      />

      <div className="links-container">
        <a
          href="https://www.iwdsummit.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Click here to see the website</button>
        </a>
      </div>
    </>
  );
};

export default IWDPage;
