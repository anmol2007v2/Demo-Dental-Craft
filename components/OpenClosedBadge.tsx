"use client";

import { useEffect, useState } from "react";

const NPT_OFFSET_MINUTES = 5 * 60 + 45;

function getNepalNow() {
  const now = new Date();
  const utcMs = now.getTime() + now.getTimezoneOffset() * 60_000;
  return new Date(utcMs + NPT_OFFSET_MINUTES * 60_000);
}

function isOpenInNepalTime(npt: Date) {
  const day = npt.getDay(); // 0 Sun ... 6 Sat
  const minutes = npt.getHours() * 60 + npt.getMinutes();

  if (day === 0) return false;
  if (day >= 1 && day <= 5) return minutes >= 8 * 60 && minutes < 18 * 60;
  if (day === 6) return minutes >= 9 * 60 && minutes < 15 * 60;
  return false;
}

export default function OpenClosedBadge() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const tick = () => setNow(getNepalNow());
    tick();
    const id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(id);
  }, []);

  const open = now ? isOpenInNepalTime(now) : false;

  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-neutral-dark">
      <span
        className={`h-2 w-2 rounded-full ${open ? "bg-emerald-500" : "bg-slate-400"}`}
        aria-hidden="true"
      />
      {open ? "Open Now" : "Closed"}
    </span>
  );
}

