"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export default function HeroAvatar() {
  const avatarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    let blinkTimeout = 0;
    let lastBlink = 0;
    let lastMove = {
      time: performance.now(),
      x: 0,
      y: 0,
    };

    const setLook = (x: number, y: number) => {
      const avatar = avatarRef.current;

      if (!avatar) {
        return;
      }

      avatar.style.setProperty("--look-x", x.toFixed(3));
      avatar.style.setProperty("--look-y", y.toFixed(3));
    };

    const blink = () => {
      const avatar = avatarRef.current;
      const now = performance.now();

      if (!avatar || now - lastBlink < 900) {
        return;
      }

      lastBlink = now;
      avatar.classList.add("is-blinking");
      window.clearTimeout(blinkTimeout);
      blinkTimeout = window.setTimeout(() => {
        avatar.classList.remove("is-blinking");
      }, 170);
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (frame) {
        cancelAnimationFrame(frame);
      }

      frame = requestAnimationFrame(() => {
        const avatar = avatarRef.current;

        if (!avatar) {
          return;
        }

        const rect = avatar.getBoundingClientRect();
        const centerX = rect.left + rect.width * 0.57;
        const centerY = rect.top + rect.height * 0.39;
        const x = clamp(((event.clientX - centerX) / (rect.width * 0.38)) * 1.2, -1, 1);
        const y = clamp(((event.clientY - centerY) / (rect.height * 0.3)) * 0.8, -1, 1);
        const now = performance.now();
        const elapsed = Math.max(now - lastMove.time, 16);
        const movement = Math.hypot(event.clientX - lastMove.x, event.clientY - lastMove.y);

        if (movement / elapsed > 1.35) {
          blink();
        }

        lastMove = {
          time: now,
          x: event.clientX,
          y: event.clientY,
        };

        setLook(x, y);
      });
    };

    const handlePointerLeave = () => setLook(0, 0);

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("blur", handlePointerLeave);

    return () => {
      if (frame) {
        cancelAnimationFrame(frame);
      }

      window.clearTimeout(blinkTimeout);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("blur", handlePointerLeave);
    };
  }, []);

  return (
    <div className="hero-avatar" ref={avatarRef} aria-hidden="true">
      <Image
        className="hero-avatar-image"
        src="/avatar.png"
        alt=""
        width={1086}
        height={1012}
        priority
        sizes="(max-width: 768px) 112vw, (max-width: 1024px) 86vw, 58vw"
      />
      <span className="avatar-eye avatar-eye-left">
        <span className="avatar-pupil" />
      </span>
      <span className="avatar-eye avatar-eye-right">
        <span className="avatar-pupil" />
      </span>
    </div>
  );
}
