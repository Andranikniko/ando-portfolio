# Ando Portfolio

## Overview
A personal portfolio website for Ando, built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4. Showcases projects, fun projects, and an about page.

## Project Architecture
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4 via PostCSS
- **Structure**:
  - `src/app/` - Next.js app router pages (home, about, projects, fun-projects)
  - `src/lib/` - Shared utilities (projects data)
  - `public/` - Static assets (SVGs, project images)

## Running
- **Dev**: `npx next dev -H 0.0.0.0 -p 5000`
- **Build**: `npm run build`
- **Start**: `npm run start`

## Recent Changes
- 2026-02-22: Initial Replit setup. Configured `allowedDevOrigins` in next.config.ts for Replit proxy compatibility. Set up deployment config.
