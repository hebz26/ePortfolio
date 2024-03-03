import React, { useEffect } from "react";
import CategoryHero from "../components/CategoryHero/CategoryHero";
import Card from "../components/Card/Card";

const DevPage = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <CategoryHero
        title="My Web Development Work"
        imageUrl="images/codingicon.png"
        body="Check out some of these websites I've worked on!"
      />
      <section className=" projects-section">
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
        <Card
          title="My ePortfolio"
          imageUrl="/images/port.png"
          body="I built my ePortfolio using React with Vite as the build tool, showcasing a technical fusion of design and development. I deployed it using Netlify."
          projectUrl="/Portfolio"
        />
      </section>
    </>
  );
};

export default DevPage;
