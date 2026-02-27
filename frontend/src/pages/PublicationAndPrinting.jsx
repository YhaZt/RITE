import React from "react";

export default function PublicationAndPrinting() {
  return (
    <main className="page">
      <section className="page-hero" style={{background: "linear-gradient(135deg,#1a2332,#1e4620)", color: "white", padding: "clamp(1.5rem, 4vw, 2.5rem)", borderRadius: "8px", marginBottom: "1rem"}}>
        <h2>Publication and Printing Unit</h2>
        <p style={{maxWidth: "900px", opacity: 0.9}}>
          The Publication and Printing Unit supports dissemination of scholarly work through high-quality
          publishing, layout, and printing services that meet academic and institutional standards.
        </p>
      </section>

      <section style={{padding: "1rem 0"}}>
        <div style={{background: "white", padding: "1.25rem", borderRadius: "8px", boxShadow: "0 6px 18px rgba(0,0,0,0.06)"}}>
          <h3 style={{color: "#1e4620"}}>Services</h3>
          <p>The unit provides peer-reviewed journal support, printing and layout services, and open access assistance to ensure your research reaches the widest possible audience.</p>
        </div>
      </section>
    </main>
  );
}
