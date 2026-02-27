import React from "react";

export default function MIMARLPAFoodCenter() {
  const focusAreas = [
    { icon: "🏭", title: "Food Processing Innovation", desc: "Developing value-added food products and processing technologies.", color: "#ea580c", bg: "linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)" },
    { icon: "🛡️", title: "Food Safety & Quality", desc: "Ensuring food safety standards and quality assurance.", color: "#0891b2", bg: "linear-gradient(135deg, #ecfeff 0%, #cffafe 100%)" },
    { icon: "🥗", title: "Nutrition Research", desc: "Promoting health through nutritional science and education.", color: "#16a34a", bg: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)" },
    { icon: "🌾", title: "Agricultural Product Development", desc: "Creating innovative agricultural products and applications.", color: "#ca8a04", bg: "linear-gradient(135deg, #fefce8 0%, #fef9c3 100%)" },
  ];

  return (
    <main className="page" style={{ padding: 0, overflow: "hidden" }}>

      {/* Hero Banner */}
      <section style={{
        background: "linear-gradient(135deg, #7c2d12 0%, #c2410c 40%, #ea580c 70%, #f97316 100%)",
        color: "white",
        padding: "clamp(2.5rem, 6vw, 4.5rem) clamp(1.2rem, 4vw, 3rem)",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: "-60px", right: "-40px", width: "250px", height: "250px", borderRadius: "50%", background: "rgba(251,146,60,0.12)" }} />
        <div style={{ position: "absolute", bottom: "-80px", left: "10%", width: "300px", height: "300px", borderRadius: "50%", background: "rgba(249,115,22,0.07)" }} />
        <div style={{ position: "absolute", top: "30%", right: "20%", width: "100px", height: "100px", borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />

        <p style={{ fontSize: "0.75rem", fontWeight: "600", letterSpacing: "3px", textTransform: "uppercase", opacity: 0.6, marginBottom: "0.8rem", position: "relative" }}>
          Research Center
        </p>
        <h1 style={{ fontSize: "clamp(1.5rem, 4.5vw, 2.8rem)", fontWeight: "800", marginBottom: "1rem", position: "relative", lineHeight: "1.2" }}>
          🍊 MIMAROPA Food<br />Innovation Center
        </h1>
        <p style={{ maxWidth: "650px", opacity: 0.9, fontSize: "clamp(0.88rem, 2vw, 1.05rem)", lineHeight: "1.8", margin: 0, position: "relative" }}>
          Focusing on nutrition, food safety, and agricultural processing innovations to enhance food security and support local farmers in the MIMAROPA region.
        </p>

        <div style={{ width: "80px", height: "4px", background: "linear-gradient(90deg, #fdba74, #fb923c)", borderRadius: "2px", marginTop: "1.5rem", position: "relative" }} />
      </section>

      {/* Focus Areas */}
      <section style={{ padding: "clamp(1.5rem, 4vw, 3rem) clamp(1.2rem, 4vw, 3rem)" }}>
        <h2 style={{
          fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
          fontWeight: "700",
          color: "#7c2d12",
          marginBottom: "0.4rem",
        }}>Research Focus Areas</h2>
        <p style={{ color: "#6b7280", fontSize: "clamp(0.85rem, 2vw, 0.95rem)", marginBottom: "clamp(1.2rem, 3vw, 2rem)" }}>
          Advancing food systems through innovation and research
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
        background: "linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)",
        padding: "clamp(2rem, 5vw, 3.5rem) clamp(1.2rem, 4vw, 3rem)",
      }}>
        <h3 style={{
          fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
          fontWeight: 700,
          color: "#7c2d12",
          marginBottom: "0.4rem",
        }}>Programs & Services</h3>
        <p style={{ color: "#6b7280", fontSize: "clamp(0.85rem, 2vw, 0.95rem)", marginBottom: "clamp(1.2rem, 3vw, 2rem)" }}>
          Empowering communities through food science and technology
        </p>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
          gap: "clamp(1rem, 2.5vw, 1.5rem)",
        }}>
          {[
            { icon: "🧪", title: "Food Testing Laboratory", desc: "Comprehensive testing services for food safety, nutritional content, and quality compliance for local producers and cooperatives.", color: "#0891b2" },
            { icon: "📚", title: "Training & Workshops", desc: "Hands-on capacity-building programs in food processing, packaging, labeling, and Good Manufacturing Practices (GMP).", color: "#16a34a" },
            { icon: "🚀", title: "Product Development Support", desc: "Technical assistance for entrepreneurs and farmers in developing market-ready food products from local agricultural resources.", color: "#ea580c" },
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
        background: "linear-gradient(135deg, #7c2d12 0%, #9a3412 50%, #c2410c 100%)",
        padding: "clamp(2rem, 5vw, 3.5rem) clamp(1.2rem, 4vw, 3rem)",
      }}>
        <h3 style={{
          fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
          fontWeight: 700,
          color: "#fff",
          marginBottom: "0.4rem",
        }}>Recent Research Highlights</h3>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "clamp(0.85rem, 2vw, 0.95rem)", marginBottom: "clamp(1.2rem, 3vw, 2rem)" }}>
          Breakthrough studies driving food innovation in the region
        </p>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
          gap: "clamp(1rem, 2.5vw, 1.5rem)",
        }}>
          {[
            { tag: "Food Science", title: "Calamansi-Based Functional Beverages", desc: "Development of nutrient-enriched drinks from locally sourced calamansi, targeting health-conscious markets.", tagColor: "#f97316" },
            { tag: "Preservation", title: "Solar Dehydration of Root Crops", desc: "Optimizing low-cost solar drying techniques for cassava and sweet potato to extend shelf life and reduce post-harvest losses.", tagColor: "#10b981" },
            { tag: "Innovation", title: "Coconut Oil Value-Added Products", desc: "Creating premium virgin coconut oil derivatives for cosmetics and culinary applications from MIMAROPA coconut farms.", tagColor: "#3b82f6" },
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
          background: "linear-gradient(135deg, #7c2d12 0%, #ea580c 100%)",
          borderRadius: "20px",
          padding: "clamp(1.5rem, 4vw, 2.5rem)",
          color: "white",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{ position: "absolute", top: "-30px", right: "-20px", width: "140px", height: "140px", borderRadius: "50%", background: "rgba(251,146,60,0.12)" }} />
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.8rem", position: "relative" }}>
            <span style={{ fontSize: "1.3rem" }}>🎯</span>
            <h3 style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.3rem)", fontWeight: "700", margin: 0 }}>Our Mission</h3>
          </div>
          <p style={{ fontSize: "clamp(0.85rem, 2vw, 0.95rem)", lineHeight: "1.8", opacity: 0.92, maxWidth: "700px", margin: 0, position: "relative" }}>
            To innovate and advance food systems in the MIMAROPA region, creating sustainable solutions for food security, nutrition, and rural economic development.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: "linear-gradient(135deg, #fff7ed 0%, #ffedd5 50%, #fef3c7 100%)",
        padding: "clamp(2rem, 5vw, 3.5rem) clamp(1.2rem, 4vw, 3rem)",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <span style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", display: "block", marginBottom: "clamp(0.5rem, 1.5vw, 0.7rem)" }}>🍊</span>
          <h3 style={{ fontSize: "clamp(1.2rem, 3vw, 1.8rem)", fontWeight: 800, color: "#7c2d12", marginBottom: "clamp(0.5rem, 1.5vw, 0.7rem)" }}>
            Collaborate With Us
          </h3>
          <p style={{ fontSize: "clamp(0.9rem, 2vw, 1rem)", color: "#334155", lineHeight: 1.7, marginBottom: "clamp(1rem, 3vw, 1.5rem)" }}>
            Whether you're a farmer cooperative, food entrepreneur, or research institution — let's work together to build a more food-secure MIMAROPA.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/contact" style={{
              display: "inline-block",
              background: "linear-gradient(135deg, #ea580c, #7c2d12)",
              color: "#fff",
              padding: "clamp(0.6rem, 1.5vw, 0.8rem) clamp(1.5rem, 3vw, 2rem)",
              borderRadius: "999px",
              fontWeight: 700,
              fontSize: "clamp(0.85rem, 2vw, 0.95rem)",
              textDecoration: "none",
              transition: "transform 0.2s, box-shadow 0.2s",
              boxShadow: "0 4px 14px rgba(234,88,12,0.3)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(234,88,12,0.4)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 14px rgba(234,88,12,0.3)"; }}
            >Get In Touch</a>
            <a href="/centers" style={{
              display: "inline-block",
              background: "#fff",
              color: "#ea580c",
              padding: "clamp(0.6rem, 1.5vw, 0.8rem) clamp(1.5rem, 3vw, 2rem)",
              borderRadius: "999px",
              fontWeight: 700,
              fontSize: "clamp(0.85rem, 2vw, 0.95rem)",
              textDecoration: "none",
              border: "2px solid #ea580c",
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
