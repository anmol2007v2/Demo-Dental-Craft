import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-neutral-bg">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-5 md:px-6 lg:py-20">
        <div className="md:col-span-3">
          <p className="mb-4 inline-flex rounded-full bg-primary-light px-4 py-2 text-sm font-medium text-primary">
            ✦ Trusted by 5000+ patients
          </p>
          <h1 className="font-serif text-4xl leading-tight text-neutral-dark md:text-5xl lg:text-6xl">
            Your Perfect Smile Starts Here
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-mid">
            Experience world-class dental care in a warm, comfortable environment. We combine
            artistry with expertise for results you&apos;ll love.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/book-appointment"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition hover:bg-primary-dark"
            >
              Book Appointment
            </Link>
            <Link
              href="/our-services"
              className="rounded-full border border-primary px-6 py-3 text-sm font-medium text-primary transition hover:bg-primary-light/40"
            >
              Our Services
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-3 text-sm text-neutral-mid sm:grid-cols-3">
            <p>
              <span className="block text-xl font-semibold text-neutral-dark">5000+</span> Patients
            </p>
            <p>
              <span className="block text-xl font-semibold text-neutral-dark">15+</span> Years
              Experience
            </p>
            <p>
              <span className="block text-xl font-semibold text-neutral-dark">4.9★</span> Rating
            </p>
          </div>
        </div>

        <div className="relative md:col-span-2">
          <div className="overflow-hidden rounded-3xl bg-white shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
            <Image
              src="/images/whole.png"
              alt="Dentist and patient consultation"
              width={600}
              height={700}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 left-4 rounded-2xl bg-white px-4 py-3 shadow-[0_4px_24px_rgba(0,0,0,0.12)]">
            <p className="text-xs text-neutral-muted">Next Available:</p>
            <p className="mt-1 text-sm font-semibold text-neutral-dark">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-500" />
              Today 2:00 PM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
