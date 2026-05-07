"use client";

import { useRef, useEffect, type CSSProperties } from "react";
import { useServicesScrollMotion } from "../hooks/useServicesScrollMotion";

type Service = {
  code: string;
  date: string;
  title: string;
  skills: readonly string[];
  route: readonly string[];
  color: string;
};

type ServicesSectionProps = {
  services: readonly Service[];
};

export default function ServicesSection({ services }: ServicesSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const ropeRef = useRef<HTMLDivElement>(null);

  // Wire the scroll-driven reveal (downward entry only, fires once per load)
  useServicesScrollMotion(sectionRef, cardsRef);

  // Advanced Motion loop: Parallax, Tilt, and Drag-to-Horizontal scroll
  useEffect(() => {
    const el = cardsRef.current;
    const rope = ropeRef.current;
    if (!el || !rope) return;

    let targetScroll = el.scrollLeft;
    let currentScroll = el.scrollLeft;
    let velocity = 0;
    let rafId: number;
    let canTilt = false;

    // Drag states
    let isDragging = false;
    let startX = 0;
    let scrollLeftStart = 0;
    let dragVelocity = 0;
    let lastDragX = 0;

    // Enable tilt only after initial CSS slide-in completes (approx 1.5s)
    const timer = setTimeout(() => {
      canTilt = true;
      el.classList.add("motion-ready");
    }, 1500);

    const onScroll = () => {
      // If user is natively swiping horizontally (trackpad/mobile/scrollbars), sync the variables!
      if (!isDragging) {
        targetScroll = el.scrollLeft;
        currentScroll = el.scrollLeft;
      }
    };

    // Pointer events for click-and-drag (mouse only, preserving native touch swipes)
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

      // Update target scroll with drag delta (drag left = scroll right)
      targetScroll = Math.max(0, Math.min(scrollLeftStart - deltaX, el.scrollWidth - el.clientWidth));
    };

    const onPointerUp = (e: PointerEvent) => {
      if (!isDragging || e.pointerType !== "mouse") return;
      isDragging = false;
      el.releasePointerCapture(e.pointerId);

      // Add momentum on release (multiplied for weight)
      targetScroll = Math.max(0, Math.min(targetScroll - dragVelocity * 15, el.scrollWidth - el.clientWidth));
    };

    const render = () => {
      // If we are artificially scrolling via drag, apply GSAP-like inertia
      if (isDragging || Math.abs(targetScroll - currentScroll) > 0.5) {
        currentScroll += (targetScroll - currentScroll) * 0.08;
        if (Math.round(el.scrollLeft) !== Math.round(currentScroll)) {
          el.scrollLeft = currentScroll;
        }
      } else {
        currentScroll = targetScroll;
      }

      // Compute velocity based on delta (works for both native swipe & drag)
      const frameVel = targetScroll - currentScroll;
      velocity = velocity * 0.8 + frameVel * 0.2;

      // 1. Rope Parallax (moves backwards slightly relative to cards)
      rope.style.transform = `translateX(${-currentScroll * 0.12}px)`;

      // 2. Card Tilting
      if (canTilt) {
        // Cap tilt between -1.5deg and 1.5deg
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
    <section
      className="service-section"
      id="services"
      aria-label="Services"
      ref={sectionRef}
    >
      <div className="service-header">
        <h2>SERVICES</h2>
        <div className="service-intro">
          <p>
            I can take a product from zero to launch: interface design, production
            development, AI workflow architecture, and the connective tissue between them.
          </p>
          <a href="#contact">Get in touch</a>
        </div>
      </div>

      <div className="service-stage">
        {/* Rope is rendered OUTSIDE the cards container so it never moves (until parallax kicks in) */}
        <div className="service-rope" aria-hidden="true" ref={ropeRef} />

        {/*
         * data-cards-revealed is toggled by the hook.
         * CSS reacts: [data-cards-revealed="true"] .service-card → translateX(0)
         */}
        <div
          className="service-cards"
          ref={cardsRef}
          /* cards start hidden (handled by CSS), no JS inline styles */
        >
          {services.map((service, index) => (
            <article
              className="service-card"
              key={service.code}
              style={
                {
                  "--service-accent": service.color,
                  // CSS custom prop drives per-card stagger delay
                  "--card-index": index,
                } as CSSProperties
              }
            >
              <div className="service-card-thread" aria-hidden="true" />
              <div className="service-card-tag">
                <span className="service-card-tag-code">{service.code}</span>
                <span className="service-card-tag-dot" />
                <span className="service-card-tag-date">{service.date}</span>
              </div>

              <div className="service-card-panel">
                <div className="service-card-knot" aria-hidden="true" />
                <h3>{service.code}</h3>
              </div>

              <div className="service-card-bottom">
                <p>SERVICE</p>
                <div className="service-card-bottom-row">
                  <strong>{service.title}</strong>
                  <span>{service.route.join(" / ")}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
