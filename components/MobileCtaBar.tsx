"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileCtaBar() {
  const pathname = usePathname();
  if (pathname.startsWith("/book-appointment")) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-neutral-card bg-white/95 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-7xl gap-3 px-4 pb-[env(safe-area-inset-bottom)] pt-3">
        <a
          href="tel:+97714400000"
          className="flex-1 rounded-2xl bg-neutral-section px-4 py-3 text-center font-semibold text-primary transition hover:bg-neutral-card"
        >
          Call Now
        </a>
        <Link
          href="/book-appointment"
          className="flex-1 rounded-2xl bg-primary px-4 py-3 text-center font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-primary-dark"
        >
          Book Appointment
        </Link>
      </div>
    </div>
  );
}

