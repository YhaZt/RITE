import React, { useState, useEffect } from "react";
import "../styles/Carousel.css";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Research Excellence",
      description: "Advancing knowledge through innovative research",
      image: "https://images.unsplash.com/photo-1530587191325-3db8b1c12d6d?w=1200&h=600&fit=crop"
    },
    {
      id: 2,
      title: "Community Impact",
      description: "Extending knowledge to serve communities",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop"
    },
    {
      id: 3,
      title: "Innovation Drive",
      description: "Transforming ideas into solutions",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop"
    },
    {
      id: 4,
      title: "Ethical Leadership",
      description: "Upholding integrity in all endeavors",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="carousel-container">
      <div className="carousel-wrapper">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-slide ${index === currentIndex ? "active" : ""}`}
            style={{
              backgroundImage: `url('${slide.image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            <div className="carousel-overlay"></div>
            <div className="carousel-content">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
