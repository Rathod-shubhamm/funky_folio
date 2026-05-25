"use client";

import { useRef, useEffect } from "react";
import { useServicesScrollMotion } from "../hooks/useServicesScrollMotion";

const ops = [
  {
    id: "BLINKCARE",
    theme:
      "On-demand home services — maids, drivers, cleaning — at your door in under 15 minutes.",
    role: "Tech Advisor",
    accent: "#ff4500",
    work: [
      "Bridged founder vision with the outsourced dev team",
      "Translated product requirements into dev-ready specs",
      "Reviewed app development milestones and architecture",
      "Led QA cycles, release testing, and feature validation",
      "Advised on ops workflows and in-app service UX",
    ],
    metrics: [
      { label: "AVG DISPATCH", value: "< 15m" },
      { label: "SERVICE LINES", value: "3+" },
      { label: "RELEASES", value: "8+" },
      { label: "USER RATING", value: "4.9/5" },
    ],
  },
  {
    id: "GETZONED",
    theme:
      "Hyperlocal social connectivity — meet, date, or join events within a 500-meter radius.",
    role: "Tech Advisor",
    accent: "#00ff88",
    work: [
      "InstaDate-style proximity matching within 500m",
      "Host or join nearby events from the same feed",
      "Location-aware discovery and radius logic",
      "Reviewed mobile flows, APIs, and release testing",
      "Advised on product scope between dating and events",
    ],
    metrics: [
      { label: "RADIUS", value: "500m" },
      { label: "MODES", value: "MEET+" },
      { label: "EVENTS", value: "HOST" },
      { label: "FEED", value: "LIVE" },
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
          Product advisory on live platforms — from hyperlocal home services to
          proximity-based social and events.
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
                      <div className="blink-eta-ring" />
                      <div className="blink-home-hub">
                        <span className="blink-home-icon" />
                      </div>
                      <div className="blink-services">
                        <div className="blink-service blink-service--maid" data-label="MAID">
                          <span className="blink-service-icon" />
                        </div>
                        <div className="blink-service blink-service--driver" data-label="DRIVER">
                          <span className="blink-service-icon" />
                        </div>
                        <div className="blink-service blink-service--clean" data-label="CLEAN">
                          <span className="blink-service-icon" />
                        </div>
                      </div>
                      <div className="blink-eta-badge">
                        <span className="blink-eta-num">15</span>
                        <span className="blink-eta-unit">MIN</span>
                      </div>
                      <div className="blink-dispatch-bar">
                        <span className="blink-dispatch-fill" />
                      </div>
                    </div>
                  )}
                  {op.id === "GETZONED" && (
                    <div className="ops-viz-getzoned">
                      <div className="zoned-grid" />
                      <div className="zoned-radar">
                        <span className="zoned-ring zoned-ring--outer" />
                        <span className="zoned-ring zoned-ring--mid" />
                        <span className="zoned-ring zoned-ring--inner" />
                        <span className="zoned-ring zoned-ring--core" />
                      </div>
                      <div className="zoned-peers">
                        <span className="zoned-peer zoned-peer--1" />
                        <span className="zoned-peer zoned-peer--2" />
                        <span className="zoned-peer zoned-peer--3" />
                        <span className="zoned-peer zoned-peer--4" />
                      </div>
                      <div className="zoned-links" aria-hidden="true">
                        <span className="zoned-link zoned-link--a" />
                        <span className="zoned-link zoned-link--b" />
                      </div>
                      <div className="zoned-event-pin">
                        <span className="zoned-event-dot" />
                        <span className="zoned-event-label">EVENT</span>
                      </div>
                      <div className="zoned-radius-label">500m</div>
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
