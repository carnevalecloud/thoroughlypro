# Design Guidelines: Thoroughly Pro Corporate Website

## Design Approach: Hybrid Industrial-Trust Model
**Primary Influence**: LinkedIn (B2B trust-building) + Stripe (clean professionalism) + industrial aesthetic
**Rationale**: B2B service targeting facility managers requires immediate credibility, clear value communication, and friction-free contact paths.

## Typography Hierarchy
- **Headings**: Inter 700 (Bold) - establish authority
  - H1: text-5xl lg:text-6xl (Hero statements)
  - H2: text-4xl lg:text-5xl (Section headers)
  - H3: text-2xl lg:text-3xl (Service/feature titles)
- **Body**: Inter 400 (Regular), text-base lg:text-lg
- **Accents**: Inter 600 (SemiBold) for CTAs, stats, emphasis
- **Line Height**: leading-tight for headlines, leading-relaxed for body

## Layout System
**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 (p-4, gap-8, py-20, etc.)
- Section Padding: py-16 lg:py-24 (generous vertical breathing room)
- Component Gap: space-y-8 or gap-6
- Container: max-w-7xl mx-auto px-6 lg:px-8
- Grid Systems: 2-column for features (md:grid-cols-2), 3-column for service cards (lg:grid-cols-3)

## Hero Section Design
**Layout**: Full-width hero with large background image overlay
- Image: Industrial facility (clean, modern manufacturing floor OR well-maintained commercial building exterior)
- Height: min-h-[600px] lg:min-h-[700px]
- Overlay: Dark gradient (from brand-dark 80% to transparent) for text readability
- Content Structure:
  - Headline: "New Hampshire's Trusted Industrial Facility Partner Since 1983"
  - Subheading: "Expert maintenance and cleaning for manufacturing, warehousing, and commercial facilities"
  - Dual CTAs: Primary "Request Walk-Through" (green button), Secondary "Call (603) 496-8229" (outlined)
  - Trust Badge: "Serving 100+ facilities across NH" with subtle icon

**Button Treatment on Hero**: 
- Buttons have backdrop-blur-sm with bg-opacity-90
- No hover/active states defined here (Button component handles)

## Page Structure & Sections

### Home Page (7 sections):
1. **Hero** (as above)
2. **Trust Bar**: Single-line stats/badges - "Since 1983 | 100+ Active Clients | Licensed & Insured" with Phosphor icons
3. **Services Preview**: 3-column grid (warehouse, broom, toolbox icons), short descriptions, "Learn More" links
4. **Regional Focus Map**: 4-column grid showing Keene, Upper Valley, Capital, Lake Sunapee regions with town lists
5. **Why Choose Us**: 2-column layout - left: numbered list of differentiators, right: industrial workspace image
6. **Testimonials**: 2-column cards with facility manager quotes, company names, locations
7. **CTA Section**: Split layout - left: contact form, right: phone number (large), address, business hours

### Services Page:
- Hero: Smaller (min-h-[400px]) with tools/equipment image
- Service Cards: Stacked cards with left-aligned icon, title, full description, bulleted features
- Each service includes relevant image (cleaning equipment, warehouse floor, maintenance work)

### About Page:
- Timeline layout showing company evolution since 1983
- Team section if applicable
- Certifications/credentials with badge visuals

## Component Design Principles

**Service Cards**:
- White background (bg-white) with subtle shadow (shadow-lg)
- Border-l-4 border-brand-green for accent
- Icon: Large Phosphor icon (text-5xl) in brand-blue
- Padding: p-8

**Testimonial Cards**:
- Light background (bg-slate-100)
- Quote marks as design element
- Company name in brand-dark, location in lighter slate
- Rounded corners (rounded-xl)

**Contact CTAs**:
- Phone numbers: Always clickable with tel: links
- Primary CTAs: bg-brand-green with hover:bg-brand-green-hover
- Secondary CTAs: border-2 border-brand-blue text-brand-blue

**Navigation**:
- Sticky top navbar with white background, shadow on scroll
- Logo: "THOROUGHLY" in brand-dark, "PRO" in brand-green
- Desktop: horizontal nav links, prominent "Get a Quote" button
- Mobile: hamburger menu

## Images Strategy
**Required Images**:
1. **Hero**: High-quality industrial facility photo (manufacturing floor, warehouse, or commercial building)
2. **Services Section**: 3 supporting images showing cleaning/maintenance work in progress
3. **Why Choose Us**: Professional workspace/facility image
4. **About Page**: Historical photos if available, otherwise team/facility photos

**Image Treatment**:
- All images: rounded-lg, object-cover
- Hero: Full-width with gradient overlay
- Content images: Aspect ratio 16:9 or 4:3 depending on context
- Lazy loading for performance

## Trust-Building Elements
- Certifications/badges in footer
- "Since 1983" prominently featured
- Client logos if available (industrial partners)
- Specific town/region mentions throughout
- Clear contact information on every page
- Response time promises ("We respond within 24 hours")

## Accessibility & Professional Polish
- High contrast ratios (dark text on light backgrounds)
- Focus states on all interactive elements
- Clear hierarchy with consistent spacing
- Professional photography (avoid stock photos that look generic)
- Mobile-first responsive design with touch-friendly targets (min 44px)