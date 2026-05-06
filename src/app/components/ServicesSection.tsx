"use client";

import { useRef, type CSSProperties } from "react";
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

  // Wire the scroll-driven reveal (downward entry only, fires once per load)
  useServicesScrollMotion(sectionRef, cardsRef);

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
        {/* Rope is rendered OUTSIDE the cards container so it never moves */}
        <div className="service-rope" aria-hidden="true" />

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
