# TSELEM Design Guidelines

## Design Approach
**Reference-Based: Creative Studio Portfolio**
Drawing inspiration from Behance, Awwwards-winning photography studios, and premium creative agencies. The design emphasizes visual storytelling, portfolio showcase, and professional credibility while maintaining an artistic, gallery-like aesthetic.

## Core Design Principles
1. **Visual-First Experience**: Photography and videography work takes center stage
2. **Breathing Space**: Generous whitespace to let creative work shine
3. **Seamless Navigation**: Intuitive flow from discovery to booking
4. **Professional Trust**: Clean, sophisticated interface that builds credibility

---

## Typography System

**Primary Font**: Poppins (Google Fonts)
- Headlines (H1): 48px-72px, Weight 700, Tight letter-spacing (-0.02em)
- Subheadlines (H2): 36px-48px, Weight 600
- Section Titles (H3): 24px-32px, Weight 600
- Body Large: 18px-20px, Weight 400
- Body Regular: 16px, Weight 400, Line-height 1.6
- Small Text: 14px, Weight 400

**Secondary Font**: Montserrat for navigation, buttons, and UI elements
- Navigation: 14px, Weight 500, Uppercase, Letter-spacing 0.05em
- Buttons: 16px, Weight 600
- Captions: 13px, Weight 400

---

## Layout System

**Spacing Units**: Tailwind spacing of 4, 8, 12, 16, 24, 32 (p-4, m-8, gap-12, py-16, py-24, py-32)

**Containers**:
- Full-width sections: w-full with inner max-w-7xl
- Content sections: max-w-6xl mx-auto
- Text content: max-w-3xl for readability

**Grid Patterns**:
- Portfolio: Masonry grid (2 cols mobile, 3-4 cols desktop)
- Services: 2x2 grid desktop, stack mobile
- Testimonials: 3 columns desktop, 1 mobile
- Blog: 2-3 column card layout

---

## Color Application

**Bleu Nuit (#1b153f)**: Primary brand color
- Header/navigation background
- Footer background
- Primary buttons background
- Section dividers and accents
- Admin panel primary elements

**Rouge (#be1e2d)**: Accent and action color
- CTA buttons ("Réserver une séance", "Demander un devis")
- Hover states on primary interactions
- Active states on navigation
- Icons and highlights
- Important notifications

**Blanc (#ffffff)**: Clean canvas
- Main background for content sections
- Text on dark backgrounds
- Cards and elevated surfaces
- Form inputs background

**Supporting Neutrals** (derive from bleu nuit):
- Light gray: #f5f5f7 for alternate section backgrounds
- Medium gray: #6b7280 for secondary text
- Border gray: #e5e7eb for subtle dividers

---

## Component Library

### Navigation
- Fixed header with bleu nuit background
- Logo (white version) left-aligned
- Navigation items center-aligned in Montserrat uppercase
- "Réserver" CTA button in rouge on right
- Mobile: Hamburger menu with full-screen overlay

### Hero Section (Homepage)
- **Full-viewport height** (min-h-screen) with large background image
- Overlay gradient (bleu nuit to transparent, 70% opacity)
- Centered content: Large headline + subheadline + dual CTAs
- Primary CTA: Rouge button with backdrop-blur
- Secondary CTA: Outlined white button with backdrop-blur
- Scroll indicator at bottom

### Service Cards
- Clean white cards with subtle shadow on hover
- Icon at top (rouge accent color)
- Title in Poppins semibold
- Description in regular weight
- "En savoir plus" link in rouge

### Portfolio Grid
- Masonry layout with varying image heights
- Hover overlay: Bleu nuit 80% opacity revealing project title and category
- Click opens lightbox with project details
- Filter pills at top (All, Photo, Vidéo, Design)

### Testimonial Cards
- White cards with subtle border
- 5-star rating display (rouge stars)
- Client name and project type below
- Quote in italic, 18px
- Circular client photo (optional)

### Booking Form
- Multi-step wizard interface
- Step 1: Service type selection (visual cards)
- Step 2: Date picker + time slots grid
- Step 3: Duration selection (1h/2h/3h buttons)
- Step 4: Client information inputs
- Progress indicator at top
- Confirmation screen with calendar icon

### Contact Form
- Single column layout, max-w-2xl
- Clean input fields with bleu nuit borders on focus
- Large textarea for message
- Rouge submit button
- Success message with checkmark animation

### Blog
- Featured article: Large card with image left, content right
- Article grid: Image top, category tag, title, excerpt, date, "Lire la suite"
- Category tags in rouge with rounded corners
- Article page: Hero image, title overlay, clean reading experience

### Footer
- Bleu nuit background, white text
- 4-column layout: About, Quick Links, Contact Info, Social
- Social icons in white, hover to rouge
- Copyright and legal links at bottom

---

## Images Integration

### Hero Sections
- Homepage: Large dramatic photography/videography image (provided slider images)
- Services page: Split-screen with service imagery
- About page: Team photo or studio workspace

### Portfolio
- Showcase actual client work prominently
- Mix of photography and videography thumbnails
- High-resolution, professionally shot images

### Other Placements
- Service cards: Icon-based (no photos)
- Team section: Professional headshots, circular crops
- Testimonials: Optional client photos
- Blog: Featured images for each article

### Image Treatment
- Subtle vignette on large hero images
- Consistent aspect ratios within grids (3:2 for portfolio)
- Lazy loading for performance
- Alt text for accessibility

---

## Interactions & Animations

**Keep Minimal and Professional**:
- Smooth page transitions (300ms ease)
- Hover elevations on cards (translate-y 2-4px)
- Fade-in on scroll for sections (intersection observer)
- Smooth scroll behavior
- Loading states for form submissions
- No distracting animations on hero

**Button States**:
- Rouge buttons: Darken 10% on hover, scale(0.98) on active
- Outline buttons: Fill with rouge on hover
- Blur backdrop on hero buttons for readability

---

## Responsive Breakpoints

- Mobile: < 768px (single column, stacked navigation)
- Tablet: 768px-1024px (2 columns, adapted spacing)
- Desktop: > 1024px (full layout, multi-column grids)

**Mobile Priorities**:
- Hamburger navigation
- Touch-friendly tap targets (min 44px)
- Simplified hero (shorter height, smaller text)
- Stack all multi-column layouts
- Bottom-fixed booking CTA on scroll

---

## Admin Panel Design

- Sidebar navigation in bleu nuit
- Clean dashboard with metric cards
- Data tables with search/filter
- Form layouts consistent with public site
- Status indicators (confirmed/pending) in rouge/gray
- CRUD interfaces with clear actions