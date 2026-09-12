# Product Requirements Document (PRD)
# Everything Hair by Prevail

## 1. Executive Summary and Vision

**Everything Hair by Prevail** is an upscale, boutique hair studio and wig concierge based in Lagos, Nigeria. The brand specializes in premium virgin and raw hair wigs, master wig transformations and revamping, bespoke hair styling, and precision braiding.

### The Core Value Proposition
"Your hair. Your confidence. Premium hair, professional styling, and transformations crafted to make every look yours."

### The Three Pillars
1. **SHOP:** Discover curated, high-grade virgin and raw human hair wigs with versatile textures and bespoke color options.
2. **TRANSFORM:** Give tired, tangled, or aged wigs a second life with professional detangling, deep conditioning, lace replacement, and restyling.
3. **STYLE:** Book in-studio or event styling, precision installs, and protective braided hairstyles.

### Strategic Objective
Bridge the gap between social media discovery (primarily TikTok and Instagram) and business conversion. Provide a high-touch, editorial digital storefront that builds trust, showcases undeniable before-and-after proof, streamlines inquiries, and converts visitors directly into WhatsApp chats and confirmed appointments.

---

## 2. Target Audience and User Personas

### Persona A: The Busy Professional (Wig Enthusiast)
* **Demographics:** Female, 24 to 42 years old, working in corporate, tech, or creative industries.
* **Pain Points:** Lacks time to wash, treat, and restyle wigs weekly. Owns multiple expensive wigs that look worn out.
* **Desires:** Reliable wig revamping with fast turnaround, seamless pickup/drop-off inquiry, and flawless styling for speaking gigs or events.
* **User Goal:** Book a revamp service or buy a ready-to-wear pre-plucked unit without hassle.

### Persona B: The Trendsetter (Social Media Shopper)
* **Demographics:** Female, 18 to 32 years old, active on TikTok and Instagram.
* **Pain Points:** Skeptical of hair vendors due to catfishing and poor lace quality online.
* **Desires:** Genuine visual proof, high-resolution videos, client testimonials, and transparent texture choices (Body Wave, Bone Straight, Deep Curl, Custom Color).
* **User Goal:** Browse lookbook, check product textures, and immediately chat on WhatsApp to confirm pricing and delivery.

### Persona C: The Bride / Event Client
* **Demographics:** Female, 22 to 38 years old, planning a wedding, birthday shoot, or gala.
* **Pain Points:** Needs guaranteed perfection for hair installation and bridal braiding.
* **Desires:** Elite craftsmanship, calm luxury experience, personalized consultation.
* **User Goal:** View editorial bridal/event portfolio and submit a date reservation inquiry.

---

## 3. Information Architecture and Site Map

```
Everything Hair by Prevail
├── Home (Index)
│   ├── Section 01: Hero Banner (Editorial visuals, core slogan, primary CTAs)
│   ├── Section 02: Brand Intro ("More Than Just Hair" + Founder Spotlight)
│   ├── Section 03: Core Services (Wigs, Wig Revamping, Styling, Braiding)
│   ├── Section 04: Featured Collections (Body Wave, Curly, Straight, Coloured)
│   ├── Section 05: Signature Transformation (Interactive Before/After Slider)
│   ├── Section 06: Prevail Lookbook (Filterable Digital Portfolio)
│   ├── Section 07: Client Trust & Reviews (Social Proof & Ratings)
│   ├── Section 08: TikTok Journey (Social Reel Grid & Community CTA)
│   ├── Section 09: Booking CTA Banner (Direct conversion strip)
│   └── Section 10: Footer (Links, studio hours, location, social handles)
├── Shop Hair (/shop)
│   ├── Texture Filtering (All, Straight, Body Wave, Curly, Coloured)
│   ├── Product Cards (Quick view, specifications, WhatsApp inquiry trigger)
│   └── Product Detail Modal (Image gallery, hair specs, direct WhatsApp order)
├── Services (/services)
│   ├── Wig Revamping Breakdown (Restoration, Deep Spa, Lace Revamp, Restyle)
│   ├── Hair Styling Breakdown (Lace install, silk press, volume curls, updos)
│   ├── Braiding Services (Knotless, goddess braids, French curls, cornrows)
│   └── Direct Service Booking Trigger
├── Our Work (/lookbook)
│   ├── Filterable Masonry Portfolio (All, Wigs, Revamps, Styling, Braids)
│   └── High-Resolution Zoom Lightbox with transformation notes
├── About (/about)
│   ├── Founder Journey ("Hair is Personal" by Prevail)
│   ├── Studio Philosophy & Craftsmanship Standards
│   └── Studio Location & Service Area (Lagos, Nigeria + Nationwide Delivery)
└── Contact & Booking (/contact)
    ├── Interactive Booking / Inquiry Form
    ├── WhatsApp Direct Connect Button
    ├── Studio FAQ Accordion
    └── Location & Operating Hours Map / Details
```

---

## 4. Feature Specifications

### 4.1. Navigation and Header
* **Desktop Navigation:** Sticky header with subtle blur background upon scroll. Left aligned brand monogram/logo, center-aligned luxury navigation links, right-aligned "Book Appointment" primary button.
* **Mobile Navigation:** Clean top bar with brand logo and hamburger trigger. Full-screen drawer overlay featuring staggered link animations and immediate WhatsApp contact button.
* **Persistent Mobile Bottom Bar:** Fixed bottom bar on viewports under 768px with quick actions: "Chat on WhatsApp" and "Book Service".

### 4.2. Interactive Before / After Wig Revamping Slider
* **Functionality:** Interactive drag slider allowing users to scrub left and right to reveal the "Before" (dry, tangled, unstyled hair) and "After" (glossy, revitalized, bouncy curls) states.
* **Touch Support:** Smooth gesture tracking on iOS and Android touch screens.

### 4.3. Shop and Hair Catalog
* **No Speculative Pricing:** Products utilize an "Enquire on WhatsApp" action with pre-populated custom messages (e.g., "Hello Prevail, I am interested in inquiring about the 24-inch Body Wave Wig").
* **Filter System:** Instant category switching without page reload.
* **Quick Detail Modal:** Clean slide-over or modal with zoomable product photos, hair grade, available lengths, density details, and care tips.

### 4.4. Lookbook and Digital Portfolio
* **Masonry Grid:** High-fashion editorial layout combining landscape and portrait formats.
* **Filter Pills:** Wigs, Revamps, Styling, Braids, Customer Looks.
* **Lightbox Modal:** Click-to-expand image with tags, service performed, and direct "Request This Look" action button.

### 4.5. Booking and Inquiry Engine
* **Service Selector:** Multi-option choice (Custom Wig, Wig Revamp, Hair Styling, Braiding, Bridal/Event).
* **Date & Details Picker:** Preferred appointment date selection and optional text notes.
* **Dual Submission Paths:**
  1. Interactive form submission with immediate confirmation state.
  2. One-click instant transfer to WhatsApp with formatted inquiry text.

### 4.6. Social Proof and TikTok Integration
* **Verified Reviews Carousel:** Testimonials highlighting wig longevity, revamp quality, and customer service.
* **TikTok Feed Grid:** Video-styled cards showing transformation clips, hair tips, and behind-the-scenes salon energy.

---

## 5. Technical Requirements

* **Framework:** React 18+ with TypeScript for type-safe, maintainable components.
* **Build Tool:** Vite for lightning-fast bundling and HMR.
* **Styling:** Modern Tailwind CSS with custom theme extensions for typography and luxury color tokens.
* **Icons:** Lucide React for consistent, lightweight vector iconography.
* **Animation & Motion:** Lightweight CSS keyframes and smooth transitions for peak mobile performance.
* **Responsive Breakpoints:**
  * Mobile: 360px to 639px
  * Tablet: 640px to 1023px
  * Desktop: 1024px to 1440px+
* **SEO & Metadata:** OpenGraph tags, semantic HTML5 landmarks, descriptive alt text for all hair assets, fast initial content paint.
