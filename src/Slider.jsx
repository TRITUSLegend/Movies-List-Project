import { useState, useEffect } from "react";
import "./Slider.css";

const slides = [
  {
    title: "Welcome to Movie Explorer 🎬",
    subtitle: "Browse 100+ top movies & series",
    bg: "#1f1f1f",
  },
  {
    title: "Filter by Type 🔍",
    subtitle: "Use the Movie/Series buttons to filter",
    bg: "#2b2b2b",
  },
  {
    title: "Search Instantly 🔎",
    subtitle: "Use the search bar to find what you love",
    bg: "#3c3c3c",
  }
];

export default function Slider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className="slider-container">
      <div
        className="slider"
        style={{
          transform: `translateX(-${index * 100}%)`,
        }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="slide"
            style={{ backgroundColor: slide.bg }}
          >
            <h2>{slide.title}</h2>
            <p>{slide.subtitle}</p>
          </div>
        ))}
      </div>

      <div className="dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
