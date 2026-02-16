import React from "react";

export default function Research() {
  const services = [
    {title: "Research Proposal Assistance", desc: "Guidance in proposal writing and documentation."},
    {title: "Publication Support", desc: "Help with journal selection, formatting, and submission."},
    {title: "Data Analysis Support", desc: "Basic consultation on research data handling."},
    {title: "Research Funding Information", desc: "Updates on grants and funding opportunities."},
    {title: "Capacity Building", desc: "Trainings, seminars, and workshops."},
  ];

  return (
    <main className="page">
      <section style={{marginBottom: "2rem"}}>
        <h2 style={{marginBottom: "0.5rem"}}>Research & Publication Services</h2>
        <p style={{fontSize: "1rem", lineHeight: "1.6", maxWidth: "900px", marginBottom: "1.5rem"}}>
          We provide assistance to researchers from proposal development to publication.
        </p>
      </section>

      <section>
        <h3 style={{marginBottom: "1.5rem", color: "#2f855a"}}>Our Services</h3>
        <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem"}}>
          {services.map((service, idx) => (
            <div key={idx} style={{background: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)"}}>
              <h4 style={{color: "#1e4620", marginBottom: "0.5rem"}}>{service.title}</h4>
              <p style={{fontSize: "0.95rem", color: "#555"}}>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
