import React from "react";

export default function FisheriesResearchCenter() {
  const focusAreas = [
    { icon: "🐟", title: "Sustainable Fishing Practices", desc: "Developing methods that balance productivity with ecosystem health.", color: "#0891b2", bg: "linear-gradient(135deg, #ecfeff 0%, #cffafe 100%)" },
    { icon: "🦐", title: "Aquaculture Development", desc: "Advancing fish farming and breeding technologies.", color: "#0d9488", bg: "linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 100%)" },
    { icon: "🐠", title: "Fish Biology & Ecology", desc: "Understanding aquatic ecosystems and species behavior.", color: "#2563eb", bg: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)" },
    { icon: "🧊", title: "Post-Harvest Technology", desc: "Improving processing, preservation, and product development.", color: "#7c3aed", bg: "linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)" },
  ];

  return (
    <main className="page" style={{ padding: 0, overflow: "hidden" }}>

      {/* Hero Banner */}
      <section style={{
        background: "linear-gradient(135deg, #0c4a6e 0%, #0891b2 60%, #06b6d4 100%)",
        color: "white",
        padding: "clamp(2.5rem, 6vw, 4.5rem) clamp(1.2rem, 4vw, 3rem)",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: "-60px", right: "-40px", width: "250px", height: "250px", borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />
        <div style={{ position: "absolute", bottom: "-80px", left: "10%", width: "300px", height: "300px", borderRadius: "50%", background: "rgba(255,255,255,0.03)" }} />
        <div style={{ position: "absolute", top: "30%", right: "20%", width: "100px", height: "100px", borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />

        <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", opacity: 0.6, marginBottom: "0.8rem", position: "relative" }}>
          Research Center
        </p>
        <h1 style={{ fontSize: "clamp(1.6rem, 4.5vw, 2.8rem)", fontWeight: 800, marginBottom: "1rem", position: "relative", lineHeight: 1.2 }}>
          🐟 Fisheries Research and<br />Development Center
        </h1>
        <p style={{ maxWidth: "650px", opacity: 0.9, fontSize: "clamp(0.88rem, 2vw, 1.05rem)", lineHeight: 1.8, margin: 0, position: "relative" }}>
          Advancing aquatic science and sustainable fishing technologies to support food security and the livelihoods of fishing communities.
        </p>
        <div style={{ width: "80px", height: "4px", background: "linear-gradient(90deg, #67e8f9, #a5f3fc)", borderRadius: "2px", marginTop: "1.5rem", position: "relative" }} />
      </section>

      {/* Focus Areas */}
      <section style={{ padding: "clamp(1.5rem, 4vw, 3rem) clamp(1.2rem, 4vw, 3rem)" }}>
        <h2 style={{ fontSize: "clamp(1.2rem, 3vw, 1.6rem)", fontWeight: 700, color: "#0c4a6e", marginBottom: "0.4rem" }}>Research Focus Areas</h2>
        <p style={{ color: "#6b7280", fontSize: "clamp(0.85rem, 2vw, 0.95rem)", marginBottom: "clamp(1.2rem, 3vw, 2rem)" }}>
          Advancing aquatic science across four key domains
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: "clamp(1rem, 2.5vw, 1.5rem)" }}>
          {focusAreas.map((a, i) => (
            <div key={i} style={{
              background: a.bg, padding: "clamp(1.2rem, 3vw, 1.8rem)", borderRadius: "16px",
              border: `1px solid ${a.color}20`, transition: "transform 0.3s ease, box-shadow 0.3s ease", cursor: "default",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = `0 12px 30px ${a.color}15`; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem", marginBottom: "1rem", boxShadow: `0 4px 12px ${a.color}15` }}>{a.icon}</div>
              <h4 style={{ color: a.color, fontSize: "clamp(0.95rem, 2.2vw, 1.05rem)", fontWeight: 700, marginBottom: "0.5rem" }}>{a.title}</h4>
              <p style={{ fontSize: "clamp(0.82rem, 2vw, 0.9rem)", color: "#4b5563", lineHeight: 1.7, margin: 0 }}>{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Programs & Services */}
      <section style={{
        background: "linear-gradient(135deg, #ecfeff 0%, #cffafe 100%)",
        padding: "clamp(2rem, 5vw, 3.5rem) clamp(1.2rem, 4vw, 3rem)",
      }}>
        <h3 style={{ fontSize: "clamp(1.2rem, 3vw, 1.6rem)", fontWeight: 700, color: "#0c4a6e", marginBottom: "0.4rem" }}>Programs & Services</h3>
        <p style={{ color: "#6b7280", fontSize: "clamp(0.85rem, 2vw, 0.95rem)", marginBottom: "clamp(1.2rem, 3vw, 2rem)" }}>
          Empowering fisherfolk and advancing aquatic resource management
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "clamp(1rem, 2.5vw, 1.5rem)" }}>
          {[
            { icon: "🎓", title: "Fisher-Folk Training", desc: "Capacity-building workshops on modern, sustainable fishing techniques, net mending, and safety at sea for local fishing communities.", color: "#0891b2" },
            { icon: "🔬", title: "Water Quality Testing", desc: "Laboratory services for monitoring water quality in coastal and inland fisheries, ensuring safe environments for aquaculture production.", color: "#0d9488" },
            { icon: "🐟", title: "Fingerling Production", desc: "Breeding and distribution of quality fingerlings to support local aquaculture ventures and community-based fish farming projects.", color: "#2563eb" },
          ].map((p, i) => (
            <div key={i} style={{
              background: "#fff", borderRadius: "16px", padding: "clamp(1.4rem, 3vw, 2rem)",
              borderTop: `4px solid ${p.color}`, boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,0,0,0.1)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)"; }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: `${p.color}12`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem", marginBottom: "1rem" }}>{p.icon}</div>
              <h4 style={{ color: p.color, fontSize: "clamp(1rem, 2.2vw, 1.1rem)", fontWeight: 700, marginBottom: "0.5rem" }}>{p.title}</h4>
              <p style={{ color: "#4b5563", fontSize: "clamp(0.82rem, 2vw, 0.9rem)", lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Research Highlights */}
      <section style={{
        background: "linear-gradient(135deg, #0c4a6e 0%, #155e75 50%, #0891b2 100%)",
        padding: "clamp(2rem, 5vw, 3.5rem) clamp(1.2rem, 4vw, 3rem)",
      }}>
        <h3 style={{ fontSize: "clamp(1.2rem, 3vw, 1.6rem)", fontWeight: 700, color: "#fff", marginBottom: "0.4rem" }}>Recent Research Highlights</h3>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "clamp(0.85rem, 2vw, 0.95rem)", marginBottom: "clamp(1.2rem, 3vw, 2rem)" }}>
          Breakthrough studies advancing aquatic science in Mindoro
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "clamp(1rem, 2.5vw, 1.5rem)" }}>
          {[
            { tag: "Aquaculture", title: "Tilapia Breeding Optimization in Mindoro Waters", desc: "A study on selective breeding techniques producing higher yield and disease-resistant tilapia strains adapted to local conditions.", tagColor: "#06b6d4" },
            { tag: "Conservation", title: "Mangrove Ecosystem Restoration for Fisheries", desc: "Assessing the impact of mangrove rehabilitation on fish stocks and biodiversity in coastal areas of Oriental Mindoro.", tagColor: "#10b981" },
            { tag: "Technology", title: "Solar-Powered Fish Drying Systems", desc: "Development and field-testing of low-cost solar dryers to improve post-harvest fish quality and reduce spoilage for small-scale fishers.", tagColor: "#f59e0b" },
          ].map((r, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.08)", backdropFilter: "blur(8px)", borderRadius: "16px",
              padding: "clamp(1.4rem, 3vw, 2rem)", border: "1px solid rgba(255,255,255,0.12)",
              transition: "transform 0.3s ease, background 0.3s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.background = "rgba(255,255,255,0.14)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}>
              <span style={{ display: "inline-block", background: r.tagColor, color: "#fff", padding: "0.2rem 0.7rem", borderRadius: "999px", fontSize: "clamp(0.65rem, 1.5vw, 0.75rem)", fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: "clamp(0.6rem, 2vw, 0.8rem)" }}>{r.tag}</span>
              <h4 style={{ color: "#fff", fontSize: "clamp(0.95rem, 2.2vw, 1.08rem)", fontWeight: 700, marginBottom: "0.5rem", lineHeight: 1.3 }}>{r.title}</h4>
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "clamp(0.82rem, 2vw, 0.9rem)", lineHeight: 1.65, margin: 0 }}>{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section style={{ padding: "0 clamp(1.2rem, 4vw, 3rem) clamp(2rem, 5vw, 3.5rem)" }}>
        <div style={{
          background: "linear-gradient(135deg, #0c4a6e 0%, #0891b2 100%)",
          borderRadius: "20px", padding: "clamp(1.5rem, 4vw, 2.5rem)",
          color: "white", position: "relative", overflow: "hidden", marginTop: "clamp(1.5rem, 4vw, 3rem)",
        }}>
          <div style={{ position: "absolute", top: "-30px", right: "-20px", width: "140px", height: "140px", borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.8rem", position: "relative" }}>
            <span style={{ fontSize: "1.3rem" }}>🌊</span>
            <h3 style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.3rem)", fontWeight: 700, margin: 0 }}>Our Mission</h3>
          </div>
          <p style={{ fontSize: "clamp(0.85rem, 2vw, 1rem)", lineHeight: 1.8, opacity: 0.92, margin: 0, position: "relative", maxWidth: "800px" }}>
            To strengthen the fisheries sector through research-driven innovations, ensuring sustainable aquatic resource management and improved food security.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: "linear-gradient(135deg, #ecfeff 0%, #cffafe 50%, #e0f2fe 100%)",
        padding: "clamp(2rem, 5vw, 3.5rem) clamp(1.2rem, 4vw, 3rem)",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <span style={{ fontSize: "clamp(2rem, 5vw, 2.8rem)", display: "block", marginBottom: "clamp(0.5rem, 2vw, 0.8rem)" }}>🐟</span>
          <h3 style={{ fontSize: "clamp(1.2rem, 3vw, 1.8rem)", fontWeight: 800, color: "#0c4a6e", marginBottom: "clamp(0.5rem, 2vw, 0.7rem)" }}>Partner With Us</h3>
          <p style={{ fontSize: "clamp(0.9rem, 2vw, 1.05rem)", color: "#334155", lineHeight: 1.7, marginBottom: "clamp(1rem, 3vw, 1.5rem)" }}>
            Whether you're a fisherfolk cooperative, an LGU, or an academic institution — we welcome collaborations that advance sustainable fisheries in the MIMAROPA region and beyond.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/contact" style={{
              display: "inline-block", background: "linear-gradient(135deg, #0891b2, #0c4a6e)", color: "#fff",
              padding: "clamp(0.6rem, 1.5vw, 0.85rem) clamp(1.5rem, 3vw, 2rem)", borderRadius: "999px",
              fontWeight: 700, fontSize: "clamp(0.85rem, 2vw, 0.95rem)", textDecoration: "none",
              transition: "transform 0.2s, box-shadow 0.2s", boxShadow: "0 4px 14px rgba(8,145,178,0.3)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(8,145,178,0.4)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 14px rgba(8,145,178,0.3)"; }}>
              Get In Touch
            </a>
            <a href="/centers" style={{
              display: "inline-block", background: "#fff", color: "#0891b2",
              padding: "clamp(0.6rem, 1.5vw, 0.85rem) clamp(1.5rem, 3vw, 2rem)", borderRadius: "999px",
              fontWeight: 700, fontSize: "clamp(0.85rem, 2vw, 0.95rem)", textDecoration: "none",
              border: "2px solid #0891b2", transition: "transform 0.2s",
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}>
              Explore All Centers
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
