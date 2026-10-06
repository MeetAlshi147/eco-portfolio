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
  {
  id: "cdac-cloud-computing",
  title: "Certificate Course in Cloud Computing",
  issuer: "C-DAC's Advanced Computing Training School (ACTS), Pune",
  description:
  "Successfully completed a 60-hour certificate course in Cloud Computing covering Basic & Advanced Linux, Cloud Computing, and project work. Demonstrated proficiency through assessment and earned Grade A+.",
  score: "Grade A+",
  date: "2026",
  fileUrl: "/certificates/CDAC Certificate.pdf",
  fileType: "pdf",
 }, 
 {
  id: "machine-learning-python",
  title: "Machine Learning Using Python",
  issuer: "Certificate Course",
  description:
    "Completed a certificate course in Machine Learning Using Python, developing practical understanding of machine learning concepts and their implementation using Python.",
  score: "Certificate Code: 10766738",
  date: "2026",
  fileUrl: "/certificates/Certificate.pdf",
  fileType: "pdf",
},
];
