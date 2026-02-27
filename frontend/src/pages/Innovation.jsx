import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Innovation() {
  const [hovered, setHovered] = useState(null);

  const [flipped, setFlipped] = useState([]);

  const toggleFlip = (index) => {
    setFlipped((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]));
  };

  const pillars = [
    {
      letter: "B",
      front: "Boost Knowledge and Technology Innovations and Transfer",
      back: "Supported generation, transfer, and commercialization of innovations and intellectual property, leading to enhanced research impact, societal relevance, and regional development.",
    },
    {
      letter: "U",
      front: "Enhanced innovation competencies and entrepreneurial skills of faculty, students, and communities",
      back: "Enhanced innovation competencies and entrepreneurial skills of faculty, students, and communities, leading to greater problem-solving capacity, applied research, and industry relevance.",
    },
    {
      letter: "I",
      front: "Implemented Smart University Systems and Infrastructure",
      back: "Optimized operations and research productivity through smart systems and advanced infrastructure, leading to improved efficiency, technology adoption, and innovation outputs.",
    },
    {
      letter: "L",
      front: "Launched Accelerated Entrepreneurial and Startup Ecosystems",
      back: "Strengthened entrepreneurial and startup ecosystem, leading to scalable spinoffs, technology commercialization, and expanded market opportunities.",
    },
    {
      letter: "T",
      front: "Transformed Communities and MSMEs through Inclusive Innovation",
      back: "Enabled adoption of innovations and capacity-building for communities and MSMEs, leading to increased productivity, competitiveness, and inclusive socioeconomic growth.",
    },
  ];

  return (
    <main className="page" style={{ padding: "clamp(0.8rem, 3vw, 2rem)" }}>

      {/* Hero Banner */}
      <section style={{
        background: "linear-gradient(135deg, #094A25 0%, #0C6B37 40%, #16a34a 100%)",
        color: "white",
        padding: "clamp(1.5rem, 4vw, 2.5rem) clamp(1rem, 3vw, 2rem)",
        borderRadius: "18px",
        marginBottom: "clamp(1rem, 3vw, 2rem)",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Decorative circles */}
        <div style={{ position: "absolute", top: "-40px", right: "-30px", width: "180px", height: "180px", borderRadius: "50%", background: "rgba(255,255,255,0.06)" }} />
        <div style={{ position: "absolute", bottom: "-60px", left: "20%", width: "220px", height: "220px", borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />
        <div style={{ position: "absolute", top: "40%", right: "15%", width: "80px", height: "80px", borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />
        {/* <p style={{ fontSize: "0.75rem", fontWeight: "600", letterSpacing: "2px", textTransform: "uppercase", opacity: 0.7, marginBottom: "0.5rem", position: "relative" }}>
          Innovation Pillars
        </p> */}
        <h2 style={{ fontSize: "clamp(1.2rem, 4vw, 1.6rem)", fontWeight: "800", marginBottom: "0.6rem", position: "relative", lineHeight: "1.3" }}>
          Office of Innovation<br />
        </h2>
        <p style={{ maxWidth: "700px", opacity: 0.95, fontSize: "clamp(0.9rem, 2.4vw, 1rem)", lineHeight: "1.6", margin: 0, position: "relative" }}>
          The Office of Innovation drives institutional growth by accelerating technology innovation and transfer, building smart university systems, upskilling faculty, students and communities, and fostering entrepreneurship through incubation, mentorship, and industry linkages.
        </p> 
        <h3 style={{ fontSize: "clamp(1.2rem, 4vw, 1.6rem)", fontWeight: "800", marginBottom: "0.6rem", position: "relative", lineHeight: "1.3" }}>
          Innovation Pillars<br />
        </h3>

        {/* Innovation Pillars - Flip Cards (expanded, cover banner) */}
        <div style={{ display: "flex", gap: "clamp(0.5rem, 1.5vw, 1rem)", marginTop: "1.25rem", flexWrap: "wrap", width: "100%", justifyContent: "space-between", alignItems: "stretch" }}>
          {pillars.map((p, i) => (
            <div key={p.letter} style={{ perspective: "1200px", flex: "1 1 clamp(160px, 18vw, 260px)", minWidth: "clamp(150px, 14vw, 200px)", height: "clamp(160px, 20vh, 260px)" }}>
              {p.letter === "B" ? (
                <NavLink to="/technology-transfer" style={{ textDecoration: "none", color: "inherit" }}>
                  <div
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    role="button"
                    tabIndex={0}
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      transition: "transform 0.6s",
                      transformStyle: "preserve-3d",
                      transform: (hovered === i || flipped.includes(i)) ? "rotateY(180deg)" : "rotateY(0deg)",
                      borderRadius: "14px",
                      cursor: "pointer",
                      boxShadow: "0 8px 28px rgba(0,0,0,0.18)",
                    }}
                  >
                    <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", backfaceVisibility: "hidden", background: "rgba(255,255,255,0.04)", color: "white", padding: "1rem", borderRadius: "14px", fontWeight: 400 }}>
                      <div style={{ height: "clamp(64px, 12vw, 120px)", display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
                        <div style={{ fontSize: "clamp(28px, 8vw, 56px)", lineHeight: 1, fontWeight: 900, letterSpacing: "1px", opacity: 0.98 }}>{p.letter}</div>
                      </div>
                      <div style={{ marginTop: "0.4rem", fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)", lineHeight: 1.3, textAlign: "center", maxWidth: "100%", padding: "0 0.25rem", fontFamily: "Georgia, 'Times New Roman', Times, serif", fontStyle: "italic", fontWeight: 400 }}>{p.front}</div>
                    </div>
                    <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", backfaceVisibility: "hidden", transform: "rotateY(180deg)", background: "rgba(0,0,0,0.14)", color: "white", padding: "1rem", borderRadius: "14px", fontSize: "0.95rem", textAlign: "center" }}>
                      {p.back}
                    </div>
                  </div>
                </NavLink>
              ) : (
                <div
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => toggleFlip(i)}
                  role="button"
                  tabIndex={0}
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    transition: "transform 0.6s",
                    transformStyle: "preserve-3d",
                    transform: (hovered === i || flipped.includes(i)) ? "rotateY(180deg)" : "rotateY(0deg)",
                    borderRadius: "14px",
                    cursor: "pointer",
                    boxShadow: "0 8px 28px rgba(0,0,0,0.18)",
                  }}
                >
                  <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", backfaceVisibility: "hidden", background: "rgba(255,255,255,0.04)", color: "white", padding: "1rem", borderRadius: "14px", fontWeight: 400 }}>
                    <div style={{ height: "clamp(64px, 12vw, 120px)", display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
                      <div style={{ fontSize: "clamp(28px, 8vw, 56px)", lineHeight: 1, fontWeight: 900, letterSpacing: "1px", opacity: 0.98 }}>{p.letter}</div>
                    </div>
                    <div style={{ marginTop: "0.4rem", fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)", lineHeight: 1.3, textAlign: "center", maxWidth: "100%", padding: "0 0.25rem", fontFamily: "Georgia, 'Times New Roman', Times, serif", fontStyle: "italic", fontWeight: 400 }}>{p.front}</div>
                  </div>
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", backfaceVisibility: "hidden", transform: "rotateY(180deg)", background: "rgba(0,0,0,0.14)", color: "white", padding: "1rem", borderRadius: "14px", fontSize: "0.95rem", textAlign: "center" }}>
                    {p.back}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Sub-page Cards - Grid Layout */}
      <section style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
        gap: "clamp(1rem, 2.5vw, 1.5rem)",
        marginBottom: "clamp(1.5rem, 4vw, 3rem)",
      }}>

        {/* Technology Transfer & Patent Unit */}
        <NavLink to="/technology-transfer" style={{ textDecoration: "none", color: "inherit" }}>
          <div style={{
            background: "linear-gradient(160deg, #094A25 0%, #0C6B37 100%)",
            borderRadius: "20px",
            padding: "clamp(1.2rem, 3vw, 2rem)",
            color: "white",
            minHeight: "clamp(240px, 40vw, 320px)",
            display: "flex",
            flexDirection: "column",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            boxShadow: "0 8px 24px rgba(9,74,37,0.2)",
            position: "relative",
            overflow: "hidden",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-8px) scale(1.01)";
            e.currentTarget.style.boxShadow = "0 16px 40px rgba(9,74,37,0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0) scale(1)";
            e.currentTarget.style.boxShadow = "0 8px 24px rgba(9,74,37,0.2)";
          }}>
            <div style={{ position: "absolute", top: "-30px", right: "-30px", width: "120px", height: "120px", borderRadius: "50%", background: "rgba(255,255,255,0.08)" }} />
            <h3 style={{ fontSize: "1.15rem", fontWeight: "700", marginBottom: "0.8rem" }}>
              Technology Transfer &<br />Patent Unit
            </h3>
            <p style={{ fontSize: "0.85rem", lineHeight: "1.7", opacity: 0.88, flex: 1 }}>
              Bridging research innovation and commercialization through IP protection, patent filing, technology licensing, and spin-off support.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "1rem" }}>
              {["IP Protection", "Patents", "Licensing"].map((tag) => (
                <span key={tag} style={{ fontSize: "0.7rem", padding: "0.25rem 0.6rem", backgroundColor: "rgba(255,255,255,0.15)", borderRadius: "20px", fontWeight: "600" }}>{tag}</span>
              ))}
            </div>
            <div style={{ marginTop: "1.2rem", fontSize: "0.85rem", fontWeight: "600", display: "flex", alignItems: "center", gap: "0.4rem" }}>
              Explore <span style={{ transition: "transform 0.2s" }}>→</span>
            </div>
          </div>
        </NavLink>

        {/* Minsu I-BIBES */}
        <NavLink to="/minsu-i-bibes" style={{ textDecoration: "none", color: "inherit" }}>
          <div style={{
            background: "linear-gradient(160deg, #c2410c 0%, #ea580c 50%, #f97316 100%)",
            borderRadius: "20px",
            padding: "clamp(1.2rem, 3vw, 2rem)",
            color: "white",
            minHeight: "clamp(240px, 40vw, 320px)",
            display: "flex",
            flexDirection: "column",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            boxShadow: "0 8px 24px rgba(234,88,12,0.2)",
            position: "relative",
            overflow: "hidden",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-8px) scale(1.01)";
            e.currentTarget.style.boxShadow = "0 16px 40px rgba(234,88,12,0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0) scale(1)";
            e.currentTarget.style.boxShadow = "0 8px 24px rgba(234,88,12,0.2)";
          }}>
            <div style={{ position: "absolute", top: "-30px", right: "-30px", width: "120px", height: "120px", borderRadius: "50%", background: "rgba(255,255,255,0.08)" }} />
            <h3 style={{ fontSize: "1.15rem", fontWeight: "700", marginBottom: "0.8rem" }}>
              Minsu I-BIBES
            </h3>
            <p style={{ fontSize: "0.85rem", lineHeight: "1.7", opacity: 0.88, flex: 1 }}>
              Targeted innovation support bridging community-driven solutions with institutional resources through labs, field pilots, and capacity-building workshops.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "1rem" }}>
              {["Community Labs", "Field Pilots", "Capacity Building"].map((tag) => (
                <span key={tag} style={{ fontSize: "0.7rem", padding: "0.25rem 0.6rem", backgroundColor: "rgba(255,255,255,0.15)", borderRadius: "20px", fontWeight: "600" }}>{tag}</span>
              ))}
            </div>
            <div style={{ marginTop: "1.2rem", fontSize: "0.85rem", fontWeight: "600", display: "flex", alignItems: "center", gap: "0.4rem" }}>
              Explore <span>→</span>
            </div>
          </div>
        </NavLink>

        {/* BUKID Hub */}
        <NavLink to="/bakodhub" style={{ textDecoration: "none", color: "inherit" }}>
          <div style={{
            background: "linear-gradient(160deg, #5b21b6 0%, #7c3aed 50%, #8b5cf6 100%)",
            borderRadius: "20px",
            padding: "clamp(1.2rem, 3vw, 2rem)",
            color: "white",
            minHeight: "clamp(240px, 40vw, 320px)",
            display: "flex",
            flexDirection: "column",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            boxShadow: "0 8px 24px rgba(124,58,237,0.2)",
            position: "relative",
            overflow: "hidden",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-8px) scale(1.01)";
            e.currentTarget.style.boxShadow = "0 16px 40px rgba(124,58,237,0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0) scale(1)";
            e.currentTarget.style.boxShadow = "0 8px 24px rgba(124,58,237,0.2)";
          }}>
            <div style={{ position: "absolute", top: "-30px", right: "-30px", width: "120px", height: "120px", borderRadius: "50%", background: "rgba(255,255,255,0.08)" }} />
            <h3 style={{ fontSize: "1.15rem", fontWeight: "700", marginBottom: "0.8rem" }}>
              Innovation Hub
            </h3>
            <p style={{ fontSize: "0.85rem", lineHeight: "1.7", opacity: 0.88, flex: 1 }}>
              A dedicated innovation hub fostering entrepreneurship, technology development, and collaborative partnerships to transform ideas into viable business solutions.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "1rem" }}>
              {["Incubation", "Entrepreneurship", "Partnerships"].map((tag) => (
                <span key={tag} style={{ fontSize: "0.7rem", padding: "0.25rem 0.6rem", backgroundColor: "rgba(255,255,255,0.15)", borderRadius: "20px", fontWeight: "600" }}>{tag}</span>
              ))}
            </div>
            <div style={{ marginTop: "1.2rem", fontSize: "0.85rem", fontWeight: "600", display: "flex", alignItems: "center", gap: "0.4rem" }}>
              Explore <span>→</span>
            </div>
          </div>
        </NavLink>

      </section>
    </main>
  );
}
