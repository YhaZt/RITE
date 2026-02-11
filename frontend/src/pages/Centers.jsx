import React from "react";

export default function Centers() {
  const centers = [
    {title: "Center for Language & Social Research", desc: "Focuses on linguistics, culture, and social studies."},
    {title: "Center for Environmental Studies", desc: "Research on sustainability and environmental protection."},
    {title: "Center for Educational Research", desc: "Improving teaching and learning practices."},
    {title: "Center for Innovation & Technology", desc: "Applied research and product development."},
  ];

  return (
    <main className="page">
      <section style={{marginBottom: "2rem"}}>
        <h2 style={{marginBottom: "0.5rem"}}>Research Centers</h2>
        <p style={{fontSize: "1rem", lineHeight: "1.6", maxWidth: "900px", marginBottom: "1.5rem"}}>
          Our research centers focus on specialized fields to address institutional and societal needs.
        </p>
      </section>

      <section>
        <h3 style={{marginBottom: "1.5rem", color: "#1e4620"}}>Our Centers</h3>
        <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem"}}>
          {centers.map((center, idx) => (
            <div key={idx} style={{background: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)"}}>
              <h4 style={{color: "#2f855a", marginBottom: "0.5rem"}}>{center.title}</h4>
              <p style={{fontSize: "0.95rem", color: "#555", marginBottom: "1rem"}}>{center.desc}</p>
              <button style={{background: "#22c55e", color: "white", border: "none", padding: "0.5rem 1rem", borderRadius: "4px", cursor: "pointer", fontSize: "0.9rem"}}>
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
