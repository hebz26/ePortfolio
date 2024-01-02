import React, { useEffect } from "react";
import Hero from "../components/Hero/Hero";
import Slider from "../components/Slider/Slider";
import Projects from "../components/Projects/Projects";

const HomePage = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero></Hero>
      <Slider></Slider>
      <Projects></Projects>
    </>
  );
};

export default HomePage;
