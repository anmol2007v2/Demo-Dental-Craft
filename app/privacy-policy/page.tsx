import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy | SmileCraft Dental Clinic",
  description:
    "Learn how SmileCraft collects, uses, and protects your personal information when you browse our site or book an appointment.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-neutral-bg px-4 pb-20 pt-12 md:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <header className="mb-10">
          <h1 className="font-serif text-5xl text-primary md:text-6xl">Privacy Policy</h1>
          <p className="mt-4 text-neutral-mid">
            Effective date: {new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </header>

        <div className="space-y-8 rounded-3xl bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-neutral-dark">Overview</h2>
            <p className="leading-relaxed text-neutral-mid">
              SmileCraft Dental Clinic (“SmileCraft”, “we”, “us”) respects your privacy. This
              policy explains what information we collect on this website, how we use it, and
              the choices you have.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-neutral-dark">Information we collect</h2>
            <p className="leading-relaxed text-neutral-mid">
              When you use our contact and booking experiences, we may collect the following
              information that you enter into the forms:
            </p>
            <ul className="list-disc space-y-2 pl-5 text-neutral-mid">
              <li>Full name</li>
              <li>Phone number</li>
              <li>Email address (optional unless required for your request)</li>
              <li>Appointment preferences (treatment selection, date, time)</li>
              <li>Health-related notes you choose to share (e.g. symptoms, concerns)</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-neutral-dark">How we use your information</h2>
            <ul className="list-disc space-y-2 pl-5 text-neutral-mid">
              <li>To coordinate appointment requests and respond to messages</li>
              <li>To provide you with relevant dental service information</li>
              <li>To improve the usability and performance of the website</li>
              <li>To help prevent fraud, abuse, or misuse of our website</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-neutral-dark">Cookies and similar technologies</h2>
            <p className="leading-relaxed text-neutral-mid">
              We may use cookies or similar local storage technologies to remember your
              preferences (such as cookie consent) and improve your experience. You can control
              cookies through your browser settings. Disabling cookies may affect some site
              features.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-neutral-dark">Your rights and choices</h2>
            <p className="leading-relaxed text-neutral-mid">
              Depending on your location and applicable laws, you may have the right to:
            </p>
            <ul className="list-disc space-y-2 pl-5 text-neutral-mid">
              <li>Request access to the personal information you provided to us</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information (where applicable)</li>
              <li>Withdraw consent for optional communications</li>
            </ul>
            <p className="leading-relaxed text-neutral-mid">
              To make a request, contact us using the details on the Contact page.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-neutral-dark">Data security</h2>
            <p className="leading-relaxed text-neutral-mid">
              We take reasonable steps to protect the information you provide. However, no
              method of transmission or storage is 100% secure. Please avoid sharing sensitive
              medical information that is not necessary for your request.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-neutral-dark">Changes to this policy</h2>
            <p className="leading-relaxed text-neutral-mid">
              We may update this Privacy Policy from time to time. When we do, we will update
              the effective date at the top of this page.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}

