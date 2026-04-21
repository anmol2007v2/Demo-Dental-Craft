import {
  Activity,
  AlertCircle,
  Cross,
  HeartPulse,
  Scissors,
  Shield,
  Smile,
  Sparkles,
} from "lucide-react";

export type ServiceItem = {
  title: string;
  description: string;
  price: string;
  icon: typeof Activity;
};

export const services: ServiceItem[] = [
  {
    title: "General Check-up & Cleaning",
    description:
      "Preventive exams and gentle cleaning to keep your oral health in top condition.",
    price: "From $80",
    icon: HeartPulse,
  },
  {
    title: "Cosmetic Dentistry",
    description:
      "Veneers, bonding, and smile makeovers designed to improve confidence and symmetry.",
    price: "From $250",
    icon: Sparkles,
  },
  {
    title: "Orthodontics",
    description:
      "Modern braces and aligners to straighten teeth and improve bite alignment.",
    price: "From $450",
    icon: Smile,
  },
  {
    title: "Dental Implants",
    description:
      "Long-term tooth replacement solutions that restore both function and aesthetics.",
    price: "From $900",
    icon: Shield,
  },
  {
    title: "Emergency Dental Care",
    description:
      "Fast treatment for severe pain, chipped teeth, infection, or trauma.",
    price: "From $120",
    icon: AlertCircle,
  },
  {
    title: "Teeth Whitening",
    description:
      "Professional whitening treatments for a brighter smile in minimal sessions.",
    price: "From $180",
    icon: Activity,
  },
  {
    title: "Root Canal Treatment",
    description:
      "Precise endodontic care to save damaged teeth and reduce discomfort.",
    price: "From $350",
    icon: Cross,
  },
  {
    title: "Wisdom Tooth Extraction",
    description:
      "Safe removal procedures with comfort-focused surgical care and follow-up.",
    price: "From $300",
    icon: Scissors,
  },
];

export const testimonialItems = [
  {
    name: "Emma Wilson",
    initials: "EW",
    rating: 5,
    quote:
      "The SmileCraft team made my treatment so smooth and comfortable. My confidence has completely changed.",
    service: "Cosmetic",
    date: "Jan 2026",
  },
  {
    name: "Noah Bennett",
    initials: "NB",
    rating: 5,
    quote:
      "From consultation to follow-up, everything felt professional and thoughtful. Highly recommended clinic.",
    service: "General",
    date: "Feb 2026",
  },
  {
    name: "Ava Carter",
    initials: "AC",
    rating: 4,
    quote:
      "Clear explanations, friendly staff, and modern equipment. My orthodontic plan is going great.",
    service: "Orthodontics",
    date: "Mar 2026",
  },
  {
    name: "Liam Brooks",
    initials: "LB",
    rating: 5,
    quote:
      "I had an emergency appointment and got immediate care. They were calm, fast, and incredibly kind.",
    service: "Emergency",
    date: "Apr 2026",
  },
  {
    name: "Sophia Lee",
    initials: "SL",
    rating: 5,
    quote:
      "My implant procedure was very well-managed and pain was minimal. The results look natural.",
    service: "Implants",
    date: "May 2026",
  },
  {
    name: "Ethan Gray",
    initials: "EG",
    rating: 5,
    quote:
      "Teeth whitening made a huge difference before my wedding. Super happy with the outcome.",
    service: "Cosmetic",
    date: "Jun 2026",
  },
  {
    name: "Mia Davis",
    initials: "MD",
    rating: 4,
    quote:
      "Great pediatric support for my daughter and very patient communication from the doctors.",
    service: "General",
    date: "Jul 2026",
  },
  {
    name: "James Foster",
    initials: "JF",
    rating: 5,
    quote:
      "The team gave me a clear treatment roadmap and pricing upfront. No surprises, excellent care.",
    service: "Orthodontics",
    date: "Aug 2026",
  },
  {
    name: "Isabella Hall",
    initials: "IH",
    rating: 5,
    quote:
      "Pain-free root canal and extremely attentive aftercare. Best dental experience I have had.",
    service: "General",
    date: "Sep 2026",
  },
  {
    name: "Daniel Scott",
    initials: "DS",
    rating: 5,
    quote:
      "The doctors really listen and personalize treatment. SmileCraft has earned my full trust.",
    service: "Implants",
    date: "Oct 2026",
  },
];

export const teamMembers = [
  {
    name: "Dr. Sarah Mitchell",
    specialty: "Lead Dentist & Cosmetic Specialist",
    bio: "Focuses on smile design and minimally invasive cosmetic procedures.",
    imageUrl: "/images/Meet the Team.png",
  },
  {
    name: "Dr. James Carter",
    specialty: "Orthodontist",
    bio: "Specializes in braces and clear aligner planning for all age groups.",
    imageUrl: "/images/Meet the Team.png",
  },
  {
    name: "Dr. Priya Sharma",
    specialty: "Pediatric & General Dentistry",
    bio: "Known for family-centered treatment and preventive care strategies.",
    imageUrl: "/images/Meet the Team.png",
  },
  {
    name: "Dr. Alex Thompson",
    specialty: "Oral Surgeon",
    bio: "Provides surgical care including extractions and complex oral procedures.",
    imageUrl: "/images/Meet the Team.png",
  },
  {
    name: "Dr. Emily Roberts",
    specialty: "Endodontist",
    bio: "Performs advanced root canal therapy with precision diagnostics.",
    imageUrl: "/images/Meet the Team.png",
  },
  {
    name: "Dr. Raj Patel",
    specialty: "Implant Specialist",
    bio: "Leads implant planning and restorative treatments for long-term results.",
    imageUrl: "/images/Meet the Team.png",
  },
];
