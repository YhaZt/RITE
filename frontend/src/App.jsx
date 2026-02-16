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
        <Route path="/ethics" element={<Ethics />} />
        <Route path="/extension" element={<Extension />} />
        <Route path="/centers" element={<Centers />} />
      </Routes>
      <Footer />
    </div>
  );
}
