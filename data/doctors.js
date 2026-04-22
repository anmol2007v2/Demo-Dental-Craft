const avatarUrl = (name) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(name.replaceAll(" ", "+"))}&background=0D6EFD&color=fff&size=256`;

export const doctors = [
  {
    slug: "dr-sarah-mitchell",
    name: "Dr. Sarah Mitchell",
    title: "Lead Dentist & Cosmetic Specialist",
    avatarUrl: avatarUrl("Sarah Mitchell"),
    yearsExperience: 12,
    specialties: ["Smile design", "Veneers", "Teeth whitening", "Minimally invasive dentistry"],
    bio: [
      "Dr. Sarah Mitchell leads SmileCraft’s cosmetic dentistry program with a calm, detail-first approach to smile design. She focuses on natural-looking results, conservative treatment planning, and comfort at every step.",
      "Patients appreciate her ability to explain options clearly and tailor procedures to lifestyle, timeline, and long-term oral health goals.",
    ],
    education: ["BDS — Tribhuvan University", "Advanced Aesthetic Dentistry Training — International Faculty"],
    certifications: ["Digital Smile Design (DSD) Certified", "Invisalign Provider (Cosmetic Track)"],
  },
  {
    slug: "dr-james-carter",
    name: "Dr. James Carter",
    title: "Orthodontist",
    avatarUrl: avatarUrl("James Carter"),
    yearsExperience: 10,
    specialties: ["Braces", "Clear aligners", "Bite correction", "Teen & adult orthodontics"],
    bio: [
      "Dr. James Carter specializes in orthodontic planning that balances aesthetics with functional bite alignment. He is known for structured, step-by-step treatment roadmaps and gentle follow-ups.",
      "Whether you choose braces or aligners, Dr. Carter prioritizes predictability, comfort, and long-term stability.",
    ],
    education: ["BDS — Kathmandu University", "MDS Orthodontics — Regional Specialty Program"],
    certifications: ["Clear Aligner Therapy Certification", "Cephalometric Analysis Workshop Series"],
  },
  {
    slug: "dr-priya-sharma",
    name: "Dr. Priya Sharma",
    title: "Pediatric & General Dentistry",
    avatarUrl: avatarUrl("Priya Sharma"),
    yearsExperience: 9,
    specialties: ["Kids dentistry", "Preventive care", "Gentle cleanings", "Family dentistry"],
    bio: [
      "Dr. Priya Sharma brings a friendly, patient-first approach to preventive care and pediatric dentistry. She helps families build healthy routines and makes dental visits feel safe for children.",
      "Her focus is early intervention, education, and minimally stressful treatment experiences for every age group.",
    ],
    education: ["BDS — BP Koirala Institute of Health Sciences", "Pediatric Dentistry Fellowship — Clinical Track"],
    certifications: ["Behavior Guidance for Pediatric Patients", "Preventive Dentistry & Sealants Training"],
  },
  {
    slug: "dr-alex-thompson",
    name: "Dr. Alex Thompson",
    title: "Oral Surgeon",
    avatarUrl: avatarUrl("Alex Thompson"),
    yearsExperience: 11,
    specialties: ["Extractions", "Wisdom teeth", "Minor oral surgery", "Surgical aftercare"],
    bio: [
      "Dr. Alex Thompson provides surgical care with an emphasis on safety, comfort, and clear post-operative instructions. His approach prioritizes pain control, efficient procedures, and careful follow-up.",
      "Patients value his steady communication and focus on reducing anxiety during surgical visits.",
    ],
    education: ["BDS — University of Delhi", "Oral Surgery Residency — Hospital-Based Program"],
    certifications: ["Sedation Safety & Monitoring", "Surgical Complications Management"],
  },
  {
    slug: "dr-emily-roberts",
    name: "Dr. Emily Roberts",
    title: "Endodontist",
    avatarUrl: avatarUrl("Emily Roberts"),
    yearsExperience: 8,
    specialties: ["Root canal therapy", "Pain management", "Microscopic endodontics", "Retreatment"],
    bio: [
      "Dr. Emily Roberts focuses on endodontic care that preserves natural teeth with precision diagnostics. She is meticulous with infection control and pain management throughout root canal procedures.",
      "Her goal is to help patients leave with relief, clarity, and confidence in their recovery plan.",
    ],
    education: ["DDS — University of Melbourne", "Endodontics Specialty Training — Clinical Residency"],
    certifications: ["Rotary Endodontics Certification", "Advanced Apex Location Techniques"],
  },
  {
    slug: "dr-raj-patel",
    name: "Dr. Raj Patel",
    title: "Implant Specialist",
    avatarUrl: avatarUrl("Raj Patel"),
    yearsExperience: 13,
    specialties: ["Dental implants", "Restorative planning", "Full-mouth rehab", "Bone preservation"],
    bio: [
      "Dr. Raj Patel leads SmileCraft’s implant planning and long-term restorative treatments. He focuses on durable outcomes, careful case selection, and patient education for maintenance.",
      "His treatment philosophy combines modern imaging, conservative planning, and stepwise follow-up to support lasting function and aesthetics.",
    ],
    education: ["BDS — University of Mumbai", "Implant Dentistry Postgraduate Diploma — International Program"],
    certifications: ["Implant Surgery & Prosthetics Certification", "Guided Implant Planning Workshop"],
  },
];

