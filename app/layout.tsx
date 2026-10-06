import type { Metadata } from "next";
import { Fraunces, Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

const siteUrl = "https://meetalshi-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Meet Mahesh Alshi — AI/ML, Robotics & Sustainable Tech",
    template: "%s | Meet Mahesh Alshi",
  },
  description:
    "Portfolio of Meet Mahesh Alshi, a B.Tech Information Technology student building AI, machine learning and robotics solutions while championing e-waste management and environmental sustainability.",
  keywords: [
    "Meet Mahesh Alshi",
    "AI ML Portfolio",
    "Robotics",
    "E-Waste Management",
    "Sustainability",
    "Computer Vision",
    "Vidyalankar Institute of Technology",
  ],
  authors: [{ name: "Meet Mahesh Alshi" }],
  openGraph: {
    title: "Meet Mahesh Alshi — Coding Dreams into Reality",
    description:
      "AI/ML and Robotics enthusiast building intelligent, sustainable technology solutions.",
    url: siteUrl,
    siteName: "Meet Mahesh Alshi Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet Mahesh Alshi — Coding Dreams into Reality",
    description:
      "AI/ML and Robotics enthusiast building intelligent, sustainable technology solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${spaceMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased selection:bg-sprout-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
