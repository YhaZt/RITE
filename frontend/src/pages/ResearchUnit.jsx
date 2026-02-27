import React from "react";

export default function ResearchUnit() {
  return (
    <main className="page">
      <section className="page-hero" style={{background: "linear-gradient(135deg,#2f855a,#38a169)", color: "white", padding: "clamp(1.5rem, 4vw, 2.5rem)", borderRadius: "8px", marginBottom: "1rem"}}>
        <h2>Research Unit</h2>
        <p style={{maxWidth: "900px", opacity: 0.95}}>
          The Research Unit fosters multidisciplinary projects, research capacity building, and collaborative
          partnerships that address regional and national priorities.
        </p>
      </section>

      <section style={{padding: "1rem 0"}}>
        <div style={{background: "white", padding: "1.25rem", borderRadius: "8px", boxShadow: "0 6px 18px rgba(0,0,0,0.06)"}}>
          <h3 style={{color: "#2f855a"}}>Focus Areas</h3>
          <p>We specialize in applied research initiatives, capacity development and training, and research grants and collaboration to advance institutional research excellence.</p>
        </div>
      </section>
    </main>
  );
}
