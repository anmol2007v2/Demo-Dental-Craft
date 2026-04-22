"use client";

import { FormEvent, useState } from "react";
import type { ReactNode } from "react";
import { Clock3, Mail, MapPin, MessageSquareText, Phone } from "lucide-react";
import OpenClosedBadge from "@/components/OpenClosedBadge";

const WHATSAPP_NUMBER = "97714400000";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function isNumericPhone(value: string) {
  return /^[0-9]+$/.test(value.trim());
}

export default function ContactUsClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const [errors, setErrors] = useState<{
    name?: string;
    phone?: string;
    email?: string;
  }>({});

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const nextErrors: typeof errors = {};
    if (!formData.name.trim()) nextErrors.name = "Full name is required.";
    if (!formData.phone.trim()) nextErrors.phone = "Phone number is required.";
    else if (!isNumericPhone(formData.phone)) nextErrors.phone = "Phone must be numeric only.";
    if (formData.email.trim() && !isValidEmail(formData.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const whatsappText = [
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `Subject: ${formData.subject}`,
      `Message: ${formData.message}`,
    ].join("\n");
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="bg-neutral-bg px-4 pb-20 pt-12 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-12">
          <h1 className="font-serif text-5xl text-primary md:text-6xl">
            Let&apos;s Start Your <br />
            <span className="font-light italic">Smile Conversation</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-mid">
            Share your concerns and goals. Our care team will get back quickly and guide you to
            the right treatment path.
          </p>
        </header>

        <div className="grid items-start gap-8 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-7">
            <section className="rounded-3xl bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
              <div className="mb-6 flex items-center gap-3">
                <span className="font-serif text-2xl text-primary">01.</span>
                <h2 className="text-xl font-semibold tracking-tight">Contact Details</h2>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <ContactCard icon={<Phone className="h-5 w-5" />} label="Phone" value="+977 1 4400000" />
                <ContactCard icon={<Mail className="h-5 w-5" />} label="Email" value="hello@smilecraft.com" />
                <ContactCard
                  icon={<MapPin className="h-5 w-5" />}
                  label="Address"
                  value="Lazimpat, Kathmandu, Nepal"
                />
                <ContactCard
                  icon={<Clock3 className="h-5 w-5" />}
                  label="Hours"
                  value={
                    <div className="flex flex-wrap items-center gap-2">
                      <span>Mon–Fri 8am–6pm, Sat 9am–3pm</span>
                      <OpenClosedBadge />
                    </div>
                  }
                />
              </div>
            </section>

            <section className="rounded-3xl bg-neutral-section p-8">
              <div className="mb-6 flex items-center gap-3">
                <span className="font-serif text-2xl text-primary">02.</span>
                <h2 className="text-xl font-semibold tracking-tight">Send Your Message</h2>
              </div>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <Input
                  id="contact-full-name"
                  label="Full Name"
                  value={formData.name}
                  onChange={(value) => setFormData((p) => ({ ...p, name: value }))}
                  error={errors.name}
                />
                <Input
                  id="contact-phone"
                  label="Phone Number"
                  type="tel"
                  value={formData.phone}
                  onChange={(value) => setFormData((p) => ({ ...p, phone: value }))}
                  error={errors.phone}
                />
                <Input
                  id="contact-email"
                  label="Email Address"
                  type="email"
                  value={formData.email}
                  onChange={(value) => setFormData((p) => ({ ...p, email: value }))}
                  error={errors.email}
                />
                <label className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-wide text-neutral-muted">
                    Subject
                  </span>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData((p) => ({ ...p, subject: e.target.value }))}
                    className="w-full rounded-xl border-none bg-white px-4 py-3 outline-none ring-primary/20 focus:ring-2"
                  >
                    <option>General Inquiry</option>
                    <option>Appointment Help</option>
                    <option>Billing Question</option>
                    <option>Feedback</option>
                  </select>
                </label>
                <label className="space-y-2 md:col-span-2">
                  <span className="text-xs font-semibold uppercase tracking-wide text-neutral-muted">
                    Notes for the Team
                  </span>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                    placeholder="Tell us about your concern or preferred appointment time..."
                    className="w-full rounded-xl border-none bg-white px-4 py-3 outline-none ring-primary/20 focus:ring-2"
                  />
                </label>
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-2xl bg-primary px-8 py-3 font-semibold text-white transition hover:bg-primary-dark"
                  >
                    <MessageSquareText className="h-4 w-4" />
                    Send to WhatsApp
                  </button>
                </div>
              </form>
            </section>

            <section className="overflow-hidden rounded-3xl border border-neutral-card bg-white">
              <iframe
                title="SmileCraft location map"
                src="https://www.google.com/maps?q=Lazimpat%20Kathmandu%20Nepal&output=embed"
                className="h-80 w-full md:h-96"
                loading="lazy"
              />
            </section>
          </div>

          <aside className="lg:sticky lg:top-28 lg:col-span-5">
            <div className="rounded-[2.5rem] bg-primary p-10 text-white">
              <h3 className="font-serif text-3xl">We are here to help</h3>
              <p className="mt-4 text-primary-light">
                Share your details and our team will respond with appointment options and
                guidance.
              </p>
              <div className="mt-8 space-y-5">
                <aside className="rounded-2xl bg-white/10 p-4">
                  <p className="text-xs uppercase tracking-wider text-primary-light">Response Time</p>
                  <p className="text-lg font-semibold">Usually within 30 minutes</p>
                </aside>
                <aside className="rounded-2xl bg-white/10 p-4">
                  <p className="text-xs uppercase tracking-wider text-primary-light">Best For</p>
                  <p className="text-lg font-semibold">
                    New patients, follow-ups, emergency guidance
                  </p>
                </aside>
                <aside className="rounded-2xl bg-white/10 p-4">
                  <p className="text-xs uppercase tracking-wider text-primary-light">Hotline</p>
                  <p className="text-lg font-semibold">+977 1 4400000</p>
                </aside>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: ReactNode;
}) {
  return (
    <article className="rounded-2xl bg-neutral-section p-4">
      <div className="mb-3 inline-flex rounded-lg bg-primary/10 p-2 text-primary">{icon}</div>
      <p className="text-xs font-semibold uppercase tracking-wider text-neutral-muted">{label}</p>
      <div className="mt-1 font-medium text-neutral-dark">{value}</div>
    </article>
  );
}

function Input({
  id,
  label,
  value,
  onChange,
  type = "text",
  error,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: HTMLInputElement["type"];
  error?: string;
}) {
  return (
    <label className="space-y-2">
      <span className="text-xs font-semibold uppercase tracking-wide text-neutral-muted">
        {label}
      </span>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`w-full rounded-xl bg-white px-4 py-3 outline-none ring-primary/20 focus:ring-2 ${
          error ? "border border-red-500 ring-0" : "border border-transparent"
        }`}
      />
      {error ? (
        <p id={`${id}-error`} className="text-sm font-medium text-red-600">
          {error}
        </p>
      ) : null}
    </label>
  );
}

