import { Certification } from "./types";

/**
 * Add new certifications here — the Certifications section renders this
 * array automatically. Drop the file into /public/certificates/.
 */
export const certifications: Certification[] = [
  {
    id: "nptel-java",
    title: "Programming in Java",
    issuer: "Issued by IIT/NPTEL (Verified)",
    description:
      "Built a strong foundation in object-oriented programming, data handling, and multithreading. Applied concepts through assignments and problem-solving exercises.",
    score: "90%",
    date: "2025",
    fileUrl: "/certificates/Programming In Java.pdf",
    fileType: "pdf",
  },
  {
    id: "rotaract-community-service",
    title: "Community Service Recognition",
    issuer: "Rotaract Club",
    description:
      "Contributed to community outreach and awareness initiatives, developing teamwork, coordination, and responsibility through real-world activities.",
    score: "45 hours",
    date: "2025",
    fileUrl: "/certificates/Meet_Alshi_Certificate.pdf",
    fileType: "pdf",
  },
];
