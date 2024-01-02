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
        title="My Front End Development Work"
        imageUrl="images/doodlecomp.png"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <section className=" projects-section">
        <Card
          title="Globetrotter Smoothies"
          imageUrl="/images/globetrotter.png"
          body="I engineered a Next.js-powered Smoothie Shop Website with server-side rendering, creating a dynamic Home Page, detailed Product Page, and streamlined Cart Page. Leveraging Adobe Illustrator and Photoshop, I meticulously designed all content, demonstrating a seamless integration of technical and creative skills in web development."
        />
        <Card
          title="My ePortfolio"
          imageUrl="/images/port.png"
          body="I crafted my portfolio using Vite, showcasing a technical fusion of design and development. The site features optimal performance, seamless navigation, and a visually appealing layout, demonstrating my ability to engineer user-centric web solutions with precision and efficiency."
        />
      </section>
    </>
  );
};

export default DevPage;
