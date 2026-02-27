import React from "react";

export default function DigitalInnovationCenter() {
  const focusAreas = [
    { icon: "🔒", title: "Cybersecurity Research", desc: "Developing robust security solutions and protocols for digital systems.", color: "#dc2626", bg: "linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)" },
    { icon: "🤖", title: "Artificial Intelligence & Machine Learning", desc: "Exploring AI applications and innovation in business and society.", color: "#7c3aed", bg: "linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%)" },
    { icon: "☁️", title: "Cloud Computing & IoT", desc: "Researching distributed computing and Internet of Things technologies.", color: "#0284c7", bg: "linear-gradient(135deg, #f0f9ff 0%, #dbeafe 100%)" },
    { icon: "⚡", title: "Digital Transformation", desc: "Supporting organizations in adopting digital technologies and strategies.", color: "#d97706", bg: "linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)" },
  ];

  return (
    <main className="page" style={{ padding: "0" }}>

      {/* Hero Banner */}
      <section style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 30%, #1e40af 70%, #3b82f6 100%)",
        color: "white",
        padding: "clamp(2.5rem, 6vw, 4.5rem) clamp(1.2rem, 4vw, 3rem)",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: "-60px", right: "-40px", width: "250px", height: "250px", borderRadius: "50%", background: "rgba(59,130,246,0.1)" }} />
        <div style={{ position: "absolute", bottom: "-80px", left: "10%", width: "300px", height: "300px", borderRadius: "50%", background: "rgba(99,102,241,0.08)" }} />
        <div style={{ position: "absolute", top: "30%", right: "20%", width: "100px", height: "100px", borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />

        <p style={{ fontSize: "0.75rem", fontWeight: "600", letterSpacing: "3px", textTransform: "uppercase", opacity: 0.6, marginBottom: "0.8rem", position: "relative" }}>
          Research Center
        </p>
        <h1 style={{ fontSize: "clamp(1.5rem, 4.5vw, 2.8rem)", fontWeight: "800", marginBottom: "1rem", position: "relative", lineHeight: "1.2" }}>
          💻 Center for Digital Innovation,<br />Cybersecurity & Emerging Technologies
        </h1>
        <p style={{ maxWidth: "650px", opacity: 0.9, fontSize: "clamp(0.88rem, 2vw, 1.05rem)", lineHeight: "1.8", margin: 0, position: "relative" }}>
          Advancing digital transformation and cybersecurity research to address emerging technological challenges and opportunities in the modern digital landscape.
        </p>

        <div style={{ width: "80px", height: "4px", background: "linear-gradient(90deg, #60a5fa, #a78bfa)", borderRadius: "2px", marginTop: "1.5rem", position: "relative" }} />
      </section>

      {/* Focus Areas */}
      <section style={{ padding: "clamp(1.5rem, 4vw, 3rem) clamp(1.2rem, 4vw, 3rem)" }}>
        <h2 style={{
          fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
          fontWeight: "700",
          color: "#1e293b",
          marginBottom: "0.4rem",
        }}>Research Focus Areas</h2>
        <p style={{ color: "#6b7280", fontSize: "clamp(0.85rem, 2vw, 0.95rem)", marginBottom: "clamp(1.2rem, 3vw, 2rem)" }}>
          Pioneering research across four critical digital domains
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
          gap: "clamp(1rem, 2.5vw, 1.5rem)",
        }}>
          {focusAreas.map((area, i) => (
            <div key={i} style={{
              background: area.bg,
              padding: "clamp(1.2rem, 3vw, 1.8rem)",
              borderRadius: "16px",
              border: `1px solid ${area.color}20`,
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = `0 12px 30px ${area.color}15`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}>
              <div style={{
                width: "48px", height: "48px", borderRadius: "12px",
                background: "white",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.4rem", marginBottom: "1rem",
                boxShadow: `0 4px 12px ${area.color}15`,
              }}>{area.icon}</div>
              <h4 style={{ color: area.color, marginBottom: "0.5rem", fontSize: "clamp(0.95rem, 2.2vw, 1.05rem)", fontWeight: "700" }}>{area.title}</h4>
              <p style={{ fontSize: "clamp(0.82rem, 2vw, 0.9rem)", color: "#4b5563", lineHeight: "1.7", margin: 0 }}>{area.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section style={{ padding: "0 clamp(1.2rem, 4vw, 3rem) clamp(2rem, 5vw, 3.5rem)" }}>
        <div style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e40af 100%)",
          borderRadius: "20px",
          padding: "clamp(1.5rem, 4vw, 2.5rem)",
          color: "white",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{ position: "absolute", top: "-30px", right: "-20px", width: "140px", height: "140px", borderRadius: "50%", background: "rgba(96,165,250,0.08)" }} />
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.8rem", position: "relative" }}>
            <span style={{ fontSize: "1.3rem" }}>🎯</span>
            <h3 style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.3rem)", fontWeight: "700", margin: 0 }}>Our Mission</h3>
          </div>
          <p style={{ fontSize: "clamp(0.85rem, 2vw, 1rem)", lineHeight: "1.8", opacity: 0.92, margin: 0, position: "relative", maxWidth: "800px" }}>
            To pioneer research in digital innovation and cybersecurity, fostering a secure and innovative digital ecosystem that supports organizational and societal growth.
          </p>
        </div>
      </section>

    </main>
  );
}
