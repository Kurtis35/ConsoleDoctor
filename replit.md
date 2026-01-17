# Console Doctor

## Overview

Console Doctor is a modern, high-converting marketing website for a gaming console repair business. The site is designed to showcase repair services, display fixed pricing, build trust with gamers, and encourage quote requests. It features a dark theme with neon green and blue accents, gaming-inspired design, smooth animations, and is fully responsive with a mobile-first approach.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS with custom gaming-themed dark mode design
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Animations**: Framer Motion for smooth scroll animations and entry effects
- **State Management**: TanStack React Query for server state (currently minimal usage as site is primarily frontend-only)
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express 5
- **Language**: TypeScript with tsx for development
- **Build Tool**: Vite for frontend bundling, esbuild for server bundling
- **API Structure**: RESTful endpoints under `/api` prefix
- **Development**: Hot module replacement via Vite dev server

### Project Structure
```
├── client/           # Frontend React application
│   └── src/
│       ├── components/   # UI components including shadcn/ui
│       ├── pages/        # Page components (Home, 404)
│       ├── hooks/        # Custom React hooks
│       └── lib/          # Utilities and query client
├── server/           # Express backend
├── shared/           # Shared schemas and types
└── attached_assets/  # Static assets and design prompts
```

### Design System
- Dark theme base with CSS custom properties
- Primary color: Neon green (#39FF14)
- Secondary color: Neon cyan (#00FFFF)
- Font families: Rajdhani (display), Inter (body)
- Glass-card styling with subtle glow effects

### Path Aliases
- `@/*` → `./client/src/*`
- `@shared/*` → `./shared/*`
- `@assets` → `./attached_assets`

## External Dependencies

### Database
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema Location**: `shared/schema.ts`
- **Migrations**: Generated to `./migrations` directory
- **Connection**: Requires `DATABASE_URL` environment variable

### UI Component Libraries
- Radix UI primitives for accessible components
- react-icons for brand icons (PlayStation, Xbox, Nintendo)
- embla-carousel-react for carousel functionality
- cmdk for command palette
- vaul for drawer component
- react-day-picker for calendar

### Build & Development Tools
- Vite with React plugin
- Replit-specific plugins (runtime error overlay, cartographer, dev banner)
- PostCSS with Tailwind and Autoprefixer