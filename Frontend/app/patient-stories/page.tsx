import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Play, Star } from "lucide-react";

const wallOfLoveReviews = [
  {
    initials: "AP",
    name: "Anish Poudel",
    location: "Kathmandu, Nepal",
    quote:
      "Best dental experience in Nepal. The clinic is spotless and modern, and the team explained everything clearly.",
  },
  {
    initials: "JM",
    name: "James Miller",
    location: "London, UK",
    quote:
      "I needed an emergency crown while trekking. They squeezed me in and the precision of the fit was incredible.",
  },
  {
    initials: "SG",
    name: "Sushma Gurung",
    location: "Pokhara, Nepal",
    quote:
      "I finally got my braces off today. The orthodontic team is so patient and supportive.",
  },
  {
    initials: "LB",
    name: "Lukas Berg",
    location: "Berlin, Germany",
    quote:
      "Excellent whitening results and a calm atmosphere that helped with my dental anxiety.",
  },
  {
    initials: "RK",
    name: "Rohan Karki",
    location: "Lalitpur, Nepal",
    quote:
      "Aftercare was fantastic. They called me after treatment to check on my recovery.",
  },
];

export default function PatientStoriesPage() {
  return (
    <section className="bg-neutral-bg px-4 pb-20 pt-12 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-16 text-center">
          <h1 className="font-serif text-5xl text-primary md:text-7xl">
            Real Smiles, <br />
            <span className="italic">Real Stories.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-neutral-mid">
            At Smile Craft, we restore confidence through compassionate and precise dental care.
            Hear from our global family of patients.
          </p>

          <div className="mx-auto mt-10 inline-flex items-center gap-4 rounded-2xl border border-neutral-card bg-white p-4 shadow-[0_20px_40px_rgba(0,81,85,0.06)]">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGCJpT5xCtBl244sI1Cy6E0G5elaa8TPYjlbCu7rWmT-mgTddUq9fqxDPoOEOHeJPONX8RvGMmOCPGrZWIf3604l91a1A3XiyLeVhzCKAgidycsXQp31JlzUxYwHiECgxMtcF1CuI6HT16Vx0iU8E1u3aUXQQaazUKI4QCTT-Yjm1DAi9IYi5EroqdfMpbVW2SLBxXZw3JIKZOeqFARYbJabkbP3wq3s1_H21dl9DiGb63TS14d6YbGmbQHUdYgQqWkryu8cLqFjI"
              alt="Google logo"
              width={24}
              height={24}
            />
            <div className="flex text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={`badge-star-${i}`} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <div className="h-8 w-px bg-neutral-card" />
            <div className="text-left">
              <p className="font-bold text-neutral-dark">4.9 / 5.0 Rating</p>
              <p className="text-xs text-neutral-mid">Based on 840+ verified reviews</p>
            </div>
          </div>
        </header>

        <section className="mb-24">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-mid">
                In-Depth Journeys
              </p>
              <h2 className="mt-2 font-serif text-4xl text-neutral-dark">Patient Stories</h2>
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                className="rounded-full bg-neutral-section p-3 text-primary transition hover:bg-primary hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                className="rounded-full bg-neutral-section p-3 text-primary transition hover:bg-primary hover:text-white"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <StoryCard
              title="Ram Chandra's Journey to Confidence"
              quote="I was terrified of dentists until I walked into Smile Craft. They treated me like family and the results are life-changing."
              imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDvjTuobMZLMOjnbl8yha78GF9wjjnsLqbrpr06pyw6bFU-QgWBuEysKrUigPjvBW1fnVqmHUPEvseBQ20SujGV-Rosx_3WiE8LlP253xgfAh2RNHGA4C5h53FSGsNP5qdSEf3BP-q6Q6PwojblLvIYhlYVDl-q_8Fk2fJrHyTDSC1wCkWRcL-7gsfpZd3qc2wJER6u14QKIInNC-Cxnz2l0H7cSNPVauswYfsrmUcKfuDYkXveEbmpu9UdrM_G7ecIfgJmCyZvhjQ"
              reverse={false}
            />
            <StoryCard
              title="Sarah's Smile Vacation"
              quote="I flew from Sydney for Dr. Pathak's expertise. The technology and care here were better than what I had seen back home."
              imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuA7jm54IEWTKbpYNQWl--2SHjyTQf6XmlKogJrvWTdiU9z0xn08JxSJrqwVpdKcudmfOcn26EiEy6juF4jKQxBhHMbjdh972MhEz_TvzUTO94LQWaIp-QEhOm7JLUVfCiU9Ue14chQzES4XMO3CM1QG4LFhaupLenNLtmZAPIaS9UrZ3U7rVnPLfgs_FpNiReLWdcB7-ub85pzDG26I8Ff9JB1TUH_kUnByRnMgXs_jar-ElACvo4W0SW99UQhqyRPNUGUx4U95R8w"
              reverse
            />
          </div>
        </section>

        <section>
          <div className="mb-14 text-center">
            <h2 className="font-serif text-4xl text-neutral-dark">The Wall of Love</h2>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-primary-light" />
          </div>

          <div className="columns-1 gap-6 space-y-6 md:columns-2 lg:columns-3">
            {wallOfLoveReviews.map((review) => (
              <article
                key={review.name}
                className="break-inside-avoid rounded-3xl border-l-4 border-primary-mid bg-white p-7 shadow-[0_20px_40px_rgba(0,81,85,0.06)]"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-neutral-section font-bold text-primary">
                    {review.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-dark">{review.name}</p>
                    <p className="text-xs text-neutral-mid">{review.location}</p>
                  </div>
                </div>
                <p className="leading-relaxed text-neutral-mid">{review.quote}</p>
                <div className="mt-5 flex text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={`${review.name}-${i}`} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="relative mt-20 overflow-hidden rounded-[2.5rem] bg-primary p-12 text-center text-white md:p-16">
            <h3 className="font-serif text-4xl md:text-5xl">Ready for your own story?</h3>
            <p className="mx-auto mb-10 mt-4 max-w-2xl text-lg text-primary-light">
              Join the hundreds of happy patients who trust Smile Craft for their dental care.
            </p>
            <Link
              href="/book-appointment"
              className="rounded-xl bg-white px-10 py-4 text-lg font-bold text-primary transition hover:bg-primary-light"
            >
              Book Your Consultation
            </Link>
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10" />
            <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-white/10" />
          </div>
        </section>
      </div>
    </section>
  );
}

function StoryCard({
  title,
  quote,
  imageUrl,
  reverse,
}: {
  title: string;
  quote: string;
  imageUrl: string;
  reverse?: boolean;
}) {
  return (
    <article
      className={`group overflow-hidden rounded-[2rem] bg-neutral-section ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } flex flex-col`}
    >
      <div className="relative h-64 w-full md:h-auto md:w-1/2">
        <Image src={imageUrl} alt={title} fill className="object-cover transition duration-700 group-hover:scale-105" />
      </div>
      <div className="flex w-full flex-col justify-center p-8 md:w-1/2">
        <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/70 text-primary">
          <Play className="h-5 w-5 fill-current" />
        </span>
        <h3 className="font-serif text-2xl text-neutral-dark">{title}</h3>
        <p className="mb-6 mt-4 text-sm italic leading-relaxed text-neutral-mid">&quot;{quote}&quot;</p>
        <Link href="#" className="inline-flex items-center gap-2 font-semibold text-primary transition hover:gap-3">
          Watch Story <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
