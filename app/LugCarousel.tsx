import bracketImagePart1 from "./bracket-study-image-part1";
import bracketImagePart2 from "./bracket-study-image-part2";
import bracketImagePart3 from "./bracket-study-image-part3";

const basePath = "/portfolio/images/";
const bracketStudyImage = `data:image/webp;base64,${bracketImagePart1}${bracketImagePart2}${bracketImagePart3}`;

export default function LugCarousel() {
  return (
    <div className="optimization-studies">
      <style>{`
        .optimization-studies{display:grid;gap:34px}.bracket-study{border:1px solid rgba(125,190,219,.2);background:rgba(5,16,31,.7);padding:clamp(18px,3vw,30px)}.bracket-study-head{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:28px;align-items:end;margin-bottom:22px}.bracket-study-kicker{margin:0 0 8px;color:#51dcff;font:600 10px/1.4 var(--font-geist-mono),monospace;letter-spacing:.15em;text-transform:uppercase}.bracket-study h3{margin:0;font-size:clamp(24px,3vw,36px);line-height:1.15}.bracket-study-copy{max-width:760px;margin:14px 0 0;color:#9caec0;font-size:14px;line-height:1.7}.bracket-study-highlight{text-align:right}.bracket-study-highlight strong{display:block;color:#eaf4ff;font:600 clamp(28px,4vw,42px)/1 var(--font-geist-mono),monospace}.bracket-study-highlight span{display:block;margin-top:7px;color:#8796aa;font:9px/1.3 var(--font-geist-mono),monospace;letter-spacing:.12em;text-transform:uppercase}.bracket-study-image{margin:0;border:1px solid rgba(125,190,219,.16);background:#030812;overflow:hidden}.bracket-study-image img{display:block;width:100%;height:auto}.bracket-metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;margin-top:14px;background:rgba(125,190,219,.15)}.bracket-metrics div{background:#06101f;padding:14px 12px}.bracket-metrics strong{display:block;color:#eaf4ff;font:600 16px/1.15 var(--font-geist-mono),monospace}.bracket-metrics span{display:block;margin-top:6px;color:#8796aa;font:9px/1.35 var(--font-geist-mono),monospace;letter-spacing:.08em;text-transform:uppercase}.bracket-findings{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:14px}.bracket-finding{border:1px solid rgba(125,190,219,.15);padding:15px 16px;background:rgba(9,25,48,.42)}.bracket-finding b{display:block;color:#51dcff;font:600 10px/1.3 var(--font-geist-mono),monospace;letter-spacing:.1em;text-transform:uppercase}.bracket-finding p{margin:8px 0 0;color:#9caec0;font-size:13px;line-height:1.6}@media(max-width:760px){.bracket-study-head{grid-template-columns:1fr}.bracket-study-highlight{text-align:left}.bracket-metrics{grid-template-columns:1fr 1fr}.bracket-findings{grid-template-columns:1fr}}
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
            <p className="bracket-study-kicker">Study 02 · Load-path exploration · Aluminum</p>
            <h3 id="bracket-study-title">Testing the workflow on an unconventional bracket geometry</h3>
            <p className="bracket-study-copy">
              To extend the optimization workflow beyond the original lug, I applied it to an arbitrarily designed aluminum bracket with a more unconventional shape. Different load paths were explored to see how structural loading influenced material redistribution. The study focused on mass reduction and structural response rather than full component validation.
            </p>
          </div>
          <div className="bracket-study-highlight">
            <strong>10.35%</strong>
            <span>mass reduction</span>
          </div>
        </div>

        <figure className="bracket-study-image">
          <img
            src={bracketStudyImage}
            alt="Composite of the aluminum bracket study showing the optimized lattice geometry, baseline and optimized displacement contours, and baseline and optimized stress contours"
          />
        </figure>

        <div className="bracket-metrics" aria-label="Bracket study results">
          <div><strong>Aluminum</strong><span>material model</span></div>
          <div><strong>5.66e-3 → 4.65e-3 mm</strong><span>max displacement · 17.8% lower</span></div>
          <div><strong>4.03e5 → 5.13e6 Pa</strong><span>peak stress</span></div>
          <div><strong>10.35%</strong><span>mass removed</span></div>
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
