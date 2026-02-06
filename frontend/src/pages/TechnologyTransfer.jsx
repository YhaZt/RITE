import React from "react";

export default function TechnologyTransfer() {
  return (
    <main className="page">
      <section className="page-hero" style={{background: "linear-gradient(135deg,#4c51bf,#6b46c1)", color: "white", padding: "2.5rem", borderRadius: "8px", marginBottom: "1rem"}}>
        <h2>Technology Transfer & Patent Unit</h2>
        <p style={{maxWidth: "900px", opacity: 0.95}}>
          The Technology Transfer & Patent Unit facilitates commercialization of research outputs, 
          supports patent filing, and connects inventors with industry partners.
        </p>
      </section>

      <section style={{padding: "1rem 0"}}>
        <div style={{background: "white", padding: "1.25rem", borderRadius: "8px", boxShadow: "0 6px 18px rgba(0,0,0,0.06)"}}>
          <h3 style={{color: "#6b46c1"}}>What we offer</h3>
          <p>We provide IP strategy and patent support, industry liaison and licensing, and startup incubation advice to help transform your innovations into market opportunities.</p>
        </div>
      </section>
    </main>
  );
}
