import React from "react";

export default function Extension() {
  const programs = [
    {title: "Community Engagement", desc: "Outreach programs and capacity building."},
    {title: "Training & Workshops", desc: "Skills development for partner communities."},
    {title: "Technology Transfer", desc: "Sharing research outputs for practical use."},
    {title: "Partnership Programs", desc: "Collaboration with LGUs, NGOs, and industries."},
  ];

  return (
    <main className="page">
      <section style={{marginBottom: "2rem"}}>
        <h2 style={{marginBottom: "0.5rem"}}>Extension Services</h2>
        <p style={{fontSize: "1rem", lineHeight: "1.6", maxWidth: "900px", marginBottom: "1.5rem"}}>
          Bringing research-based solutions to communities and stakeholders.
        </p>
      </section>

      <section>
        <h3 style={{marginBottom: "1.5rem", color: "#22c55e"}}>Extension Programs</h3>
        <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem"}}>
          {programs.map((program, idx) => (
            <div key={idx} style={{background: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", borderTop: "4px solid #22c55e"}}>
              <h4 style={{color: "#1e4620", marginBottom: "0.5rem"}}>{program.title}</h4>
              <p style={{fontSize: "0.95rem", color: "#555"}}>{program.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
