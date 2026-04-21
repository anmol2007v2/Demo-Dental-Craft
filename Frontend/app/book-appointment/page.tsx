"use client";

import Image from "next/image";
import type { ReactNode } from "react";
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

export default function BookAppointmentPage() {
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
  const [selectedDate, setSelectedDate] = useState(normalizedToday);
  const [calendarMonth, setCalendarMonth] = useState(
    new Date(normalizedToday.getFullYear(), normalizedToday.getMonth(), 1),
  );
  const [selectedSlot, setSelectedSlot] = useState("11:30 AM");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

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
    if (!fullName.trim() || !phone.trim()) {
      alert("Please enter your full name and phone number.");
      return;
    }
    const message = [
      "New Appointment Request - Smile Craft",
      `Name: ${fullName}`,
      `Phone: ${phone}`,
      `Treatment: ${selectedTreatment}`,
      `Date & Time: ${summaryDate}`,
      `Notes: ${notes || "N/A"}`,
    ].join("\n");
    window.open(`https://wa.me/9869132423?text=${encodeURIComponent(message)}`, "_blank");
  };

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
                      onClick={() => setSelectedTreatment(item.title)}
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

            <section className="rounded-3xl bg-neutral-section p-8">
              <div className="mb-6 flex items-center gap-3">
                <span className="font-serif text-2xl text-primary">02.</span>
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
                      const isSelected =
                        candidate.toDateString() === selectedDate.toDateString();
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
                <span className="font-serif text-2xl text-primary">03.</span>
                <h2 className="text-xl font-semibold">Your Details</h2>
              </div>
              <form className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-wide text-neutral-muted">
                    Full Name
                  </span>
                  <input
                    type="text"
                    placeholder="Johnathan Doe"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full rounded-xl border-none bg-neutral-section px-4 py-3 outline-none ring-primary/20 focus:ring-2"
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-wide text-neutral-muted">
                    Phone Number
                  </span>
                  <input
                    type="tel"
                    placeholder="+977 980-0000000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-xl border-none bg-neutral-section px-4 py-3 outline-none ring-primary/20 focus:ring-2"
                  />
                </label>
                <label className="space-y-2 md:col-span-2">
                  <span className="text-xs font-semibold uppercase tracking-wide text-neutral-muted">
                    Notes for the Dentist
                  </span>
                  <textarea
                    rows={3}
                    placeholder="Tell us about any specific concerns..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full rounded-xl border-none bg-neutral-section px-4 py-3 outline-none ring-primary/20 focus:ring-2"
                  />
                </label>
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
                className="mb-6 w-full rounded-2xl bg-white py-4 text-lg font-bold text-primary transition hover:bg-primary-light"
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
