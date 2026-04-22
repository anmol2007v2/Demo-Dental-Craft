import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { doctors } from "@/data/doctors";

const baseUrl = "https://demo-dental-craft-six.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/our-services",
    "/meet-the-team",
    "/patient-stories",
    "/contact-us",
    "/book-appointment",
    "/privacy-policy",
    "/terms-of-service",
  ];

  const serviceRoutes = services.map((s) => `/our-services/${s.slug}`);
  const doctorRoutes = doctors.map((d) => `/meet-the-team/${d.slug}`);

  const allRoutes = [...staticRoutes, ...serviceRoutes, ...doctorRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}

