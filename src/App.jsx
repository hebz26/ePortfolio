import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Slider from "./components/Slider/Slider";
import Bottom from "./components/bottom/bottom";
import Card from "./components/Card/Card";
import Projects from "./components/Projects/Projects";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <Slider></Slider>
      <Bottom></Bottom>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}

export default App;
