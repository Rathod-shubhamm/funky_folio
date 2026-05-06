import Image from "next/image";
import HeroAvatar from "./components/HeroAvatar";
import ServicesSection from "./components/ServicesSection";
import WorkSlider from "./components/WorkSlider";

const work = [
  {
    code: "ECO",
    title: "Ecosystem AI",
    tags: ["Next.js", "Python", "N8N", "Agentic"],
    color: "#f04d3c",
  },
  {
    code: "PIT",
    title: "PitchPulse AI",
    tags: ["React", "FastAPI", "LLM", "Analytics"],
    color: "#9499ff",
  },
  {
    code: "MKT",
    title: "MarketBrain AI",
    tags: ["UI/UX", "Automation", "Data", "SaaS"],
    color: "#ffae00",
  },
  {
    code: "BLK",
    title: "BlinkCare",
    tags: ["Web", "Product", "Cloud", "API"],
    color: "#9af2ff",
  },
] as const;

const services = [
  {
    code: "WEB",
    date: "06-20-12",
    title: "Web Design",
    skills: ["UI/UX", "Prototypes", "Components", "Design Systems", "Figma", "Wireframes"],
    route: ["WIR", "PRO", "DEV"],
    color: "#f04d3c",
  },
  {
    code: "DEV",
    date: "02-20-03",
    title: "Web Development",
    skills: ["CSS/HTML/JS", "GSAP", "Next.js", "Git", "APIs", "Cursor"],
    route: ["FRO", "BCK", "STR"],
    color: "#ffae00",
  },
  {
    code: "STR",
    date: "08-20-15",
    title: "AI Strategy",
    skills: ["Workflows", "Agents", "Reports", "Automation", "Roadmaps", "RAG"],
    route: ["B2B", "OPS", "AI"],
    color: "#8aff70",
  },
  {
    code: "BRD",
    date: "12-20-04",
    title: "Product Design",
    skills: ["Concepts", "Systems", "Templates", "Dashboards", "Activation", "Assets"],
    route: ["CPT", "ACT", "GFK"],
    color: "#b83e85",
  },
  {
    code: "MOT",
    date: "06-20-03",
    title: "Motion Systems",
    skills: ["Interactions", "Lottie", "Animations", "Rive", "GSAP", "AI Video"],
    route: ["WEB", "VID", "ILL"],
    color: "#d4cbb8",
  },
];

const roster = [
  "Apexneural Pvt Ltd",
  "BlinkCare",
  "VIT Bhopal",
  "EcoSystem AI",
  "PitchPulse AI",
  "MarketBrain AI",
  "Lumina AI",
  "Autonomous Workflows",
  "Content Intelligence",
  "Product Labs",
];

const awards = [
  "AI Product Launch x4",
  "Full-Stack Builds x12",
  "Agentic Workflows x8",
  "Automation Systems x10",
  "Dashboard Suites x6",
  "API Integrations x20",
  "Design Systems x5",
  "Prototype Sprints x14",
];

function Logo() {
  return (
    <span className="logo-mark" aria-hidden="true">
      <span />
      <span />
      <span />
      <span />
    </span>
  );
}


export default function Home() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <header className="site-header">
        <a href="#" className="logo-link" aria-label="Return to top">
          <Logo />
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#work">
            <span>Work</span>
            <span aria-hidden="true">Work</span>
          </a>
          <a href="#services" className="hide-mobile">
            <span>Services</span>
            <span aria-hidden="true">Services</span>
          </a>
          <a href="#about" className="hide-mobile">
            <span>About</span>
            <span aria-hidden="true">About</span>
          </a>
          <a href="#contact">
            <span>Contact</span>
            <span aria-hidden="true">Contact</span>
          </a>
          <a href="#lab">
            <span>Lab</span>
            <span aria-hidden="true">Lab</span>
          </a>
        </nav>
        <a className="header-cta" href="mailto:shubhamrathod1619@gmail.com">
          <span>Let&apos;s talk</span>
          <span aria-hidden="true">Fun stuff</span>
        </a>
      </header>

      <main id="main-content" className="site-content">
        <section className="hero-section" aria-label="Hero">
          <div className="hero-animation" aria-hidden="true">
            <div className="orbital orbital-one" />
            <div className="orbital orbital-two" />
            <div className="butterfly">
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="hero-panel panel-one" />
            <div className="hero-panel panel-two" />
            <div className="hero-panel panel-three" />
          </div>
          <HeroAvatar />
          <div className="hero-box">
            <div className="hero-heading">
              <h1>Hey!</h1>
            </div>
            <p>
              You&apos;ve arrived at the portfolio of <b>Shubham Rathod</b>, a full-stack
              developer and AI engineer building fast web products, automation systems, and
              practical agentic workflows.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        <section className="work-section" id="work" aria-label="Work">
          <div className="work-background" aria-hidden="true" />
          <Image
            src="/cyclist.png"
            alt=""
            className="cyclist-illustration"
            aria-hidden="true"
            width={1672}
            height={941}
            sizes="(max-width: 768px) 40vw, 33vw"
          />
          <h2 className="section-ghost-title">Work</h2>

          <WorkSlider projects={work} />
        </section>

        <ServicesSection services={services} />

        <section className="about-section" id="about" aria-label="About">
          <div className="stadium" aria-hidden="true">
            <div className="stadium-wall wall-back" />
            <div className="stadium-wall wall-left" />
            <div className="stadium-wall wall-right" />
            <div className="pitch">
              <span className="center-circle" />
              <span className="goal goal-left" />
              <span className="goal goal-right" />
            </div>
          </div>

          <div className="about-card">
            <div className="about-top">
              <h2>About</h2>
              <div className="bio">
                <h3>Bio</h3>
                <p>
                  I build intelligent systems for real product problems, combining React,
                  APIs, automation pipelines, and LLM tooling into interfaces people can
                  actually use.
                </p>
                <p>
                  Whether the job is product direction, a fast prototype, or a production
                  deployment, I focus on turning complex workflows into clear software.
                </p>
              </div>
              <div className="roster hide-mobile">
                <h3>Roster</h3>
                <ul>
                  {roster.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="scoreboard">
              <div className="score">
                <span>
                  <small>HOME</small>0
                </span>
                <b>-</b>
                <span>
                  <small>AWAY</small>0
                </span>
              </div>
              <div className="awards-ticker">
                <div>
                  {[...awards, ...awards].map((award, index) => (
                    <span key={`${award}-${index}`}>{award}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-label="Contact">
          <div className="contact-curve" aria-hidden="true">
            <svg viewBox="0 0 1518 409" preserveAspectRatio="none">
              <path d="M1517.5 415.9c-3.9-10.7-8.1-20.1-12.6-28.8-44.1-85.3-140.1-173.8-244.8-171-104.7 2.7-154.2 50.7-275.5 86.5-121.2 35.8-188.2-25.9-248.8-70-60.6-44-140.5-139.2-344.4-202.5C219.7-23.3 49.5 29.9-100 48v367.9h1617.5Z" />
              <path d="M1517.5 415.9c-3.9-9.8-8.1-20.1-12.6-28.8-44.1-85.3-140.1-173.8-244.8-171-104.7 2.7-154.2 50.7-275.5 86.5-121.2 35.8-188.2-25.9-248.8-70-60.6-44-140.5-139.2-344.4-202.5C219.7-23.3 49.5 29.9-100 48" />
            </svg>
            <p>Ready to play?</p>
          </div>
          <div className="guitar" aria-hidden="true">
            <span className="guitar-body" />
            <span className="guitar-neck" />
            <span className="guitar-head" />
            <span className="string string-one" />
            <span className="string string-two" />
            <span className="string string-three" />
          </div>
          <div className="contact-links">
            <a href="mailto:shubhamrathod1619@gmail.com">shubhamrathod1619@gmail.com</a>
            <a href="tel:+919000000000">+91 90000 00000</a>
            <a href="https://github.com/Rathod-shubhamm">View GitHub</a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <Logo />
        <p>© 2026 Shubham Rathod</p>
      </footer>
      <div className="bottom-border" aria-hidden="true" />
    </div>
  );
}
