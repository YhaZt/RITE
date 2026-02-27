import React from "react";

export default function TextileFiberCenter() {
  const focusAreas = [
    { icon: "🧵", title: "Natural Fiber Research", desc: "Studying properties and applications of natural textile fibers.", color: "#b45309", bg: "linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)" },
    { icon: "🌿", title: "Sustainable Textile Production", desc: "Developing eco-friendly garment manufacturing processes.", color: "#059669", bg: "linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)" },
    { icon: "⚙️", title: "Fiber Processing Innovation", desc: "Advancing processing technologies for natural fibers.", color: "#2563eb", bg: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)" },
    { icon: "✨", title: "Product Development", desc: "Creating innovative textile products with superior properties.", color: "#9333ea", bg: "linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%)" },
  ];

  return (
    <main className="page" style={{ padding: 0, overflow: "hidden" }}>

      {/* Hero Banner */}
      <section style={{
        background: "linear-gradient(135deg, #78350f 0%, #92400e 40%, #b45309 70%, #d97706 100%)",
        color: "white",
        padding: "clamp(2.5rem, 6vw, 4.5rem) clamp(1.2rem, 4vw, 3rem)",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: "-60px", right: "-40px", width: "250px", height: "250px", borderRadius: "50%", background: "rgba(217,119,6,0.1)" }} />
        <div style={{ position: "absolute", bottom: "-80px", left: "10%", width: "300px", height: "300px", borderRadius: "50%", background: "rgba(245,158,11,0.06)" }} />
        <div style={{ position: "absolute", top: "30%", right: "20%", width: "100px", height: "100px", borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />

        <p style={{ fontSize: "0.75rem", fontWeight: "600", letterSpacing: "3px", textTransform: "uppercase", opacity: 0.6, marginBottom: "0.8rem", position: "relative" }}>
          Research Center
        </p>
        <h1 style={{ fontSize: "clamp(1.5rem, 4.5vw, 2.8rem)", fontWeight: "800", marginBottom: "1rem", position: "relative", lineHeight: "1.2" }}>
          🧶 Natural Textile Fiber<br />Innovation Center
        </h1>
        <p style={{ maxWidth: "650px", opacity: 0.9, fontSize: "clamp(0.88rem, 2vw, 1.05rem)", lineHeight: "1.8", margin: 0, position: "relative" }}>
          Researching fiber science and sustainable garment production to advance the textile industry through innovation and environmental stewardship.
        </p>

        <div style={{ width: "80px", height: "4px", background: "linear-gradient(90deg, #fcd34d, #fbbf24)", borderRadius: "2px", marginTop: "1.5rem", position: "relative" }} />
      </section>

      {/* Focus Areas */}
      <section style={{ padding: "clamp(1.5rem, 4vw, 3rem) clamp(1.2rem, 4vw, 3rem)" }}>
        <h2 style={{
          fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
          fontWeight: "700",
          color: "#78350f",
          marginBottom: "0.4rem",
        }}>Research Focus Areas</h2>
        <p style={{ color: "#6b7280", fontSize: "clamp(0.85rem, 2vw, 0.95rem)", marginBottom: "clamp(1.2rem, 3vw, 2rem)" }}>
          Pioneering sustainable textile solutions through fiber science
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
        background: "linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)",
        padding: "clamp(2rem, 5vw, 3.5rem) clamp(1.2rem, 4vw, 3rem)",
      }}>
        <h3 style={{
          fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
          fontWeight: 700,
          color: "#78350f",
          marginBottom: "0.4rem",
        }}>Programs & Services</h3>
        <p style={{ color: "#6b7280", fontSize: "clamp(0.85rem, 2vw, 0.95rem)", marginBottom: "clamp(1.2rem, 3vw, 2rem)" }}>
          Supporting weavers, artisans, and textile innovators
        </p>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
          gap: "clamp(1rem, 2.5vw, 1.5rem)",
        }}>
          {[
            { icon: "🎨", title: "Artisan Weaving Workshops", desc: "Hands-on training for local weavers in traditional and modern techniques, preserving Mangyan weaving heritage while introducing contemporary designs.", color: "#b45309" },
            { icon: "🔬", title: "Fiber Testing Laboratory", desc: "Comprehensive testing services for fiber strength, dye-fastness, and material composition to support quality textile production and research.", color: "#059669" },
            { icon: "🏷️", title: "Product Commercialization", desc: "Assisting artisan communities and MSMEs in branding, packaging, and marketing their textile products for local and export markets.", color: "#9333ea" },
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
        background: "linear-gradient(135deg, #78350f 0%, #92400e 50%, #b45309 100%)",
        padding: "clamp(2rem, 5vw, 3.5rem) clamp(1.2rem, 4vw, 3rem)",
      }}>
        <h3 style={{
          fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
          fontWeight: 700,
          color: "#fff",
          marginBottom: "0.4rem",
        }}>Recent Research Highlights</h3>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "clamp(0.85rem, 2vw, 0.95rem)", marginBottom: "clamp(1.2rem, 3vw, 2rem)" }}>
          Innovations in natural fiber and textile science
        </p>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
          gap: "clamp(1rem, 2.5vw, 1.5rem)",
        }}>
          {[
            { tag: "Fiber Science", title: "Abacá Fiber Composite Materials", desc: "Developing high-performance composite materials from abacá fibers for automotive and construction applications, reducing reliance on synthetic alternatives.", tagColor: "#f59e0b" },
            { tag: "Sustainability", title: "Natural Dye Extraction from Local Plants", desc: "Cataloguing and optimizing natural dye sources from Mindoro's native flora for eco-friendly textile coloring with improved wash-fastness.", tagColor: "#10b981" },
            { tag: "Innovation", title: "Pineapple Leaf Fiber Textiles", desc: "Transforming agricultural waste from pineapple farming into premium textile-grade fibers for sustainable fashion and craft applications.", tagColor: "#8b5cf6" },
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
          background: "linear-gradient(135deg, #78350f 0%, #b45309 100%)",
          borderRadius: "20px",
          padding: "clamp(1.5rem, 4vw, 2.5rem)",
          color: "white",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{ position: "absolute", top: "-30px", right: "-20px", width: "140px", height: "140px", borderRadius: "50%", background: "rgba(245,158,11,0.1)" }} />
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.8rem", position: "relative" }}>
            <span style={{ fontSize: "1.3rem" }}>🎯</span>
            <h3 style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.3rem)", fontWeight: "700", margin: 0 }}>Our Mission</h3>
          </div>
          <p style={{ fontSize: "clamp(0.85rem, 2vw, 0.95rem)", lineHeight: "1.8", opacity: 0.92, maxWidth: "700px", margin: 0, position: "relative" }}>
            To innovate and advance the textile industry through natural fiber research and sustainable practices, creating high-quality, environmentally responsible products.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: "linear-gradient(135deg, #fffbeb 0%, #fef3c7 50%, #fef9c3 100%)",
        padding: "clamp(2rem, 5vw, 3.5rem) clamp(1.2rem, 4vw, 3rem)",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <span style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", display: "block", marginBottom: "clamp(0.5rem, 1.5vw, 0.7rem)" }}>🧶</span>
          <h3 style={{ fontSize: "clamp(1.2rem, 3vw, 1.8rem)", fontWeight: 800, color: "#78350f", marginBottom: "clamp(0.5rem, 1.5vw, 0.7rem)" }}>
            Weave the Future With Us
          </h3>
          <p style={{ fontSize: "clamp(0.9rem, 2vw, 1rem)", color: "#334155", lineHeight: 1.7, marginBottom: "clamp(1rem, 3vw, 1.5rem)" }}>
            Whether you're a weaving cooperative, a fashion brand, or a research partner — let's collaborate to advance sustainable textile innovation.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/contact" style={{
              display: "inline-block",
              background: "linear-gradient(135deg, #b45309, #78350f)",
              color: "#fff",
              padding: "clamp(0.6rem, 1.5vw, 0.8rem) clamp(1.5rem, 3vw, 2rem)",
              borderRadius: "999px",
              fontWeight: 700,
              fontSize: "clamp(0.85rem, 2vw, 0.95rem)",
              textDecoration: "none",
              transition: "transform 0.2s, box-shadow 0.2s",
              boxShadow: "0 4px 14px rgba(180,83,9,0.3)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(180,83,9,0.4)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 14px rgba(180,83,9,0.3)"; }}
            >Get In Touch</a>
            <a href="/centers" style={{
              display: "inline-block",
              background: "#fff",
              color: "#b45309",
              padding: "clamp(0.6rem, 1.5vw, 0.8rem) clamp(1.5rem, 3vw, 2rem)",
              borderRadius: "999px",
              fontWeight: 700,
              fontSize: "clamp(0.85rem, 2vw, 0.95rem)",
              textDecoration: "none",
              border: "2px solid #b45309",
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
