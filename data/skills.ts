import { SkillCategory } from "./types";

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming",
    icon: "code",
    skills: [
      { name: "Java", label: "Intermediate" },
      { name: "Python", label: "Intermediate / Advanced" },
      { name: "SQL", label: "Intermediate" },
    ],
  },
  {
    category: "AI / ML",
    icon: "brain",
    skills: [
      { name: "Machine Learning", label: "Intermediate" },
      { name: "Computer Vision", label: "Beginner – Intermediate" },
      { name: "Data Analysis", label: "Intermediate" },
    ],
  },
  {
    category: "Tools",
    icon: "wrench",
    skills: [
      { name: "OpenCV", label: "Intermediate" },
      { name: "TensorFlow", label: "Beginner" },
      { name: "Scikit-learn", label: "Intermediate" },
    ],
  },
];
