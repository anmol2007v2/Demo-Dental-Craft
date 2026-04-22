import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ServiceFaqAccordion from "@/components/ServiceFaqAccordion";
import { services } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) {
    return { title: "Service Not Found | SmileCraft" };
  }
  return buildMetadata({
    title: `${service.name} | SmileCraft Dental Clinic`,
    description: service.description,
    path: `/our-services/${service.slug}`,
  });
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  return (
    <section className="bg-neutral-bg px-4 pb-20 pt-12 md:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm text-neutral-muted">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>{" "}
          /{" "}
          <Link href="/our-services" className="hover:text-primary">
            Our Services
          </Link>{" "}
          / {service.name}
        </p>

        <header className="mt-6 rounded-[2.5rem] bg-white p-10 shadow-[0_4px_24px_rgba(0,0,0,0.08)] md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-mid">
            Procedure Overview
          </p>
          <h1 className="mt-3 font-serif text-5xl text-neutral-dark md:text-6xl">{service.name}</h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-neutral-mid">
            {service.description}
          </p>

          <div className="mt-8 grid gap-4 rounded-3xl bg-neutral-section p-6 md:grid-cols-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-muted">
                Duration
              </p>
              <p className="mt-1 font-semibold text-neutral-dark">{service.duration}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-muted">
                Recovery
              </p>
              <p className="mt-1 font-semibold text-neutral-dark">{service.recovery}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-muted">
                Starting price
              </p>
              <p className="mt-1 font-semibold text-primary">{service.priceLabel}</p>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href={`/book-appointment?service=${encodeURIComponent(service.slug)}`}
              className="inline-flex items-center justify-center rounded-2xl bg-primary px-10 py-4 text-base font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-primary-dark"
            >
              Book This Treatment
            </Link>
          </div>
        </header>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <section className="rounded-3xl bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
            <h2 className="font-serif text-3xl text-neutral-dark">What to expect</h2>
            <div className="mt-6 space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                  Before
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-neutral-mid">
                  {service.whatToExpect.before.map((item: string) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                  During
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-neutral-mid">
                  {service.whatToExpect.during.map((item: string) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                  After
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-neutral-mid">
                  {service.whatToExpect.after.map((item: string) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-3xl text-neutral-dark">FAQ</h2>
            <ServiceFaqAccordion items={service.faqs} />
          </section>
        </div>
      </div>
    </section>
  );
}

