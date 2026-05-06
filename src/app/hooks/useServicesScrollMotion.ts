/**
 * useServicesScrollMotion
 *
 * Observes the services section and sets `data-cards-revealed="true"` on the
 * cards container the first time the section enters the viewport while the user
 * is scrolling **downward** (Work → Services direction).
 *
 * The attribute is the single source-of-truth that the CSS transitions react to.
 * Once revealed (`once: true` behaviour), re-entering from below does nothing,
 * preserving a clean one-shot reveal per page load.
 *
 * All animation logic lives in CSS; this hook only toggles the flag.
 */

"use client";

import { useEffect, useRef } from "react";

/**
 * @param sectionRef  - ref attached to the `<section>` element (trigger target)
 * @param cardsRef    - ref attached to `.service-cards` wrapper (receives the flag)
 * @param threshold   - fraction of section visible before triggering (default 0.15)
 */
export function useServicesScrollMotion(
  sectionRef: React.RefObject<HTMLElement | null>,
  cardsRef: React.RefObject<HTMLElement | null>,
  threshold = 0.15,
): void {
  /** Track scroll position so we can gate on downward scroll only */
  const prevScrollY = useRef<number>(
    typeof window !== "undefined" ? window.scrollY : 0,
  );
  /** Whether the reveal has already fired — prevents replaying on jitter */
  const revealedRef = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;
    if (!section || !cards) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        // Only act on downward scroll
        const currentScrollY = window.scrollY;
        const isScrollingDown = currentScrollY >= prevScrollY.current;
        prevScrollY.current = currentScrollY;

        if (entry.isIntersecting && isScrollingDown && !revealedRef.current) {
          revealedRef.current = true;
          cards.dataset.cardsRevealed = "true";
        }
      },
      {
        // top 75% of viewport = trigger start; threshold keeps it snappy
        rootMargin: "-5% 0px -20% 0px",
        threshold,
      },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [sectionRef, cardsRef, threshold]);
}
