import React from "react";

const focusAreas = [
  { title: "Business Incubation", desc: "Nurturing startups from concept to market launch with comprehensive support and mentorship.", gradient: "linear-gradient(160deg, #5b21b6 0%, #7c3aed 100%)", shadow: "rgba(91,33,182,0.3)" },
  { title: "Technology Transfer", desc: "Facilitating the conversion of research innovations into practical applications and commercial products.", gradient: "linear-gradient(160deg, #4c1d95 0%, #6d28d9 100%)", shadow: "rgba(109,40,217,0.3)" },
  { title: "Entrepreneurship Training", desc: "Offering workshops, seminars, and mentoring programs to develop entrepreneurial skills and business acumen.", gradient: "linear-gradient(160deg, #3b0764 0%, #7e22ce 100%)", shadow: "rgba(126,34,206,0.3)" },
  { title: "Resource Access", desc: "Providing access to facilities, funding opportunities, and industry networks for entrepreneurs and innovators.", gradient: "linear-gradient(160deg, #4c1d95 0%, #8b5cf6 100%)", shadow: "rgba(139,92,246,0.3)" },
  { title: "Industry Partnerships", desc: "Building strategic collaborations between innovators, businesses, and academic institutions.", gradient: "linear-gradient(160deg, #3b0764 0%, #6d28d9 100%)", shadow: "rgba(109,40,217,0.3)" },
  { title: "Market Development", desc: "Assisting innovators in market research, product validation, and commercialization strategies.", gradient: "linear-gradient(160deg, #2e1065 0%, #7c3aed 100%)", shadow: "rgba(124,58,237,0.3)" },
];

export default function BakodhubPage() {
  return (
    <main className="page" style={{ padding: "0" }}>

      {/* Hero Section - Full Width */}
      <section style={{
        background: "linear-gradient(135deg, #1e1b4b 0%, #3b0764 30%, #4c1d95 60%, #6d28d9 100%)",
        color: "white",
        padding: "clamp(1.5rem, 4vw, 2rem) clamp(1rem, 3vw, 3rem)",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: "-60px", right: "-40px", width: "200px", height: "200px", borderRadius: "50%", background: "rgba(255,255,255,0.06)" }} />
        <div style={{ position: "absolute", bottom: "-60px", left: "15%", width: "220px", height: "220px", borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "800px" }}>
          <h2 style={{ fontSize: "clamp(1.3rem, 4vw, 1.6rem)", fontWeight: "800", marginBottom: "0.4rem", lineHeight: "1.2" }}>
            BUKID Hub
          </h2>
          <p style={{ fontSize: "0.92rem", lineHeight: "1.7", margin: 0, opacity: 0.9 }}>
            A dedicated innovation hub fostering entrepreneurship, technology development, and collaborative partnerships to transform ideas into viable business solutions.
          </p>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section style={{ padding: "clamp(1.5rem, 4vw, 2.5rem) clamp(1rem, 3vw, 3rem)" }}>
        <h3 style={{ marginBottom: "1.5rem", color: "#3b0764", fontSize: "clamp(1.1rem, 3vw, 1.3rem)", fontWeight: "700" }}>
          Key Focus Areas
        </h3>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
          gap: "1.2rem",
        }}>
          {focusAreas.map((area, idx) => (
            <div key={idx} style={{
              background: area.gradient,
              borderRadius: "18px",
              padding: "1.8rem",
              color: "white",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "default",
              position: "relative",
              overflow: "hidden",
              boxShadow: `0 6px 20px ${area.shadow}`,
              minHeight: "160px",
              display: "flex",
              flexDirection: "column",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px) scale(1.01)";
              e.currentTarget.style.boxShadow = `0 16px 36px ${area.shadow}`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = `0 6px 20px ${area.shadow}`;
            }}>
              <div style={{ position: "absolute", top: "-25px", right: "-25px", width: "100px", height: "100px", borderRadius: "50%", background: "rgba(255,255,255,0.07)" }} />
              <div style={{ position: "absolute", bottom: "-15px", left: "-15px", width: "60px", height: "60px", borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />
              <span style={{ fontSize: "0.68rem", fontWeight: "700", letterSpacing: "1px", opacity: 0.5, marginBottom: "0.5rem" }}>
                0{idx + 1}
              </span>
              <h4 style={{ fontSize: "1.05rem", fontWeight: "700", marginBottom: "0.6rem", position: "relative" }}>
                {area.title}
              </h4>
              <p style={{ fontSize: "0.85rem", lineHeight: "1.7", margin: 0, opacity: 0.9, position: "relative", flex: 1 }}>
                {area.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section - Full Width */}
      <section style={{
        background: "linear-gradient(135deg, #1e1b4b 0%, #2e1065 30%, #3b0764 60%, #4c1d95 100%)",
        padding: "clamp(1.5rem, 4vw, 2.5rem) clamp(1rem, 3vw, 3rem)",
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", bottom: "-50px", right: "-30px", width: "200px", height: "200px", borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />
        <div style={{ position: "absolute", top: "-40px", left: "40%", width: "150px", height: "150px", borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <h3 style={{ fontSize: "clamp(1.1rem, 3vw, 1.3rem)", fontWeight: "700", marginBottom: "1rem" }}>
            About BUKIDHUB
          </h3>
          <p style={{ fontSize: "0.95rem", lineHeight: "1.8", marginBottom: "1rem", opacity: 0.92, maxWidth: "900px" }}>
            BUKIDHUB represents a comprehensive ecosystem designed to transform research and innovation into tangible economic and social impact. By bridging the gap between academia and industry, we create pathways for researchers and entrepreneurs to bring their ideas to market.
          </p>
          <p style={{ fontSize: "0.95rem", lineHeight: "1.8", margin: 0, opacity: 0.92, maxWidth: "900px" }}>
            Our mission is to accelerate innovation, foster entrepreneurial culture, and create sustainable value for society through strategic partnerships, mentorship, and access to critical resources.
          </p>
        </div>
      </section>
    </main>
  );
}
