import React from "react";

export default function SmartAgricultureCenter() {
  const focusAreas = [
    { icon: "🎯", title: "Precision Agriculture", desc: "Using technology to optimize crop management and resource utilization.", color: "#16a34a", bg: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)" },
    { icon: "📡", title: "IoT and Smart Sensors", desc: "Developing smart monitoring systems for agricultural applications.", color: "#2563eb", bg: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)" },
    { icon: "🌱", title: "Sustainable Farming Practices", desc: "Promoting environmentally friendly and efficient farming methods.", color: "#ca8a04", bg: "linear-gradient(135deg, #fefce8 0%, #fef9c3 100%)" },
    { icon: "🧬", title: "Biotechnology & Biosystems", desc: "Advancing agricultural biotechnology and biological solutions.", color: "#7c3aed", bg: "linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)" },
  ];

  return (
    <main className="page" style={{ padding: 0, overflow: "hidden" }}>

      {/* Hero Banner */}
      <section style={{
        background: "linear-gradient(135deg, #14532d 0%, #166534 40%, #15803d 70%, #22c55e 100%)",
        color: "white",
        padding: "clamp(2.5rem, 6vw, 4.5rem) clamp(1.2rem, 4vw, 3rem)",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: "-60px", right: "-40px", width: "250px", height: "250px", borderRadius: "50%", background: "rgba(34,197,94,0.1)" }} />
        <div style={{ position: "absolute", bottom: "-80px", left: "10%", width: "300px", height: "300px", borderRadius: "50%", background: "rgba(74,222,128,0.06)" }} />
        <div style={{ position: "absolute", top: "30%", right: "20%", width: "100px", height: "100px", borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />

        <p style={{ fontSize: "0.75rem", fontWeight: "600", letterSpacing: "3px", textTransform: "uppercase", opacity: 0.6, marginBottom: "0.8rem", position: "relative" }}>
          Research Center
        </p>
        <h1 style={{ fontSize: "clamp(1.5rem, 4.5vw, 2.8rem)", fontWeight: "800", marginBottom: "1rem", position: "relative", lineHeight: "1.2" }}>
          🌾 Center for Smart Agriculture<br />and Biosystems Innovation
        </h1>
        <p style={{ maxWidth: "650px", opacity: 0.9, fontSize: "clamp(0.88rem, 2vw, 1.05rem)", lineHeight: "1.8", margin: 0, position: "relative" }}>
          Integrating AI and IoT into agricultural and industrial solutions to enhance productivity, sustainability, and innovation in farming and biosystems.
        </p>

        <div style={{ width: "80px", height: "4px", background: "linear-gradient(90deg, #86efac, #4ade80)", borderRadius: "2px", marginTop: "1.5rem", position: "relative" }} />
      </section>

      {/* Focus Areas */}
      <section style={{ padding: "clamp(1.5rem, 4vw, 3rem) clamp(1.2rem, 4vw, 3rem)" }}>
        <h2 style={{
          fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
          fontWeight: "700",
          color: "#14532d",
          marginBottom: "0.4rem",
        }}>Research Focus Areas</h2>
        <p style={{ color: "#6b7280", fontSize: "clamp(0.85rem, 2vw, 0.95rem)", marginBottom: "clamp(1.2rem, 3vw, 2rem)" }}>
          Transforming agriculture through technology and innovation
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
          gap: "clamp(1rem, 2.5vw, 1.5rem)",
        }}>
          {focusAreas.map((area, i) => (
            <div key={i} style={{
              background: area.bg,
              padding: "clamp(1.2rem, 3vw, 1.8rem)",
              borderRadius: "16px",
              border: `1px solid ${area.color}20`,
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = `0 12px 30px ${area.color}15`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}>
              <div style={{
                width: "48px", height: "48px", borderRadius: "12px",
                background: "white",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.4rem", marginBottom: "1rem",
                boxShadow: `0 4px 12px ${area.color}15`,
              }}>{area.icon}</div>
              <h4 style={{ color: area.color, marginBottom: "0.5rem", fontSize: "clamp(0.95rem, 2.2vw, 1.05rem)", fontWeight: "700" }}>{area.title}</h4>
              <p style={{ fontSize: "clamp(0.82rem, 2vw, 0.9rem)", color: "#4b5563", lineHeight: "1.7", margin: 0 }}>{area.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Programs & Services */}
      <section style={{
        background: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
        padding: "clamp(2rem, 5vw, 3.5rem) clamp(1.2rem, 4vw, 3rem)",
      }}>
        <h3 style={{
          fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
          fontWeight: 700,
          color: "#14532d",
          marginBottom: "0.4rem",
        }}>Programs & Services</h3>
        <p style={{ color: "#6b7280", fontSize: "clamp(0.85rem, 2vw, 0.95rem)", marginBottom: "clamp(1.2rem, 3vw, 2rem)" }}>
          Empowering farmers with cutting-edge tools and knowledge
        </p>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
          gap: "clamp(1rem, 2.5vw, 1.5rem)",
        }}>
          {[
            { icon: "🤖", title: "Agri-Tech Training Hub", desc: "Hands-on training for farmers and agri-entrepreneurs on drones, sensor systems, automated irrigation, and data-driven farming techniques.", color: "#16a34a" },
            { icon: "🌿", title: "Crop Innovation Lab", desc: "Research facility for developing climate-resilient crop varieties and organic pest management solutions tailored for Mindoro's agricultural landscape.", color: "#2563eb" },
            { icon: "📊", title: "Farm Data Analytics", desc: "Providing farmers with real-time soil, weather, and crop health analytics to optimize yields and reduce costs through smart decision-making.", color: "#ca8a04" },
          ].map((p, i) => (
            <div key={i} style={{
              background: "#fff",
              borderRadius: "16px",
              padding: "clamp(1.4rem, 3vw, 2rem)",
              borderTop: `4px solid ${p.color}`,
              boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,0,0,0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)";
            }}>
              <div style={{
                width: "48px", height: "48px", borderRadius: "12px",
                background: `${p.color}12`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.4rem", marginBottom: "1rem",
              }}>{p.icon}</div>
              <h4 style={{ color: p.color, fontSize: "clamp(1rem, 2.2vw, 1.1rem)", fontWeight: 700, marginBottom: "0.5rem" }}>{p.title}</h4>
              <p style={{ color: "#4b5563", fontSize: "clamp(0.82rem, 2vw, 0.9rem)", lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Research Highlights */}
      <section style={{
        background: "linear-gradient(135deg, #14532d 0%, #166534 50%, #15803d 100%)",
        padding: "clamp(2rem, 5vw, 3.5rem) clamp(1.2rem, 4vw, 3rem)",
      }}>
        <h3 style={{
          fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
          fontWeight: 700,
          color: "#fff",
          marginBottom: "0.4rem",
        }}>Recent Research Highlights</h3>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "clamp(0.85rem, 2vw, 0.95rem)", marginBottom: "clamp(1.2rem, 3vw, 2rem)" }}>
          Breakthroughs in smart farming and biosystems
        </p>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
          gap: "clamp(1rem, 2.5vw, 1.5rem)",
        }}>
          {[
            { tag: "IoT", title: "Smart Irrigation Systems for Rice Paddies", desc: "Deploying IoT-based soil moisture sensors and automated water management to reduce water consumption by up to 40% in Mindoro rice fields.", tagColor: "#22c55e" },
            { tag: "Biotech", title: "Drought-Resistant Corn Varieties", desc: "Developing locally adapted corn hybrids through marker-assisted selection to improve yield stability during El Niño dry spells.", tagColor: "#8b5cf6" },
            { tag: "Precision Ag", title: "Drone-Based Crop Health Monitoring", desc: "Using multispectral drone imaging to detect early signs of pest infestation and nutrient deficiency across large farmland areas.", tagColor: "#3b82f6" },
          ].map((r, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(8px)",
              borderRadius: "16px",
              padding: "clamp(1.4rem, 3vw, 2rem)",
              border: "1px solid rgba(255,255,255,0.12)",
              transition: "transform 0.3s ease, background 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.background = "rgba(255,255,255,0.14)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.background = "rgba(255,255,255,0.08)";
            }}>
              <span style={{
                display: "inline-block",
                background: r.tagColor,
                color: "#fff",
                padding: "0.2rem 0.7rem",
                borderRadius: "999px",
                fontSize: "clamp(0.65rem, 1.5vw, 0.75rem)",
                fontWeight: 600,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                marginBottom: "clamp(0.6rem, 2vw, 0.8rem)",
              }}>{r.tag}</span>
              <h4 style={{ color: "#fff", fontSize: "clamp(0.95rem, 2.2vw, 1.08rem)", fontWeight: 700, marginBottom: "0.5rem", lineHeight: 1.3 }}>{r.title}</h4>
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "clamp(0.82rem, 2vw, 0.9rem)", lineHeight: 1.65, margin: 0 }}>{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section style={{ padding: "clamp(2rem, 5vw, 3.5rem) clamp(1.2rem, 4vw, 3rem)" }}>
        <div style={{
          background: "linear-gradient(135deg, #14532d 0%, #16a34a 100%)",
          borderRadius: "20px",
          padding: "clamp(1.5rem, 4vw, 2.5rem)",
          color: "white",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{ position: "absolute", top: "-30px", right: "-20px", width: "140px", height: "140px", borderRadius: "50%", background: "rgba(74,222,128,0.1)" }} />
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.8rem", position: "relative" }}>
            <span style={{ fontSize: "1.3rem" }}>🚀</span>
            <h3 style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.3rem)", fontWeight: "700", margin: 0 }}>Our Mission</h3>
          </div>
          <p style={{ fontSize: "clamp(0.85rem, 2vw, 0.95rem)", lineHeight: "1.8", opacity: 0.92, maxWidth: "700px", margin: 0, position: "relative" }}>
            To revolutionize agriculture through smart technologies and biosystems innovation, ensuring sustainable food production and agricultural prosperity.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 50%, #fefce8 100%)",
        padding: "clamp(2rem, 5vw, 3.5rem) clamp(1.2rem, 4vw, 3rem)",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <span style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", display: "block", marginBottom: "clamp(0.5rem, 1.5vw, 0.7rem)" }}>🌾</span>
          <h3 style={{ fontSize: "clamp(1.2rem, 3vw, 1.8rem)", fontWeight: 800, color: "#14532d", marginBottom: "clamp(0.5rem, 1.5vw, 0.7rem)" }}>
            Grow With Us
          </h3>
          <p style={{ fontSize: "clamp(0.9rem, 2vw, 1rem)", color: "#334155", lineHeight: 1.7, marginBottom: "clamp(1rem, 3vw, 1.5rem)" }}>
            Whether you're a farmer, agri-business, or research institution — let's innovate together for a smarter, greener agricultural future.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/contact" style={{
              display: "inline-block",
              background: "linear-gradient(135deg, #16a34a, #14532d)",
              color: "#fff",
              padding: "clamp(0.6rem, 1.5vw, 0.8rem) clamp(1.5rem, 3vw, 2rem)",
              borderRadius: "999px",
              fontWeight: 700,
              fontSize: "clamp(0.85rem, 2vw, 0.95rem)",
              textDecoration: "none",
              transition: "transform 0.2s, box-shadow 0.2s",
              boxShadow: "0 4px 14px rgba(22,163,74,0.3)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(22,163,74,0.4)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 14px rgba(22,163,74,0.3)"; }}
            >Get In Touch</a>
            <a href="/centers" style={{
              display: "inline-block",
              background: "#fff",
              color: "#16a34a",
              padding: "clamp(0.6rem, 1.5vw, 0.8rem) clamp(1.5rem, 3vw, 2rem)",
              borderRadius: "999px",
              fontWeight: 700,
              fontSize: "clamp(0.85rem, 2vw, 0.95rem)",
              textDecoration: "none",
              border: "2px solid #16a34a",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
            >Explore All Centers</a>
          </div>
        </div>
      </section>
    </main>
  );
}
