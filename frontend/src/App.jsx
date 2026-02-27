import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Research from "./pages/Research";
import Extension from "./pages/Extension";
import Innovation from "./pages/Innovation";
import Ethics from "./pages/Ethics";
import Centers from "./pages/Centers";
import PublicationAndPrinting from "./pages/PublicationAndPrinting";
import ResearchUnit from "./pages/ResearchUnit";
import TechnologyTransfer from "./pages/TechnologyTransfer";
import MinsuIBibes from "./pages/MinsuIBibes";
import BakodhubPage from "./pages/BakodhubPage";
import ProjectMauya from "./pages/ProjectMauya";
import InnovationHub from "./pages/InnovationHub";
import MindoroDevelopmentCenter from "./pages/MindoroDevelopmentCenter";
import DigitalInnovationCenter from "./pages/DigitalInnovationCenter";
import EnvironmentalStudiesCenter from "./pages/EnvironmentalStudiesCenter";
import FisheriesResearchCenter from "./pages/FisheriesResearchCenter";
import MIMARLPAFoodCenter from "./pages/MIMARLPAFoodCenter";
import IslandEducationCenter from "./pages/IslandEducationCenter";
import PeaceCriminologyCenter from "./pages/PeaceCriminologyCenter";
import SmartAgricultureCenter from "./pages/SmartAgricultureCenter";
import TextileFiberCenter from "./pages/TextileFiberCenter";

export default function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/research" element={<Research />} />
        <Route path="/publication-and-printing" element={<PublicationAndPrinting />} />
        <Route path="/research-unit" element={<ResearchUnit />} />
        <Route path="/innovation" element={<Innovation />} />
        <Route path="/technology-transfer" element={<TechnologyTransfer />} />
        <Route path="/minsu-i-bibes" element={<MinsuIBibes />} />
        <Route path="/bakodhub" element={<BakodhubPage />} />
        <Route path="/project-mauya" element={<ProjectMauya />} />
        <Route path="/innovation-hub" element={<InnovationHub />} />
        <Route path="/ethics" element={<Ethics />} />
        <Route path="/extension" element={<Extension />} />
        <Route path="/centers" element={<Centers />} />
        <Route path="/mindoro-development" element={<MindoroDevelopmentCenter />} />
        <Route path="/digital-innovation" element={<DigitalInnovationCenter />} />
        <Route path="/environmental-studies" element={<EnvironmentalStudiesCenter />} />
        <Route path="/fisheries-research" element={<FisheriesResearchCenter />} />
        <Route path="/mimaropa-food" element={<MIMARLPAFoodCenter />} />
        <Route path="/island-education" element={<IslandEducationCenter />} />
        <Route path="/peace-criminology" element={<PeaceCriminologyCenter />} />
        <Route path="/smart-agriculture" element={<SmartAgricultureCenter />} />
        <Route path="/textile-fiber" element={<TextileFiberCenter />} />
      </Routes>
      <Footer />
    </div>
  );
}
