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
          title="My ePortfolio"
          imageUrl="/images/port.png"
          body="I built my ePortfolio using React with Vite as the build tool, showcasing a technical fusion of design and development. I deployed it using Netlify."
          projectUrl="/Portfolio"
        />
        <Card
          title="Shop UI"
          imageUrl="/images/globetrotter.png"
          body="I crafted a vibrant shop UI for a smoothie shop. I did this using React. It includes a home page, product page, cart page, and order page."
          projectUrl="/GTPage"
        />
      </section>
    </>
  );
};

export default DevPage;
