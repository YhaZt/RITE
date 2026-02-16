import React, { useState } from "react";

export default function Centers() {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const centers = [
    { title: "Center for Innovation & Development", desc: "Leading product development and industrial innovation strategies.", img: "/development.png" },
    { title: "Center for Digital Transformation", desc: "Researching software engineering, cybersecurity, and digital systems.", img: "/digital.png" },
    { title: "Center for Environmental Studies", desc: "Dedicated to sustainability, conservation, and ecosystem protection.", img: "/environmental.png" },
    { title: "Center for Fisheries Research", desc: "Advancing aquatic science and sustainable fishing technologies.", img: "/fisheries.png" },
    { title: "Center for Food Science", desc: "Focusing on nutrition, food safety, and agricultural processing.", img: "/food.png" },
    { title: "Center for Island Sustainability", desc: "Specialized research on unique island ecologies and resources.", img: "/island.png" },
    { title: "Center for Peace & Social Research", desc: "Exploring conflict resolution and societal development models.", img: "/peace.png" },
    { title: "Center for Smart Technology", desc: "Integrating AI and IoT into community and industrial solutions.", img: "/smart.png" },
    { title: "Center for Textile Innovation", desc: "Researching fiber science and sustainable garment production.", img: "/textile.png" },
  ];

  const handleFlip = (idx) => {
    setFlippedIndex(flippedIndex === idx ? null : idx);
  };

  return (
    <main className="page">
      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ marginBottom: "0.5rem" }}>Research Centers</h2>
        <p style={{ fontSize: "1rem", lineHeight: "1.6", maxWidth: "900px", marginBottom: "1.5rem" }}>
          Our research centers focus on specialized fields to address institutional and societal needs.
        </p>
      </section>

      <section>
        <h3 style={{ marginBottom: "1.5rem", color: "#1e4620" }}>Our Centers</h3>
        
        <div className="centers-grid">
          {centers.map((center, idx) => (
            <div 
              key={idx} 
              className={`flip-card ${flippedIndex === idx ? "is-flipped" : ""}`}
              onClick={() => handleFlip(idx)}
            >
              <div className="flip-card-inner">
                
                {/* FRONT SIDE */}
                <div className="flip-card-front">
                  <img 
                    src={center.img} 
                    alt={center.title} 
                    className="card-image"
                  />
                  <div className="image-overlay">
                    <h4>{center.title}</h4>
                  </div>
                </div>

                {/* BACK SIDE */}
                <div className="flip-card-back">
                  <h4>{center.title}</h4>
                  <p>{center.desc}</p>
                  <button className="details-btn">View Details</button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}