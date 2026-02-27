import React from "react";
import { NavLink } from "react-router-dom";

export default function InnovationHub() {
  return (
    <main className="page" style={{ padding: 0 }}>
      <section style={{
        background: "linear-gradient(135deg, #094A25 0%, #0C6B37 40%, #16a34a 100%)",
        color: "white",
        padding: "clamp(1.5rem, 4vw, 2rem) clamp(1rem, 3vw, 3rem)",
      }}>
        <div style={{ maxWidth: 900 }}>
          <h2 style={{ fontSize: "clamp(1.3rem, 4vw, 1.8rem)", fontWeight: 800, marginBottom: "0.5rem" }}>
            Innovation Hub
          </h2>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.7, margin: 0, opacity: 0.95 }}>
            The Innovation Hub groups initiatives and sub-hubs that accelerate research translation and community impact. Choose a subpage below to learn more.
          </p>
        </div>
      </section>

      <section style={{ padding: "clamp(1rem, 3vw, 2rem) clamp(1rem, 3vw, 3rem)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
          <NavLink to="/bakodhub" style={{ textDecoration: "none" }}>
            <div style={{ background: "white", color: "#0b4d2e", padding: "1.2rem", borderRadius: 12 }}>
              <h3 style={{ margin: 0 }}>BUKID Hub</h3>
              <p style={{ marginTop: "0.5rem", marginBottom: 0, fontSize: "0.95rem" }}>Explore the BUKID Hub: incubation, partnerships, and market development.</p>
            </div>
          </NavLink>

          <NavLink to="/project-mauya" style={{ textDecoration: "none" }}>
            <div style={{ background: "white", color: "#0b4d2e", padding: "1.2rem", borderRadius: 12 }}>
              <h3 style={{ margin: 0 }}>Project MAUYA</h3>
              <p style={{ marginTop: "0.5rem", marginBottom: 0, fontSize: "0.95rem" }}>Learn about Project MAUYA's community-driven pilots and capacity-building activities.</p>
            </div>
          </NavLink>
        </div>
      </section>
    </main>
  );
}
