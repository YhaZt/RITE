import React from "react";

export default function TextileFiberCenter() {
  return (
    <main className="page">
      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ marginBottom: "0.5rem" }}>Natural Textile Fiber Innovation Center</h2>
        <p style={{ fontSize: "1rem", lineHeight: "1.6", maxWidth: "900px", marginBottom: "1.5rem" }}>
          Researching fiber science and sustainable garment production to advance the textile industry through innovation and environmental stewardship.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h3 style={{ marginBottom: "1.5rem", color: "#1e4620" }}>Research Focus Areas</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          <div style={{ background: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", borderLeft: "4px solid #2f855a" }}>
            <h4 style={{ color: "#1e4620", marginBottom: "0.5rem" }}>Natural Fiber Research</h4>
            <p style={{ fontSize: "0.95rem", color: "#555" }}>Studying properties and applications of natural textile fibers.</p>
          </div>
          
          <div style={{ background: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", borderLeft: "4px solid #2f855a" }}>
            <h4 style={{ color: "#1e4620", marginBottom: "0.5rem" }}>Sustainable Textile Production</h4>
            <p style={{ fontSize: "0.95rem", color: "#555" }}>Developing eco-friendly garment manufacturing processes.</p>
          </div>
          
          <div style={{ background: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", borderLeft: "4px solid #2f855a" }}>
            <h4 style={{ color: "#1e4620", marginBottom: "0.5rem" }}>Fiber Processing Innovation</h4>
            <p style={{ fontSize: "0.95rem", color: "#555" }}>Advancing processing technologies for natural fibers.</p>
          </div>
          
          <div style={{ background: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", borderLeft: "4px solid #2f855a" }}>
            <h4 style={{ color: "#1e4620", marginBottom: "0.5rem" }}>Product Development</h4>
            <p style={{ fontSize: "0.95rem", color: "#555" }}>Creating innovative textile products with superior properties.</p>
          </div>
        </div>
      </section>

      <section style={{ background: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}>
        <h3 style={{ marginBottom: "1rem", color: "#1e4620" }}>Our Mission</h3>
        <p style={{ fontSize: "0.95rem", color: "#555", lineHeight: "1.6" }}>
          To innovate and advance the textile industry through natural fiber research and sustainable practices, creating high-quality, environmentally responsible products.
        </p>
      </section>
    </main>
  );
}
