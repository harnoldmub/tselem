# TSELEM - Chaque Pixel Compte

## Overview

TSELEM is a professional photography and video production studio website built as a showcase and booking platform. The application serves as a complete web presence for a creative studio specializing in photography, videography, graphic design, and custom packages. It features a public-facing portfolio site with integrated appointment booking, blog content management, and client testimonials.

The application is a full-stack web platform designed for the French-speaking market (primarily Côte d'Ivoire), emphasizing visual storytelling and professional credibility through a clean, sophisticated interface inspired by premium creative agency portfolios.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

### November 5, 2025 - Session 2
- **Case Studies Detail Pages**: Created dynamic case study detail pages with full project information
  - Route added: `/etudes-de-cas/:id` displays complete case study with gallery, challenge, solution, and results
  - Each case study includes client info, project type, images gallery, and call-to-action
  - CaseStudyDetail component with responsive design and smooth animations
- **Testimonials System**: Full testimonials management with admin validation
  - Database table `testimonials` created with fields: name, role, company, avatar, rating, message, projectType, isApproved
  - Storage interface methods: createTestimonial, getTestimonials, getApprovedTestimonials, approveTestimonial, deleteTestimonial
  - API routes: GET /api/testimonials (public approved only), GET /api/admin/testimonials (admin all), PATCH /api/admin/testimonials/:id/approve, DELETE /api/admin/testimonials/:id
  - AdminDashboard enhanced with tabs: Messages and Témoignages with badge counters for pending items
- **Booking System Enhanced**: Smart time slot management respecting business hours and current time
  - Time slots filter based on selected duration to prevent booking beyond 18h
  - For today's bookings, only shows future time slots (minimum 1h ahead)
  - Duration selection now updates available time slots dynamically
  - Visual feedback when no slots available for selected date/duration combination
- **Email Safety Guard**: Added validation in sendContactNotificationEmail to prevent errors when RESEND_API_KEY is missing
- **InstagramVideo Accessibility**: Full keyboard, touch, and mouse accessibility
  - Keyboard navigation: Container is focusable (tabIndex={0}), controls appear on focus
  - Touch devices: Tap video to toggle controls overlay
  - Mouse devices: Hover to reveal controls
  - ARIA labels for all interactive buttons with dynamic state announcements

### November 5, 2025 - Session 1
- **Blog System**: Complete blog implementation with database-backed posts, individual article pages (/blog/:slug), rich HTML content support
  - Three seed articles published on photography tips, wedding packages, and video trends
  - Fixed blog image display by configuring static asset serving for /attached_assets
  - BlogCard component uses slug-based test IDs for reliable testing
- **Email Configuration**: Resend API integrated with mbote@tselem.studio as sender for contact form notifications
  - Simplified email.ts to use direct API key from environment variable
  - Contact form emails sent to contact@tselemrdc.com
- **Instagram Video Component**: Created InstagramVideo component for 5100x1080 format videos
  - Supports autoplay, mute/unmute, play/pause controls
  - Responsive design with overlay controls on hover/touch/keyboard
  - Ready for local video export integration (see VIDEO_INSTAGRAM_GUIDE.md)
- **Static Assets**: Server configured to serve attached_assets directory for images and videos
- **Bug Fixes**: HomeSlider navigation buttons fixed using useCallback, ScrollToTop verified working

## System Architecture

### Frontend Architecture

**Framework**: React 18+ with TypeScript, using Vite as the build tool and development server.

**Routing**: Client-side routing implemented with Wouter, a lightweight alternative to React Router. Routes include:
- Home (`/`)
- About (`/apropos`)
- Services (`/services`)
- Portfolio (`/portfolio`)
- Testimonials (`/temoignages`)
- Blog (`/blog`)
- Blog Post (`/blog/:slug`)
- Contact (`/contact`)
- Booking (`/rendez-vous`)

**UI Component System**: Built on shadcn/ui with Radix UI primitives, providing a comprehensive set of accessible, customizable components. The design system uses the "new-york" style variant with Tailwind CSS for styling.

**Design Philosophy**: Visual-first experience drawing inspiration from Behance and Awwwards-winning creative studios. The design emphasizes generous whitespace, seamless navigation, and professional trust-building. Typography uses Poppins for headlines and Montserrat for UI elements, with Cormorant Garamond as a decorative secondary font.

**State Management**: TanStack Query (React Query) v5 for server state management, with queries configured for pessimistic updates (no automatic refetching).

**Animations**: Framer Motion for page transitions, scroll animations, and interactive elements.

**Color System**: Custom CSS variables-based theming with support for light and dark modes, focusing on a neutral base color palette with destructive accents (likely red/coral for CTAs).

### Backend Architecture

**Runtime**: Node.js with Express.js framework running in ESM mode.

**Server Structure**: Minimal API surface with routes registered through a centralized `registerRoutes` function. The server implements blog management, contact form handling with email notifications, and booking functionality.

**Storage Layer**: Implements a storage interface pattern (`IStorage`) with both in-memory (`MemStorage`) and PostgreSQL implementations. The abstraction allows easy switching between storage backends without changing business logic.

**Development Server**: Integration with Vite's middleware mode for hot module replacement during development. Production builds serve static assets from the compiled `/dist/public` directory.

**Session Management**: Infrastructure in place for connect-pg-simple session storage (PostgreSQL-backed sessions).

**Static Assets**: Express static middleware configured to serve `/attached_assets` directory for images and videos.

### Data Architecture

**Database ORM**: Drizzle ORM configured for PostgreSQL dialect with Neon serverless driver using WebSocket connections.

**Schema Design**: Centralized schema definitions in `shared/schema.ts` using Drizzle's table definitions and Zod for runtime validation. Current schema includes:
- Users table with UUID primary keys, bcrypt-hashed passwords
- Blog posts table with UUID IDs, unique slugs, rich HTML content, categories, and publication flags

**Type Safety**: Full TypeScript coverage with shared types between frontend and backend. Drizzle generates type-safe database access, and Zod schemas provide runtime validation aligned with database schema.

**Migrations**: Drizzle Kit configured for schema migrations in the `/migrations` directory.

### Design System Architecture

**Spacing**: Tailwind's default spacing scale (multiples of 4px: 4, 8, 12, 16, 24, 32).

**Layout Patterns**:
- Full-width sections with constrained inner content (max-w-7xl)
- Portfolio uses masonry grid (2-4 columns responsive)
- Services displayed in 2x2 grid
- Testimonials in 3-column layout
- Blog cards in 2-3 column layout

**Component Patterns**:
- Reusable Hero component for consistent page headers
- Shared Header/Footer across all pages
- Modular section components (ServicesSection, TestimonialsSection, PortfolioGrid)
- Form components for booking and contact
- InstagramVideo component for ultra-wide format videos (5100x1080)

**Responsive Strategy**: Mobile-first approach with breakpoint-specific layouts (mobile stack, desktop multi-column).

### Asset Management

**Static Assets**: Images and videos stored in `/attached_assets` directory with Express static middleware serving them at `/attached_assets/*` URLs.

**Asset Types**:
- Logo variations (white for dark backgrounds)
- Hero images for different pages
- Generated placeholder images for portfolio, services, and testimonials
- Team photos
- Blog post featured images
- Video files (MP4, WebM) for Instagram-format showcases

**Import Aliases**: Vite configured with `@assets` alias for importing static assets in components.

## External Dependencies

### Database

**Neon Serverless PostgreSQL**: Serverless PostgreSQL database accessed via WebSocket connections using `@neondatabase/serverless`. Requires `DATABASE_URL` environment variable.

**Rationale**: Serverless PostgreSQL provides scalability and cost-effectiveness for a portfolio site with variable traffic. WebSocket-based connections work well in serverless environments.

### Email Service

**Resend**: Email delivery service for contact form notifications and transactional emails. Requires `RESEND_API_KEY` environment variable.

**Configuration**: 
- Sender email: mbote@tselem.studio
- Recipient: contact@tselemrdc.com
- Used for contact form submissions

### UI Framework

**shadcn/ui + Radix UI**: Comprehensive component library built on Radix UI primitives. Provides 30+ accessible, customizable components including dialogs, dropdowns, forms, navigation, and data display components.

**Tailwind CSS**: Utility-first CSS framework with custom configuration for the design system. PostCSS pipeline includes autoprefixer.

**Rationale**: shadcn/ui provides copy-paste components that remain fully customizable, avoiding vendor lock-in while maintaining consistency. Radix UI ensures accessibility compliance.

### Client-Side Libraries

**TanStack Query**: Server state management with caching, background refetching, and optimistic updates.

**Wouter**: Lightweight routing library (only ~1.5KB) chosen over React Router for simplicity.

**Framer Motion**: Animation library for smooth page transitions and interactive elements.

**React Hook Form + Zod**: Form state management with schema validation for booking and contact forms.

**date-fns**: Date manipulation library for formatting and calendar functionality.

**Embla Carousel**: Carousel/slider component for portfolio galleries.

**Rationale**: Modern, lightweight libraries chosen to minimize bundle size while providing essential functionality. React Hook Form + Zod integration provides type-safe form validation.

### Development Tools

**Vite**: Build tool and development server providing fast HMR and optimized production builds.

**TypeScript**: Full type safety across the entire stack with strict mode enabled.

**ESBuild**: Used for server-side bundling in production builds.

**Drizzle Kit**: Database migration and schema management tool.

**Replit-specific Plugins**: Runtime error overlay, cartographer (development tools), and dev banner for Replit environment integration.

### Deployment Platform

**Replit**: The application is designed to run on Replit's platform with `.replit.dev` URLs. The stack is optimized for Replit's Node.js environment with automatic database provisioning.

### Notable Architectural Decisions

**Monorepo Structure**: Client and server code in the same repository with shared types and schemas in `/shared` directory. This simplifies type sharing and deployment.

**Path Aliases**: Configured aliases (`@/`, `@shared/`, `@assets/`) for clean imports across the codebase.

**SSR Strategy**: Client-side rendering only (no SSR/SSG). The `rsc: false` configuration indicates no React Server Components.

**Email Strategy**: Resend integration configured with API key (RESEND_API_KEY) and sender email mbote@tselem.studio for contact form notifications.

**Image Storage**: Currently using local file storage in `/attached_assets`. Production might require migration to cloud storage (Cloudinary or Firebase Storage mentioned in requirements).

**Video Strategy**: InstagramVideo component created for ultra-wide format videos (5100x1080). Videos stored locally in `/attached_assets` and served statically. See VIDEO_INSTAGRAM_GUIDE.md for integration details.

**Authentication**: JWT or Passport.js authentication planned for admin functionality, but not yet implemented. OAuth2 Google integration mentioned in requirements.
