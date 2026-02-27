import React from "react";

export default function About() {
  return (
    <main className="page" style={{ padding: "clamp(1rem, 4vw, 2rem)" }}>

      {/* Hero Banner */}
      <section style={{
        background: "linear-gradient(135deg, #094A25 0%, #0C6B37 40%, #16a34a 100%)",
        color: "white",
        padding: "clamp(1.5rem, 4vw, 2.5rem) clamp(1.2rem, 4vw, 2rem)",
        borderRadius: "16px",
        marginBottom: "clamp(1.5rem, 4vw, 2.5rem)",
        position: "relative",
        overflow: "hidden",
        wordBreak: "break-word",
      }}>
        <div style={{ position: "absolute", top: "-40px", right: "-30px", width: "180px", height: "180px", borderRadius: "50%", background: "rgba(255,255,255,0.06)" }} />
        <div style={{ position: "absolute", bottom: "-60px", left: "20%", width: "220px", height: "220px", borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />
        <p style={{ fontSize: "clamp(0.65rem, 2vw, 0.75rem)", fontWeight: "600", letterSpacing: "2px", textTransform: "uppercase", opacity: 0.7, marginBottom: "0.5rem", position: "relative" }}>
          About Us
        </p>
        <h2 style={{ fontSize: "clamp(1.2rem, 4vw, 1.6rem)", fontWeight: "800", marginBottom: "0.6rem", position: "relative", lineHeight: "1.3" }}>
          Research, Innovation &<br />Technology Extension
        </h2>
        <p style={{ maxWidth: "600px", opacity: 0.9, fontSize: "clamp(0.8rem, 2.5vw, 0.9rem)", lineHeight: "1.7", margin: 0, position: "relative" }}>
          The RITE office is committed to promoting a strong research culture and supporting researchers, faculty, and students in driving meaningful impact.
        </p>
      </section>

      {/* Mission & Vision */}
      <section style={{ marginBottom: "clamp(1.5rem, 4vw, 2.5rem)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "1rem" }}>

          {/* Mission Card */}
          <div style={{
            background: "linear-gradient(145deg, #f0fdf4, #dcfce7)",
            padding: "clamp(1.2rem, 3vw, 2rem)",
            borderRadius: "16px",
            border: "1px solid #bbf7d0",
            position: "relative",
            overflow: "hidden",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            boxShadow: "0 4px 16px rgba(22,163,74,0.08)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-4px)";
            e.currentTarget.style.boxShadow = "0 12px 32px rgba(22,163,74,0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 16px rgba(22,163,74,0.08)";
          }}>
            <div style={{ position: "absolute", top: "-20px", right: "-20px", width: "80px", height: "80px", borderRadius: "50%", background: "rgba(22,163,74,0.08)" }} />
            <h4 style={{ color: "#166534", marginBottom: "0.6rem", fontSize: "clamp(0.95rem, 2.5vw, 1.1rem)", fontWeight: "700" }}>Our Mission</h4>
            <p style={{ fontSize: "clamp(0.8rem, 2.5vw, 0.88rem)", lineHeight: "1.7", color: "#374151", margin: 0 }}>
              To foster excellence in research, innovation, and extension through support, collaboration, and ethical practices.
            </p>
          </div>

          {/* Vision Card */}
          <div style={{
            background: "linear-gradient(145deg, #eff6ff, #dbeafe)",
            padding: "clamp(1.2rem, 3vw, 2rem)",
            borderRadius: "16px",
            border: "1px solid #bfdbfe",
            position: "relative",
            overflow: "hidden",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            boxShadow: "0 4px 16px rgba(37,99,235,0.08)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-4px)";
            e.currentTarget.style.boxShadow = "0 12px 32px rgba(37,99,235,0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 16px rgba(37,99,235,0.08)";
          }}>
            <div style={{ position: "absolute", top: "-20px", right: "-20px", width: "80px", height: "80px", borderRadius: "50%", background: "rgba(37,99,235,0.08)" }} />
            <h4 style={{ color: "#1e40af", marginBottom: "0.6rem", fontSize: "clamp(0.95rem, 2.5vw, 1.1rem)", fontWeight: "700" }}>Our Vision</h4>
            <p style={{ fontSize: "clamp(0.8rem, 2.5vw, 0.88rem)", lineHeight: "1.7", color: "#374151", margin: 0 }}>
              A leading institution in research-driven innovation and community engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section style={{ marginBottom: "2rem" }}>
        <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          <p style={{ fontSize: "0.75rem", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase", color: "#16a34a", marginBottom: "0.3rem" }}>
            What We Stand For
          </p>
          <h3 style={{ fontSize: "1.3rem", fontWeight: "800", color: "#1f2937", margin: 0 }}>
            Core Values
          </h3>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 120px), 1fr))", gap: "0.8rem" }}>
          {[
            { label: "Integrity", color: "#166534", bg: "#f0fdf4", border: "#bbf7d0" },
            { label: "Collaboration", color: "#1e40af", bg: "#eff6ff", border: "#bfdbfe" },
            { label: "Excellence", color: "#9a3412", bg: "#fff7ed", border: "#fed7aa" },
            { label: "Service", color: "#6b21a8", bg: "#faf5ff", border: "#e9d5ff" },
          ].map((val) => (
            <div key={val.label} style={{
              background: val.bg,
              border: `1px solid ${val.border}`,
              borderRadius: "14px",
              padding: "clamp(1rem, 3vw, 1.5rem) clamp(0.6rem, 2vw, 1rem)",
              textAlign: "center",
              transition: "transform 0.25s ease, box-shadow 0.25s ease",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}>
              <div style={{ fontSize: "clamp(0.78rem, 2.5vw, 0.88rem)", fontWeight: "700", color: val.color }}>{val.label}</div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
