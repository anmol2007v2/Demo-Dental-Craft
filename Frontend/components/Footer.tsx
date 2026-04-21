import Link from "next/link";
import { MapPin, Share2 } from "lucide-react";

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
                Gallery
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
              <Link className="text-sm text-slate-500 transition-all hover:text-teal-700" href="#">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="text-sm text-slate-500 transition-all hover:text-teal-700" href="#">
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
          <div className="flex gap-4">
            <Link
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-card text-primary transition-all hover:bg-primary hover:text-white"
            >
              <Share2 className="h-4 w-4" />
            </Link>
            <Link
              href="https://maps.google.com/?q=Lazimpat,+Kathmandu,+Nepal"
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
