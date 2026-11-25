"use client";

import { useEffect, useState } from "react";

const posterUrl =
  "/portfolio/images/ntop-matlab-poster.pdf";

export default function StructuralResearchCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const slideCount = 2;

  useEffect(() => {
    if (isInteracting) return;

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slideCount);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [isInteracting]);

  const move = (direction: number) => {
    setActiveSlide((current) => (current + direction + slideCount) % slideCount);
  };

  return (
    <div
      className="research-carousel"
      aria-roledescription="carousel"
      aria-label="MATLAB and nTop structural optimization research"
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") move(-1);
        if (event.key === "ArrowRight") move(1);
      }}
      tabIndex={0}
    >
      <div className="carousel-viewport">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          <article
            className="carousel-slide poster-slide"
            aria-hidden={activeSlide !== 0}
            aria-label="Structural optimization research poster, slide 1 of 2"
            onPointerEnter={() => setIsInteracting(true)}
            onPointerLeave={() => setIsInteracting(false)}
            onFocusCapture={() => setIsInteracting(true)}
            onBlurCapture={() => setIsInteracting(false)}
          >
            <object
              className="poster-viewer"
              data={`${posterUrl}#zoom=page-width&toolbar=0&navpanes=0`}
              type="application/pdf"
              aria-label="Scrollable field-driven lattice optimization research poster preview"
              tabIndex={activeSlide === 0 ? 0 : -1}
            >
              <a href={posterUrl} download="Jaime-Conde-nTop-MATLAB-Research-Poster.pdf">
                Download the research poster
              </a>
            </object>
          </article>

          <figure
            className="carousel-slide presentation-slide"
            aria-hidden={activeSlide !== 1}
            aria-label="Structural optimization poster presentation photo, slide 2 of 2"
          >
            <img
              src="/portfolio/images/ntop-matlab-presentation.jpg"
              alt="Jaime Conde presenting the Field-Driven Optimization of Lattice Structures Using Iterative MATLAB-nTop Automation research poster"
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
          <span className="gallery-label">
            {activeSlide === 0 ? "01 / RESEARCH POSTER" : "02 / POSTER PRESENTATION"}
          </span>
          <strong>
            {activeSlide === 0
              ? "Field-Driven Optimization of Lattice Structures"
              : "Presenting the MATLAB–nTop Optimization Research"}
          </strong>
          <small>
            {activeSlide === 0 ? (
              <a className="poster-download-link" href={posterUrl} download="Jaime-Conde-nTop-MATLAB-Research-Poster.pdf">
                Click here to download the poster
              </a>
            ) : (
              "Research poster presentation · 2026"
            )}
          </small>
        </div>

        <div className="carousel-dots" aria-label="Choose a gallery slide">
          {[0, 1].map((slide) => (
            <button
              key={slide}
              type="button"
              className={activeSlide === slide ? "active" : ""}
              onClick={() => setActiveSlide(slide)}
              aria-label={`Show slide ${slide + 1}`}
              aria-current={activeSlide === slide ? "true" : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
