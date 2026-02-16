import React, { useState } from "react";
import "../styles/ImageCarousel.css";

export default function ImageCarousel({ images, centers }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("next");

  if (!images || images.length === 0) {
    return <div className="carousel-empty">No images available</div>;
  }

  const goToPrevious = () => {
    setDirection("prev");
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setDirection("next");
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? "next" : "prev");
    setCurrentIndex(index);
  };

  return (
    <div className="image-carousel-container">
      <div className="carousel-main">
        <div className={`carousel-image-wrapper ${direction}`}>
          <img 
            key={currentIndex}
            src={images[currentIndex]} 
            alt={`Slide ${currentIndex + 1}`}
            className="carousel-image"
          />
        </div>
        
        {/* Navigation Arrows */}
        <button 
          className="carousel-arrow carousel-arrow-left"
          onClick={goToPrevious}
          aria-label="Previous image"
          title="Previous"
        >
          ❮
        </button>
        <button 
          className="carousel-arrow carousel-arrow-right"
          onClick={goToNext}
          aria-label="Next image"
          title="Next"
        >
          ❯
        </button>
      </div>

      {/* Center Info */}
      {centers && centers[currentIndex] && (
        <div className="carousel-info">
          <h4>{centers[currentIndex].title}</h4>
          <p>{centers[currentIndex].desc}</p>
        </div>
      )}

      {/* Dots Indicator */}
      <div className="carousel-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            title={centers ? centers[index].title : `Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="carousel-counter">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}
