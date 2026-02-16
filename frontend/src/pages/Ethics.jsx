import React from "react";

export default function Ethics() {
  const ethics = [
    {title: "Research Ethics Review", desc: "Evaluation of research involving human or animal subjects."},
    {title: "Ethics Clearance", desc: "Issuance of ethics approval and certifications."},
    {title: "Integrity Monitoring", desc: "Promoting honesty and accountability in research."},
    {title: "Ethics Training", desc: "Seminars on ethical standards and compliance."},
  ];

  return (
    <main className="page">
      <section style={{marginBottom: "2rem"}}>
        <h2 style={{marginBottom: "0.5rem"}}>Research Ethics Extension & Integrity</h2>
        <p style={{fontSize: "1rem", lineHeight: "1.6", maxWidth: "900px", marginBottom: "1.5rem"}}>
          Ensuring ethical, responsible, and transparent research practices.
        </p>
      </section>

      <section>
        <h3 style={{marginBottom: "1.5rem", color: "#1f2937"}}>Our Focus Areas</h3>
        <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem"}}>
          {ethics.map((item, idx) => (
            <div key={idx} style={{background: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)"}}>
              <h4 style={{color: "#2f855a", marginBottom: "0.5rem"}}>{item.title}</h4>
              <p style={{fontSize: "0.95rem", color: "#555"}}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
