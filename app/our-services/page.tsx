import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";
import Reveal from "@/components/Reveal";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Our Services | SmileCraft Dental Clinic",
  description:
    "Explore SmileCraft dental treatments including checkups, cosmetic dentistry, orthodontics, implants, and more.",
  path: "/our-services",
});

export default function OurServicesPage() {
  return (
    <section className="bg-neutral-bg py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <p className="text-sm text-neutral-muted">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>{" "}
          / Our Services
        </p>
        <Reveal>
          <h1 className="mt-4 font-serif text-5xl text-neutral-dark">Our Services</h1>
          <p className="mt-4 max-w-3xl text-neutral-mid">
            Explore comprehensive dental solutions delivered with modern technology, expert care,
            and personalized treatment plans.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.slug} delayMs={idx * 80}>
                <ServiceCard
                  icon={<Icon className="h-6 w-6" />}
                  title={service.name}
                  description={service.description}
                  price={service.priceLabel}
                  href={`/our-services/${service.slug}`}
                />
                <Link
                  href={`/book-appointment?service=${encodeURIComponent(service.slug)}`}
                  className="mt-3 inline-flex items-center text-sm font-semibold text-primary"
                >
                  Book Now <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
