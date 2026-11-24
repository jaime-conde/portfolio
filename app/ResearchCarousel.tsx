"use client";

import { useEffect, useState } from "react";

const chemistryPosterUrl =
  "/portfolio/images/Computational%20analysis%20of%20metal%20effects%20on%20ethylene%20insertion%20in%20Group%204%20metallocene%20analogs.pdf";

const slides = [
  {
    type: "pdf",
    label: "01 / RESEARCH POSTER",
    title: "Computational Analysis of Group 4 Metallocene Analogs",
    subtitle: "Click here to download the poster",
  },
  {
    type: "image",
    src: "/portfolio/images/SURS%20Poster%20image.png",
    alt: "Jaime Conde presenting computational chemistry research at the 2026 Summer Undergraduate Research Symposium",
    label: "02 / SURS 2026",
    title: "Presenting at the Summer Undergraduate Research Symposium",
    subtitle: "Summer Undergraduate Research Symposium · 2026",
  },
  {
    type: "image",
    src: "/portfolio/images/GURC-nTop-MATLAB-poster.webp",
    alt: "Research poster titled Field-Driven Optimization of Lattice Structures Using Iterative MATLAB-nTop Automation",
    label: "03 / STRUCTURAL OPTIMIZATION POSTER",
    title: "Field-Driven Optimization of Lattice Structures",
    subtitle: "MATLAB · nTop · PowerShell · FEA",
  },
  {
    type: "image",
    src: "/portfolio/images/GURC-nTop-MATLAB-presentation.webp",
    alt: "Jaime Conde standing beside the Field-Driven Optimization of Lattice Structures Using Iterative MATLAB-nTop Automation research poster",
    label: "04 / POSTER PRESENTATION",
    title: "Presenting the MATLAB–nTop Optimization Research",
    subtitle: "Research poster presentation · 2026",
  },
] as const;

export default function ResearchCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const slideCount = slides.length;

  useEffect(() => {
    if (isInteracting) return;

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slideCount);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [isInteracting, slideCount]);

  const move = (direction: number) => {
    setActiveSlide((current) => (current + direction + slideCount) % slideCount);
  };

  const active = slides[activeSlide];

  return (
    <div
      className="research-carousel"
      aria-roledescription="carousel"
      aria-label="Computational research posters and presentation photos"
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
            aria-label="Computational chemistry research poster, slide 1 of 4"
            onPointerEnter={() => setIsInteracting(true)}
            onPointerLeave={() => setIsInteracting(false)}
            onFocusCapture={() => setIsInteracting(true)}
            onBlurCapture={() => setIsInteracting(false)}
          >
            <object
              className="poster-viewer"
              data={`${chemistryPosterUrl}#zoom=page-width&toolbar=0&navpanes=0`}
              type="application/pdf"
              aria-label="Scrollable computational analysis research poster preview"
              tabIndex={activeSlide === 0 ? 0 : -1}
            >
              <a href={chemistryPosterUrl} download="Jaime-Conde-SURS-Research-Poster.pdf">
                Download the research poster
              </a>
            </object>
          </article>

          {slides.slice(1).map((slide, index) => {
            if (slide.type !== "image") return null;

            return (
              <figure
                className="carousel-slide presentation-slide"
                aria-hidden={activeSlide !== index + 1}
                aria-label={`${slide.title}, slide ${index + 2} of 4`}
                key={slide.title}
              >
                <img src={slide.src} alt={slide.alt} />
              </figure>
            );
          })}
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
              <a
                className="poster-download-link"
                href={chemistryPosterUrl}
                download="Jaime-Conde-SURS-Research-Poster.pdf"
              >
                {active.subtitle}
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
