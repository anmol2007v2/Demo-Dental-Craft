"use client";

import Link from "next/link";
import { Menu, Smile, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

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

  const isActive = (href: string) => (href === "/" ? pathname === href : pathname.startsWith(href));

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
            className="rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-white transition hover:bg-primary-dark"
          >
            Book Appointment
          </Link>
        </nav>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="rounded-xl border border-neutral-card p-2 text-primary md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-[#EDEEEF] bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-3 py-2 text-sm ${
                  isActive(link.href) ? "bg-primary-light font-semibold text-primary" : "text-neutral-mid"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/book-appointment"
              onClick={() => setOpen(false)}
              className="rounded-full bg-primary px-6 py-3 text-center text-sm font-medium text-white"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
