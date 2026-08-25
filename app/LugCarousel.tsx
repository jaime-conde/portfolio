"use client";

import { useEffect, useState } from "react";

const basePath = "/portfolio/images/";

const bracketSlides = [
  {
    src: `${basePath}bracket-optimized-geometry.png`,
    label: "Optimized topology + lattice geometry",
    detail: "Topology optimization followed by lattice optimization",
    alt: "Optimized aluminum bracket showing topology-reduced regions and internal lattice geometry",
  },
  {
    src: `${basePath}bracket-baseline-displacement.png`,
    label: "Baseline displacement",
    detail: "Maximum displacement · 5.65888e-03 mm",
    alt: "Baseline aluminum bracket displacement contour with a maximum displacement of 5.65888e-03 millimeters",
  },
  {
    src: `${basePath}bracket-optimized-displacement.png`,
    label: "Optimized displacement",
    detail: "Maximum displacement · 4.65119e-03 mm",
    alt: "Optimized topology and lattice bracket displacement contour with a maximum displacement of 4.65119e-03 millimeters",
  },
  {
    src: `${basePath}bracket-baseline-stress.png`,
    label: "Baseline stress",
    detail: "Peak stress · 4.03017e+05 Pa",
    alt: "Baseline aluminum bracket stress result with a maximum stress of 4.03017e+05 pascals",
  },
  {
    src: `${basePath}bracket-optimized-stress.png`,
    label: "Optimized stress",
    detail: "Peak stress · 5.12985e+06 Pa",
    alt: "Optimized topology and lattice bracket stress result with a maximum stress of 5.12985e+06 pascals",
  },
];

export default function LugCarousel() {
  const [bracketIndex, setBracketIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setBracketIndex((current) => (current + 1) % bracketSlides.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, []);

  const previousBracketSlide = () => {
    setBracketIndex((current) => (current - 1 + bracketSlides.length) % bracketSlides.length);
  };

  const nextBracketSlide = () => {
    setBracketIndex((current) => (current + 1) % bracketSlides.length);
  };

  const activeSlide = bracketSlides[bracketIndex];

  return (
    <div className="optimization-studies">
      <style>{`
        .optimization-studies{display:grid;gap:34px}.bracket-study{border:1px solid rgba(125,190,219,.2);background:rgba(5,16,31,.7);padding:clamp(18px,3vw,30px)}.bracket-study-head{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:28px;align-items:end;margin-bottom:22px}.bracket-study-kicker{margin:0 0 8px;color:#51dcff;font:600 10px/1.4 var(--font-geist-mono),monospace;letter-spacing:.15em;text-transform:uppercase}.bracket-study h3{margin:0;font-size:clamp(24px,3vw,36px);line-height:1.15}.bracket-study-copy{max-width:760px;margin:14px 0 0;color:#9caec0;font-size:14px;line-height:1.7}.bracket-study-highlight{text-align:right}.bracket-study-highlight strong{display:block;color:#eaf4ff;font:600 clamp(28px,4vw,42px)/1 var(--font-geist-mono),monospace}.bracket-study-highlight span{display:block;margin-top:7px;color:#8796aa;font:9px/1.3 var(--font-geist-mono),monospace;letter-spacing:.12em;text-transform:uppercase}.bracket-gallery{position:relative;border:1px solid rgba(125,190,219,.18);background:#030812;overflow:hidden}.bracket-gallery-view{height:clamp(360px,55vw,640px);display:grid;place-items:center;padding:18px}.bracket-gallery-view img{display:block;width:100%;height:100%;object-fit:contain}.bracket-gallery-arrow{position:absolute;z-index:2;top:50%;width:40px;height:56px;border:1px solid rgba(81,220,255,.35);background:rgba(3,8,18,.84);color:#eaf4ff;font-size:25px;line-height:1;cursor:pointer;transform:translateY(-50%);transition:background .2s ease,border-color .2s ease}.bracket-gallery-arrow:hover,.bracket-gallery-arrow:focus-visible{background:rgba(10,31,50,.97);border-color:#51dcff;outline:none}.bracket-gallery-prev{left:12px}.bracket-gallery-next{right:12px}.bracket-gallery-meta{display:grid;grid-template-columns:auto minmax(0,1fr) auto;gap:14px;align-items:center;padding:12px 16px;border-top:1px solid rgba(125,190,219,.15);font:9px/1.4 var(--font-geist-mono),monospace;letter-spacing:.08em;text-transform:uppercase}.bracket-gallery-meta b{color:#51dcff}.bracket-gallery-meta strong{min-width:0;color:#c9d7e5;font-weight:500}.bracket-gallery-meta span{color:#8796aa;text-align:right}.bracket-gallery-dots{display:flex;gap:6px;justify-content:center;margin-top:10px}.bracket-gallery-dots button{width:24px;height:3px;padding:0;border:0;background:#30465b;cursor:pointer;transition:background .2s ease}.bracket-gallery-dots button.active{background:#51dcff}.bracket-metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;margin-top:14px;background:rgba(125,190,219,.15)}.bracket-metrics div{background:#06101f;padding:14px 12px}.bracket-metrics strong{display:block;color:#eaf4ff;font:600 16px/1.15 var(--font-geist-mono),monospace}.bracket-metrics span{display:block;margin-top:6px;color:#8796aa;font:9px/1.35 var(--font-geist-mono),monospace;letter-spacing:.08em;text-transform:uppercase}.bracket-findings{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:14px}.bracket-finding{border:1px solid rgba(125,190,219,.15);padding:15px 16px;background:rgba(9,25,48,.42)}.bracket-finding b{display:block;color:#51dcff;font:600 10px/1.3 var(--font-geist-mono),monospace;letter-spacing:.1em;text-transform:uppercase}.bracket-finding p{margin:8px 0 0;color:#9caec0;font-size:13px;line-height:1.6}@media(max-width:760px){.bracket-study-head{grid-template-columns:1fr}.bracket-study-highlight{text-align:left}.bracket-gallery-view{height:clamp(300px,72vw,520px);padding:10px}.bracket-gallery-meta{grid-template-columns:auto 1fr}.bracket-gallery-meta span{grid-column:1/-1;text-align:left}.bracket-metrics{grid-template-columns:1fr 1fr}.bracket-findings{grid-template-columns:1fr}}@media(max-width:480px){.bracket-gallery-arrow{width:34px;height:48px}.bracket-gallery-prev{left:6px}.bracket-gallery-next{right:6px}.bracket-metrics{grid-template-columns:1fr}}
      `}</style>

      <figure className="lug-composite" aria-labelledby="lug-composite-caption">
        <div className="lug-composite-frame">
          <img
            src={`${basePath}lug-design-progression.webp`}
            alt="Five-panel progression showing the baseline lug, von Mises stress result, optimized geometry, lattice cross-section, and distance-field cross-section"
          />
        </div>
        <figcaption id="lug-composite-caption">
          <span className="gallery-label">STUDY 01 · VARIABLE-DENSITY LUG</span>
          <div className="lug-results">
            <div><strong>203.82 g</strong><span>Baseline mass</span></div>
            <div><strong>160.81 g</strong><span>Optimized mass</span></div>
            <div><strong>43.01 g</strong><span>Mass removed</span></div>
            <div><strong>21.10%</strong><span>Mass reduction</span></div>
            <div className="lug-result-wide" style={{ gridColumn: "1 / -1" }}>
              <strong>6061-T6</strong><span>Aluminum material model</span>
            </div>
          </div>
          <p>
            Stress-driven progression from the baseline solid lug to a variable-density lattice geometry,
            evaluated using 6061-T6 aluminum material properties. Baseline and optimized masses are inferred
            from the recorded 43.01 g reduction and 21.10% mass reduction.
          </p>
        </figcaption>
      </figure>

      <section className="bracket-study" aria-labelledby="bracket-study-title">
        <div className="bracket-study-head">
          <div>
            <p className="bracket-study-kicker">Study 02 · Topology + lattice optimization · Aluminum</p>
            <h3 id="bracket-study-title">Testing the workflow on an unconventional bracket geometry</h3>
            <p className="bracket-study-copy">
              To extend the workflow beyond the original lug, I applied topology optimization and lattice optimization to an arbitrarily designed aluminum bracket with a more unconventional shape. Different load paths were explored to see how structural loading influenced material redistribution. The study focused on mass reduction and structural response rather than full component validation.
            </p>
          </div>
          <div className="bracket-study-highlight">
            <strong>10.35%</strong>
            <span>mass reduction</span>
          </div>
        </div>

        <div className="bracket-gallery" aria-label="Load-path bracket optimization gallery">
          <div className="bracket-gallery-view" aria-live="polite">
            <img key={activeSlide.src} src={activeSlide.src} alt={activeSlide.alt} />
          </div>
          <button className="bracket-gallery-arrow bracket-gallery-prev" type="button" onClick={previousBracketSlide} aria-label="Previous bracket study image">‹</button>
          <button className="bracket-gallery-arrow bracket-gallery-next" type="button" onClick={nextBracketSlide} aria-label="Next bracket study image">›</button>
          <div className="bracket-gallery-meta">
            <b>{String(bracketIndex + 1).padStart(2, "0")} / {String(bracketSlides.length).padStart(2, "0")}</b>
            <strong>{activeSlide.label}</strong>
            <span>{activeSlide.detail}</span>
          </div>
        </div>
        <div className="bracket-gallery-dots" aria-label="Bracket gallery slides">
          {bracketSlides.map((slide, index) => (
            <button
              key={slide.label}
              type="button"
              className={index === bracketIndex ? "active" : ""}
              onClick={() => setBracketIndex(index)}
              aria-label={`Show ${slide.label}`}
              aria-current={index === bracketIndex ? "true" : undefined}
            />
          ))}
        </div>

        <div className="bracket-metrics" aria-label="Bracket study results">
          <div><strong>Aluminum</strong><span>material model</span></div>
          <div><strong>5.66e-3 → 4.65e-3 mm</strong><span>max displacement · 17.8% lower</span></div>
          <div><strong>4.03e5 → 5.13e6 Pa</strong><span>peak stress</span></div>
          <div><strong>10.35%</strong><span>mass reduction</span></div>
        </div>

        <div className="bracket-findings">
          <div className="bracket-finding">
            <b>Load-path response</b>
            <p>Changing the loading path visibly changed where material was retained and where the lattice became denser through the bracket.</p>
          </div>
          <div className="bracket-finding">
            <b>Optimization tradeoff</b>
            <p>The lighter design slightly reduced maximum displacement, but peak stress became more localized and substantially higher. I treat this as an exploration of the mass–stiffness–stress tradeoff, not as a final validated component.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
