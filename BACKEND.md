# Backend, data storage & file uploads

This portfolio ships as a **static, file-based site** — no database
required. This doc explains what's already wired up, and how to go
further if you want it.

## 1. Contact form → now sends real email

`app/api/contact/route.ts` is a Next.js Route Handler that accepts the
form's POST request and sends it via [Resend](https://resend.com).

**Setup (5 minutes):**
1. Create a free account at resend.com and grab an API key.
2. Copy `.env.example` to `.env.local` and fill in:
   ```
   RESEND_API_KEY=re_xxxxxxxx
   CONTACT_TO_EMAIL=meet.alshi@vit.edu.in
   ```
3. Add the same two variables in Vercel: **Project Settings → Environment
   Variables**.
4. Redeploy. That's it — submissions now arrive in your inbox.

The route uses Resend's shared `onboarding@resend.dev` sender, which
works immediately without extra setup. Once you verify your own domain
in Resend, change the `from` address in `route.ts` to something like
`Portfolio <contact@yourdomain.com>` for better deliverability.

**Alternative (zero code):** swap Resend for
[Formspree](https://formspree.io) — create a form there, and point the
`<form>` in `components/contact.tsx` at the Formspree endpoint URL
directly. No API route needed.

## 2. Where PDFs and images live — two approaches

### Approach A: Static files in `/public` (what's set up by default)

This is the right approach for a personal portfolio, and it's what the
Activities, Certifications and Resume sections already use.

- Files live in `public/files/`, `public/certificates/`, `public/resume/`.
- Next.js serves anything in `/public` directly at the same path
  (`public/files/pledge.pdf` → `yoursite.com/files/pledge.pdf`).
- To "upload" a file: drop it into the folder, update the matching
  `fileUrl` in `data/activities.ts` / `data/certifications.ts` if the
  filename changed, commit, and redeploy (Vercel rebuilds automatically
  on every push).

**Why not just build an in-browser upload button for this?** Vercel's
servers are serverless and their filesystem is read-only/ephemeral at
runtime — a file "uploaded" through a form would vanish on the next
deploy or cold start. Files written to `/public` only persist because
they're part of your Git repo at build time. If you want real,
persistent uploads from a browser, you need external storage — that's
Approach B.

### Approach B: Dynamic uploads via Vercel Blob (optional)

Use this if you want an admin page where you (or faculty) can upload a
new activity PDF or certificate image directly from the browser, without
touching code or redeploying.

`app/api/upload/route.ts` is already included and ready to use:

**Setup:**
1. In the Vercel dashboard: your project → **Storage** → **Create
   Database** → **Blob**. This auto-injects `BLOB_READ_WRITE_TOKEN` into
   your deployed project.
2. For local dev, run `vercel env pull .env.local` to copy that token
   down (or set it manually from the Blob store's settings page).
3. **Secure the route before using it** — as shipped it has no auth, so
   anyone with the URL could upload files. The simplest fix is a shared
   secret (see the comment at the bottom of `route.ts`); for anything
   more than personal use, add real auth (NextAuth.js, Clerk, etc.) and
   gate an `/admin` page behind a login.

**Example client-side usage**, e.g. inside a private `/admin` page:

```tsx
async function uploadFile(file: File) {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch("/api/upload", {
    method: "POST",
    body: formData,
    headers: { "x-admin-secret": "your-shared-secret" }, // if you added auth
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.error);
  return data.url as string; // permanent Blob URL, e.g. https://xyz.public.blob.vercel-storage.com/...
}
```

Once you have the returned URL, either:
- Paste it into the relevant entry in `data/activities.ts` /
  `data/certifications.ts` (simplest — keeps everything in Git), or
- Store it in a database instead of a hardcoded array (see below) if you
  want the site to update without a redeploy at all.

## 3. Going further: a real database (optional)

Right now, `data/activities.ts`, `data/projects.ts`, and
`data/certifications.ts` are the "database" — plain TypeScript arrays
read at build time. This is fast, free, and version-controlled, which is
ideal for content that changes a few times a semester.

If you want activities/certifications to be addable from a live admin
UI with no code changes or redeploys, swap those arrays for a real
database:

- **[Vercel Postgres](https://vercel.com/storage/postgres)** or
  **[Supabase](https://supabase.com)** (Postgres, generous free tier,
  built-in file storage too — could replace Blob entirely) are the most
  common pairings with Next.js.
- Replace the static imports (`import { activities } from
  "@/data/activities"`) with a fetch from the database inside each
  Server Component (e.g. `app/page.tsx` fetches and passes data down, or
  each section component becomes an `async function` that queries
  directly).
- Keep `data/types.ts` — your table schema should mirror those
  interfaces, so the rest of the UI doesn't change at all.

This is a meaningful step up in complexity (schema, migrations, an admin
UI, auth) — only worth it if faculty or collaborators need to add
content themselves without your help. For a single-owner portfolio,
Approach A (static files + Git) is genuinely the simpler, more reliable
choice.
