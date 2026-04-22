.md
# SmileCraft Dental Clinic — Next.js Frontend Build Prompt

> **Instructions for VS Code / Cursor / GitHub Copilot:**
> Copy and paste this entire prompt into your AI coding assistant. It contains everything needed to recreate the SmileCraft dental clinic website pixel-accurately in Next.js (React only, no backend).

---

## 🎯 Project Overview

Build a **fully responsive dental clinic website** called **SmileCraft** using **Next.js (App Router)** with **Tailwind CSS**. This is a **frontend-only** project. When the appointment form is submitted, redirect the user to a **WhatsApp chat link** with a pre-filled message containing their booking details.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Icons:** `lucide-react`
- **Fonts:** Google Fonts — `DM Serif Display` (headings) + `Inter` (body)
- **Animations:** CSS transitions + `framer-motion` (optional, for smooth page transitions)
- **No backend, no database, no auth**

---

## 🎨 Design System (Extract from Figma SVGs)

### Color Palette
```css
--primary:       #005155;   /* Dark teal — main brand color, CTAs, icons */
--primary-dark:  #134E4A;   /* Darker teal — hover states */
--primary-mid:   #0F766E;   /* Mid teal — accents */
--primary-light: #AEEFE6;   /* Mint — subtle highlights, tags */
--secondary:     #EAB308;   /* Amber/gold — star ratings, accents */
--bg-base:       #F8F9FA;   /* Page background */
--bg-section:    #F3F4F5;   /* Alternating section background */
--bg-card:       #EDEEEF;   /* Card/chip backgrounds */
--text-dark:     #191C1D;   /* Primary text */
--text-mid:      #3E4949;   /* Secondary text / body */
--text-muted:    #64748B;   /* Meta, captions */
--text-light:    #475569;   /* Placeholder, footer text */
--slate:         #4A6678;   /* Icon backgrounds */
--white:         #FFFFFF;
```

### Typography
```css
font-family: 'DM Serif Display', serif;   /* h1, h2, h3 */
font-family: 'Inter', sans-serif;          /* body, labels, buttons */
```

### Border Radius
- Cards: `rounded-3xl` (24px)
- Inputs/chips: `rounded-xl` (12px)
- Buttons: `rounded-full`
- Small icons/badges: `rounded-2xl` (8–16px)

### Shadows
```css
box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);  /* cards */
```

---

## 📁 Project Structure

```
Frontend/
├── app/
│   ├── layout.tsx            ← root layout with nav + footer
│   ├── page.tsx              ← Home page
│   ├── book-appointment/
│   │   └── page.tsx          ← Book Appointment page
│   ├── our-services/
│   │   └── page.tsx          ← Our Services page
│   ├── meet-the-team/
│   │   └── page.tsx          ← Meet the Team page
│   ├── patient-stories/
│   │   └── page.tsx          ← Patient Stories page
│   └── contact-us/
│       └── page.tsx          ← Contact Us page
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── ServiceCard.tsx
│   ├── TestimonialCard.tsx
│   ├── TeamCard.tsx
│   ├── AppointmentForm.tsx
│   └── WhatsAppRedirect.ts   ← utility
├── public/
│   └── images/               ← placeholder dental images
├── tailwind.config.ts
└── next.config.ts
```

---

## 🗂️ Pages — Detailed Specs

---

### 1. `layout.tsx` — Root Layout + Navbar + Footer

#### Navbar
- **Background:** white with subtle bottom border `border-b border-[#EDEEEF]`
- **Logo:** Left side — teal tooth/smile SVG icon + text "SmileCraft" in `DM Serif Display`, color `#005155`
- **Nav links (center/right):** Home · Our Services · Meet the Team · Patient Stories · Contact Us
- **CTA Button:** "Book Appointment" — `bg-[#005155] text-white rounded-full px-6 py-2.5 font-medium hover:bg-[#134E4A]`
- **Mobile:** Hamburger menu (lucide `Menu` icon), slide-down drawer
- **Active link:** underline or `text-[#005155] font-semibold`

#### Footer
- **Background:** `#191C1D` (near black)
- **Logo + tagline** on the left
- **3 columns of links:** Services · Company · Contact
- **Social icons:** circular `bg-[#EDEEEF]` buttons with `#005155` icons (share, facebook, instagram, twitter/X)
- **Bottom bar:** copyright + "Privacy Policy · Terms of Service"
- **Accent:** thin teal top border on footer

---

### 2. `page.tsx` — Home Page

Build these **sections in order**, stacked vertically:

#### Section 1: Hero
- **Full-width section**, `bg-[#F8F9FA]`
- **Left column (60%):**
  - Small teal pill/chip: "✦ Trusted by 5000+ patients"
  - `h1` in DM Serif Display (48–60px): "Your Perfect Smile Starts Here"
  - Subtitle paragraph (16px, `#3E4949`): "Experience world-class dental care in a warm, comfortable environment. We combine artistry with expertise for results you'll love."
  - Two buttons: `[Book Appointment →]` (solid teal) + `[Our Services]` (outline teal)
  - 3 stats below: **5000+ Patients** · **15+ Years Experience** · **4.9★ Rating**
- **Right column (40%):**
  - Rounded card (`rounded-3xl`) containing a **dental/smile stock image** (use `https://images.unsplash.com/photo-1588776814546-1ffbb8b4ee2b?w=600` as placeholder)
  - Floating mini-card overlay (bottom-left of image): "Next Available: Today 2:00 PM" with a green dot
- **Colors:** section bg `#F8F9FA`

#### Section 2: Why Choose Us / Features Strip
- **Background:** `#005155` (dark teal)
- **3–4 feature cards** in a horizontal row, white icons on teal background:
  - 🦷 Advanced Technology
  - 👨‍⚕️ Expert Dentists
  - 💰 Affordable Plans
  - 🏆 Award Winning
- Each card: icon + bold white title + short white/light-teal description

#### Section 3: Our Services (preview — 3 cards)
- **Background:** `#F8F9FA`
- **Section title:** "Our Services" (centered, DM Serif Display)
- **Subtitle:** "Comprehensive dental care tailored to your needs"
- **3 Service cards** in a row (or 2-col on mobile), each with:
  - Teal icon background (`bg-[#005155]/10` circle)
  - Service name in bold (`#191C1D`)
  - Short description (`#64748B`)
  - "Learn more →" link in teal
- Services: General Dentistry · Cosmetic Dentistry · Orthodontics · Dental Implants · Emergency Care · Teeth Whitening
- "View All Services →" button below (outline teal, centered)

#### Section 4: Stats / Social Proof Banner
- **Background:** `#F3F4F5`
- **4 large stats** centered:
  - 5,000+ Happy Patients
  - 15+ Years Experience
  - 20+ Specialist Dentists
  - 4.9/5 Average Rating (★★★★★ in amber `#EAB308`)

#### Section 5: Meet the Team (preview — 3 cards)
- **Background:** `#FFFFFF`
- Team member cards with photo (use Unsplash placeholder faces), name, title, short bio
- "Meet the Full Team →" link

#### Section 6: Patient Stories / Testimonials
- **Background:** `#F3F4F5`
- Testimonial cards with:
  - Star rating (★★★★★ in `#EAB308`)
  - Quote text in italics
  - Patient name + initials avatar (`bg-[#AEEFE6] text-[#005155]`)
  - Treat date / service tag
- Horizontal scroll or 3-column grid

#### Section 7: Book Appointment CTA Banner
- **Background:** `#005155`
- Centered white text: "Ready for Your Best Smile?"
- Subtitle
- White button: "Book Appointment Now →" → links to `/book-appointment`

---

### 3. `our-services/page.tsx` — Our Services

- **Hero:** Page title "Our Services" + breadcrumb
- **Intro paragraph** (centered)
- **Services grid (2x3 or 3x2)** — each card:
  - `bg-white rounded-3xl shadow p-8`
  - Large teal icon
  - Service name (`h3`)
  - Description (2–3 lines)
  - Price range (e.g., "From NPR X,XXX")
  - "Book Now" button → links to `/book-appointment?service=...`
- **Services list:**
  1. General Check-up & Cleaning
  2. Cosmetic Dentistry (veneers, bonding)
  3. Orthodontics (braces, aligners)
  4. Dental Implants
  5. Emergency Dental Care
  6. Teeth Whitening
  7. Root Canal Treatment
  8. Wisdom Tooth Extraction

---

### 4. `meet-the-team/page.tsx` — Meet the Team

- **Hero:** "Meet Our Experts"
- **Team grid (3 columns, wrapping)** — each card:
  - `bg-white rounded-3xl shadow p-6`
  - Circular photo (use `https://i.pravatar.cc/200?img=N` placeholders)
  - Doctor name (`font-bold text-[#191C1D]`)
  - Specialty (`text-[#005155] text-sm`)
  - Short bio
  - Social icons (LinkedIn, email)
- **Team members:**
  - Dr. Sarah Mitchell — Lead Dentist & Cosmetic Specialist
  - Dr. James Carter — Orthodontist
  - Dr. Priya Sharma — Pediatric & General Dentistry
  - Dr. Alex Thompson — Oral Surgeon
  - Dr. Emily Roberts — Endodontist
  - Dr. Raj Patel — Implant Specialist

---

### 5. `patient-stories/page.tsx` — Patient Stories

- **Hero:** "What Our Patients Say"
- **Filter tabs:** All · General · Cosmetic · Orthodontics · Implants
- **Masonry or uniform grid** of testimonial cards:
  - Star rating (1–5 in amber)
  - Testimonial text (longer, 3–5 lines)
  - Patient name, initials avatar
  - Service received + date
  - Before/after treatment tag (pill badge)
- At least **8–10 testimonial items** with varied content
- **Overall rating summary** at top: "4.9/5 from 500+ reviews" with star bar chart breakdown

---

### 6. `contact-us/page.tsx` — Contact Us

- **Left column:** Contact details
  - Address: "123 Smile Street, Dental District, City 10001"
  - Phone: "+1 (555) 123-4567"
  - Email: "hello@smilecraft.com"
  - Hours: Mon–Fri 8am–6pm, Sat 9am–3pm
  - Social links
- **Right column:** Contact form
  - Name, Email, Phone, Subject (dropdown), Message
  - Submit button → sends to WhatsApp (same logic as appointment form — see below)
- **Embedded map placeholder** (static map image or Google Maps iframe)

---

### 7. `book-appointment/page.tsx` — Book Appointment ⚡ CRITICAL

This is the **most important page**. When submitted, it must redirect to WhatsApp.

#### Form Layout
Split into **two visual cards** side by side (stacked on mobile):

**Card 1 — Personal Information** (`bg-white rounded-3xl shadow p-8`):
- Full Name (text input)
- Email Address (email input)
- Phone Number (tel input) ← **this will be sent to WhatsApp**
- Date of Birth (date input)

**Card 2 — Appointment Details** (`bg-white rounded-3xl shadow p-8`):
- Service Needed (select dropdown — all services from Our Services page)
- Preferred Date (date input — disable past dates)
- Preferred Time (select: 9:00 AM, 9:30 AM, 10:00 AM ... 5:30 PM in 30-min slots)
- Special Notes / Concerns (textarea)

**Below both cards — full-width:**
- Terms checkbox: "I agree to the terms and appointment policies"
- Submit button: `bg-[#005155] text-white rounded-full w-full py-4 text-lg font-semibold hover:bg-[#134E4A]`
  - Button text: "Confirm Appointment →"

#### ✅ WhatsApp Redirect Logic

```typescript
// components/WhatsAppRedirect.ts

export const WHATSAPP_NUMBER = "9779800000000"; // ← REPLACE with real WhatsApp number (include country code, no + sign)

export function buildWhatsAppMessage(formData: {
  name: string;
  email: string;
  phone: string;
  dob: string;
  service: string;
  date: string;
  time: string;
  notes: string;
}): string {
  const message = `
🦷 *New Appointment Request — SmileCraft Dental*

👤 *Patient Name:* ${formData.name}
📧 *Email:* ${formData.email}
📞 *Phone:* ${formData.phone}
🎂 *Date of Birth:* ${formData.dob}

🔹 *Service:* ${formData.service}
📅 *Preferred Date:* ${formData.date}
⏰ *Preferred Time:* ${formData.time}
📝 *Notes:* ${formData.notes || "None"}

_Sent from SmileCraft website_
  `.trim();

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
```

```typescript
// In AppointmentForm.tsx — onSubmit handler
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  
  // Validate form fields first
  if (!formData.name || !formData.phone || !formData.service || !formData.date || !formData.time || !agreed) {
    setError("Please fill all required fields and agree to terms.");
    return;
  }

  // Build WhatsApp URL and redirect
  const url = buildWhatsAppMessage(formData);
  window.open(url, "_blank"); // opens WhatsApp in new tab
};
```

> ⚠️ **Replace `9779800000000`** with the actual WhatsApp business number (include country code, no + sign, no spaces). Example Nepal number: `9779841234567`

---

## 🧩 Component Specs

### `<ServiceCard />` props:
```typescript
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
}
```

### `<TestimonialCard />` props:
```typescript
interface TestimonialCardProps {
  name: string;
  initials: string;
  rating: number; // 1-5
  quote: string;
  service: string;
  date: string;
}
```

### `<TeamCard />` props:
```typescript
interface TeamCardProps {
  name: string;
  specialty: string;
  bio: string;
  imageUrl: string;
}
```

---

## 🎨 Tailwind Config Extension

Add to `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#005155',
        dark: '#134E4A',
        mid: '#0F766E',
        light: '#AEEFE6',
      },
      neutral: {
        bg: '#F8F9FA',
        section: '#F3F4F5',
        card: '#EDEEEF',
        dark: '#191C1D',
        mid: '#3E4949',
        muted: '#64748B',
      },
      accent: '#EAB308',
    },
    fontFamily: {
      serif: ['DM Serif Display', 'serif'],
      sans: ['Inter', 'sans-serif'],
    },
    borderRadius: {
      '4xl': '2rem',
    },
  },
},
```

Add fonts in `app/layout.tsx`:
```typescript
import { DM_Serif_Display, Inter } from 'next/font/google';

const dmSerif = DM_Serif_Display({ subsets: ['latin'], weight: '400' });
const inter = Inter({ subsets: ['latin'] });
```

---

## 📐 Responsive Breakpoints

| Breakpoint | Layout |
|------------|--------|
| Mobile `< 768px` | Single column, stacked sections |
| Tablet `768–1024px` | 2-column grids |
| Desktop `> 1024px` | Full multi-column layout |

- Navbar collapses to hamburger on mobile
- Hero splits to column on mobile
- Service/team cards go from 3-col → 2-col → 1-col

---

## 🔧 Setup Commands

```bash
npx create-next-app@latest smilecraft --typescript --tailwind --eslint --app
cd smilecraft
npm install lucide-react framer-motion
npm run dev
```

---

## ✅ Final Checklist

- [ ] All 6 pages created and routed correctly
- [ ] Navbar links work with `next/link`
- [ ] WhatsApp number set in `WhatsAppRedirect.ts`
- [ ] Appointment form validates before submit
- [ ] WhatsApp message pre-filled with patient data
- [ ] Footer on every page
- [ ] Mobile responsive
- [ ] Teal color `#005155` used consistently for CTAs
- [ ] DM Serif Display for all headings
- [ ] Images use `next/image` with `alt` tags

---

## 💡 Notes for the AI Coding Assistant

1. **All text content** is in English. Copy section titles and descriptions exactly as described above.
2. **Images:** Use Unsplash placeholder URLs where indicated. Use `next/image` component.
3. **Icons:** Use `lucide-react` icons (Tooth, Calendar, Phone, Mail, MapPin, Star, ChevronRight, Menu, X, Users, Award, Clock, Shield).
4. **No backend logic needed.** The WhatsApp redirect IS the "form submission" action.
5. Keep components small and reusable. Extract repeated patterns into components.
6. Use `'use client'` directive for interactive components (form, mobile menu).
7. The booking form page is the **most critical** — ensure it works correctly and submits to WhatsApp.