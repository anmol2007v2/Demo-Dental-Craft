import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service | SmileCraft Dental Clinic",
  description:
    "Read SmileCraft’s website terms, including booking guidance, cancellations, and medical disclaimers.",
  path: "/terms-of-service",
});

export default function TermsOfServicePage() {
  return (
    <section className="bg-neutral-bg px-4 pb-20 pt-12 md:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <header className="mb-10">
          <h1 className="font-serif text-5xl text-primary md:text-6xl">Terms of Service</h1>
          <p className="mt-4 text-neutral-mid">
            Effective date: {new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </header>

        <div className="space-y-8 rounded-3xl bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-neutral-dark">Use of this website</h2>
            <p className="leading-relaxed text-neutral-mid">
              By accessing or using the SmileCraft Dental Clinic website (“Website”), you agree
              to these Terms of Service (“Terms”). If you do not agree, please do not use the
              Website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-neutral-dark">Appointment booking terms</h2>
            <ul className="list-disc space-y-2 pl-5 text-neutral-mid">
              <li>
                Booking tools on this Website are provided for convenience and do not guarantee
                the availability of a specific clinician or time slot.
              </li>
              <li>
                You are responsible for providing accurate contact information so we can
                confirm or follow up regarding your appointment.
              </li>
              <li>
                If you include health notes, please keep them brief and relevant to the
                appointment request.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-neutral-dark">Cancellation and rescheduling</h2>
            <p className="leading-relaxed text-neutral-mid">
              If you need to reschedule or cancel, please notify us as early as possible so we
              can offer the slot to another patient. Late cancellations may limit our ability
              to accommodate preferred times in the future.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-neutral-dark">Medical disclaimer</h2>
            <p className="leading-relaxed text-neutral-mid">
              The content on this Website is for general informational purposes only and is not
              a substitute for professional dental advice, diagnosis, or treatment. Always seek
              the advice of a qualified dental professional regarding any medical condition.
              If you have a dental emergency, contact a licensed provider immediately.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-neutral-dark">Limitation of liability</h2>
            <p className="leading-relaxed text-neutral-mid">
              To the maximum extent permitted by law, SmileCraft is not liable for any indirect,
              incidental, special, consequential, or punitive damages arising from your access
              to or use of the Website. The Website is provided “as is” without warranties of
              any kind, either express or implied.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-neutral-dark">Changes to these Terms</h2>
            <p className="leading-relaxed text-neutral-mid">
              We may update these Terms from time to time. When we do, we will update the
              effective date at the top of this page.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}

