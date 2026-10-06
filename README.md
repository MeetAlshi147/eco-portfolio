# Meet Mahesh Alshi — Portfolio

A premium, soft-pastel eco-tech portfolio built with **Next.js (App
Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Themed
around AI/ML, Robotics and E-Waste Management & Sustainability.

## Tech stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- next-themes (dark / light mode)
- lucide-react (icons)

## Run locally

Requires Node.js 18.18+ (Node 20 LTS recommended).

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open the site
# http://localhost:3000
```

Other scripts:

```bash
npm run build   # production build
npm run start   # run the production build locally
npm run lint     # lint the project
```

## Adding your own files

The site ships with placeholder paths for uploaded documents — drop your
real files into these folders, using the exact filenames referenced in the
`data/` files (or update the paths in the data files to match your own):

| What              | Folder                  | Referenced from            |
|-------------------|--------------------------|-----------------------------|
| Resume PDF        | `public/resume/`         | `components/resume.tsx`, `components/hero.tsx` |
| Activity files    | `public/files/`          | `data/activities.ts`        |
| Certificate files | `public/certificates/`   | `data/certifications.ts`    |

Until a file is added, the Activities and Certifications cards gracefully
show a "File coming soon" placeholder instead of a broken preview.

## Extending content — no UI changes needed

This portfolio is data-driven. To add new content, edit the arrays in
`data/` — the sections re-render automatically:

- **New activity** (e.g. next semester's assignment) → add an object to
  `data/activities.ts`.
- **New certification** → add an object to `data/certifications.ts`.
- **New project** → add an object to `data/projects.ts`.
- **Skill levels** → adjust `data/skills.ts`.

Each array entry is fully typed (see `data/types.ts`), so your editor will
flag any missing fields.

## Project structure

```
app/
  layout.tsx        # fonts, metadata (SEO), theme provider
  page.tsx           # assembles all sections
  globals.css         # design tokens, glass/utility classes
components/
  navbar.tsx, hero.tsx, about.tsx, activities.tsx, activity-card.tsx,
  projects.tsx, project-card.tsx, skills.tsx, skill-bar.tsx,
  education.tsx, certifications.tsx, certification-card.tsx,
  resume.tsx, vision-mission.tsx, contact.tsx, footer.tsx,
  file-viewer.tsx, theme-toggle.tsx, theme-provider.tsx,
  circuit-divider.tsx, leaf-circuit.tsx, eco-icons.tsx,
  typing-text.tsx, reveal.tsx, section-heading.tsx
data/
  activities.ts, projects.ts, skills.ts, certifications.ts, types.ts
public/
  files/, resume/, certificates/   # your uploaded documents go here
```

## Design notes

- **Palette**: sage/canopy greens, a warm soil clay accent, and a soft
  sand/beige base — built for both light and dark mode.
- **Typography**: Fraunces (organic display serif) paired with Inter
  (body) and Space Mono (labels/data), reflecting the "nature meets tech"
  theme.
- **Signature motif**: a circuit-trace line that resolves into an organic
  root curve, used as a divider between major sections and echoed in the
  hero's leaf-circuit illustration.
- Respects `prefers-reduced-motion` and keeps visible keyboard focus
  states throughout.

## Backend: contact form & file uploads

The contact form now posts to `app/api/contact/route.ts`, which emails
you via [Resend](https://resend.com) — just add two environment
variables (see `.env.example`). PDFs/images for Activities,
Certifications and the Resume are served as static files from
`/public` by default, with an optional dynamic-upload path via Vercel
Blob also included.

**Full setup instructions for both → see [`BACKEND.md`](./BACKEND.md).**

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset: **Next.js** (auto-detected). No environment
   variables are required for the base site.
4. Click **Deploy** — Vercel will build and host it automatically on
   every push to your main branch.

Or deploy from the CLI:

```bash
npm i -g vercel
vercel
```
