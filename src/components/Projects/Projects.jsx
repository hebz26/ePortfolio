import React from "react";
import Card from "../Card/Card";
import "./Projects.css";

const Projects = () => {
  return (
    <section className=" projects-section">
      <Card
        title="Google Sponspored Event Website"
        imageUrl="/images/iwdsummit1.png"
        body="I collaborated closely with a team of developers to create the 2024 International Women's Day Tech Conference website. This event was hosted by DTE and sponsored by Google.
         We used React and Tailwind CSS."
        projectUrl="/IWDPage"
      />
      <Card
        title="Landing Page - GGE"
        imageUrl="/images/greenthumbnail.png"
        body="
        I designed and developed a captivating landing page for Green Gather Events, an eco-friendly event planning company. I developed the website using HTML, CSS, and Bootstrap JS."
        projectUrl="/GGE-Landing-Page"
      />
      <Card
        title="Shop UI"
        imageUrl="/images/globetrotter.png"
        body="I crafted a vibrant shop UI for a smoothie shop. I did this using React. It includes a home page, product page, cart page, and order page."
        projectUrl="/GTPage"
      />
    </section>
  );
};

export default Projects;
