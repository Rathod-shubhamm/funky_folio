"use client";

import Link from "next/link";
import {
  useRef,
  useState,
  useEffect,
  useCallback,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
} from "react";

/* ─── types ─────────────────────────────────────────────────────────── */
export interface SliderProject {
  code: string;
  title: string;
  tags: readonly string[];
  color: string;
  href: string;
  image?: string;
  video?: string;
}

/* ─── ProjectVisual (self-contained, no server boundary) ─────────── */
function ProjectVisual({ 
  code, 
  color, 
  image, 
  video 
}: { 
  code: string; 
  color: string; 
  image?: string; 
  video?: string;
}) {
  return (
    <div className="project-visual" style={{ "--accent": color } as CSSProperties}>
      <div className="visual-grid">
        <span />
        <span />
        <span />
        <span />
      </div>
      
      {video ? (
        <div style={{ position: 'absolute', inset: 0, zIndex: 10, overflow: 'hidden' }}>
          <video 
            src={video} 
            autoPlay 
            loop 
            muted 
            playsInline 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
        </div>
      ) : image ? (
        <div style={{ position: 'absolute', inset: 0, zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2vw' }}>
          <img src={image} alt={code} style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.3))' }} />
        </div>
      ) : (
        <>
          <div className="device device-phone">
            <span className="device-notch" />
            <span className="device-block is-wide" />
            <span className="device-block" />
            <span className="device-block is-short" />
          </div>
          <div className="device device-card">
            <span className="device-code">{code}</span>
            <span className="device-line" />
            <span className="device-line small" />
          </div>
        </>
      )}

      <div className="pixel-strip" />
    </div>
  );
}

interface Props {
  projects: readonly SliderProject[];
}

/* ─── constants ─────────────────────────────────────────────────────── */
const CARD_WIDTH_VW = 65; // % of viewport taken by active card
const GAP_PX = 24;
const DRAG_FACTOR = 1.18; // how much mouse movement maps to slider movement

/* ─── helpers ───────────────────────────────────────────────────────── */
function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

/* ─────────────────────────────────────────────────────────────────────
   WorkSlider
   ───────────────────────────────────────────────────────────────────── */
export default function WorkSlider({ projects }: Props) {
  const trackRef    = useRef<HTMLDivElement>(null);
  const frameRef    = useRef<number>(0);

  /* current slide index */
  const [active, setActive] = useState(0);
  const [dragging, setDragging] = useState(false);

  /* raw pixel offset (animated via RAF) */
  const offsetRef   = useRef(0);           // current rendered px
  const targetRef   = useRef(0);           // destination px
  const velRef      = useRef(0);           // drag velocity

  /* drag state */
  const isDragging  = useRef(false);
  const dragStart   = useRef({ x: 0, offset: 0, time: 0 });
  const lastX       = useRef(0);
  const lastTime    = useRef(0);

  /* card width in px (recalculated on resize) */
  const cardWidthRef = useRef(0);

  /* ── compute card width ── */
  const measure = useCallback(() => {
    const vw = window.innerWidth;
    // On mobile, use 85% width, on desktop use 65% with a max cap
    const cardWidth = vw < 768 ? vw * 0.85 : Math.min(vw * 0.65, 1070);
    cardWidthRef.current = cardWidth + GAP_PX;
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure, { passive: true });
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  /* ── snap to nearest slide ── */
  const snapTo = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(index, projects.length - 1));
      setActive(clamped);
      targetRef.current = -clamped * cardWidthRef.current;
    },
    [projects.length],
  );

  /* ── animation loop ── */
  useEffect(() => {
    const tick = () => {
      const diff = targetRef.current - offsetRef.current;

      if (Math.abs(diff) < 0.15 && !isDragging.current) {
        offsetRef.current = targetRef.current;
      } else {
        offsetRef.current = lerp(offsetRef.current, targetRef.current, 0.1);
      }

      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(${offsetRef.current}px)`;

        /* update per-card scale + opacity */
        const cards = trackRef.current.children;
        for (let i = 0; i < cards.length; i++) {
          const card = cards[i] as HTMLElement;
          const distCards = Math.abs(offsetRef.current / cardWidthRef.current + i);
          // distCards = 0 means this card is centered
          const dist = Math.min(distCards, 1.5);
          const scale   = lerp(1,    0.88, Math.min(dist, 1));
          const opacity = lerp(1,    0.55, Math.min(dist, 1));
          card.style.transform = `scale(${scale.toFixed(4)})`;
          card.style.opacity   = opacity.toFixed(4);

          /* parallax: shift inner content slightly opposite to offset */
          const inner = card.querySelector(".ws-card-inner") as HTMLElement | null;
          if (inner) {
            const parallax = (i * cardWidthRef.current + offsetRef.current) * 0.06;
            inner.style.transform = `translateX(${parallax.toFixed(2)}px)`;
          }
        }
      }

      frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  /* ─── pointer handlers ─────────────────────────────────────────── */
  const onPointerDown = useCallback((e: ReactPointerEvent<HTMLDivElement>) => {
    isDragging.current = true;
    setDragging(true);
    dragStart.current  = { x: e.clientX, offset: offsetRef.current, time: performance.now() };
    lastX.current      = e.clientX;
    lastTime.current   = performance.now();
    velRef.current     = 0;
    (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
    if (trackRef.current) trackRef.current.style.transition = "none";
  }, []);

  const onPointerMove = useCallback((e: ReactPointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    const now  = performance.now();
    const dt   = Math.max(now - lastTime.current, 1);
    const dx   = e.clientX - lastX.current;

    velRef.current = dx / dt;          // px/ms
    lastX.current  = e.clientX;
    lastTime.current = now;

    const totalDrag = (e.clientX - dragStart.current.x) * DRAG_FACTOR;
    targetRef.current = dragStart.current.offset + totalDrag;
  }, []);

  const onPointerUp = useCallback(() => {
    if (!isDragging.current) return;
    isDragging.current = false;
    setDragging(false);

    /* fling: project forward based on velocity */
    const flingDistance = velRef.current * 120;       // px
    const flingOffset   = targetRef.current + flingDistance;
    const rawIndex      = -flingOffset / cardWidthRef.current;
    const snappedIndex  = Math.round(rawIndex);

    snapTo(snappedIndex);
  }, [snapTo]);

  /* ─── keyboard ─────────────────────────────────────────────────── */
  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowRight") snapTo(active + 1);
      if (e.key === "ArrowLeft")  snapTo(active - 1);
    },
    [active, snapTo],
  );

  /* ─── sync target when active changes via buttons ─────────────── */
  useEffect(() => {
    targetRef.current = -active * cardWidthRef.current;
  }, [active]);

  /* ──────────────────────────────────────────────────────────────── */
  return (
    <div
      className="ws-root"
      tabIndex={0}
      onKeyDown={onKeyDown}
      aria-label="Project slider"
      role="region"
    >
      {/* ── drag track ── */}
      <div
        className="ws-viewport"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        data-dragging={dragging ? "true" : undefined}
      >
        <div className="ws-track" ref={trackRef}>
          {projects.map((project) => (
            <article
              key={project.code}
              className="portfolio-card ws-card"
              style={{ "--card-color": project.color } as CSSProperties}
              aria-label={project.title}
            >
              <div className="ws-card-inner">
                {/* LEFT */}
                <div className="portfolio-card-left">
                  <div className="portfolio-code">{project.code}</div>
                  <div className="portfolio-content-block">
                    <div className="client-text">
                      <p>PROJECT</p>
                      <h3>{project.title}</h3>
                    </div>
                    <div className="work-markers" aria-label={`${project.title} tech`}>
                      {project.tags.map((tag) => (
                        <span className="marker" key={tag}>{tag}</span>
                      ))}
                    </div>
                    <div className="portfolio-footer">
                      <Link
                        className="outline-button"
                        href={project.href}
                        // prevent card drag being intercepted as link click
                        onPointerDown={(e) => e.stopPropagation()}
                      >
                        View work
                      </Link>
                      <span>
                        {projects.indexOf(project) + 1}/{projects.length}
                      </span>
                    </div>
                  </div>
                </div>

                <Link
                  className="portfolio-card-right"
                  href={project.href}
                  onPointerDown={(e) => e.stopPropagation()}
                >
                  <ProjectVisual 
                    code={project.code} 
                    color={project.color} 
                    image={project.image} 
                    video={project.video}
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ── edge arrows ── */}
      <button
        className="ws-arrow ws-arrow-left"
        onClick={() => snapTo(active - 1)}
        disabled={active === 0}
        aria-label="Previous project"
      >
        ←
      </button>

      <button
        className="ws-arrow ws-arrow-right"
        onClick={() => snapTo(active + 1)}
        disabled={active === projects.length - 1}
        aria-label="Next project"
      >
        →
      </button>

      {/* ── nav controls ── */}
      <div className="ws-controls" aria-label="Slider controls">
        <div className="ws-dots" role="tablist">
          {projects.map((p, i) => (
            <button
              key={p.code}
              className={`ws-dot${i === active ? " is-active" : ""}`}
              onClick={() => snapTo(i)}
              role="tab"
              aria-selected={i === active}
              aria-label={p.title}
            />
          ))}
        </div>
      </div>

      {/* ── progress bar ── */}
      <div
        className="ws-progress"
        style={{ "--progress": `${((active + 1) / projects.length) * 100}%` } as CSSProperties}
        aria-hidden="true"
      />
    </div>
  );
}
