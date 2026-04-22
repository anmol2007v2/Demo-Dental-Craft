"use client";

import { useEffect, useRef, useState } from "react";

function prefersReducedMotion() {
  if (typeof window === "undefined") return true;
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
}

export function useInView<T extends HTMLElement>({
  rootMargin = "0px 0px -10% 0px",
  threshold = 0.15,
  once = true,
}: {
  rootMargin?: string;
  threshold?: number;
  once?: boolean;
} = {}) {
  const ref = useRef<T | null>(null);
  // IMPORTANT: Keep SSR + first client render identical (avoid hydration mismatch).
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) {
      const id = window.setTimeout(() => setInView(true), 0);
      return () => window.clearTimeout(id);
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { rootMargin, threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, threshold, once]);

  return { ref, inView };
}

