"use client";

import { FormEvent, useMemo, useState } from "react";
import { buildWhatsAppMessage } from "./WhatsAppRedirect";
import { services } from "./siteData";

const formatDate = (value: string) => (value ? new Date(value).toLocaleDateString() : "");

const slotList = Array.from({ length: 18 }).map((_, i) => {
  const startHour = 9;
  const totalMinutes = i * 30;
  const hour = startHour + Math.floor(totalMinutes / 60);
  const minute = totalMinutes % 60;
  const suffix = hour >= 12 ? "PM" : "AM";
  const displayHour = hour > 12 ? hour - 12 : hour;
  return `${displayHour}:${minute === 0 ? "00" : minute} ${suffix}`;
});

export default function AppointmentForm({ defaultService = "" }: { defaultService?: string }) {
  const [error, setError] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    service: defaultService,
    date: "",
    time: "",
    notes: "",
  });

  const minDate = useMemo(() => new Date().toISOString().split("T")[0], []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.service || !formData.date || !formData.time || !agreed) {
      setError("Please fill all required fields and agree to terms.");
      return;
    }

    setError("");
    const url = buildWhatsAppMessage({
      ...formData,
      dob: formatDate(formData.dob),
      date: formatDate(formData.date),
    });
    window.open(url, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-3xl bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
          <h2 className="mb-5 font-serif text-2xl text-neutral-dark">Personal Information</h2>
          <div className="space-y-4">
            <Field label="Full Name*" value={formData.name} onChange={(value) => setFormData((p) => ({ ...p, name: value }))} />
            <Field label="Email Address" type="email" value={formData.email} onChange={(value) => setFormData((p) => ({ ...p, email: value }))} />
            <Field label="Phone Number*" type="tel" value={formData.phone} onChange={(value) => setFormData((p) => ({ ...p, phone: value }))} />
            <Field label="Date of Birth" type="date" value={formData.dob} onChange={(value) => setFormData((p) => ({ ...p, dob: value }))} />
          </div>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
          <h2 className="mb-5 font-serif text-2xl text-neutral-dark">Appointment Details</h2>
          <div className="space-y-4">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-neutral-mid">Service Needed*</span>
              <select
                value={formData.service}
                onChange={(e) => setFormData((p) => ({ ...p, service: e.target.value }))}
                className="w-full rounded-xl border border-neutral-card bg-white px-4 py-3 outline-none ring-primary focus:ring-2"
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service.title} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
            </label>
            <Field
              label="Preferred Date*"
              type="date"
              min={minDate}
              value={formData.date}
              onChange={(value) => setFormData((p) => ({ ...p, date: value }))}
            />
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-neutral-mid">Preferred Time*</span>
              <select
                value={formData.time}
                onChange={(e) => setFormData((p) => ({ ...p, time: e.target.value }))}
                className="w-full rounded-xl border border-neutral-card bg-white px-4 py-3 outline-none ring-primary focus:ring-2"
              >
                <option value="">Select a time slot</option>
                {slotList.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-neutral-mid">Special Notes / Concerns</span>
              <textarea
                rows={4}
                value={formData.notes}
                onChange={(e) => setFormData((p) => ({ ...p, notes: e.target.value }))}
                className="w-full rounded-xl border border-neutral-card bg-white px-4 py-3 outline-none ring-primary focus:ring-2"
              />
            </label>
          </div>
        </section>
      </div>

      <label className="flex items-start gap-3 text-sm text-neutral-mid">
        <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="mt-1 h-4 w-4 accent-primary" />
        I agree to the terms and appointment policies
      </label>

      {error ? <p className="text-sm font-medium text-red-600">{error}</p> : null}

      <button
        type="submit"
        className="w-full rounded-full bg-primary py-4 text-lg font-semibold text-white transition hover:bg-primary-dark"
      >
        Confirm Appointment →
      </button>
    </form>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  min,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: HTMLInputElement["type"];
  min?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-neutral-mid">{label}</span>
      <input
        type={type}
        min={min}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-neutral-card bg-white px-4 py-3 outline-none ring-primary focus:ring-2"
      />
    </label>
  );
}
