# Developer Portfolio

A modern, premium frontend developer portfolio built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and Shadcn UI.

## Features

- Dark theme by default with light/dark mode toggle
- Glassmorphism design with gradient accents
- Smooth scroll reveal animations (Framer Motion)
- Scroll progress bar
- Responsive layout for all screen sizes
- SEO and Open Graph metadata
- Loading skeletons
- Contact form with validation
- Project filtering by category
- Animated skills and experience timeline

## Tech Stack

- **Framework:** Next.js 15+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **UI Components:** Shadcn UI (custom)
- **Icons:** Lucide React
- **Theming:** next-themes

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/       # React components
│   └── ui/           # Shadcn UI components
├── hooks/            # Custom React hooks
├── lib/              # Utilities, data, validations
└── styles/           # Global CSS
public/               # Static assets
```

## Customization

Edit `src/lib/data.ts` to update your personal information, projects, skills, and timeline entries.

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run start` — Start production server
- `npm run lint` — Run ESLint
