import React from "react";

export default function About() {
  return (
    <main className="page">
      <section style={{marginBottom: "2rem"}}>
        <h2 style={{marginBottom: "1rem"}}>About RITE</h2>
        <p style={{fontSize: "1rem", lineHeight: "1.6", maxWidth: "900px"}}>
          The Research, Innovation, and Technology Extension (RITE) office is committed to promoting a strong research culture and supporting researchers, faculty, and students.
        </p>
      </section>

      <section style={{marginBottom: "2rem"}}>
        <h3 style={{marginBottom: "1.5rem", color: "#1e4620"}}>Mission & Vision</h3>
        <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem"}}>
          <div style={{background: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)"}}>
            <h4 style={{color: "#2f855a", marginBottom: "0.5rem"}}>Mission</h4>
            <p>To foster excellence in research, innovation, and extension through support, collaboration, and ethical practices.</p>
          </div>
          <div style={{background: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)"}}>
            <h4 style={{color: "#38a169", marginBottom: "0.5rem"}}>Vision</h4>
            <p>A leading institution in research-driven innovation and community engagement.</p>
          </div>
        </div>
      </section>

      <section>
        <h3 style={{marginBottom: "1rem", color: "#1e4620"}}>Core Values</h3>
        <p style={{fontSize: "1rem"}}>
          <strong>Integrity</strong> • <strong>Collaboration</strong> • <strong>Excellence</strong> • <strong>Service</strong>
        </p>
      </section>
    </main>
  );
}
