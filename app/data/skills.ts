export interface Skill {
  name: string;
  category: "frontend" | "tools" | "design";
}

export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "HTML/CSS", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Vue.js", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "React Native", category: "frontend" },

  // Tools
  { name: "Git", category: "tools" },
  { name: "Docker", category: "tools" },
  { name: "AWS", category: "tools" },
  { name: "Webpack", category: "tools" },
  { name: "Jest", category: "tools" },
  { name: "CI/CD", category: "tools" },

  // Design
  { name: "Figma", category: "design" },
  { name: "UI/UX Design", category: "design" },
  { name: "Responsive Design", category: "design" },
  { name: "Accessibility", category: "design" },
];
