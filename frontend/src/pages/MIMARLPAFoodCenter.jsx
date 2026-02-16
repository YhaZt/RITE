import React from "react";

export default function MIMARLPAFoodCenter() {
  return (
    <main className="page">
      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ marginBottom: "0.5rem" }}>MIMAROPA Food Innovation Center</h2>
        <p style={{ fontSize: "1rem", lineHeight: "1.6", maxWidth: "900px", marginBottom: "1.5rem" }}>
          Focusing on nutrition, food safety, and agricultural processing innovations to enhance food security and support local farmers in the MIMAROPA region.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h3 style={{ marginBottom: "1.5rem", color: "#1e4620" }}>Research Focus Areas</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          <div style={{ background: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", borderLeft: "4px solid #2f855a" }}>
            <h4 style={{ color: "#1e4620", marginBottom: "0.5rem" }}>Food Processing Innovation</h4>
            <p style={{ fontSize: "0.95rem", color: "#555" }}>Developing value-added food products and processing technologies.</p>
          </div>
          
          <div style={{ background: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", borderLeft: "4px solid #2f855a" }}>
            <h4 style={{ color: "#1e4620", marginBottom: "0.5rem" }}>Food Safety & Quality</h4>
            <p style={{ fontSize: "0.95rem", color: "#555" }}>Ensuring food safety standards and quality assurance.</p>
          </div>
          
          <div style={{ background: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", borderLeft: "4px solid #2f855a" }}>
            <h4 style={{ color: "#1e4620", marginBottom: "0.5rem" }}>Nutrition Research</h4>
            <p style={{ fontSize: "0.95rem", color: "#555" }}>Promoting health through nutritional science and education.</p>
          </div>
          
          <div style={{ background: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", borderLeft: "4px solid #2f855a" }}>
            <h4 style={{ color: "#1e4620", marginBottom: "0.5rem" }}>Agricultural Product Development</h4>
            <p style={{ fontSize: "0.95rem", color: "#555" }}>Creating innovative agricultural products and applications.</p>
          </div>
        </div>
      </section>

      <section style={{ background: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}>
        <h3 style={{ marginBottom: "1rem", color: "#1e4620" }}>Our Mission</h3>
        <p style={{ fontSize: "0.95rem", color: "#555", lineHeight: "1.6" }}>
          To innovate and advance food systems in the MIMAROPA region, creating sustainable solutions for food security, nutrition, and rural economic development.
        </p>
      </section>
    </main>
  );
}
