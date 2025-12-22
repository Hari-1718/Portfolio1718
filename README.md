# Portfolio1718 — Chinimilli Hari Prasad

Modern personal portfolio built with Next.js (App Router), React 19, TypeScript, and Tailwind CSS. It showcases projects, skills, achievements, and LeetCode activity with a fast, accessible UI.

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript) ![Tailwind](https://img.shields.io/badge/Tailwind%20CSS-4-38b2ac?logo=tailwindcss) ![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)

## Overview

- **Author:** Chinimilli Hari Prasad
- **GitHub:** [@Hari-1718](https://github.com/Hari-1718)
- **Repository:** [Portfolio1718](https://github.com/Hari-1718/Portfolio1718)
- **Resume:** Default at `public/ChinimilliHariPrasad.Resume.pdf` (configurable)

## Features

- Responsive layout with smooth, hardware-accelerated transitions
- Light/Dark theme toggle with persistent preference
- Sections: Home, About, Skills, Projects, Achievements, Contact
- LeetCode integration: stats, recent submissions, and submission calendar
- Accessible components (Radix primitives + shadcn/ui) and semantic markup

## Tech Stack

- Next.js 15 (App Router)
- React 19 + TypeScript 5
- Tailwind CSS 4 + `tailwindcss-animate`
- Radix UI primitives, shadcn-style components
- Recharts for visualizations

## Quick Start

Prerequisites: Node.js 18+ and npm.

```bash
# Install dependencies
npm install

# Start the dev server (Turbopack)
npm run dev

# Build and run production
npm run build
npm start
```

Open http://localhost:3000 to view the site.

### Scripts

- `dev`: Start Next.js dev server with Turbopack
- `build`: Production build
- `start`: Serve the production build
- `lint`: Lint the codebase
- `optimize-images`: Optimize images in `public/`
- `optimize-profile`: Compress large profile assets

## Configuration

Optional environment variables:

- `RESUME`: Path or URL to your resume PDF used in navbar/footer. Defaults to `/ChinimilliHariPrasad.Resume.pdf`.

Create a `.env.local` in the project root if you want to override defaults:

```env
# example
RESUME=/MyResume.pdf
```

## Project Structure

- `src/app`: Global styles, `layout`, routes, metadata
- `src/components`: UI building blocks and feature sections (Navbar, Projects, LeetCode, etc.)
- `src/hooks`: Custom hooks (`theme-colors`, `use-mobile`)
- `src/lib`: Utilities (`colors-registry`, `utils`)
- `public`: Static assets including images and resume PDF

## Deployment

Deploy on Vercel (recommended):

1. Import the GitHub repo `Hari-1718/Portfolio1718`.
2. Framework preset: Next.js.
3. Build command: `next build` (auto).
4. Output: `.next` (auto).
5. Add environment variables if needed (e.g., `RESUME`).

Docs: https://nextjs.org/docs/app/building-your-application/deploying

## CI

Basic GitHub Actions workflow is included at `.github/workflows/ci.yml` for install/build checks.

## License

MIT — see `LICENSE` for details.

---

Made with  by [Hari Prasad Chinimilli](https://github.com/Hari-1718)
