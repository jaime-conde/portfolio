"use client";

import { useEffect, useState } from "react";

const posterUrl =
  "/portfolio/images/Field-Driven%20Optimization%20of%20Lattice%20Structures%20Using%20Iterative%20MATLAB-NTOP%20Automation.pdf";

const slides = [
  {
    type: "pdf",
    label: "01 / RESEARCH POSTER",
    title: "Field-Driven Optimization of Lattice Structures",
    subtitle: "Open the full-resolution poster",
  },
  {
    type: "image",
    src: "/portfolio/images/IMG_4598.jpg",
    alt: "Jaime Conde standing beside the Field-Driven Optimization of Lattice Structures Using Iterative MATLAB-nTop Automation research poster",
    label: "02 / POSTER PRESENTATION",
    title: "Presenting the MATLAB–nTop Optimization Research",
    subtitle: "Research poster presentation · 2026",
  },
] as const;

export default function StructuralResearchCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    if (isInteracting) return;
    const timer = window.setTimeout(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6000);
    return () => window.clearTimeout(timer);
  }, [activeSlide, isInteracting]);

  const move = (direction: number) => {
    setActiveSlide((current) => (current + direction + slides.length) % slides.length);
  };

  const active = slides[activeSlide];

  return (
    <div
      className="research-carousel"
      aria-roledescription="carousel"
      aria-label="MATLAB and nTop structural optimization research"
      onPointerEnter={() => setIsInteracting(true)}
      onPointerLeave={() => setIsInteracting(false)}
      onFocusCapture={() => setIsInteracting(true)}
      onBlurCapture={() => setIsInteracting(false)}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") move(-1);
        if (event.key === "ArrowRight") move(1);
      }}
      tabIndex={0}
    >
      <div className="carousel-viewport">
        <div className="carousel-track" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
          <article
            className="carousel-slide poster-slide"
            aria-hidden={activeSlide !== 0}
            aria-label="Structural optimization research poster, slide 1 of 2"
          >
            <object
              className="poster-viewer"
              data={`${posterUrl}#zoom=page-width&toolbar=0&navpanes=0`}
              type="application/pdf"
              aria-label="Scrollable MATLAB and nTop structural optimization research poster"
              tabIndex={activeSlide === 0 ? 0 : -1}
            >
              <img
                src="/portfolio/images/GURC-nTop-MATLAB-poster.webp"
                alt="Fallback preview of the MATLAB and nTop structural optimization research poster"
              />
            </object>
          </article>

          <figure
            className="carousel-slide presentation-slide"
            aria-hidden={activeSlide !== 1}
            aria-label="Poster presentation photo, slide 2 of 2"
          >
            <img
              src="/portfolio/images/IMG_4598.jpg"
              alt="Jaime Conde standing beside the Field-Driven Optimization of Lattice Structures Using Iterative MATLAB-nTop Automation research poster"
              onError={(event) => {
                event.currentTarget.onerror = null;
                event.currentTarget.src = "/portfolio/images/GURC-nTop-MATLAB-presentation.webp";
              }}
            />
          </figure>
        </div>

        <button className="carousel-arrow carousel-prev" type="button" onClick={() => move(-1)} aria-label="Show previous image">
          ‹
        </button>
        <button className="carousel-arrow carousel-next" type="button" onClick={() => move(1)} aria-label="Show next image">
          ›
        </button>
      </div>

      <div className="carousel-meta">
        <div>
          <span className="gallery-label">{active.label}</span>
          <strong>{active.title}</strong>
          <small>
            {activeSlide === 0 ? (
              <a className="poster-download-link" href={posterUrl} target="_blank" rel="noreferrer">
                Open the full-resolution poster
              </a>
            ) : (
              active.subtitle
            )}
          </small>
        </div>
        <div className="carousel-dots" aria-label="Choose a gallery slide">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              className={activeSlide === index ? "active" : ""}
              onClick={() => setActiveSlide(index)}
              aria-label={`Show slide ${index + 1}`}
              aria-current={activeSlide === index ? "true" : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
