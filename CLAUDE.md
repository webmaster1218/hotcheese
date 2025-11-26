# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Hot Cheese is a Next.js 16 restaurant website for a Colombian hot dog and hamburger chain with multiple locations. The site showcases their menu, locations, and business information in Spanish.

## Development Commands

- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint checks

**Note**: No testing framework is currently configured for this project.

## Architecture

### Next.js App Router Structure
- Uses Next.js 16 with App Router (`src/app/`)
- Root layout in `src/app/layout.tsx` with Outfit font
- Main page structure in `src/app/page.tsx` as a component composition
- Path aliases configured: `@/*` maps to `src/*`

### Component Architecture
The application follows a component-based architecture with clear separation:

**Core Components** (`src/components/`):
- `Header.tsx` - Sticky navigation with mobile hamburger menu (uses "use client")
- `Hero.tsx` - Main hero section
- `MenuSection.tsx` - Menu display (burgers, dogs, perras, drinks, additions)
- `Locations.tsx` - Multiple restaurant locations display
- `Footer.tsx` - Site footer
- `WhatsAppButton.tsx` - Fixed position WhatsApp contact button with chat integration

### Data Management
All business data is centralized in `src/data/info.ts`:
- `BUSINESS_INFO` - Company name, Instagram, awards, hours
- `LOCATIONS` - Array of 5 restaurant locations with addresses
- `MENU` - Structured menu data with burgers, dogs, perras, bar items, drinks, additions, and guacamole pricing

### Styling
- Uses Tailwind CSS v4 with custom configuration
- Global styles in `src/app/globals.css` with CSS custom properties for theming
- Color scheme: Primary (#FFC107 - Amber), Secondary (#D32F2F - Red), Background (#F9FAFB)
- Outfit font from Google Fonts integrated
- Smooth scrolling behavior enabled

### TypeScript Configuration
- Strict TypeScript enabled
- ES2017 target with modern module resolution
- Next.js plugin integration for type checking
- Path aliases configured for clean imports

## Key Features
- Multi-location restaurant information display
- Comprehensive menu with pricing and descriptions
- WhatsApp integration for customer contact
- Responsive design with Tailwind CSS
- Spanish-language content for Colombian market

## Development Notes
- The site is content-focused with no external APIs or databases
- All menu items and location data are statically defined in `src/data/info.ts`
- Uses React 19 with latest Next.js features
- Interactive components use `"use client"` directive for client-side functionality
- WhatsApp integration implemented via `wa.me` links with pre-filled messages
- ESLint configured with Next.js recommended rules and Core Web Vitals
- No testing framework currently configured