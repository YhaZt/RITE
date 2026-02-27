import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Hero from "../components/Hero";
import FeatureCards from "../components/FeatureCards";

const flashcardStyle = document.createElement("style");
flashcardStyle.textContent = `
@keyframes flashcardIn {
  0% { opacity: 0; transform: rotateY(90deg) scale(0.9); }
  50% { opacity: 0.5; transform: rotateY(-5deg) scale(1.02); }
  100% { opacity: 1; transform: rotateY(0deg) scale(1); }
}
`;
if (!document.querySelector("[data-flashcard-style]")) {
  flashcardStyle.setAttribute("data-flashcard-style", "");
  document.head.appendChild(flashcardStyle);
}

const pageOverviews = [
  {
    title: "Research",
    path: "/research",
    color: "#094A25",
    gradient: "linear-gradient(135deg, #094A25 0%, #0C6B37 100%)",
    description: "RITE's research arm drives evidence-based inquiry and knowledge creation across multiple disciplines. We support faculty and student researchers in producing high-quality, ethical, and impactful research outputs that contribute to national and regional development.",
    tags: ["Faculty Research", "Student Research", "Publications", "Grants"],
  },
  {
    title: "Innovation",
    path: "/innovation",
    color: "#094A25",
    gradient: "linear-gradient(135deg, #094A25 0%, #16a34a 100%)",
    description: "The Innovation Office drives creativity and transforms research outputs into real-world solutions through technology transfer, intellectual property management, and entrepreneurship support — bridging the gap between discovery and impact.",
    tags: ["Technology Transfer", "IP Management", "Entrepreneurship"],
  },
  {
    title: "Technology Transfer & Patent Unit",
    path: "/technology-transfer",
    color: "#094A25",
    gradient: "linear-gradient(135deg, #094A25 0%, #0C6B37 100%)",
    description: "The TTPU serves as the institutional bridge between research innovation and commercialization, facilitating the transformation of research outputs into market-ready products and services with comprehensive IP protection.",
    tags: ["IP Protection", "Patents", "Licensing", "Spin-off Support"],
  },
  {
    title: "BUKID Hub",
    path: "/bakodhub",
    color: "#3b0764",
    gradient: "linear-gradient(135deg, #3b0764 0%, #7c3aed 100%)",
    description: "BUKIDHUB is a dedicated innovation hub fostering entrepreneurship, technology development, and collaborative partnerships to transform ideas into viable business solutions through incubation and mentorship.",
    tags: ["Incubation", "Entrepreneurship", "Industry Partners"],
  },
  {
    title: "Extension & Community Service",
    path: "/extension",
    color: "#1e40af",
    gradient: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
    description: "Bringing knowledge and innovation to communities for inclusive growth. Our extension programs connect institutional expertise with real-world community needs through outreach, training, and capacity-building initiatives.",
    tags: ["Community Outreach", "Training", "Capacity Building"],
  },
  {
    title: "Research Ethics & Integrity",
    path: "/ethics",
    color: "#831843",
    gradient: "linear-gradient(135deg, #831843 0%, #e11d48 100%)",
    description: "Upholding ethical standards and integrity in all scholarly activities. We ensure that research conducted under RITE adheres to the highest standards of ethical conduct, human subjects protection, and academic honesty.",
    tags: ["Ethics Review", "Integrity", "Compliance"],
  },
  {
    title: "Publication & Printing",
    path: "/publication-and-printing",
    color: "#713f12",
    gradient: "linear-gradient(135deg, #713f12 0%, #ca8a04 100%)",
    description: "Supporting the dissemination of research findings and academic materials through quality publication and printing services. We help researchers share their work with the broader academic community.",
    tags: ["Journals", "Printing Services", "Dissemination"],
  },
  {
    title: "Research Centers",
    path: "/centers",
    color: "#0f766e",
    gradient: "linear-gradient(135deg, #134e4a 0%, #14b8a6 100%)",
    description: "RITE hosts specialized research centers focusing on key areas including smart agriculture, digital innovation, environmental studies, fisheries, textile & fiber, and more — each driving domain-specific research and development.",
    tags: ["Smart Agriculture", "Digital Innovation", "Environmental Studies", "Fisheries"],
  },
];

export default function Home() {
  const [spotlightIdx, setSpotlightIdx] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSpotlightIdx((prev) => (prev + 1) % pageOverviews.length);
      setAnimKey((k) => k + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const spotlight = pageOverviews[spotlightIdx];

  return (
    <main className="page">
      <Hero />
      <FeatureCards />

      {/* Page Spotlight - Flashcards */}
      <section style={{ padding: "1.5rem 0.5rem" }}>

        {/* Flashcard container */}
        <div style={{ perspective: "1200px" }}>
          <NavLink to={spotlight.path} style={{ textDecoration: "none", color: "inherit" }}>
            <div key={animKey} style={{
              background: spotlight.gradient,
              borderRadius: "16px",
              padding: "clamp(1.2rem, 4vw, 2.5rem)",
              color: "white",
              position: "relative",
              overflow: "hidden",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              boxShadow: `0 8px 24px ${spotlight.color}33`,
              cursor: "pointer",
              animation: "flashcardIn 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards",
              transformStyle: "preserve-3d",
              wordBreak: "break-word",
              overflowWrap: "break-word",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = `0 16px 36px ${spotlight.color}44`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = `0 8px 24px ${spotlight.color}33`;
            }}>
              <div style={{ position: "absolute", top: "-40px", right: "-40px", width: "150px", height: "150px", borderRadius: "50%", background: "rgba(255,255,255,0.06)" }} />
              <div style={{ position: "absolute", bottom: "-30px", left: "10%", width: "120px", height: "120px", borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />

              <div style={{ position: "relative", zIndex: 1 }}>
                <h4 style={{ fontSize: "clamp(1.1rem, 4vw, 1.5rem)", fontWeight: "800", marginBottom: "0.6rem", lineHeight: "1.3" }}>
                  {spotlight.title}
                </h4>
                <p style={{ fontSize: "clamp(0.82rem, 2.5vw, 0.95rem)", lineHeight: "1.7", opacity: 0.92, maxWidth: "750px", marginBottom: "1rem" }}>
                  {spotlight.description}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1rem" }}>
                  {spotlight.tags.map((tag) => (
                    <span key={tag} style={{
                      fontSize: "clamp(0.62rem, 2vw, 0.72rem)",
                      padding: "0.2rem 0.55rem",
                      backgroundColor: "rgba(255,255,255,0.15)",
                      borderRadius: "20px",
                      fontWeight: "600",
                      whiteSpace: "nowrap",
                    }}>{tag}</span>
                  ))}
                </div>
                <span style={{ fontSize: "clamp(0.78rem, 2.5vw, 0.88rem)", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                  Learn more <span>→</span>
                </span>
              </div>
            </div>
          </NavLink>
        </div>

        {/* Dots indicator */}
        <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", marginTop: "1.2rem" }}>
          {pageOverviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => { setSpotlightIdx(idx); setAnimKey((k) => k + 1); }}
              style={{
                width: spotlightIdx === idx ? "24px" : "8px",
                height: "8px",
                borderRadius: "4px",
                border: "none",
                background: spotlightIdx === idx ? spotlight.color : "#d1d5db",
                cursor: "pointer",
                transition: "all 0.3s ease",
                padding: 0,
              }}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
