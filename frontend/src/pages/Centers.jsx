import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageCarousel from "../components/ImageCarousel";

export default function Centers() {
  const [flippedIndex, setFlippedIndex] = useState(null);
  const navigate = useNavigate();

  const centers = [
    { title: "Mindoro Development and Studies Center", desc: "Research on socio-economic, environmental, and cultural aspects of Mindoro.", img: "/development.png", link: "/mindoro-development" },
    { title: "Center for Digital Innovation, Cybersecurity and Emerging Technologies", desc: "Advancing digital transformation and cybersecurity research.", img: "/digital.png", link: "/digital-innovation" },
    { title: "Center for Environmental Studies", desc: "Dedicated to sustainability, conservation, and ecosystem protection.", img: "/environmental.png", link: "/environmental-studies" },
    { title: "Fisheries Research and Development Center", desc: "Advancing aquatic science and sustainable fishing technologies.", img: "/fisheries.png", link: "/fisheries-research" },
    { title: "MIMAROPA Food Innovation Center", desc: "Focusing on nutrition, food safety, and agricultural processing innovations.", img: "/food.png", link: "/mimaropa-food" },
    { title: "Center for Island Education and Sustainability", desc: "Specialized research on unique island ecologies and resources.", img: "/island.png", link: "/island-education" },
    { title: "Center for Peace, Criminology, and Law Enforcement Studies", desc: "Exploring conflict resolution and societal development models.", img: "/peace.png", link: "/peace-criminology" },
    { title: "Center for Smart Agriculture and Biosystems Innovation", desc: "Integrating AI and IoT into agricultural and industrial solutions.", img: "/smart.png", link: "/smart-agriculture" },
    { title: "Natural Textile Fiber Innovation Center", desc: "Researching fiber science and sustainable garment production.", img: "/textile.png", link: "/textile-fiber" },
  ];

  const centerImages = centers.map(center => center.img);

  const handleFlip = (idx) => {
    setFlippedIndex(flippedIndex === idx ? null : idx);
  };

  const handleViewDetails = (link) => {
    navigate(link);
  };

  return (
    <main className="page">
      <section style={{ marginBottom: "1rem" }}>
        <h2 style={{ marginBottom: "0.5rem" }}>Research Centers</h2>
        <p style={{ fontSize: "1rem", lineHeight: "1.6", maxWidth: "900px", marginBottom: "1.5rem" }}>
          Our research centers focus on specialized fields to address institutional and societal needs.
        </p>
      </section>

      {/* Image Carousel Section - Floating Card */}
      <section style={{ marginBottom: "3rem", display: "flex", justifyContent: "center" }}>
        <ImageCarousel images={centerImages} centers={centers} />
      </section>
    </main>
  );
}