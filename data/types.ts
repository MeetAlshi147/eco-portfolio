export interface Activity {
  /** Unique, URL-safe id, e.g. "assignment-0" */
  id: string;
  /** Display order, lowest first */
  order: number;
  title: string;
  /** Short tag shown on the card eyebrow, e.g. "Assignment", "Crossword" */
  type: string;
  date: string;
  objective: string;
  /** Path under /public to the uploaded file, e.g. "/files/assignment-0.pdf" */
  fileUrl: string | null;
  fileLabel?: string;
  whatILearned: string;
  sustainabilityConnection: string;
  reflection: string;
  references: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  tech: string[];
  githubUrl?: string;
  demoUrl?: string;
  icon: "camera" | "network" | "chart" | "chat";
}

export interface SkillCategory {
  category: string;
  icon: "code" | "brain" | "wrench";
  skills: { name: string; level: number }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  description: string;
  score: string;
  date: string;
  fileUrl: string | null;
  fileType: "pdf" | "image";
}
