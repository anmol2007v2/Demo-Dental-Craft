"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Crosshair,
  Lock,
  MapPin,
  Sparkles,
  Stethoscope,
  Syringe,
} from "lucide-react";
import { primaryButtonClass } from "@/lib/ui";
import { doctors } from "@/data/doctors";

const TREATMENT_DOCTOR_MAP: Record<string, string[]> = {
  "General Checkup": ["dr-priya-sharma", "dr-sarah-mitchell"],
  "Cosmetic Dentistry": ["dr-sarah-mitchell", "dr-raj-patel"],
  Orthodontics: ["dr-james-carter", "dr-sarah-mitchell"],
  "Emergency Care": ["dr-alex-thompson", "dr-emily-roberts"],
};

function formatGoogleCalendarDate(date: Date) {
  // Google Calendar expects `YYYYMMDDTHHMMSSZ`
  return date.toISOString().replaceAll("-", "").replaceAll(":", "").split(".")[0] + "Z";
}

function buildGoogleCalendarUrl({
  title,
  start,
  end,
}: {
  title: string;
  start: Date;
  end: Date;
}) {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: title,
    dates: `${formatGoogleCalendarDate(start)}/${formatGoogleCalendarDate(end)}`,
    details: "SmileCraft Dental Clinic appointment",
    location: "Lazimpat, Kathmandu, Nepal",
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

function parseTimeLabelToHoursMinutes(label: string) {
  // e.g. "11:30 AM"
  const match = label.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!match) return null;
  const hoursRaw = Number(match[1]);
  const minutes = Number(match[2]);
  const period = match[3].toUpperCase();
  if (Number.isNaN(hoursRaw) || Number.isNaN(minutes)) return null;
  if (hoursRaw < 1 || hoursRaw > 12 || minutes < 0 || minutes > 59) return null;
  const base = hoursRaw % 12;
  const hours = period === "PM" ? base + 12 : base;
  return { hours, minutes };
}

export default function BookAppointmentClient() {
  const prefersReducedMotion = useReducedMotion();
  const treatments = [
    {
      title: "General Checkup",
      subtitle: "Routine cleaning and exam",
      icon: Stethoscope,
    },
    {
      title: "Cosmetic Dentistry",
      subtitle: "Whitening and veneers",
      icon: Sparkles,
    },
    {
      title: "Orthodontics",
      subtitle: "Invisalign and braces",
      icon: Crosshair,
    },
    {
      title: "Emergency Care",
      subtitle: "Immediate pain relief",
      icon: Syringe,
    },
  ];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const today = new Date();
  const normalizedToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  const [selectedTreatment, setSelectedTreatment] = useState("Cosmetic Dentistry");
  const [selectedDoctorSlug, setSelectedDoctorSlug] = useState(() => {
    const first = TREATMENT_DOCTOR_MAP["Cosmetic Dentistry"]?.[0] ?? "";
    return doctors.some((d) => d.slug === first) ? first : "";
  });
  const [selectedDate, setSelectedDate] = useState(normalizedToday);
  const [calendarMonth, setCalendarMonth] = useState(
    new Date(normalizedToday.getFullYear(), normalizedToday.getMonth(), 1),
  );
  const [selectedSlot, setSelectedSlot] = useState("11:30 AM");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  const [didSubmit, setDidSubmit] = useState(false);
  const [shakeConfirm, setShakeConfirm] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const availableDoctors = useMemo(() => {
    const slugs = TREATMENT_DOCTOR_MAP[selectedTreatment] ?? [];
    const list = slugs
      .map((slug) => doctors.find((d) => d.slug === slug))
      .filter(Boolean) as typeof doctors;
    return list;
  }, [selectedTreatment]);

  const daysInMonth = new Date(
    calendarMonth.getFullYear(),
    calendarMonth.getMonth() + 1,
    0,
  ).getDate();
  const firstDay = new Date(calendarMonth.getFullYear(), calendarMonth.getMonth(), 1);
  const firstWeekdayMondayBased = (firstDay.getDay() + 6) % 7;
  const monthGrid = [
    ...Array.from({ length: firstWeekdayMondayBased }, () => null),
    ...Array.from({ length: daysInMonth }, (_, idx) => idx + 1),
  ];

  const availableSlots = useMemo(() => {
    const dayOfWeek = selectedDate.getDay();
    if (dayOfWeek === 0) return ["10:30 AM", "12:00 PM"];
    if (dayOfWeek === 6) return ["09:30 AM", "11:00 AM", "01:00 PM"];
    return ["09:00 AM", "11:30 AM", "02:15 PM", "04:45 PM"];
  }, [selectedDate]);

  const summaryDate = `${selectedDate.toLocaleDateString("en-GB", {
    weekday: "long",
    month: "short",
    day: "numeric",
  })} - ${selectedSlot}`;

  const goToPreviousMonth = () =>
    setCalendarMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  const goToNextMonth = () =>
    setCalendarMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));

  const handleConfirmAppointment = () => {
    setDidSubmit(true);
    const isValid = Boolean(fullName.trim()) && Boolean(phone.trim());
    if (!isValid) {
      if (!prefersReducedMotion) {
        setShakeConfirm(true);
        window.setTimeout(() => setShakeConfirm(false), 450);
      }
      return;
    }
    setIsConfirmed(true);
  };

  const resetBooking = () => {
    setSelectedTreatment("Cosmetic Dentistry");
    setSelectedDoctorSlug("");
    setSelectedDate(normalizedToday);
    setCalendarMonth(new Date(normalizedToday.getFullYear(), normalizedToday.getMonth(), 1));
    setSelectedSlot("11:30 AM");
    setFullName("");
    setPhone("");
    setNotes("");
    setDidSubmit(false);
    setShakeConfirm(false);
    setIsConfirmed(false);
  };

  const fullNameError = didSubmit && !fullName.trim() ? "Full name is required." : "";
  const phoneError = didSubmit && !phone.trim() ? "Phone number is required." : "";

  const calendarUrl = useMemo(() => {
    if (!isConfirmed) return "";
    const parsed = parseTimeLabelToHoursMinutes(selectedSlot);
    if (!parsed) return "";
    const start = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      selectedDate.getDate(),
      parsed.hours,
      parsed.minutes,
      0,
      0,
    );
    const end = new Date(start.getTime() + 30 * 60 * 1000);
    return buildGoogleCalendarUrl({ title: `${selectedTreatment} - SmileCraft`, start, end });
  }, [isConfirmed, selectedDate, selectedSlot, selectedTreatment]);

  if (isConfirmed) {
    return (
      <section className="bg-neutral-bg px-4 pb-20 pt-12 md:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-[2.5rem] bg-white p-10 text-center shadow-[0_4px_24px_rgba(0,0,0,0.08)] md:p-14">
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.9 }}
              animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.35, ease: "easeOut" }}
              className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary"
              aria-hidden="true"
            >
              <CheckCircle2 className="h-8 w-8" />
            </motion.div>

            <h1 className="font-serif text-4xl text-primary md:text-5xl">Appointment Confirmed!</h1>
            <p className="mx-auto mt-4 max-w-xl text-neutral-mid">
              We’ve reserved your time. If you need to adjust anything, you can book again or
              contact us any time.
            </p>

            <div className="mt-10 grid gap-4 rounded-3xl bg-neutral-section p-6 text-left md:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-muted">
                  Treatment
                </p>
                <p className="mt-1 font-semibold text-neutral-dark">{selectedTreatment}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-muted">
                  Doctor
                </p>
                <p className="mt-1 font-semibold text-neutral-dark">
                  {doctors.find((d) => d.slug === selectedDoctorSlug)?.name ?? "Selected doctor"}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-muted">
                  Date
                </p>
                <p className="mt-1 font-semibold text-neutral-dark">
                  {selectedDate.toLocaleDateString("en-GB", {
                    weekday: "long",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-muted">
                  Time
                </p>
                <p className="mt-1 font-semibold text-neutral-dark">{selectedSlot}</p>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href={calendarUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-2xl bg-primary px-8 py-3 font-semibold text-white transition hover:bg-primary-dark ${primaryButtonClass}`}
              >
                Generate .ics / Add to Google Calendar
              </a>
              <button
                type="button"
                onClick={resetBooking}
                className="rounded-2xl bg-neutral-section px-8 py-3 font-semibold text-primary transition hover:bg-neutral-card"
              >
                Book Another Appointment
              </button>
            </div>

            <p className="mt-8 text-sm text-neutral-muted">
              Need help?{" "}
              <Link href="/contact-us" className="font-semibold text-primary hover:underline">
                Contact us
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-neutral-bg px-4 pb-20 pt-12 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-12">
          <h1 className="font-serif text-5xl text-primary md:text-6xl">
            Your Smile Journey <br />
            <span className="font-light italic">Begins Here</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-mid">
            Experience dentistry redefined. Select your preferred time and service below for
            a seamless consultation.
          </p>
        </header>

        <div className="grid items-start gap-10 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-7">
            <section className="rounded-3xl bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
              <div className="mb-6 flex items-center gap-3">
                <span className="font-serif text-2xl text-primary">01.</span>
                <h2 className="text-xl font-semibold">Select Treatment</h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {treatments.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.title}
                      type="button"
                      className={`flex items-center gap-4 rounded-xl border-2 p-4 text-left transition ${
                        selectedTreatment === item.title
                          ? "border-primary bg-neutral-bg"
                          : "border-transparent bg-neutral-section hover:border-primary/20"
                      }`}
                      onClick={() => {
                        setSelectedTreatment(item.title);
                        const nextSlug = (TREATMENT_DOCTOR_MAP[item.title] ?? [])[0] ?? "";
                        setSelectedDoctorSlug(nextSlug);
                      }}
                    >
                      <span className="rounded-lg bg-primary/5 p-2 text-primary">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span>
                        <p className="font-semibold text-neutral-dark">{item.title}</p>
                        <p className="text-xs text-neutral-mid">{item.subtitle}</p>
                      </span>
                    </button>
                  );
                })}
              </div>
            </section>

            <section className="rounded-3xl bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
              <div className="mb-6 flex items-center gap-3">
                <span className="font-serif text-2xl text-primary">02.</span>
                <h2 className="text-xl font-semibold">Choose Your Doctor</h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {availableDoctors.map((doctor) => {
                  const selected = selectedDoctorSlug === doctor.slug;
                  return (
                    <button
                      key={doctor.slug}
                      type="button"
                      onClick={() => setSelectedDoctorSlug(doctor.slug)}
                      className={`flex items-center gap-4 rounded-xl border-2 p-4 text-left transition ${
                        selected
                          ? "border-primary bg-neutral-bg"
                          : "border-transparent bg-neutral-section hover:border-primary/20"
                      }`}
                    >
                      <Image
                        src={doctor.avatarUrl}
                        alt={`Portrait of ${doctor.name}`}
                        width={56}
                        height={56}
                        className="h-14 w-14 rounded-full object-cover"
                      />
                      <span>
                        <p className="font-semibold text-neutral-dark">{doctor.name}</p>
                        <p className="text-xs text-neutral-mid">{doctor.title}</p>
                      </span>
                    </button>
                  );
                })}
              </div>
            </section>

            <section className="rounded-3xl bg-neutral-section p-8">
              <div className="mb-6 flex items-center gap-3">
                <span className="font-serif text-2xl text-primary">03.</span>
                <h2 className="text-xl font-semibold">Choose Your Time</h2>
              </div>
              <div className="flex flex-col gap-8 md:flex-row">
                <div className="flex-1 rounded-2xl bg-white p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={goToPreviousMonth}
                      className="rounded-md p-1 text-primary transition hover:bg-primary/10"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <span className="font-semibold text-neutral-dark">
                      {monthNames[calendarMonth.getMonth()]} {calendarMonth.getFullYear()}
                    </span>
                    <button
                      type="button"
                      onClick={goToNextMonth}
                      className="rounded-md p-1 text-primary transition hover:bg-primary/10"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="mb-2 grid grid-cols-7 gap-2 text-center text-xs font-medium text-neutral-muted">
                    {weekdayNames.map((day) => (
                      <span key={day}>{day}</span>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 gap-2 text-center text-sm">
                    {monthGrid.map((day, index) => {
                      if (!day) return <div key={`empty-${index}`} className="p-2" />;
                      const candidate = new Date(
                        calendarMonth.getFullYear(),
                        calendarMonth.getMonth(),
                        day,
                      );
                      const isSelected = candidate.toDateString() === selectedDate.toDateString();
                      const isPast = candidate < normalizedToday;
                      return (
                        <button
                          key={day}
                          type="button"
                          disabled={isPast}
                          onClick={() => {
                            setSelectedDate(candidate);
                            setSelectedSlot("");
                          }}
                          className={`rounded-lg p-2 font-medium transition ${
                            isSelected
                              ? "bg-primary text-white"
                              : isPast
                                ? "cursor-not-allowed text-neutral-muted"
                                : "hover:bg-primary/5"
                          }`}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="flex-1 space-y-3">
                  <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-neutral-muted">
                    Available Slots
                  </p>
                  {availableSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedSlot(slot)}
                      className={`w-full rounded-xl py-3 font-medium transition ${
                        slot === selectedSlot
                          ? "bg-primary text-white shadow-md shadow-primary/20"
                          : "border border-transparent bg-white hover:border-primary/20 hover:bg-primary/5"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            </section>

            <section className="rounded-3xl bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
              <div className="mb-6 flex items-center gap-3">
                <span className="font-serif text-2xl text-primary">04.</span>
                <h2 className="text-xl font-semibold">Your Details</h2>
              </div>
              <form className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="booking-full-name"
                    className="text-xs font-semibold uppercase tracking-wide text-neutral-muted"
                  >
                    Full Name
                  </label>
                  <input
                    id="booking-full-name"
                    type="text"
                    placeholder="Johnathan Doe"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    aria-invalid={Boolean(fullNameError)}
                    aria-describedby={fullNameError ? "booking-full-name-error" : undefined}
                    className={`w-full rounded-xl bg-neutral-section px-4 py-3 outline-none ring-primary/20 focus:ring-2 ${
                      fullNameError ? "border border-red-500 ring-0" : "border border-transparent"
                    }`}
                  />
                  {fullNameError ? (
                    <p id="booking-full-name-error" className="text-sm font-medium text-red-600">
                      {fullNameError}
                    </p>
                  ) : null}
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="booking-phone"
                    className="text-xs font-semibold uppercase tracking-wide text-neutral-muted"
                  >
                    Phone Number
                  </label>
                  <input
                    id="booking-phone"
                    type="tel"
                    placeholder="+977 980-0000000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    aria-invalid={Boolean(phoneError)}
                    aria-describedby={phoneError ? "booking-phone-error" : undefined}
                    className={`w-full rounded-xl bg-neutral-section px-4 py-3 outline-none ring-primary/20 focus:ring-2 ${
                      phoneError ? "border border-red-500 ring-0" : "border border-transparent"
                    }`}
                  />
                  {phoneError ? (
                    <p id="booking-phone-error" className="text-sm font-medium text-red-600">
                      {phoneError}
                    </p>
                  ) : null}
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label
                    htmlFor="booking-notes"
                    className="text-xs font-semibold uppercase tracking-wide text-neutral-muted"
                  >
                    Notes for the Dentist
                  </label>
                  <textarea
                    id="booking-notes"
                    rows={3}
                    placeholder="Tell us about any specific concerns..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full rounded-xl border border-transparent bg-neutral-section px-4 py-3 outline-none ring-primary/20 focus:ring-2"
                  />
                </div>
              </form>
            </section>
          </div>

          <aside className="lg:sticky lg:top-28 lg:col-span-5">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-primary p-10 text-white">
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
              <h3 className="relative z-10 mb-8 font-serif text-3xl">Confirmation Summary</h3>
              <div className="relative z-10 mb-10 space-y-6">
                <SummaryRow
                  icon={<CheckCircle2 className="h-5 w-5 text-primary-light" />}
                  label="Treatment"
                  value={selectedTreatment}
                />
                <SummaryRow
                  icon={<CheckCircle2 className="h-5 w-5 text-primary-light" />}
                  label="Doctor"
                  value={
                    doctors.find((d) => d.slug === selectedDoctorSlug)?.name ??
                    "Please choose a doctor"
                  }
                />
                <SummaryRow
                  icon={<Clock3 className="h-5 w-5 text-primary-light" />}
                  label="Date and Time"
                  value={selectedSlot ? summaryDate : "Please choose an available slot"}
                />
                <SummaryRow
                  icon={<MapPin className="h-5 w-5 text-primary-light" />}
                  label="Location"
                  value="Main Clinic, Kathmandu"
                />
              </div>
              <button
                type="button"
                onClick={handleConfirmAppointment}
                className={`mb-6 w-full rounded-2xl bg-white py-4 text-lg font-bold text-primary transition hover:bg-primary-light ${
                  shakeConfirm ? "animate-shake" : ""
                }`}
              >
                Confirm Appointment
              </button>
              <div className="flex items-start gap-3 text-xs leading-tight text-primary-light">
                <Lock className="mt-0.5 h-4 w-4 shrink-0" />
                <p>
                  Your health data is encrypted and protected. We only use this information for
                  clinical coordination.
                </p>
              </div>
            </div>
            <div className="mt-8 flex items-center gap-4 rounded-3xl bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3GP-c80VxV2kkKkUoEgtI7RFfxern37NQgTyPy5nlVWmv_CtsDEGeNsVNjRrsY4xVE08tY7n_Kl9K0YsXlYP8BMczx760zZ1CTsdbx5wU9b6LxKYxdFPR6l_mAn3TTQ2MbT3guRlFos1jlSl-TDrWRR-1G8U_yih2F2X2Gsze0AW85KkeD3g7Xe4UoWMlvATQy6Nc21ka62NwiXwFHPI2yeAF8Mv4wo8BO2N9I4WH43oNvLoJMIwUGEOqfMzyfnNmXDQAsklp8RQ"
                alt="Lead dentist portrait"
                width={64}
                height={64}
                className="h-16 w-16 rounded-full object-cover"
              />
              <div>
                <p className="text-sm italic text-neutral-mid">
                  &quot;We prioritize your comfort as much as your clinical outcomes.&quot;
                </p>
                <p className="mt-1 text-xs font-bold text-primary">
                  Dr. Sarah Shrestha, Lead Surgeon
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function SummaryRow({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <span>{icon}</span>
      <div>
        <p className="text-sm text-primary-light">{label}</p>
        <p className="text-lg font-medium">{value}</p>
      </div>
    </div>
  );
}

