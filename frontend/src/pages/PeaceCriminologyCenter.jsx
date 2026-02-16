import React from "react";

export default function PeaceCriminologyCenter() {
  return (
    <main className="page">
      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ marginBottom: "0.5rem" }}>Center for Peace, Criminology, and Law Enforcement Studies</h2>
        <p style={{ fontSize: "1rem", lineHeight: "1.6", maxWidth: "900px", marginBottom: "1.5rem" }}>
          Exploring conflict resolution, societal development models, and law enforcement approaches to promote peace and justice in communities.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h3 style={{ marginBottom: "1.5rem", color: "#1e4620" }}>Research Focus Areas</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          <div style={{ background: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", borderLeft: "4px solid #2f855a" }}>
            <h4 style={{ color: "#1e4620", marginBottom: "0.5rem" }}>Conflict Resolution</h4>
            <p style={{ fontSize: "0.95rem", color: "#555" }}>Developing strategies for peaceful conflict management and resolution.</p>
          </div>
          
          <div style={{ background: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", borderLeft: "4px solid #2f855a" }}>
            <h4 style={{ color: "#1e4620", marginBottom: "0.5rem" }}>Criminology Research</h4>
            <p style={{ fontSize: "0.95rem", color: "#555" }}>Studying crime causes, prevention, and community safety.</p>
          </div>
          
          <div style={{ background: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", borderLeft: "4px solid #2f855a" }}>
            <h4 style={{ color: "#1e4620", marginBottom: "0.5rem" }}>Law Enforcement Policy</h4>
            <p style={{ fontSize: "0.95rem", color: "#555" }}>Advancing evidence-based policing and law enforcement practices.</p>
          </div>
          
          <div style={{ background: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", borderLeft: "4px solid #2f855a" }}>
            <h4 style={{ color: "#1e4620", marginBottom: "0.5rem" }}>Peace and Justice Studies</h4>
            <p style={{ fontSize: "0.95rem", color: "#555" }}>Promoting social justice and peacebuilding initiatives.</p>
          </div>
        </div>
      </section>

      <section style={{ background: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}>
        <h3 style={{ marginBottom: "1rem", color: "#1e4620" }}>Our Mission</h3>
        <p style={{ fontSize: "0.95rem", color: "#555", lineHeight: "1.6" }}>
          To advance peace, security, and justice through research-based solutions that address criminology challenges and promote peaceful, prosperous communities.
        </p>
      </section>
    </main>
  );
}
