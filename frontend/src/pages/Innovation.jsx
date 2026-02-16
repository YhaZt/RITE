import React from "react";

export default function Innovation() {
  const innovations = [
    {title: "Technology Development", desc: "Supporting prototype and product development."},
    {title: "Intellectual Property", desc: "Assistance in patents, copyrights, and utility models."},
    {title: "Startup & Commercialization", desc: "Helping ideas move toward market readiness."},
    {title: "Industry Collaboration", desc: "Partnerships with external stakeholders."},
  ];

  return (
    <main className="page">
      <section style={{marginBottom: "2rem"}}>
        <h2 style={{marginBottom: "0.5rem"}}>Innovation Office</h2>
        <p style={{fontSize: "1rem", lineHeight: "1.6", maxWidth: "900px", marginBottom: "1.5rem"}}>
          Encouraging creativity and transforming research outputs into practical innovations.
        </p>
      </section>

      <section>
        <h3 style={{marginBottom: "1.5rem", color: "#6b46c1"}}>Innovation Areas</h3>
        <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem"}}>
          {innovations.map((item, idx) => (
            <div key={idx} style={{background: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", borderLeft: "4px solid #6b46c1"}}>
              <h4 style={{color: "#5a3aa8", marginBottom: "0.5rem"}}>{item.title}</h4>
              <p style={{fontSize: "0.95rem", color: "#555"}}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
