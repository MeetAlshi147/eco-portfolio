import { SkillCategory } from "./types";

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming",
    icon: "code",
    skills: [
      { name: "Java", level: 80 },
      { name: "Python", level: 90 },
      { name: "SQL", level: 75 },
    ],
  },
  {
    category: "AI / ML",
    icon: "brain",
    skills: [
      { name: "Machine Learning", level: 85 },
      { name: "Computer Vision", level: 80 },
      { name: "Data Analysis", level: 78 },
    ],
  },
  {
    category: "Tools",
    icon: "wrench",
    skills: [
      { name: "OpenCV", level: 80 },
      { name: "TensorFlow (basic)", level: 60 },
      { name: "Scikit-learn", level: 72 },
    ],
  },
];
