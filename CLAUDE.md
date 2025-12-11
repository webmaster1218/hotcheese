# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Hot Cheese is a Next.js 16 restaurant website for a Colombian hot dog and hamburger chain with multiple locations (Sabaneta, Envigado, Medellín, Boyacá). The site showcases their menu, locations, and business information in Spanish with a mobile-first responsive design.

## Development Commands

- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint checks

**Note**: No testing framework is currently configured for this project.

## Architecture

### Technology Stack
- **Next.js 16.0.4** with App Router
- **React 19.2.0** with TypeScript
- **Tailwind CSS v4** for styling
- **Lucide React** for icons
- **PWA-ready** with manifest.json

### Next.js App Router Structure
- Uses App Router (`src/app/`)
- Root layout in `src/app/layout.tsx` with Outfit font
- Main page as component composition in `src/app/page.tsx`
- Additional pages: `src/app/politicas/page.tsx` (Privacy Policy)
- Path aliases: `@/*` maps to `src/*`

### Component Architecture
The application follows a component-based architecture with clear separation:

**Core Components** (`src/components/`):
- `Header.tsx` - Sticky navigation with mobile hamburger menu (uses "use client")
- `Hero.tsx` - Hero section with call-to-action
- `MenuSection.tsx` - Comprehensive menu display (burgers, dogs, perras, drinks, additions)
- `Locations.tsx` - Multiple restaurant locations with addresses
- `Footer.tsx` - Site footer with contact information
- `WhatsAppButton.tsx` - Fixed WhatsApp integration for customer contact

### Data Management
All business data is centralized in `src/data/info.ts`:
- `BUSINESS_INFO` - Company name, Instagram, awards, operating hours
- `LOCATIONS` - Array of 5 restaurant locations with addresses and landmarks
- `MENU` - Structured menu with categories:
  - Burgers (Premium, Súper, Especial, Sencilla)
  - Dogs (American, with bacon, regular, mini)
  - Perras (larger hot dogs with cheese)
  - Bar items (toppings: cucumber, onion, jalapeño, guacamole)
  - Drinks (various sizes and brands)
  - Add-ons (extra meat, sausage, salad)
  - Guacamole pricing by weight

### Styling System
- **Tailwind CSS v4** with custom configuration
- **CSS Custom Properties** for consistent theming:
  - Primary: `#FFC107` (Amber)
  - Secondary: `#D32F2F` (Red)
  - Background: `#F9FAFB` (Light gray)
- **Outfit font** from Google Fonts for branding
- **Smooth scrolling** enabled
- **Mobile-first responsive design**

### Configuration Files
- `next.config.ts` - Basic Next.js configuration
- `tsconfig.json` - Strict TypeScript with ES2017 target
- `eslint.config.mjs` - ESLint with Next.js recommended rules + Core Web Vitals
- `postcss.config.mjs` - PostCSS for Tailwind processing
- `globals.css` - Global styles with Tailwind v4 imports

## Key Architectural Decisions

1. **Static Data Architecture**: All menu and location data is hardcoded in `src/data/info.ts` for fast load times and offline capabilities
2. **Component Composition**: Homepage is a simple composition of independent components
3. **Client-Server Split**: Only interactive components (Header, WhatsAppButton) use `"use client"` directive
4. **Progressive Web App**: Includes `manifest.json` for app-like mobile experience
5. **WhatsApp Integration**: Fixed button with pre-filled messages for easy ordering

## Development Notes
- Content-focused site with no external APIs or databases
- All data statically defined in `src/data/info.ts`
- Uses React 19 with latest Next.js features
- WhatsApp integration via `wa.me` links with pre-filled messages
- No testing framework currently configured
- ESLint passes with no errors