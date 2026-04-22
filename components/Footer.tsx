import Link from "next/link";
import { MapPin } from "lucide-react";

function IconButton({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-card text-primary transition-all hover:bg-primary hover:text-white"
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="mt-20 w-full bg-slate-50 py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-8 md:grid-cols-4">
        <div className="col-span-1 md:col-span-1">
          <div className="mb-6 font-serif text-xl font-semibold text-teal-900">
            Smile Craft
          </div>
          <p className="text-sm leading-relaxed text-slate-500">
            Defining the future of clinical serenity and artistic dental care in Kathmandu.
          </p>
        </div>

        <div>
          <h5 className="mb-6 text-sm font-bold uppercase tracking-widest text-primary">
            Clinic
          </h5>
          <ul className="space-y-4">
            <li>
              <Link className="text-sm text-slate-500 transition-all hover:text-teal-700" href="/our-services">
                Treatments
              </Link>
            </li>
            <li>
              <Link className="text-sm text-slate-500 transition-all hover:text-teal-700" href="/meet-the-team">
                Our Team
              </Link>
            </li>
            <li>
              <Link className="text-sm text-slate-500 transition-all hover:text-teal-700" href="/patient-stories">
                Patient Stories
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="mb-6 text-sm font-bold uppercase tracking-widest text-primary">
            Support
          </h5>
          <ul className="space-y-4">
            <li>
              <Link
                className="text-sm text-slate-500 transition-all hover:text-teal-700"
                href="/privacy-policy"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                className="text-sm text-slate-500 transition-all hover:text-teal-700"
                href="/terms-of-service"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="mb-6 text-sm font-bold uppercase tracking-widest text-primary">
            Connect
          </h5>
          <p className="mb-4 text-sm text-slate-500">info@smilecraft.com.np</p>
          <div className="flex flex-wrap items-center gap-3">
            <IconButton href="#" label="SmileCraft Instagram">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
                <path
                  d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M17.5 6.5h.01"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </IconButton>
            <IconButton href="#" label="SmileCraft Facebook">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
                <path
                  d="M14 8h2V5h-2c-2.2 0-4 1.8-4 4v3H8v3h2v7h3v-7h2.2l.8-3H13V9c0-.6.4-1 1-1Z"
                  fill="currentColor"
                />
              </svg>
            </IconButton>
            <IconButton href="#" label="SmileCraft YouTube">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
                <path
                  d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.7 4.6 12 4.6 12 4.6s-5.7 0-7.5.5A3 3 0 0 0 2.4 7.2 31.6 31.6 0 0 0 2 12c0 1.6.1 3.2.4 4.8a3 3 0 0 0 2.1 2.1c1.8.5 7.5.5 7.5.5s5.7 0 7.5-.5a3 3 0 0 0 2.1-2.1c.3-1.6.4-3.2.4-4.8 0-1.6-.1-3.2-.4-4.8Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path d="M10 9.5v5l5-2.5-5-2.5Z" fill="currentColor" />
              </svg>
            </IconButton>
            <Link
              href="https://maps.google.com/?q=Lazimpat,+Kathmandu,+Nepal"
              aria-label="Open SmileCraft on Google Maps"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-card text-primary transition-all hover:bg-primary hover:text-white"
            >
              <MapPin className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-20 max-w-7xl border-t border-slate-200 px-8 pt-8">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Smile Craft Dental Clinic. Kathmandu, Nepal.
        </p>
      </div>
    </footer>
  );
}
