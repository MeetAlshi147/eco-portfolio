import { NextRequest, NextResponse } from "next/server";

// Uses Resend (https://resend.com) to deliver contact form messages by
// email. Free tier is generous and setup takes ~5 minutes — see the
// "Wiring up the contact form" section in README.md.
//
// Required environment variables (set in .env.local and in Vercel's
// Project Settings → Environment Variables):
//   RESEND_API_KEY   — from resend.com/api-keys
//   CONTACT_TO_EMAIL — where messages should land, e.g. meet.alshi@vit.edu.in

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are all required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;

    if (!apiKey || !toEmail) {
      console.error("Missing RESEND_API_KEY or CONTACT_TO_EMAIL env vars.");
      return NextResponse.json(
        { error: "Contact form isn't configured yet. Please email directly instead." },
        { status: 500 }
      );
    }

    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // Resend requires the "from" address to be on a domain you've
        // verified with them. Until you verify your own domain, Resend's
        // shared onboarding sender works for testing.
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: [toEmail],
        reply_to: email,
        subject: `New portfolio message from ${name}`,
        text: `From: ${name} <${email}>\n\n${message}`,
      }),
    });

    if (!resendRes.ok) {
      const errBody = await resendRes.text();
      console.error("Resend error:", errBody);
      return NextResponse.json(
        { error: "Message could not be sent. Please try again shortly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
