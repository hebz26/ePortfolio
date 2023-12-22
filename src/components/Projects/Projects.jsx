import React from "react";
import Card from "../Card/Card";
import "./Projects.css";

const Projects = () => {
  return (
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
      <Card
        title="Project 3"
        imageUrl="/images/thumbnail.png"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices gravida dictum fusce ut. Cras sed felis eget velit. Commodo ullamcorper a lacus vestibulum. In hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Velit laoreet id donec ultrices tincidunt arcu non sodales neque. Eu facilisis sed odio morbi quis commodo odio aenean. Ac turpis egestas maecenas pharetra convallis posuere morbi leo. Aliquet enim tortor at auctor suspendisse in est."
      />
    </section>
  );
};

export default Projects;
