import React from "react";

export default function MindoroDevelopmentCenter() {
  return (
    <main className="page">
      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ marginBottom: "0.5rem" }}>Mindoro Development and Studies Center</h2>
        <p style={{ fontSize: "1rem", lineHeight: "1.6", maxWidth: "900px", marginBottom: "1.5rem" }}>
          The Mindoro Development and Studies Center conducts comprehensive research on the socio-economic, environmental, and cultural aspects of Mindoro, fostering sustainable development and regional growth.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h3 style={{ marginBottom: "1.5rem", color: "#1e4620" }}>Research Focus Areas</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          <div style={{ background: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", borderLeft: "4px solid #2f855a" }}>
            <h4 style={{ color: "#1e4620", marginBottom: "0.5rem" }}>Regional Development</h4>
            <p style={{ fontSize: "0.95rem", color: "#555" }}>Analyzing and promoting sustainable development initiatives in Mindoro region.</p>
          </div>
          
          <div style={{ background: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", borderLeft: "4px solid #2f855a" }}>
            <h4 style={{ color: "#1e4620", marginBottom: "0.5rem" }}>Socio-Economic Studies</h4>
            <p style={{ fontSize: "0.95rem", color: "#555" }}>Investigating social and economic conditions for improved quality of life.</p>
          </div>
          
          <div style={{ background: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", borderLeft: "4px solid #2f855a" }}>
            <h4 style={{ color: "#1e4620", marginBottom: "0.5rem" }}>Environmental Conservation</h4>
            <p style={{ fontSize: "0.95rem", color: "#555" }}>Protecting Mindoro's natural resources and ecosystems.</p>
          </div>
          
          <div style={{ background: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", borderLeft: "4px solid #2f855a" }}>
            <h4 style={{ color: "#1e4620", marginBottom: "0.5rem" }}>Cultural Heritage Studies</h4>
            <p style={{ fontSize: "0.95rem", color: "#555" }}>Documenting and preserving the cultural identity of Mindoro communities.</p>
          </div>
        </div>
      </section>

      <section style={{ background: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}>
        <h3 style={{ marginBottom: "1rem", color: "#1e4620" }}>Our Mission</h3>
        <p style={{ fontSize: "0.95rem", color: "#555", lineHeight: "1.6" }}>
          To advance knowledge and understanding of Mindoro's unique characteristics and challenges, contributing to evidence-based policy making and sustainable development in the region.
        </p>
      </section>
    </main>
  );
}
