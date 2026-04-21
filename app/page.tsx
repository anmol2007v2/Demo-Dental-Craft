import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-neutral-bg">
      <section className="relative overflow-hidden px-4 pb-24 pt-16 md:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <span className="mb-6 inline-block rounded-full bg-primary-light px-4 py-1.5 text-sm font-semibold text-primary">
              ESTABLISHED 2024
            </span>
            <h1 className="font-serif text-5xl leading-[0.95] text-primary md:text-7xl">
              Crafting <br />
              <span className="italic text-primary-mid">Confident</span> Smiles
            </h1>
            <p className="mb-10 mt-6 max-w-xl text-lg leading-relaxed text-neutral-mid">
              Experience a new standard of dental care where modern technology meets
              personalized comfort and long-term oral health.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/book-appointment"
                className="rounded-2xl bg-primary px-10 py-4 text-center text-base font-semibold text-white shadow-lg shadow-primary/20 transition hover:opacity-90"
              >
                Book Appointment
              </Link>
              <Link
                href="/our-services"
                className="rounded-2xl px-10 py-4 text-center text-base font-semibold text-primary transition hover:bg-neutral-section"
              >
                View Treatments
              </Link>
            </div>
          </div>
          <div className="relative lg:col-span-6">
            <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-2xl">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQwIt_gxsorWCfz9fSbeAa-Z4F40fJPdrHOEUdLds_utEXEyyMPxGtdgAq54XZUmmXP4mnPE-jXc4tNMXp7gG9GXnkKHd8XlzY0oKUtICVOZ__P3MLXucZ1EHaj4yiYbH_aBgZhVuXaDyai2G45wbdOn8mNT4Q9-rG-BWMJZQNdSeVuXxx4d1T2AyTp4E14mT2lNjHZzl-DvPHfS8rcJc_n3b4FEtBffHHMHBZ_KTB5IlckvGgRqWRItFW_nCPY122AN0rRgw1Ro0"
                alt="Modern dental clinic interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -left-2 max-w-xs rounded-2xl border border-primary-light bg-white p-5 shadow-xl md:-left-8 md:p-8">
              <div className="mb-2 flex gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="font-serif text-2xl font-bold text-primary">5.0 Rating</p>
              <p className="mt-1 text-sm italic text-neutral-mid">
                &quot;The most comfortable dental visit I&apos;ve ever had.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-neutral-section py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="font-serif text-4xl text-primary md:text-5xl">
                Trusted by the community
              </h2>
              <p className="mt-3 text-neutral-mid">
                Read why our patients love the Smile Craft experience.
              </p>
            </div>
            <div className="flex rounded-2xl bg-white p-5 shadow-sm">
              <div className="border-r border-neutral-card px-5 text-center">
                <p className="font-serif text-3xl font-bold text-primary">5.0</p>
                <p className="text-xs uppercase tracking-widest text-neutral-muted">Overall</p>
              </div>
              <div className="px-5 text-center">
                <p className="font-serif text-3xl font-bold text-primary">26</p>
                <p className="text-xs uppercase tracking-widest text-neutral-muted">Reviews</p>
              </div>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              "The team made me feel completely at ease. Results were incredible.",
              "Modern care and a calm environment. Best dental cleaning I have had.",
              "They explained everything clearly and made the procedure painless.",
            ].map((quote, index) => (
              <article key={quote} className="rounded-3xl bg-white p-8 shadow-sm">
                <div className="mb-4 flex gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={`${index}-${starIndex}`} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mb-6 leading-relaxed text-neutral-mid italic">&quot;{quote}&quot;</p>
                <p className="font-semibold text-neutral-dark">Verified Patient</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-14 text-center">
            <h2 className="font-serif text-4xl text-primary md:text-5xl">Comprehensive Care</h2>
            <p className="mx-auto mt-3 max-w-2xl text-neutral-mid">
              A full suite of modern dental services focused on comfort and lasting outcomes.
            </p>
          </div>
          <div className="grid auto-rows-[240px] gap-6 md:grid-cols-12">
            <article className="group relative overflow-hidden rounded-3xl bg-primary md:col-span-8">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3U56Ia9WtP9RmLhcAtePFahsjo2fFAg2nM7ttkEDm5V-wevWACI0kbeBwUazsXep7Bdi449qGy9hjPuh8iP4eEQPMRlWX3RjliwQcJYTDNJQuD87Rm47eGeWMmalgmQitio5Ws6gBVyP7GkWkPXEU79HHTdheOv9OvGvds0zzn8JR7dqgNRGpLwonVaq7HNf-oS_pn8y9XhZu4Xq3NhZ3Cnx3iOw2L35JRk_haU5O4mBRkQWvc1uTxjTJQj7Vp4eg1gEQAEQPL68"
                alt="Teeth whitening treatment"
                fill
                className="object-cover opacity-70 transition duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-6 left-6 z-10 text-white">
                <h3 className="font-serif text-3xl">Teeth Whitening</h3>
                <p className="mt-1 max-w-md text-sm text-white/85">
                  Professional brightening for a naturally radiant smile.
                </p>
              </div>
            </article>
            <article className="flex flex-col justify-between rounded-3xl bg-primary-light p-6 md:col-span-4">
              <Sparkles className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-serif text-2xl text-primary">Routine Cleaning</h3>
                <p className="mt-2 text-sm text-neutral-mid">
                  Pain-free preventive care for long-term oral health.
                </p>
              </div>
            </article>
            <article className="flex flex-col justify-between rounded-3xl bg-neutral-card p-6 md:col-span-4">
              <ShieldCheck className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-serif text-2xl text-primary">Root Canal</h3>
                <p className="mt-2 text-sm text-neutral-mid">
                  Precision endodontic care focused on saving natural teeth.
                </p>
              </div>
            </article>
            <article className="group relative overflow-hidden rounded-3xl bg-neutral-dark md:col-span-8">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtQrH2jyA3gGgebeGdwhxq_uc2-dX3NmBiX-IRZ1R8X_DaXNskkoqZEqzGs8CbpAxlLfak2c_AGPnxkGhs5HPbDvnnuoE8v0rjqAKE_GWzrtTET0eZHlJfdInClAhwnhHSvORqcioU0dT4fMPtdvCYaNTTX6sIT21-X4kyKOHQ4cPjzAI9M64Vye0k_CAVSLhFp__y64p2_Sts9r4bnxfwj_o8nWKq67Y0wEezegH0I7meL6kpuWgvrjqTnbqFmTwYLnqoF5Mz_mE"
                alt="Invisalign aligners"
                fill
                className="object-cover opacity-60 transition duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-6 left-6 z-10 text-white">
                <h3 className="font-serif text-3xl">Braces and Invisalign</h3>
                <p className="mt-1 max-w-md text-sm text-white/85">
                  Discreet modern orthodontics for alignment and confidence.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="px-4 py-20 md:px-6">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-gradient-to-br from-primary to-primary-mid p-10 text-center text-white md:p-16">
          <h2 className="font-serif text-4xl md:text-6xl">Ready for your new smile?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/85">
            Book your consultation today and take the first step toward a healthier, more
            confident smile.
          </p>
          <Link
            href="/book-appointment"
            className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-semibold text-primary transition hover:opacity-90"
          >
            Book Your Consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
