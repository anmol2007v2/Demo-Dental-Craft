import TeamCard from "@/components/TeamCard";
import { doctors } from "@/data/doctors";
import Reveal from "@/components/Reveal";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Meet the Team | SmileCraft Dental Clinic",
  description:
    "Get to know SmileCraft’s dental team in Kathmandu — specialists in cosmetic, orthodontic, pediatric, surgical, endodontic, and implant care.",
  path: "/meet-the-team",
});

export default function MeetTheTeamPage() {
  return (
    <section className="bg-neutral-bg py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal>
          <h1 className="font-serif text-5xl text-neutral-dark">Meet Our Experts</h1>
          <p className="mt-4 max-w-3xl text-neutral-mid">
            Our multidisciplinary team combines advanced training with a warm, patient-centered
            approach to every treatment.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {doctors.map((member, idx) => (
            <Reveal key={member.slug} delayMs={idx * 80}>
              <TeamCard
                name={member.name}
                specialty={member.title}
                bio={member.bio[0]}
                imageUrl={member.avatarUrl}
                imageAlt={`Portrait of ${member.name} (${member.title})`}
                href={`/meet-the-team/${member.slug}`}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
