import React from "react";

export default function ProjectMauya() {
  return (
    <main className="page" style={{ padding: "0" }}>

      <section style={{
        background: "linear-gradient(135deg, #0b4d2e 0%, #137a43 40%, #16a34a 100%)",
        color: "white",
        padding: "clamp(1.5rem, 4vw, 2rem) clamp(1rem, 3vw, 3rem)",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: "-60px", right: "-40px", width: "200px", height: "200px", borderRadius: "50%", background: "rgba(255,255,255,0.03)" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "900px" }}>
          <h2 style={{ fontSize: "clamp(1.3rem, 4vw, 1.8rem)", fontWeight: "800", marginBottom: "0.4rem", lineHeight: "1.2" }}>
            Project MAUYA
          </h2>
          <p style={{ fontSize: "0.95rem", lineHeight: "1.7", margin: 0, opacity: 0.95 }}>
            Project MAUYA is a community-driven initiative focused on inclusive innovation, sustainable livelihoods, and local capacity-building through applied research, technology transfer, and collaborative pilots.
          </p>
        </div>
      </section>

      <section style={{ padding: "clamp(1.5rem, 4vw, 2.5rem) clamp(1rem, 3vw, 3rem)" }}>
        <h3 style={{ marginBottom: "1rem", color: "#0b4d2e", fontSize: "clamp(1.05rem, 3vw, 1.2rem)", fontWeight: "700" }}>
          Objectives
        </h3>
        <ul style={{ marginTop: 0, paddingLeft: "1.25rem", color: "#0b4d2e" }}>
          <li>Support community adoption of appropriate technologies and innovations.</li>
          <li>Strengthen MSMEs through capacity building and applied pilots.</li>
          <li>Facilitate partnerships between researchers, industry, and local stakeholders.</li>
        </ul>

        <h3 style={{ marginTop: "1.5rem", marginBottom: "1rem", color: "#0b4d2e", fontSize: "clamp(1.05rem, 3vw, 1.2rem)", fontWeight: "700" }}>
          Activities
        </h3>
        <p style={{ marginTop: 0, color: "#0b4d2e" }}>
          Project MAUYA runs field demonstrations, capacity-building workshops, market linkage sessions, and pilot studies to validate and scale locally relevant solutions.
        </p>
      </section>

    </main>
  );
}
