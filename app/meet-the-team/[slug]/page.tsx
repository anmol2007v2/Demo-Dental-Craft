import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { doctors } from "@/data/doctors";
import { buildMetadata } from "@/lib/seo";

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const doctor = doctors.find((d) => d.slug === params.slug);
  if (!doctor) return { title: "Doctor Not Found | SmileCraft" };
  return buildMetadata({
    title: `${doctor.name} | SmileCraft Dental Clinic`,
    description: doctor.bio[0],
    path: `/meet-the-team/${doctor.slug}`,
  });
}

export default function DoctorProfilePage({ params }: { params: { slug: string } }) {
  const doctor = doctors.find((d) => d.slug === params.slug);
  if (!doctor) notFound();

  return (
    <section className="bg-neutral-bg px-4 pb-20 pt-12 md:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm text-neutral-muted">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>{" "}
          /{" "}
          <Link href="/meet-the-team" className="hover:text-primary">
            Meet the Team
          </Link>{" "}
          / {doctor.name}
        </p>

        <div className="mt-6 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="rounded-[2.5rem] bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
              <Image
                src={doctor.avatarUrl}
                alt={`Portrait of ${doctor.name} (${doctor.title})`}
                width={256}
                height={256}
                className="h-44 w-44 rounded-full object-cover"
              />
              <h1 className="mt-6 font-serif text-4xl text-neutral-dark">{doctor.name}</h1>
              <p className="mt-2 font-semibold text-primary">{doctor.title}</p>
              <p className="mt-4 text-sm text-neutral-mid">
                {doctor.yearsExperience}+ years experience
              </p>

              <Link
                href="/book-appointment"
                className="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-primary px-8 py-3 font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-primary-dark"
              >
                Book with {doctor.name.split(" ")[1] ?? "Doctor"}
              </Link>
            </div>
          </div>

          <div className="space-y-8 lg:col-span-8">
            <section className="rounded-3xl bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
              <h2 className="font-serif text-3xl text-neutral-dark">About</h2>
              <div className="mt-4 space-y-4 text-neutral-mid">
                {doctor.bio.map((p: string) => (
                  <p key={p} className="leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </section>

            <section className="grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
                <h3 className="font-serif text-2xl text-neutral-dark">Specialties</h3>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-mid">
                  {doctor.specialties.map((s: string) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
                <h3 className="font-serif text-2xl text-neutral-dark">Education</h3>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-mid">
                  {doctor.education.map((e: string) => (
                    <li key={e}>{e}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.08)] md:col-span-2">
                <h3 className="font-serif text-2xl text-neutral-dark">Certifications</h3>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-mid">
                  {doctor.certifications.map((c: string) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

