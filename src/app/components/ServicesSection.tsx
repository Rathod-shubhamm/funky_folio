import type { CSSProperties } from "react";

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
  return (
    <section className="service-section" id="services" aria-label="Services">
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
        <div className="service-rope" aria-hidden="true" />
        <div className="service-cards">
          {services.map((service) => (
            <article
              className="service-card"
              key={service.code}
              style={
                {
                  "--service-accent": service.color,
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
