import React from "react";

export default function Research() {
  const services = [
    { title: "Research Proposal Assistance", desc: "Guidance in proposal writing, documentation, and methodology development for impactful research.", color: "#166534", bg: "linear-gradient(145deg, #f0fdf4, #dcfce7)", border: "#bbf7d0" },
    { title: "Publication Support", desc: "Help with journal selection, formatting, and submission to maximize publication success.", color: "#1e40af", bg: "linear-gradient(145deg, #eff6ff, #dbeafe)", border: "#bfdbfe" },
    { title: "Data Analysis Support", desc: "Basic consultation on research data handling, statistical tools, and interpretation of results.", color: "#9a3412", bg: "linear-gradient(145deg, #fff7ed, #ffedd5)", border: "#fed7aa" },
    { title: "Research Funding Information", desc: "Updates on grants, funding opportunities, and financial support for research initiatives.", color: "#6b21a8", bg: "linear-gradient(145deg, #faf5ff, #f3e8ff)", border: "#e9d5ff" },
    { title: "Capacity Building", desc: "Trainings, seminars, and workshops designed to enhance research skills and scholarly competence.", color: "#0e7490", bg: "linear-gradient(145deg, #ecfeff, #cffafe)", border: "#a5f3fc" },
  ];

  return (
    <main className="page" style={{ padding: "clamp(1rem, 3vw, 2rem)" }}>

      {/* Hero Banner */}
      <section style={{
        background: "linear-gradient(135deg, #094A25 0%, #0C6B37 40%, #16a34a 100%)",
        color: "white",
        padding: "clamp(1.5rem, 4vw, 2.5rem) clamp(1rem, 3vw, 2rem)",
        borderRadius: "18px",
        marginBottom: "2.5rem",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: "-40px", right: "-30px", width: "180px", height: "180px", borderRadius: "50%", background: "rgba(255,255,255,0.06)" }} />
        <div style={{ position: "absolute", bottom: "-60px", left: "20%", width: "220px", height: "220px", borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />
        <p style={{ fontSize: "0.75rem", fontWeight: "600", letterSpacing: "2px", textTransform: "uppercase", opacity: 0.7, marginBottom: "0.5rem", position: "relative" }}>
          RITE Research
        </p>
        <h2 style={{ fontSize: "clamp(1.3rem, 4vw, 1.6rem)", fontWeight: "800", marginBottom: "0.6rem", position: "relative", lineHeight: "1.3" }}>
          Research &<br />Publication Services
        </h2>
        <p style={{ maxWidth: "600px", opacity: 0.9, fontSize: "0.9rem", lineHeight: "1.7", margin: 0, position: "relative" }}>
          We provide comprehensive assistance to researchers from proposal development to publication, ensuring quality and impact at every stage.
        </p>
      </section>

      {/* Services Grid */}
      <section style={{ marginBottom: "2rem" }}>
        <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          <p style={{ fontSize: "0.75rem", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase", color: "#16a34a", marginBottom: "0.3rem" }}>
            What We Offer
          </p>
          <h3 style={{ fontSize: "clamp(1.1rem, 3vw, 1.3rem)", fontWeight: "800", color: "#1f2937", margin: 0 }}>
            Our Services
          </h3>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "1.5rem" }}>
          {services.map((service, idx) => (
            <div key={idx} style={{
              background: service.bg,
              padding: "clamp(1.2rem, 3vw, 1.8rem)",
              borderRadius: "16px",
              border: `1px solid ${service.border}`,
              position: "relative",
              overflow: "hidden",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.05)";
            }}>
              <div style={{ position: "absolute", top: "-20px", right: "-20px", width: "80px", height: "80px", borderRadius: "50%", background: "rgba(0,0,0,0.03)" }} />
              <h4 style={{ color: service.color, marginBottom: "0.6rem", fontSize: "1.05rem", fontWeight: "700" }}>{service.title}</h4>
              <p style={{ fontSize: "0.85rem", lineHeight: "1.7", color: "#374151", margin: 0 }}>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
