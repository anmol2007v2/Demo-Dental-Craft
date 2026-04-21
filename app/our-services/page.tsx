import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/components/siteData";

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
        <h1 className="mt-4 font-serif text-5xl text-neutral-dark">Our Services</h1>
        <p className="mt-4 max-w-3xl text-neutral-mid">
          Explore comprehensive dental solutions delivered with modern technology, expert care,
          and personalized treatment plans.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title}>
                <ServiceCard
                  icon={<Icon className="h-6 w-6" />}
                  title={service.title}
                  description={service.description}
                  price={service.price}
                />
                <Link
                  href={`/book-appointment?service=${encodeURIComponent(service.title)}`}
                  className="mt-3 inline-flex items-center text-sm font-semibold text-primary"
                >
                  Book Now <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
