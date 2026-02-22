# Ando Portfolio

## Overview
A Senior PM portfolio website for Ando, built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4. Features a premium design with impact metrics, case study project pages, career timeline, and smooth animations.

## Project Architecture
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4 via PostCSS + custom CSS animations
- **Structure**:
  - `src/app/` - Next.js app router pages (home, about, projects, fun-projects)
  - `src/app/projects/[slug]/` - Dynamic project detail/case study pages
  - `src/components/` - Shared client components (NavLink with active states)
  - `src/lib/` - Shared utilities (projects data)
  - `public/` - Static assets (SVGs, project images)

## Key Design Features
- Gradient hero section with "Open to opportunities" badge
- Impact metrics bar (MRR, years, products shipped, markets)
- Featured projects with key result highlights
- Timeline-grouped project listing with colored status badges
- Case study detail pages with numbered approach steps and checkmark results
- About page with experience timeline, skills grid, and contact section
- Active nav state indicator
- Smooth fade-in / slide-up animations

## Running
- **Dev**: `npx next dev -H 0.0.0.0 -p 5000`
- **Build**: `npm run build`
- **Start**: `npm run start`

## Recent Changes
- 2026-02-22: Initial Replit setup. Configured `allowedDevOrigins` in next.config.ts for Replit proxy compatibility.
- 2026-02-22: Full design overhaul for Senior PM portfolio - redesigned all pages with premium styling, animations, metrics, active nav states, social footer, and polished case study layouts.
