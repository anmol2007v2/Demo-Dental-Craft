"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function CookieBanner() {
  // IMPORTANT: Keep SSR + first client render identical (avoid hydration mismatch).
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => {
      try {
        const accepted = localStorage.getItem("cookie_consent") === "true";
        setVisible(!accepted);
      } catch {
        setVisible(true);
      }
    }, 0);
    return () => window.clearTimeout(id);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-neutral-card bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 md:flex-row md:items-center md:justify-between md:px-6">
        <p className="text-sm text-neutral-mid">
          We use cookies to improve your experience.
        </p>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => {
              try {
                localStorage.setItem("cookie_consent", "true");
              } finally {
                setVisible(false);
              }
            }}
            className="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-dark"
          >
            Accept
          </button>
          <Link
            href="/privacy-policy"
            className="rounded-xl bg-neutral-section px-4 py-2 text-sm font-semibold text-primary transition hover:bg-neutral-card"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

