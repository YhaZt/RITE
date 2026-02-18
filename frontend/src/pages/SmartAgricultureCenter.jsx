import React from "react";

export default function SmartAgricultureCenter() {
  return (
    <main className="page">
      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ marginBottom: "0.5rem" }}>Center for Smart Agriculture and Biosystems Innovation</h2>
        <p style={{ fontSize: "1rem", lineHeight: "1.6", maxWidth: "900px", marginBottom: "1.5rem" }}>
          Integrating AI and IoT into agricultural and industrial solutions to enhance productivity, sustainability, and innovation in farming and biosystems.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h3 style={{ marginBottom: "1.5rem", color: "#00d460" }}>Research Focus Areas</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          <div style={{ background: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", borderLeft: "4px solid #00d460" }}>
            <h4 style={{ color: "#00d460", marginBottom: "0.5rem" }}>Precision Agriculture</h4>
            <p style={{ fontSize: "0.95rem", color: "#555" }}>Using technology to optimize crop management and resource utilization.</p>
          </div>
          
          <div style={{ background: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", borderLeft: "4px solid #00d460" }}>
            <h4 style={{ color: "#00d460", marginBottom: "0.5rem" }}>IoT and Smart Sensors</h4>
            <p style={{ fontSize: "0.95rem", color: "#555" }}>Developing smart monitoring systems for agricultural applications.</p>
          </div>
          
          <div style={{ background: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", borderLeft: "4px solid #00d460" }}>
            <h4 style={{ color: "#00d460", marginBottom: "0.5rem" }}>Sustainable Farming Practices</h4>
            <p style={{ fontSize: "0.95rem", color: "#555" }}>Promoting environmentally friendly and efficient farming methods.</p>
          </div>
          
          <div style={{ background: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", borderLeft: "4px solid #00d460" }}>
            <h4 style={{ color: "#00d460", marginBottom: "0.5rem" }}>Biotechnology & Biosystems</h4>
            <p style={{ fontSize: "0.95rem", color: "#555" }}>Advancing agricultural biotechnology and biological solutions.</p>
          </div>
        </div>
      </section>

      <section style={{ background: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}>
        <h3 style={{ marginBottom: "1rem", color: "#00d460" }}>Our Mission</h3>
        <p style={{ fontSize: "0.95rem", color: "#555", lineHeight: "1.6" }}>
          To revolutionize agriculture through smart technologies and biosystems innovation, ensuring sustainable food production and agricultural prosperity.
        </p>
      </section>
    </main>
  );
}
