# Thoroughly Pro - Corporate Website

## Overview

This is a corporate website for Thoroughly Pro, a New Hampshire-based industrial and commercial facility maintenance company operating since 1983. The site serves as a B2B marketing platform targeting facility managers, featuring service information, regional coverage areas, testimonials, and a quote request system.

The application follows a full-stack TypeScript architecture with React frontend and Express backend, designed for professional credibility and lead generation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS with custom design tokens for brand colors (sky blue, green accents, slate neutrals)
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **State Management**: TanStack React Query for server state
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React

### Backend Architecture
- **Runtime**: Node.js with Express
- **API Design**: RESTful endpoints under `/api` prefix
- **Build System**: Vite for frontend, esbuild for server bundling
- **Development**: Hot module replacement via Vite dev server

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` (shared between client and server)
- **Validation**: Zod schemas generated from Drizzle schemas via drizzle-zod
- **Storage**: Currently uses in-memory storage (`MemStorage` class) with PostgreSQL schema ready for production

### Project Structure
```
client/           # React frontend application
  src/
    components/   # UI components (layout, home sections, shadcn/ui)
    data/         # Static data (services, areas, testimonials, site info)
    pages/        # Route page components
    hooks/        # Custom React hooks
    lib/          # Utilities and query client
server/           # Express backend
  routes.ts       # API route definitions
  storage.ts      # Data storage layer
  static.ts       # Static file serving
shared/           # Shared code between client and server
  schema.ts       # Database schema and TypeScript types
```

### Key Design Patterns
- **Component Composition**: Page components compose smaller section components (Hero, TrustBar, ServicesPreview, etc.)
- **Data-Driven UI**: Services, areas, and testimonials are defined in data files and rendered dynamically
- **Shared Types**: TypeScript interfaces defined in shared schema ensure type safety across frontend and backend
- **Path Aliases**: `@/` for client source, `@shared/` for shared code, `@assets/` for attached assets

## External Dependencies

### Database
- **PostgreSQL**: Primary database (requires `DATABASE_URL` environment variable)
- **Drizzle Kit**: Database migrations via `db:push` script

### UI Framework
- **Radix UI**: Headless component primitives for accessibility
- **shadcn/ui**: Pre-styled component collection (new-york style variant)
- **Tailwind CSS**: Utility-first CSS framework with custom configuration

### Frontend Libraries
- **TanStack React Query**: Server state management and caching
- **React Hook Form**: Form state management
- **Zod**: Runtime schema validation
- **Wouter**: Client-side routing
- **Embla Carousel**: Carousel functionality
- **date-fns**: Date formatting utilities

### Backend Libraries
- **Express**: HTTP server framework
- **connect-pg-simple**: PostgreSQL session store (available for session management)

### Development Tools
- **Vite**: Frontend build tool with React plugin
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Server bundling for production

### Replit-Specific
- **@replit/vite-plugin-runtime-error-modal**: Error overlay in development
- **@replit/vite-plugin-cartographer**: Development tooling
- **@replit/vite-plugin-dev-banner**: Development environment indicator