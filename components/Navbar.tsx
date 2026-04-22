"use client";

import Link from "next/link";
import { Menu, Smile, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { primaryButtonClass } from "@/lib/ui";

const links = [
  { href: "/", label: "Home" },
  { href: "/our-services", label: "Our Services" },
  { href: "/meet-the-team", label: "Meet the Team" },
  { href: "/patient-stories", label: "Patient Stories" },
  { href: "/contact-us", label: "Contact Us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const panelRef = useRef<HTMLDivElement | null>(null);

  const isActive = (href: string) => (href === "/" ? pathname === href : pathname.startsWith(href));

  useEffect(() => {
    const id = window.setTimeout(() => setOpen(false), 0);
    return () => window.clearTimeout(id);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node | null;
      if (!target) return;
      if (panelRef.current?.contains(target)) return;
      setOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-[#EDEEEF] bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="rounded-xl bg-primary-light p-2 text-primary">
            <Smile className="h-5 w-5" />
          </span>
          <span className="font-serif text-2xl text-primary">SmileCraft</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition hover:text-primary ${
                isActive(link.href) ? "font-semibold text-primary underline underline-offset-4" : "text-neutral-mid"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/book-appointment"
            className={`rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-white transition hover:bg-primary-dark ${primaryButtonClass}`}
          >
            Book Appointment
          </Link>
        </nav>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="rounded-xl border border-neutral-card p-2 text-primary md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="mobile-nav-panel"
        >
          <span className="relative block h-5 w-5">
            <motion.span
              aria-hidden="true"
              className="absolute inset-0"
              animate={open ? { opacity: 0, rotate: 90 } : { opacity: 1, rotate: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.18, ease: "easeOut" }}
            >
              <Menu className="h-5 w-5" />
            </motion.span>
            <motion.span
              aria-hidden="true"
              className="absolute inset-0"
              animate={open ? { opacity: 1, rotate: 0 } : { opacity: 0, rotate: -90 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.18, ease: "easeOut" }}
            >
              <X className="h-5 w-5" />
            </motion.span>
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/30 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.18 }}
              aria-hidden="true"
              onClick={() => setOpen(false)}
            />
            <motion.div
              id="mobile-nav-panel"
              ref={panelRef}
              className="absolute left-0 right-0 z-50 border-t border-[#EDEEEF] bg-white px-4 py-4 md:hidden"
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
              animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.18, ease: "easeOut" }}
            >
              <div className="flex flex-col gap-3">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-xl px-3 py-2 text-sm ${
                      isActive(link.href)
                        ? "bg-primary-light font-semibold text-primary"
                        : "text-neutral-mid"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/book-appointment"
                  onClick={() => setOpen(false)}
                  className={`rounded-full bg-primary px-6 py-3 text-center text-sm font-medium text-white ${primaryButtonClass}`}
                >
                  Book Appointment
                </Link>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
