import { Project } from "./types";

export const projects: Project[] = [
  {
    id: "smart-attendance",
    title: "Smart Attendance System",
    category: "AI + Computer Vision",
    description:
      "Developed a real-time face recognition system to automate attendance, reducing manual effort and improving accuracy in classroom environments.",
    highlights: [
      "Implemented face detection and recognition using OpenCV",
      "Designed pipeline for real-time processing and logging",
      "Generated automated attendance reports (exportable)",
      "Optimized for varying lighting and low-cost hardware",
    ],
    tech: ["Python", "OpenCV", "Machine Learning"],
    githubUrl: "https://github.com/meetalshi47",
    demoUrl: undefined,
    icon: "camera",
  },
  {
    id: "orbit",
    title: "Orbit — Social Media App",
    category: "Full-Stack",
    description:
      "Built a full-stack social media application with authentication, real-time updates, and responsive UI to simulate production-level architecture.",
    highlights: [
      "Implemented secure authentication and session handling",
      "Developed post creation, likes, and dynamic feed system",
      "Integrated real-time updates using Firebase",
      "Designed responsive UI for cross-device compatibility",
    ],
    tech: ["React", "Tailwind", "Firebase", "Node.js"],
    githubUrl: "https://github.com/meetalshi47",
    demoUrl: undefined,
    icon: "network",
  },
  {
    id: "smart-retail-analytics",
    title: "Smart Retail Analytics",
    category: "Cloud + ML",
    description:
      "Built a cloud-based analytics system to process retail transaction data and generate demand forecasts for better inventory planning.",
    highlights: [
      "Implemented ML models for demand prediction using historical sales data",
      "Designed interactive dashboards in Power BI for data visualization",
      "Developed cloud pipeline on AWS for data processing and scheduled updates",
      "Enabled data-driven decision-making for inventory optimization",
    ],
    tech: ["Python", "AWS", "Power BI"],
    githubUrl: "https://github.com/MeetAlshi147/smart-retail-system",
    demoUrl: undefined,
    icon: "chart",
  },
  {
    id: "ai-chatbot-assistant",
    title: "AI Chatbot Assistant",
    category: "NLP + Backend",
    description:
      "Developed a conversational AI chatbot using Flask that understands user intent and generates context-aware responses.",
    highlights: [
      "Implemented intent recognition and response handling logic",
      "Built lightweight backend using Flask for request handling",
      "Designed modular structure for adding new intents and features",
      "Enabled easy deployment as a self-hosted assistant",
    ],
    tech: ["Python", "Flask", "NLP"],
    githubUrl: "https://github.com/meetalshi47",
    demoUrl: undefined,
    icon: "chat",
  },
];
