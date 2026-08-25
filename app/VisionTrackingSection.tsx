"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import VisionTrackingPanel from "./VisionTrackingPanel";

export default function VisionTrackingSection() {
  const [mount, setMount] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const aeroponics = document.getElementById("aeroponics");
    if (!aeroponics) return;

    const host = document.createElement("div");
    host.dataset.visionProjectHost = "true";
    aeroponics.insertAdjacentElement("afterend", host);
    setMount(host);

    const rail = document.querySelector(".rail");
    const aeroponicsLink = rail?.querySelector('a[href="#aeroponics"]');
    let visionLink = rail?.querySelector('[data-vision-rail="true"]') as HTMLAnchorElement | null;

    const renumberRail = () => {
      const labels: Record<string, string> = {
        "#launch": "01",
        "#research": "02",
        "#design": "03",
        "#aeroponics": "04",
        "#vision-tracking": "05",
        "#rocket": "06",
        "#turbojet": "07",
        "#experience": "08",
        "#toolkit": "09",
        "#contact": "10",
      };

      rail?.querySelectorAll<HTMLAnchorElement>("a[href]").forEach((link) => {
        const href = link.getAttribute("href");
        if (href && labels[href]) link.textContent = labels[href];
      });
    };

    if (rail && aeroponicsLink && !visionLink) {
      visionLink = document.createElement("a");
      visionLink.href = "#vision-tracking";
      visionLink.textContent = "05";
      visionLink.setAttribute("aria-label", "Section 05, Computer Vision and Tracking");
      visionLink.dataset.visionRail = "true";
      aeroponicsLink.insertAdjacentElement("afterend", visionLink);
    }

    renumberRail();

    return () => {
      host.remove();
      visionLink?.remove();
    };
  }, []);

  useEffect(() => {
    if (!mount || !window.location.hash) return;

    const frame = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        const id = decodeURIComponent(window.location.hash.slice(1));
        const target = document.getElementById(id);
        if (!target) return;

        target.scrollIntoView({ behavior: "auto", block: "start" });
      });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [mount]);

  if (!mount) return null;

  return createPortal(
    <section className="project shell" id="vision-tracking">
      <div className="stage-label"><b>▮</b> Section 05 · Computer Vision & Tracking</div>
      <div className="project-grid">
        <div>
          <p className="project-number">05</p>
          <h2>Tracking fast-moving targets with YOLOv8 and ByteTrack</h2>
        </div>
        <div className="project-body">
          <p>
            An independent computer-vision project focused on detecting and tracking small,
            fast-moving aerospace targets in video. I trained a custom YOLOv8 model and tuned
            ByteTrack for persistent target IDs across video frames, then used OpenCV to process
            and export annotated tracking results.
          </p>
          <div className="metrics">
            <div><strong>81.9%</strong><span>mAP@50</span></div>
            <div><strong>75.4%</strong><span>final recall</span></div>
            <div><strong>20</strong><span>validation epochs</span></div>
          </div>
          <div className="tags">
            <span>Python</span><span>OpenCV</span><span>YOLOv8</span><span>ByteTrack</span><span>Computer vision</span>
          </div>
        </div>
      </div>
      <VisionTrackingPanel />
    </section>,
    mount,
  );
}
