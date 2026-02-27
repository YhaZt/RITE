import React from "react";
import { NavLink } from "react-router-dom";

export default function Extension() {
  const programs = [
    { title: "Community Engagement", desc: "Outreach programs and capacity building that empower local communities through education and sustainable practices.", color: "#166534", bg: "linear-gradient(145deg, #f0fdf4, #dcfce7)", border: "#bbf7d0" },
    { title: "Training & Workshops", desc: "Skills development programs for partner communities, enhancing knowledge transfer and professional growth.", color: "#1e40af", bg: "linear-gradient(145deg, #eff6ff, #dbeafe)", border: "#bfdbfe" },
    { title: "Technology Transfer", desc: "Sharing research outputs for practical use, bridging the gap between academic innovation and real-world application.", color: "#9a3412", bg: "linear-gradient(145deg, #fff7ed, #ffedd5)", border: "#fed7aa" },
    { title: "Partnership Programs", desc: "Strategic collaboration with LGUs, NGOs, and industries to maximize community impact and institutional reach.", color: "#6b21a8", bg: "linear-gradient(145deg, #faf5ff, #f3e8ff)", border: "#e9d5ff" },
  ];

  return (
    <main className="page" style={{ padding: "clamp(1rem, 3vw, 2rem)" }}>

      {/* Hero Banner */}
      <section style={{
        background: "linear-gradient(135deg, #094A25 0%, #0C6B37 40%, #16a34a 100%)",
        color: "white",
        padding: "clamp(1.5rem, 4vw, 2.5rem) clamp(1rem, 3vw, 2rem)",
        borderRadius: "18px",
        marginBottom: "2.5rem",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: "-40px", right: "-30px", width: "180px", height: "180px", borderRadius: "50%", background: "rgba(255,255,255,0.06)" }} />
        <div style={{ position: "absolute", bottom: "-60px", left: "20%", width: "220px", height: "220px", borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />
        <p style={{ fontSize: "0.75rem", fontWeight: "600", letterSpacing: "2px", textTransform: "uppercase", opacity: 0.7, marginBottom: "0.5rem", position: "relative" }}>
          RITE Extension
        </p>
        <h2 style={{ fontSize: "clamp(1.3rem, 4vw, 1.6rem)", fontWeight: "800", marginBottom: "0.6rem", position: "relative", lineHeight: "1.3" }}>
          Extension &<br />Community Services
        </h2>
        <p style={{ maxWidth: "600px", opacity: 0.9, fontSize: "0.9rem", lineHeight: "1.7", margin: 0, position: "relative" }}>
          Bringing research-based solutions to communities and stakeholders through impactful outreach, training, and meaningful partnerships.
        </p>
      </section>

      {/* Programs Grid */}
      <section style={{ marginBottom: "2rem" }}>
        <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          <p style={{ fontSize: "0.75rem", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase", color: "#16a34a", marginBottom: "0.3rem" }}>
            What We Do
          </p>
          <h3 style={{ fontSize: "clamp(1.1rem, 3vw, 1.3rem)", fontWeight: "800", color: "#1f2937", margin: 0 }}>
            Extension Programs
          </h3>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "1.5rem" }}>
          {programs.map((program, idx) => (
            <div key={idx} style={{
              background: program.bg,
              padding: "clamp(1.2rem, 3vw, 1.8rem)",
              borderRadius: "16px",
              border: `1px solid ${program.border}`,
              position: "relative",
              overflow: "hidden",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.05)";
            }}>
              <div style={{ position: "absolute", top: "-20px", right: "-20px", width: "80px", height: "80px", borderRadius: "50%", background: "rgba(0,0,0,0.03)" }} />
              <h4 style={{ color: program.color, marginBottom: "0.6rem", fontSize: "1.05rem", fontWeight: "700" }}>{program.title}</h4>
              <p style={{ fontSize: "0.85rem", lineHeight: "1.7", color: "#374151", margin: 0 }}>{program.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
