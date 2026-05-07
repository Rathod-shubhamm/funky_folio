"use client";

import { useRef, useEffect } from "react";
import { useServicesScrollMotion } from "../hooks/useServicesScrollMotion";

const ops = [
  {
    id: "BLINKCARE",
    theme: "On-demand driver services under 15 minutes.",
    role: "AI Engineer & Tech Consultant",
    accent: "#ff4500", // Orange/red
    work: [
      "Translated business requirements into technical workflows",
      "Coordinated with outsourced development team",
      "QA testing and feature validation",
      "Operational workflow optimization",
      "Product improvement recommendations",
    ],
    metrics: [
      { label: "AVG ARRIVAL", value: "< 15m" },
      { label: "DEPLOYMENTS", value: "8+" },
      { label: "EFFICIENCY", value: "+34%" },
      { label: "CSAT SCORE", value: "4.9/5" },
    ],
  },
  {
    id: "GETZONED",
    theme: "AI-powered location & mapping intelligence.",
    role: "AI Systems & Product Engineering",
    accent: "#00ff88", // Blue/green
    work: [
      "AI workflow design",
      "Automation systems",
      "Location intelligence architecture",
      "Product system planning",
      "UX and operational improvements",
    ],
    metrics: [
      { label: "MAP SECTORS", value: "12K" },
      { label: "LATENCY", value: "120ms" },
      { label: "DATA NODES", value: "1.4M" },
      { label: "ACCURACY", value: "99.8%" },
    ],
  },
];

export default function FieldOpsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const ropeRef = useRef<HTMLDivElement>(null);

  useServicesScrollMotion(sectionRef, cardsRef);

  useEffect(() => {
    const el = cardsRef.current;
    const rope = ropeRef.current;
    if (!el || !rope) return;

    let targetScroll = el.scrollLeft;
    let currentScroll = el.scrollLeft;
    let velocity = 0;
    let rafId: number;
    let canTilt = false;

    let isDragging = false;
    let startX = 0;
    let scrollLeftStart = 0;
    let dragVelocity = 0;
    let lastDragX = 0;

    const timer = setTimeout(() => {
      canTilt = true;
      el.classList.add("motion-ready");
    }, 1500);

    const onScroll = () => {
      if (!isDragging) {
        targetScroll = el.scrollLeft;
        currentScroll = el.scrollLeft;
      }
    };

    const onPointerDown = (e: PointerEvent) => {
      if (e.button !== 0 || e.pointerType !== "mouse") return;
      isDragging = true;
      startX = e.pageX;
      scrollLeftStart = targetScroll;
      lastDragX = e.pageX;
      dragVelocity = 0;
      el.setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging || e.pointerType !== "mouse") return;
      const deltaX = e.pageX - startX;
      dragVelocity = e.pageX - lastDragX;
      lastDragX = e.pageX;
      targetScroll = Math.max(0, Math.min(scrollLeftStart - deltaX, el.scrollWidth - el.clientWidth));
    };

    const onPointerUp = (e: PointerEvent) => {
      if (!isDragging || e.pointerType !== "mouse") return;
      isDragging = false;
      el.releasePointerCapture(e.pointerId);
      targetScroll = Math.max(0, Math.min(targetScroll - dragVelocity * 15, el.scrollWidth - el.clientWidth));
    };

    const render = () => {
      if (isDragging || Math.abs(targetScroll - currentScroll) > 0.5) {
        currentScroll += (targetScroll - currentScroll) * 0.08;
        if (Math.round(el.scrollLeft) !== Math.round(currentScroll)) {
          el.scrollLeft = currentScroll;
        }
      } else {
        currentScroll = targetScroll;
      }

      const frameVel = targetScroll - currentScroll;
      velocity = velocity * 0.8 + frameVel * 0.2;

      rope.style.transform = `translateX(${-currentScroll * 0.12}px)`;

      if (canTilt) {
        const tilt = Math.max(-1.5, Math.min(1.5, velocity * 0.015));
        el.style.setProperty("--tilt", `${tilt}deg`);
      }

      rafId = requestAnimationFrame(render);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerup", onPointerUp);
    el.addEventListener("pointercancel", onPointerUp);
    rafId = requestAnimationFrame(render);

    return () => {
      el.removeEventListener("scroll", onScroll);
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", onPointerUp);
      el.removeEventListener("pointercancel", onPointerUp);
      cancelAnimationFrame(rafId);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="field-ops-section" id="field-ops" aria-label="Field Ops" ref={sectionRef}>
      <div className="ops-header">
        <h2>FIELD OPS</h2>
        <p className="ops-intro">
          Real-world deployments and advisory work where AI meets operational systems.
        </p>
      </div>

      <div className="ops-stage">
        <div className="ops-rope" aria-hidden="true" ref={ropeRef} />

        <div className="ops-cards service-cards" ref={cardsRef}>
          {ops.map((op, index) => (
            <article
              className="ops-card service-card"
              key={op.id}
              style={{ "--op-accent": op.accent, "--card-index": index } as React.CSSProperties}
            >
              <div className="service-card-thread" aria-hidden="true" />
              <div className="ops-card-tag">
                <span className="ops-card-tag-dot" />
                <span className="ops-card-id">{op.id}</span>
              </div>

              <div className="ops-panel">
                <div className="ops-details">
                  <h3>{op.id}</h3>
                  <p className="ops-theme">{op.theme}</p>
                  
                  <div className="ops-role">
                    <small>ROLE</small>
                    <strong>{op.role}</strong>
                  </div>

                  <div className="ops-work">
                    <small>WORK</small>
                    <ul>
                      {op.work.map((w, i) => (
                        <li key={i}>{w}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="ops-visual" aria-hidden="true">
                  {op.id === "BLINKCARE" && (
                    <div className="ops-viz-blinkcare">
                      <div className="blink-grid" />
                      <div className="blink-route">
                        <svg viewBox="0 0 200 200" className="route-svg">
                          <path d="M 20 180 L 80 120 L 150 140 L 180 40" />
                          <circle cx="180" cy="40" r="6" className="blink-node pulse" />
                          <circle cx="20" cy="180" r="6" className="blink-node" />
                        </svg>
                      </div>
                      <div className="blink-ui">
                        <div className="ui-header" />
                        <div className="ui-body">
                          <span className="ui-pulse" />
                        </div>
                      </div>
                    </div>
                  )}
                  {op.id === "GETZONED" && (
                    <div className="ops-viz-getzoned">
                      <div className="zoned-grid" />
                      <div className="zoned-sectors">
                        <div className="sector s1" />
                        <div className="sector s2" />
                        <div className="sector s3" />
                      </div>
                      <div className="zoned-overlay">
                        <svg viewBox="0 0 200 200">
                          <polygon points="100,20 180,80 180,160 100,190 20,160 20,80" className="geo-poly" />
                          <circle cx="100" cy="105" r="4" className="geo-node pulse-fast" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>

                <div className="ops-metrics">
                  <small>METRICS</small>
                  <div className="metrics-grid">
                    {op.metrics.map((m, i) => (
                      <div className="metric-box" key={i}>
                        <span className="m-val">{m.value}</span>
                        <span className="m-lbl">{m.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
