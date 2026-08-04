import { NextRequest, NextResponse } from "next/server";
import { put } from "@vercel/blob";

// OPTIONAL — only needed if you want to upload new activity/certificate
// files from a browser (e.g. a private admin page) after the site is
// already deployed, instead of adding files to /public before each
// deploy. See BACKEND.md for the full explanation and setup steps.
//
// Requires:
//   1. `npm install @vercel/blob`
//   2. A Blob store attached to your Vercel project (Storage tab)
//   3. BLOB_READ_WRITE_TOKEN set locally (see .env.example)
//
// !! Before using this in production, add authentication — as written,
// anyone who finds this URL could upload files. See the note at the
// bottom of this file.

const ALLOWED_TYPES = ["application/pdf", "image/png", "image/jpeg", "image/webp"];
const MAX_SIZE_BYTES = 10 * 1024 * 1024; // 10MB

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const file = form.get("file");

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "No file provided." }, { status: 400 });
  }
  if (!ALLOWED_TYPES.includes(file.type)) {
    return NextResponse.json(
      { error: "Only PDF, PNG, JPEG and WEBP files are allowed." },
      { status: 400 }
    );
  }
  if (file.size > MAX_SIZE_BYTES) {
    return NextResponse.json({ error: "File exceeds the 10MB limit." }, { status: 400 });
  }

  const blob = await put(`uploads/${Date.now()}-${file.name}`, file, {
    access: "public",
  });

  // blob.url is the permanent, publicly-accessible URL — store this in
  // your database or paste it into the relevant `data/*.ts` file's
  // `fileUrl` field.
  return NextResponse.json({ url: blob.url });
}

// --- Adding authentication (do this before shipping) ---
// Simplest option: check a shared secret header set only by your admin UI.
//
//   const secret = req.headers.get("x-admin-secret");
//   if (secret !== process.env.ADMIN_UPLOAD_SECRET) {
//     return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//   }
//
// More robust option: add real auth (e.g. NextAuth.js or Clerk) and check
// for a logged-in admin session instead of a static secret.
