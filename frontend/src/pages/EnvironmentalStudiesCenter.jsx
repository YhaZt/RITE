import React from "react";

export default function EnvironmentalStudiesCenter() {
  return (
    <main className="page">
      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ marginBottom: "0.5rem" }}>Center for Environmental Studies</h2>
        <p style={{ fontSize: "1rem", lineHeight: "1.6", maxWidth: "900px", marginBottom: "1.5rem" }}>
          Dedicated to sustainability, conservation, and ecosystem protection through innovative research and practical solutions for environmental challenges.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h3 style={{ marginBottom: "1.5rem", color: "#1e4620" }}>Research Focus Areas</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          <div style={{ background: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", borderLeft: "4px solid #2f855a" }}>
            <h4 style={{ color: "#1e4620", marginBottom: "0.5rem" }}>Biodiversity Conservation</h4>
            <p style={{ fontSize: "0.95rem", color: "#555" }}>Protecting and restoring natural habitats and species diversity.</p>
          </div>
          
          <div style={{ background: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", borderLeft: "4px solid #2f855a" }}>
            <h4 style={{ color: "#1e4620", marginBottom: "0.5rem" }}>Climate Change Research</h4>
            <p style={{ fontSize: "0.95rem", color: "#555" }}>Studying climate impacts and developing mitigation and adaptation strategies.</p>
          </div>
          
          <div style={{ background: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", borderLeft: "4px solid #2f855a" }}>
            <h4 style={{ color: "#1e4620", marginBottom: "0.5rem" }}>Sustainable Resource Management</h4>
            <p style={{ fontSize: "0.95rem", color: "#555" }}>Promoting responsible use and management of natural resources.</p>
          </div>
          
          <div style={{ background: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", borderLeft: "4px solid #2f855a" }}>
            <h4 style={{ color: "#1e4620", marginBottom: "0.5rem" }}>Pollution Control & Remediation</h4>
            <p style={{ fontSize: "0.95rem", color: "#555" }}>Developing solutions for air, water, and soil contamination.</p>
          </div>
        </div>
      </section>

      <section style={{ background: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}>
        <h3 style={{ marginBottom: "1rem", color: "#1e4620" }}>Our Mission</h3>
        <p style={{ fontSize: "0.95rem", color: "#555", lineHeight: "1.6" }}>
          To advance environmental knowledge and drive sustainable practices that protect our planet for future generations while supporting economic and social development.
        </p>
      </section>
    </main>
  );
}
