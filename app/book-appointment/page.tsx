import type { Metadata } from "next";
import BookAppointmentClient from "@/components/BookAppointmentClient";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Book Appointment | SmileCraft Dental Clinic",
  description: "Book a SmileCraft consultation by choosing a treatment, time, and your details — all client-side.",
  path: "/book-appointment",
});

export default function BookAppointmentPage() {
  return <BookAppointmentClient />;
}
