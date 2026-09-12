# Design System and UI Specification File
# Everything Hair by Prevail

## 1. Brand Aesthetics & Visual Philosophy

The visual design system for **Everything Hair by Prevail** is rooted in modern luxury, editorial warmth, and quiet confidence. It intentionally avoids cheap neon tones or excessive pinks in favor of rich espresso browns, warm ivory, soft taupe, and champagne gold accents.

### Design Principles
1. **Editorial Sophistication:** High contrast typography with elegant serifs paired with clean geometric sans-serifs.
2. **Generous White Space:** Uncluttered layouts that allow imagery of hair textures and transformations to command full attention.
3. **Tactile Interaction:** Subtle micro-interactions, smooth hover lifts, and clean image fades without overwhelming motion.
4. **Mobile Excellence:** Frictionless thumb-zone navigation, compact card structures, and direct WhatsApp touchpoints.

---

## 2. Color Palette & Design Tokens

### 2.1. Primary Palette

| Token Name | Hex Code | RGB | HSL | Semantic Role |
| :--- | :--- | :--- | :--- | :--- |
| `ivory-canvas` | `#FAF8F5` | `250, 248, 245` | `36, 25%, 97%` | Main page background |
| `ivory-surface` | `#F4EFEA` | `244, 239, 234` | `30, 29%, 94%` | Card background, elevated panels |
| `ivory-elevated` | `#EDE4DA` | `237, 228, 218` | `32, 33%, 89%` | Hover states, inner containers |
| `espresso-deep` | `#1A110D` | `26, 17, 13` | `18, 33%, 8%` | Primary dark background, text, headers |
| `espresso-rich` | `#2D1E17` | `45, 30, 23` | `19, 32%, 13%` | Dark card backgrounds, secondary dark |
| `espresso-muted` | `#453228` | `69, 50, 40` | `21, 27%, 21%` | Dark borders, subtle dark surfaces |

### 2.2. Accent & Neutral Palette

| Token Name | Hex Code | RGB | HSL | Semantic Role |
| :--- | :--- | :--- | :--- | :--- |
| `gold-champagne` | `#C5A880` | `197, 168, 128` | `35, 39%, 64%` | Primary accent, luxury badges, borders |
| `gold-bright` | `#D4AF37` | `212, 175, 55` | `46, 65%, 52%` | Star ratings, highlight tags, icons |
| `gold-soft` | `#E8D8C3` | `232, 216, 195` | `34, 46%, 84%` | Subtle gold backgrounds, button borders |
| `taupe-warm` | `#8C7E74` | `140, 126, 116` | `25, 9%, 50%` | Secondary body text, captions, subtitles |
| `taupe-light` | `#D2C7BE` | `210, 199, 190` | `27, 19%, 78%` | Dividers, neutral outlines |
| `near-black` | `#120E0C` | `18, 14, 12` | `20, 20%, 6%` | Highest contrast text on light canvas |
| `pure-white` | `#FFFFFF` | `255, 255, 255` | `0, 0%, 100%` | Clean image backdrops, modal cards |

---

## 3. Typography Hierarchy & Exact Sizes

### 3.1. Font Families
* **Display / Headings (Serif):** `Playfair Display`, `Cormorant Garamond`, `serif`
* **Body / Interface / Numbers (Sans-Serif):** `Plus Jakarta Sans`, `Inter`, `-apple-system`, `sans-serif`

### 3.2. Type Scale Specifications

| Level | Size (px) | Size (rem) | Line Height | Letter Spacing | Font Weight | Font Family | Usage |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Display** | 64px | 4.00rem | 1.10 (70px) | -0.025em | 600 (SemiBold) | Serif | Homepage main hero headline |
| **Section Title H1** | 44px | 2.75rem | 1.15 (51px) | -0.020em | 600 (SemiBold) | Serif | Page titles, primary section headers |
| **Section Title H2** | 32px | 2.00rem | 1.20 (38px) | -0.015em | 600 (SemiBold) | Serif | Card group titles, service headers |
| **Subhead H3** | 24px | 1.50rem | 1.25 (30px) | 0.000em | 500 (Medium) | Serif | Product titles, service titles |
| **Subhead H4** | 20px | 1.25rem | 1.30 (26px) | 0.000em | 600 (SemiBold) | Sans | Modal subheads, list headings |
| **Body Large** | 18px | 1.125rem | 1.60 (29px) | 0.000em | 400 (Regular) | Sans | Intro lead paragraphs, blockquotes |
| **Body Regular** | 16px | 1.00rem | 1.60 (26px) | 0.000em | 400 (Regular) | Sans | Default body copy, descriptions |
| **Body Small** | 14px | 0.875rem | 1.50 (21px) | 0.005em | 400 / 500 | Sans | Metadata, product specs, notes |
| **Micro / Tag** | 12px | 0.75rem | 1.40 (17px) | 0.080em | 600 (SemiBold) | Sans | Category tags, uppercase labels |
| **Overline Eyebrow** | 11px | 0.6875rem | 1.30 (14px) | 0.150em | 700 (Bold) | Sans (Uppercase) | Section pill labels (e.g. "TRANSFORM") |

---

## 4. Spacing, Grid, and Layout System

### 4.1. 4px Base Spacing Scale

| Spacing Token | Pixels | Rem Equivalent | Common Usage |
| :--- | :--- | :--- | :--- |
| `space-1` | 4px | 0.25rem | Tight badge padding, micro gaps |
| `space-2` | 8px | 0.50rem | Icon to text spacing, button gap |
| `space-3` | 12px | 0.75rem | Input internal padding, chip padding |
| `space-4` | 16px | 1.00rem | Standard mobile gutter, card padding |
| `space-6` | 24px | 1.50rem | Desktop card padding, header item gap |
| `space-8` | 32px | 2.00rem | Grid gap, section header bottom margin |
| `space-12` | 48px | 3.00rem | Medium section vertical rhythm |
| `space-16` | 64px | 4.00rem | Large section spacing on tablet |
| `space-20` | 80px | 5.00rem | Standard desktop section padding |
| `space-24` | 96px | 6.00rem | Hero padding, prominent dividers |
| `space-32` | 128px | 8.00rem | Maximum section separation |

### 4.2. Layout Breakpoints & Containers

| Viewport Tier | Width Range | Container Max Width | Page Side Padding | Grid Columns |
| :--- | :--- | :--- | :--- | :--- |
| **Mobile (Small)** | 360px to 479px | 100% | 16px (1.0rem) | 4 |
| **Mobile (Large)** | 480px to 639px | 100% | 20px (1.25rem) | 4 |
| **Tablet** | 640px to 1023px | 720px to 960px | 24px (1.5rem) | 8 |
| **Desktop** | 1024px to 1279px | 1120px | 32px (2.0rem) | 12 |
| **Wide Desktop** | 1280px to 1536px | 1280px | 40px (2.5rem) | 12 |
| **Ultra Wide** | 1536px+ | 1400px | 48px (3.0rem) | 12 |

---

## 5. Component Dimensions and Specifications

### 5.1. Navigation Bar
* **Desktop Height:** 80px
* **Mobile Height:** 64px
* **Background:** `rgba(250, 248, 245, 0.92)` with `backdrop-filter: blur(12px)`
* **Border Bottom:** 1px solid `rgba(210, 199, 190, 0.35)`
* **Logo Dimensions:** 38px height (monogram icon + stylized serif typography)
* **Link Font Size:** 13px, weight 500, letter-spacing 0.05em, uppercase

### 5.2. Buttons

#### Button Variant A: Primary Dark
* **Height:** 48px (Mobile: 44px)
* **Padding:** 0 28px
* **Background:** `#1A110D` (Deep Espresso)
* **Text Color:** `#FAF8F5` (Warm Ivory)
* **Border:** 1px solid `#1A110D`
* **Border Radius:** 2px (Sharp luxury finish)
* **Typography:** 12px, Weight 600, Letter-spacing 0.12em, Uppercase
* **Hover State:** Background `#3E2723`, border `#3E2723`, subtle translateY(-1px)

#### Button Variant B: Secondary Outline
* **Height:** 48px (Mobile: 44px)
* **Padding:** 0 28px
* **Background:** `transparent`
* **Text Color:** `#1A110D`
* **Border:** 1px solid `#8C7E74`
* **Border Radius:** 2px
* **Typography:** 12px, Weight 600, Letter-spacing 0.12em, Uppercase
* **Hover State:** Background `#FAF8F5`, border `#1A110D`, text `#1A110D`

#### Button Variant C: Gold Accent / WhatsApp
* **Height:** 48px
* **Padding:** 0 24px
* **Background:** `#25D366` / `#C5A880` (Champagne Gold / WhatsApp Emerald)
* **Text Color:** `#FFFFFF` / `#1A110D`
* **Border Radius:** 2px
* **Icon Size:** 18px by 18px

### 5.3. Service Cards
* **Dimensions:** Min-height 360px, width 100%
* **Padding:** 28px (Mobile: 20px)
* **Background:** `#F4EFEA`
* **Border:** 1px solid `#E8DFD8`
* **Border Radius:** 4px
* **Card Image Aspect Ratio:** 16:10 or 4:3
* **Number Badge:** 13px serif in `gold-champagne` font (e.g. "01")

### 5.4. Product Cards
* **Image Aspect Ratio:** 4:5 (Editorial portrait ratio)
* **Card Padding:** 16px bottom, 0px side
* **Image Border Radius:** 3px
* **Image Hover Effect:** Scale 1.04 with 500ms ease-out curve
* **Tag Badge:** Top-left positioned, 10px font size, uppercase, background `rgba(26, 17, 13, 0.75)` with white text

### 5.5. Before / After Transformation Slider
* **Desktop Container Height:** 540px
* **Mobile Container Height:** 380px
* **Handle Width:** 40px diameter circular button with dual arrows
* **Divider Line:** 2px solid `#FFFFFF` with soft box shadow
* **Labels:** Floating "BEFORE" and "AFTER" pills (10px uppercase, backdrop blur)

### 5.6. Lookbook Masonry Cards
* **Column Count:** 3 on Desktop (1024px+), 2 on Tablet (640px to 1023px), 1 on Mobile (<640px)
* **Item Heights:** Alternating heights (320px, 420px, 480px, 360px)
* **Overlay on Hover:** Dark gradient overlay from bottom with category tag and "View Look" prompt

### 5.7. Mobile Persistent Bottom Action Bar
* **Height:** 64px + safe-area-inset-bottom
* **Position:** Fixed, bottom 0, left 0, right 0, z-index 50
* **Background:** `rgba(26, 17, 13, 0.95)` with backdrop blur 16px
* **Border Top:** 1px solid `rgba(197, 168, 128, 0.3)`
* **Layout:** Dual equal-width actions ("Chat WhatsApp" and "Book Appointment")

---

## 6. Elevation, Borders, and Radii

### 6.1. Box Shadows
* **Subtle Card Shadow:** `0 2px 8px -2px rgba(26, 17, 13, 0.05)`
* **Hover Elevated Shadow:** `0 12px 24px -6px rgba(26, 17, 13, 0.08), 0 4px 8px -2px rgba(26, 17, 13, 0.04)`
* **Modal Overlay Shadow:** `0 24px 48px -12px rgba(18, 14, 12, 0.25)`

### 6.2. Border Radii
* **Ultra-sharp Luxury:** `2px` (Buttons, badges, form inputs)
* **Soft Card:** `4px` (Service cards, lookbook images, dialogs)
* **Pill:** `9999px` (Status badges, filter tabs, floating indicator)

---

## 7. Interactive States and Micro-Animations

1. **Page Transitions:** Fade in with 0.99 to 1.00 opacity scale over 350ms.
2. **Card Hover:** Subtle upward transform `translateY(-4px)` with shadow depth increase.
3. **Image Zoom:** Inner image container scale `transform: scale(1.03)` with `transition: transform 600ms cubic-bezier(0.16, 1, 0.3, 1)`.
4. **Button Hover:** Background color transition over 200ms with arrow icon slide `translateX(4px)`.
5. **Modal Opening:** Fade background overlay in 250ms, scale modal from 0.97 to 1.00 in 300ms.
