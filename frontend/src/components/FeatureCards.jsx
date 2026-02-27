import React from "react";

export default function FeatureCards() {
  const cards = [
    { id: 1, title: "Research & Development", description: "Promoting quality, ethical, and impactful research for national and regional development." },
    { id: 2, title: "Extension & Community Service", description: "Bringing knowledge and innovation to communities for inclusive growth." },
    { id: 3, title: "Innovation", description: "Transforming ideas into solutions through technology and enterprise." },
    { id: 4, title: "Research Ethics & Integrity", description: "Upholding ethical standards and integrity in all scholarly activities." },
  ];

  return (
    <section className="features">
      <div className="features-grid">
        {cards.map(card => (
          <div key={card.id} className="feature-card">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
