import React from "react";

export default function MinsuIBibes() {
  return (
    <main className="page">
      <section className="page-hero" style={{background: "linear-gradient(135deg,#dd6b20,#f6ad55)", color: "white", padding: "2.5rem", borderRadius: "8px", marginBottom: "1rem"}}>
        <h2>Minsu I-BIBES</h2>
        <p style={{maxWidth: "900px", opacity: 0.95}}>
          Minsu I-BIBES provides targeted innovation support, bridging community-driven solutions with
          institutional resources and expertise.
        </p>
      </section>

      <section style={{padding: "1rem 0"}}>
        <div style={{background: "white", padding: "1.25rem", borderRadius: "8px", boxShadow: "0 6px 18px rgba(0,0,0,0.06)"}}>
          <h3 style={{color: "#dd6b20"}}>Programs</h3>
          <p>We deliver community innovation labs, field pilot support, and capacity-building workshops to empower teams in developing sustainable solutions.</p>
        </div>
      </section>
    </main>
  );
}
