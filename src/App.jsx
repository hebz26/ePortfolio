import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GGEPage from "./pages/GGEPage";
import ConstructionPage from "./pages/ConstructionPage";
import NotFoundPage from "./pages/NotFoundPage";
import DevPage from "./pages/DevPage";
import EportfolioPage from "./pages/EportfolioPage";
import GTPage from "./pages/GTPage";
import DesignPage from "./pages/DesignPage";
import IWDPage from "./pages/IWDpage";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="devwork" element={<DevPage />} />
        <Route path="uiux" element={<ConstructionPage />} />
        <Route path="graphicdesign" element={<DesignPage />} />
        <Route path="GGE-Landing-Page" element={<GGEPage />} />
        <Route path="GTPage" element={<GTPage />} />
        <Route path="IWDPage" element={<IWDPage />} />
        <Route path="Portfolio" element={<EportfolioPage />} />
        <Route path="about" element={<ConstructionPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
