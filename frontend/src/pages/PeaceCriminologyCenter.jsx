import React from "react";

export default function PeaceCriminologyCenter() {
  const focusAreas = [
    { icon: "🕊️", title: "Conflict Resolution", desc: "Developing strategies for peaceful conflict management and resolution.", color: "#1d4ed8", bg: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)" },
    { icon: "🔍", title: "Criminology Research", desc: "Studying crime causes, prevention, and community safety.", color: "#dc2626", bg: "linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)" },
    { icon: "⚖️", title: "Law Enforcement Policy", desc: "Advancing evidence-based policing and law enforcement practices.", color: "#7c3aed", bg: "linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)" },
    { icon: "🤝", title: "Peace and Justice Studies", desc: "Promoting social justice and peacebuilding initiatives.", color: "#059669", bg: "linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)" },
  ];

  return (
    <main className="page" style={{ padding: 0, overflow: "hidden" }}>

      {/* Hero Banner */}
      <section style={{
        background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 40%, #4338ca 70%, #6366f1 100%)",
        color: "white",
        padding: "clamp(2.5rem, 6vw, 4.5rem) clamp(1.2rem, 4vw, 3rem)",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: "-60px", right: "-40px", width: "250px", height: "250px", borderRadius: "50%", background: "rgba(99,102,241,0.1)" }} />
        <div style={{ position: "absolute", bottom: "-80px", left: "10%", width: "300px", height: "300px", borderRadius: "50%", background: "rgba(129,140,248,0.06)" }} />
        <div style={{ position: "absolute", top: "30%", right: "20%", width: "100px", height: "100px", borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />

        <p style={{ fontSize: "0.75rem", fontWeight: "600", letterSpacing: "3px", textTransform: "uppercase", opacity: 0.6, marginBottom: "0.8rem", position: "relative" }}>
          Research Center
        </p>
        <h1 style={{ fontSize: "clamp(1.5rem, 4.5vw, 2.8rem)", fontWeight: "800", marginBottom: "1rem", position: "relative", lineHeight: "1.2" }}>
          ⚖️ Center for Peace, Criminology,<br />and Law Enforcement Studies
        </h1>
        <p style={{ maxWidth: "650px", opacity: 0.9, fontSize: "clamp(0.88rem, 2vw, 1.05rem)", lineHeight: "1.8", margin: 0, position: "relative" }}>
          Exploring conflict resolution, societal development models, and law enforcement approaches to promote peace and justice in communities.
        </p>

        <div style={{ width: "80px", height: "4px", background: "linear-gradient(90deg, #a5b4fc, #818cf8)", borderRadius: "2px", marginTop: "1.5rem", position: "relative" }} />
      </section>

      {/* Focus Areas */}
      <section style={{ padding: "clamp(1.5rem, 4vw, 3rem) clamp(1.2rem, 4vw, 3rem)" }}>
        <h2 style={{
          fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
          fontWeight: "700",
          color: "#1e1b4b",
          marginBottom: "0.4rem",
        }}>Research Focus Areas</h2>
        <p style={{ color: "#6b7280", fontSize: "clamp(0.85rem, 2vw, 0.95rem)", marginBottom: "clamp(1.2rem, 3vw, 2rem)" }}>
          Building safer and more just communities through research
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
        background: "linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%)",
        padding: "clamp(2rem, 5vw, 3.5rem) clamp(1.2rem, 4vw, 3rem)",
      }}>
        <h3 style={{
          fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
          fontWeight: 700,
          color: "#1e1b4b",
          marginBottom: "0.4rem",
        }}>Programs & Services</h3>
        <p style={{ color: "#6b7280", fontSize: "clamp(0.85rem, 2vw, 0.95rem)", marginBottom: "clamp(1.2rem, 3vw, 2rem)" }}>
          Strengthening peace and security through education and outreach
        </p>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
          gap: "clamp(1rem, 2.5vw, 1.5rem)",
        }}>
          {[
            { icon: "🎓", title: "Criminology Training Programs", desc: "Professional development courses for law enforcement personnel, community leaders, and aspiring criminologists in evidence-based practices.", color: "#1d4ed8" },
            { icon: "🏘️", title: "Community Safety Initiatives", desc: "Collaborative programs with barangays and LGUs to implement community-based crime prevention strategies and mediation services.", color: "#059669" },
            { icon: "📋", title: "Policy Research & Advisory", desc: "Data-driven policy analysis and recommendations for local government units on peace & order, juvenile justice, and restorative justice frameworks.", color: "#7c3aed" },
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
        background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)",
        padding: "clamp(2rem, 5vw, 3.5rem) clamp(1.2rem, 4vw, 3rem)",
      }}>
        <h3 style={{
          fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
          fontWeight: 700,
          color: "#fff",
          marginBottom: "0.4rem",
        }}>Recent Research Highlights</h3>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "clamp(0.85rem, 2vw, 0.95rem)", marginBottom: "clamp(1.2rem, 3vw, 2rem)" }}>
          Evidence-based insights for peace and justice
        </p>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
          gap: "clamp(1rem, 2.5vw, 1.5rem)",
        }}>
          {[
            { tag: "Criminology", title: "Youth Crime Prevention in Rural Communities", desc: "Studying risk factors and intervention models to reduce juvenile delinquency in underserved areas of Mindoro.", tagColor: "#f43f5e" },
            { tag: "Peace Studies", title: "Indigenous Conflict Resolution Practices", desc: "Documenting and integrating Mangyan traditional dispute resolution mechanisms into modern mediation frameworks.", tagColor: "#6366f1" },
            { tag: "Policy", title: "Community Policing Effectiveness Assessment", desc: "Evaluating community-oriented policing strategies and their impact on public trust and crime reduction in MIMAROPA.", tagColor: "#10b981" },
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
          background: "linear-gradient(135deg, #1e1b4b 0%, #4338ca 100%)",
          borderRadius: "20px",
          padding: "clamp(1.5rem, 4vw, 2.5rem)",
          color: "white",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{ position: "absolute", top: "-30px", right: "-20px", width: "140px", height: "140px", borderRadius: "50%", background: "rgba(129,140,248,0.1)" }} />
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.8rem", position: "relative" }}>
            <span style={{ fontSize: "1.3rem" }}>🕊️</span>
            <h3 style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.3rem)", fontWeight: "700", margin: 0 }}>Our Mission</h3>
          </div>
          <p style={{ fontSize: "clamp(0.85rem, 2vw, 0.95rem)", lineHeight: "1.8", opacity: 0.92, maxWidth: "700px", margin: 0, position: "relative" }}>
            To advance peace, security, and justice through research-based solutions that address criminology challenges and promote peaceful, prosperous communities.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: "linear-gradient(135deg, #eef2ff 0%, #e0e7ff 50%, #f5f3ff 100%)",
        padding: "clamp(2rem, 5vw, 3.5rem) clamp(1.2rem, 4vw, 3rem)",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <span style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", display: "block", marginBottom: "clamp(0.5rem, 1.5vw, 0.7rem)" }}>⚖️</span>
          <h3 style={{ fontSize: "clamp(1.2rem, 3vw, 1.8rem)", fontWeight: 800, color: "#1e1b4b", marginBottom: "clamp(0.5rem, 1.5vw, 0.7rem)" }}>
            Collaborate With Us
          </h3>
          <p style={{ fontSize: "clamp(0.9rem, 2vw, 1rem)", color: "#334155", lineHeight: 1.7, marginBottom: "clamp(1rem, 3vw, 1.5rem)" }}>
            Whether you're a law enforcement agency, an LGU, or a peace-building organization — let's work together to create safer and more just communities.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/contact" style={{
              display: "inline-block",
              background: "linear-gradient(135deg, #4338ca, #1e1b4b)",
              color: "#fff",
              padding: "clamp(0.6rem, 1.5vw, 0.8rem) clamp(1.5rem, 3vw, 2rem)",
              borderRadius: "999px",
              fontWeight: 700,
              fontSize: "clamp(0.85rem, 2vw, 0.95rem)",
              textDecoration: "none",
              transition: "transform 0.2s, box-shadow 0.2s",
              boxShadow: "0 4px 14px rgba(67,56,202,0.3)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(67,56,202,0.4)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 14px rgba(67,56,202,0.3)"; }}
            >Get In Touch</a>
            <a href="/centers" style={{
              display: "inline-block",
              background: "#fff",
              color: "#4338ca",
              padding: "clamp(0.6rem, 1.5vw, 0.8rem) clamp(1.5rem, 3vw, 2rem)",
              borderRadius: "999px",
              fontWeight: 700,
              fontSize: "clamp(0.85rem, 2vw, 0.95rem)",
              textDecoration: "none",
              border: "2px solid #4338ca",
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
