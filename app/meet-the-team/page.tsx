import TeamCard from "@/components/TeamCard";
import { teamMembers } from "@/components/siteData";

export default function MeetTheTeamPage() {
  return (
    <section className="bg-neutral-bg py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h1 className="font-serif text-5xl text-neutral-dark">Meet Our Experts</h1>
        <p className="mt-4 max-w-3xl text-neutral-mid">
          Our multidisciplinary team combines advanced training with a warm, patient-centered
          approach to every treatment.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}
