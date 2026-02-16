import React from "react";

export default function FisheriesResearchCenter() {
  return (
    <main className="page">
      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ marginBottom: "0.5rem" }}>Fisheries Research and Development Center</h2>
        <p style={{ fontSize: "1rem", lineHeight: "1.6", maxWidth: "900px", marginBottom: "1.5rem" }}>
          Advancing aquatic science and sustainable fishing technologies to support food security and the livelihoods of fishing communities.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h3 style={{ marginBottom: "1.5rem", color: "#1e4620" }}>Research Focus Areas</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          <div style={{ background: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", borderLeft: "4px solid #2f855a" }}>
            <h4 style={{ color: "#1e4620", marginBottom: "0.5rem" }}>Sustainable Fishing Practices</h4>
            <p style={{ fontSize: "0.95rem", color: "#555" }}>Developing methods that balance productivity with ecosystem health.</p>
          </div>
          
          <div style={{ background: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", borderLeft: "4px solid #2f855a" }}>
            <h4 style={{ color: "#1e4620", marginBottom: "0.5rem" }}>Aquaculture Development</h4>
            <p style={{ fontSize: "0.95rem", color: "#555" }}>Advancing fish farming and breeding technologies.</p>
          </div>
          
          <div style={{ background: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", borderLeft: "4px solid #2f855a" }}>
            <h4 style={{ color: "#1e4620", marginBottom: "0.5rem" }}>Fish Biology & Ecology</h4>
            <p style={{ fontSize: "0.95rem", color: "#555" }}>Understanding aquatic ecosystems and species behavior.</p>
          </div>
          
          <div style={{ background: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", borderLeft: "4px solid #2f855a" }}>
            <h4 style={{ color: "#1e4620", marginBottom: "0.5rem" }}>Post-Harvest Technology</h4>
            <p style={{ fontSize: "0.95rem", color: "#555" }}>Improving processing, preservation, and product development.</p>
          </div>
        </div>
      </section>

      <section style={{ background: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}>
        <h3 style={{ marginBottom: "1rem", color: "#1e4620" }}>Our Mission</h3>
        <p style={{ fontSize: "0.95rem", color: "#555", lineHeight: "1.6" }}>
          To strengthen the fisheries sector through research-driven innovations, ensuring sustainable aquatic resource management and improved food security.
        </p>
      </section>
    </main>
  );
}
