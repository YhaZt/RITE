import React from "react";

export default function BakodhubPage() {
  return (
    <main className="page">
      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ marginBottom: "0.5rem" }}>BAKOD Hub</h2>
        <p style={{ fontSize: "1rem", lineHeight: "1.6", maxWidth: "900px", marginBottom: "1.5rem" }}>
          BAKODHUB is a dedicated innovation hub fostering entrepreneurship, technology development, and collaborative partnerships to transform ideas into viable business solutions.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h3 style={{ marginBottom: "1.5rem", color: "#5a3aa8" }}>Key Focus Areas</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          <div style={{ background: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", borderLeft: "4px solid #6b46c1" }}>
            <h4 style={{ color: "#5a3aa8", marginBottom: "0.5rem" }}>Business Incubation</h4>
            <p style={{ fontSize: "0.95rem", color: "#555" }}>Nurturing startups from concept to market launch with comprehensive support and mentorship.</p>
          </div>
          
          <div style={{ background: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", borderLeft: "4px solid #6b46c1" }}>
            <h4 style={{ color: "#5a3aa8", marginBottom: "0.5rem" }}>Technology Transfer</h4>
            <p style={{ fontSize: "0.95rem", color: "#555" }}>Facilitating the conversion of research innovations into practical applications and commercial products.</p>
          </div>
          
          <div style={{ background: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", borderLeft: "4px solid #6b46c1" }}>
            <h4 style={{ color: "#5a3aa8", marginBottom: "0.5rem" }}>Entrepreneurship Training</h4>
            <p style={{ fontSize: "0.95rem", color: "#555" }}>Offering workshops, seminars, and mentoring programs to develop entrepreneurial skills and business acumen.</p>
          </div>
          
          <div style={{ background: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", borderLeft: "4px solid #6b46c1" }}>
            <h4 style={{ color: "#5a3aa8", marginBottom: "0.5rem" }}>Resource Access</h4>
            <p style={{ fontSize: "0.95rem", color: "#555" }}>Providing access to facilities, funding opportunities, and industry networks for entrepreneurs and innovators.</p>
          </div>
          
          <div style={{ background: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", borderLeft: "4px solid #6b46c1" }}>
            <h4 style={{ color: "#5a3aa8", marginBottom: "0.5rem" }}>Industry Partnerships</h4>
            <p style={{ fontSize: "0.95rem", color: "#555" }}>Building strategic collaborations between innovators, businesses, and academic institutions.</p>
          </div>
          
          <div style={{ background: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", borderLeft: "4px solid #6b46c1" }}>
            <h4 style={{ color: "#5a3aa8", marginBottom: "0.5rem" }}>Market Development</h4>
            <p style={{ fontSize: "0.95rem", color: "#555" }}>Assisting innovators in market research, product validation, and commercialization strategies.</p>
          </div>
        </div>
      </section>

      <section style={{ background: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}>
        <h3 style={{ marginBottom: "1rem", color: "#5a3aa8" }}>About BAKODHUB</h3>
        <p style={{ fontSize: "0.95rem", color: "#555", lineHeight: "1.6", marginBottom: "1rem" }}>
          BAKODHUB represents a comprehensive ecosystem designed to transform research and innovation into tangible economic and social impact. By bridging the gap between academia and industry, we create pathways for researchers and entrepreneurs to bring their ideas to market.
        </p>
        <p style={{ fontSize: "0.95rem", color: "#555", lineHeight: "1.6" }}>
          Our mission is to accelerate innovation, foster entrepreneurial culture, and create sustainable value for society through strategic partnerships, mentorship, and access to critical resources.
        </p>
      </section>
    </main>
  );
}
