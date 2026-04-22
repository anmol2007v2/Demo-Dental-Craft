import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import ContactUsClient from "@/components/ContactUsClient";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us | SmileCraft Dental Clinic",
  description: "Contact SmileCraft in Lazimpat, Kathmandu. View hours, location, and send a message via WhatsApp.",
  path: "/contact-us",
});

export default function ContactUsPage() {
  return <ContactUsClient />;
}
