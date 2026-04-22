import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import MobileCtaBar from "@/components/MobileCtaBar";
import PageTransition from "@/components/PageTransition";
import { buildMetadata } from "@/lib/seo";

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = buildMetadata({
  title: "SmileCraft Dental Clinic",
  description: "SmileCraft — modern dental care in Kathmandu.",
  path: "/",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-neutral-bg pb-20 font-sans text-neutral-dark md:pb-0">
        <Navbar />
        <main>
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <MobileCtaBar />
        <CookieBanner />
      </body>
    </html>
  );
}
