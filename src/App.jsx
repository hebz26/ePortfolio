import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GlobePage from "./pages/GlobePage";
import ConstructionPage from "./pages/ConstructionPage";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="Project1" element={<GlobePage />} />
        <Route path="about" element={<ConstructionPage />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
