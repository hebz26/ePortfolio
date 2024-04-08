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
        I designed a captivating landing page for Green Gather Events, an eco-friendly event planning company. Starting with Adobe Illustrator, I created the brand identity and then used Figma to shape the website's UI. Finally, I developed the website using HTML, CSS, and Bootstrap JS."
        projectUrl="/GGE-Landing-Page"
      />
      <Card
        title="Shop UI - Globetrotter Smoothies"
        imageUrl="/images/globetrotter.png"
        body="I crafted a vibrant website for a smoothie shop, ensuring an appealing online presence. I designed the shop's visual identity using Adobe Illustrator and Photoshop. I designed the brand elements using Adobe Illustrator. Using React and Next.js, I then brought the envisioned smoothie shop website to life, focusing on creating a seamless and user-friendly online experience."
        projectUrl="/GTPage"
      />
    </section>
  );
};

export default Projects;
