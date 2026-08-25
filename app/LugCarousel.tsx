"use client";

import { useCallback, useEffect, useState } from "react";

const basePath = "/portfolio/images/";

const bracketSlides = [
  {
    type: "comparison",
    label: "Stress field → optimized geometry",
    detail: "Baseline stress used to guide topology + lattice optimization",
    leftSrc: `${basePath}bracket-baseline-stress.png`,
    rightSrc: `${basePath}bracket-optimized-geometry.png`,
    leftAlt: "Baseline aluminum bracket stress field used as an optimization input",
    rightAlt: "Final optimized aluminum bracket with topology-reduced regions and lattice geometry",
  },
  {
    type: "overlay",
    label: "Registered stress-field overlay",
    detail: "Optimized geometry aligned to the baseline stress field using the common mounting holes",
    baseSrc: `${basePath}bracket-baseline-stress.png`,
    overlaySrc: `${basePath}bracket-optimized-geometry.png`,
    alt: "Registered semi-transparent overlay of the final optimized bracket over the baseline stress field",
  },
  {
    type: "image",
    src: `${basePath}bracket-optimized-geometry.png`,
    label: "Optimized topology + lattice geometry",
    detail: "Topology optimization followed by lattice optimization",
    alt: "Optimized aluminum bracket showing topology-reduced regions and internal lattice geometry",
  },
  {
    type: "image",
    src: `${basePath}bracket-baseline-displacement.png`,
    label: "Baseline displacement",
    detail: "Maximum displacement · 5.65888e-03 mm",
    alt: "Baseline aluminum bracket displacement contour with a maximum displacement of 5.65888e-03 millimeters",
  },
  {
    type: "image",
    src: `${basePath}bracket-optimized-displacement.png`,
    label: "Optimized displacement",
    detail: "Maximum displacement · 4.65119e-03 mm",
    alt: "Optimized topology and lattice bracket displacement contour with a maximum displacement of 4.65119e-03 millimeters",
  },
  {
    type: "image",
    src: `${basePath}bracket-baseline-stress.png`,
    label: "Baseline stress",
    detail: "Peak stress · 4.03017e+05 Pa",
    alt: "Baseline aluminum bracket stress result with a maximum stress of 4.03017e+05 pascals",
  },
  {
    type: "image",
    src: `${basePath}bracket-optimized-stress.png`,
    label: "Optimized stress",
    detail: "Peak stress · 5.12985e+06 Pa",
    alt: "Optimized topology and lattice bracket stress result with a maximum stress of 5.12985e+06 pascals",
  },
];

export default function LugCarousel() {
  const [bracketIndex, setBracketIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const moveBracket = useCallback((direction: number) => {
    setBracketIndex((current) => (current + direction + bracketSlides.length) % bracketSlides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = window.setTimeout(() => {
      moveBracket(1);
    }, 6000);
    return () => window.clearTimeout(timer);
  }, [bracketIndex, moveBracket, paused]);

  const activeSlide = bracketSlides[bracketIndex];

  return (
    <div className="optimization-studies">
      <style>{`
        .optimization-studies{display:grid;gap:34px}.bracket-study{border:1px solid rgba(125,190,219,.2);background:rgba(5,16,31,.7);padding:clamp(18px,3vw,30px)}.bracket-study-head{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:28px;align-items:end;margin-bottom:22px}.bracket-study-kicker{margin:0 0 8px;color:#51dcff;font:600 10px/1.4 var(--font-geist-mono),monospace;letter-spacing:.15em;text-transform:uppercase}.bracket-study h3{margin:0;font-size:clamp(24px,3vw,36px);line-height:1.15}.bracket-study-copy{max-width:760px;margin:14px 0 0;color:#9caec0;font-size:14px;line-height:1.7}.bracket-study-highlight{text-align:right}.bracket-study-highlight strong{display:block;color:#eaf4ff;font:600 clamp(28px,4vw,42px)/1 var(--font-geist-mono),monospace}.bracket-study-highlight span{display:block;margin-top:7px;color:#8796aa;font:9px/1.3 var(--font-geist-mono),monospace;letter-spacing:.12em;text-transform:uppercase}.bracket-gallery{position:relative;border:1px solid rgba(125,190,219,.18);background:#030812;overflow:hidden}.bracket-gallery-viewport{overflow:hidden}.bracket-gallery-track{display:flex;transition:transform .55s cubic-bezier(.22,.8,.22,1);will-change:transform}.bracket-gallery-slide{flex:0 0 100%;min-width:0}.bracket-gallery-view{height:clamp(360px,55vw,640px);display:grid;place-items:center;padding:18px}.bracket-gallery-view>img{display:block;width:100%;height:100%;object-fit:contain}.bracket-comparison{width:100%;height:100%;display:grid;grid-template-columns:1fr 1fr;gap:12px}.bracket-comparison-panel{position:relative;min-width:0;border:1px solid rgba(125,190,219,.14);background:#050b14;overflow:hidden}.bracket-comparison-panel img{width:100%;height:100%;object-fit:contain;display:block}.bracket-comparison-panel span{position:absolute;left:10px;bottom:10px;padding:5px 7px;background:rgba(3,8,18,.85);border:1px solid rgba(81,220,255,.22);color:#cbdbea;font:8px/1.2 var(--font-geist-mono),monospace;letter-spacing:.08em;text-transform:uppercase}.bracket-overlay{position:relative;width:100%;height:100%;display:grid;place-items:center;background:#050b14;overflow:hidden}.bracket-overlay svg{display:block;width:100%;height:100%}.bracket-overlay-optimized{opacity:.42;mix-blend-mode:screen}.bracket-overlay-badge{position:absolute;left:12px;bottom:12px;padding:6px 8px;background:rgba(3,8,18,.86);border:1px solid rgba(81,220,255,.25);color:#cbdbea;font:8px/1.2 var(--font-geist-mono),monospace;letter-spacing:.08em;text-transform:uppercase}.bracket-gallery-arrow{position:absolute;z-index:3;top:50%;width:40px;height:56px;border:1px solid rgba(81,220,255,.35);background:rgba(3,8,18,.84);color:#eaf4ff;font-size:25px;line-height:1;cursor:pointer;transform:translateY(-50%);transition:background .2s ease,border-color .2s ease}.bracket-gallery-arrow:hover,.bracket-gallery-arrow:focus-visible{background:rgba(10,31,50,.97);border-color:#51dcff;outline:none}.bracket-gallery-prev{left:12px}.bracket-gallery-next{right:12px}.bracket-gallery-meta{display:grid;grid-template-columns:auto minmax(0,1fr) auto;gap:14px;align-items:center;padding:12px 16px;border-top:1px solid rgba(125,190,219,.15);font:9px/1.4 var(--font-geist-mono),monospace;letter-spacing:.08em;text-transform:uppercase}.bracket-gallery-meta b{color:#51dcff}.bracket-gallery-meta strong{min-width:0;color:#c9d7e5;font-weight:500}.bracket-gallery-meta span{color:#8796aa;text-align:right}.bracket-gallery-dots{display:flex;gap:6px;justify-content:center;margin-top:10px}.bracket-gallery-dots button{width:24px;height:3px;padding:0;border:0;background:#30465b;cursor:pointer;transition:background .2s ease}.bracket-gallery-dots button.active{background:#51dcff}.bracket-metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;margin-top:14px;background:rgba(125,190,219,.15)}.bracket-metrics div{background:#06101f;padding:14px 12px}.bracket-metrics strong{display:block;color:#eaf4ff;font:600 16px/1.15 var(--font-geist-mono),monospace}.bracket-metrics span{display:block;margin-top:6px;color:#8796aa;font:9px/1.35 var(--font-geist-mono),monospace;letter-spacing:.08em;text-transform:uppercase}.bracket-findings{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:14px}.bracket-finding{border:1px solid rgba(125,190,219,.15);padding:15px 16px;background:rgba(9,25,48,.42)}.bracket-finding b{display:block;color:#51dcff;font:600 10px/1.3 var(--font-geist-mono),monospace;letter-spacing:.1em;text-transform:uppercase}.bracket-finding p{margin:8px 0 0;color:#9caec0;font-size:13px;line-height:1.6}@media(max-width:760px){.bracket-study-head{grid-template-columns:1fr}.bracket-study-highlight{text-align:left}.bracket-gallery-view{height:clamp(300px,72vw,520px);padding:10px}.bracket-comparison{grid-template-columns:1fr;grid-template-rows:1fr 1fr}.bracket-gallery-meta{grid-template-columns:auto 1fr}.bracket-gallery-meta span{grid-column:1/-1;text-align:left}.bracket-metrics{grid-template-columns:1fr 1fr}.bracket-findings{grid-template-columns:1fr}}@media(max-width:480px){.bracket-gallery-arrow{width:34px;height:48px}.bracket-gallery-prev{left:6px}.bracket-gallery-next{right:6px}.bracket-metrics{grid-template-columns:1fr}}
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
              To extend the workflow beyond the original lug, I applied topology optimization and lattice optimization to an arbitrarily designed aluminum bracket with a more unconventional shape. A baseline stress field was used to guide the optimization, and different load paths were explored to see how structural loading influenced material redistribution. The study focused on mass reduction and structural response rather than full component validation.
            </p>
          </div>
          <div className="bracket-study-highlight">
            <strong>10.35%</strong>
            <span>mass reduction</span>
          </div>
        </div>

        <div
          className="bracket-gallery"
          aria-label="Load-path bracket optimization gallery"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") moveBracket(-1);
            if (event.key === "ArrowRight") moveBracket(1);
          }}
        >
          <div className="bracket-gallery-viewport" aria-live="polite">
            <div className="bracket-gallery-track" style={{ transform: `translateX(-${bracketIndex * 100}%)` }}>
              {bracketSlides.map((slide, index) => (
                <div className="bracket-gallery-slide" key={`${slide.label}-${index}`}>
                  <div className="bracket-gallery-view">
                    {slide.type === "comparison" ? (
                      <div className="bracket-comparison">
                        <div className="bracket-comparison-panel">
                          <img src={slide.leftSrc} alt={slide.leftAlt} />
                          <span>Baseline stress field</span>
                        </div>
                        <div className="bracket-comparison-panel">
                          <img src={slide.rightSrc} alt={slide.rightAlt} />
                          <span>Final optimized geometry</span>
                        </div>
                      </div>
                    ) : slide.type === "overlay" ? (
                      <div className="bracket-overlay">
                        <svg viewBox="0 0 1317 809" role="img" aria-label={slide.alt} preserveAspectRatio="xMidYMid meet">
                          <image href={slide.baseSrc} x="0" y="0" width="1317" height="809" preserveAspectRatio="none" />
                          <image
                            className="bracket-overlay-optimized"
                            href={slide.overlaySrc}
                            x="0"
                            y="0"
                            width="1247"
                            height="870"
                            preserveAspectRatio="none"
                            transform="matrix(1.009995 -0.131215 -0.124194 0.755217 84.65 195.11)"
                          />
                        </svg>
                        <span className="bracket-overlay-badge">Registered optimized geometry overlay · 42%</span>
                      </div>
                    ) : (
                      <img src={slide.src} alt={slide.alt} />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="bracket-gallery-arrow bracket-gallery-prev" type="button" onClick={() => moveBracket(-1)} aria-label="Previous bracket study image">‹</button>
          <button className="bracket-gallery-arrow bracket-gallery-next" type="button" onClick={() => moveBracket(1)} aria-label="Next bracket study image">›</button>
          <div className="bracket-gallery-meta">
            <b>{String(bracketIndex + 1).padStart(2, "0")} / {String(bracketSlides.length).padStart(2, "0")}</b>
            <strong>{activeSlide.label}</strong>
            <span>{activeSlide.detail}</span>
          </div>
        </div>
        <div className="bracket-gallery-dots" aria-label="Bracket gallery slides">
          {bracketSlides.map((slide, index) => (
            <button
              key={`${slide.label}-dot`}
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
            <b>Stress-field-driven optimization</b>
            <p>The baseline stress field provided the structural input used to guide where material was retained through the topology and lattice optimization workflow.</p>
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
