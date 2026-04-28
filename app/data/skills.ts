export interface Skill {
  name: string;
  category: "it" | "tools" | "design" | "hardSkills";
}

export const skills: Skill[] = [
  // IT
  { name: "HTML, CSS, JavaScript (Fundamentals)", category: "it" },
  { name: "Responsive Web Design", category: "it" },
  { name: "Data Entry & Reporting", category: "it" },
  { name: "Git & Version Control", category: "it" },

  // Tools
  { name: "Microsoft Office 365 (Word, Excel, PowerPoint)", category: "tools" },
  { name: "Accurate (Accounting System)", category: "tools" },
  { name: "Adobe Premiere Pro", category: "tools" },
  { name: "CapCut", category: "tools" },

  // Design
  { name: "Adobe Photoshop", category: "design" },
  { name: "Canva", category: "design" },
  { name: "Figma (Basic UI/UX & Visual Design)", category: "design" },

  // Hard Skills
  { name: "Patient Assessment", category: "hardSkills" },
  { name: "Vital Signs Monitoring", category: "hardSkills" },
  { name: "Wound Care", category: "hardSkills" },
  { name: "Medication Administration", category: "hardSkills" },
  { name: "Purchasing Administration", category: "hardSkills" },
  { name: "Inventory Management", category: "hardSkills" },
  { name: "Data Entry", category: "hardSkills" },
  { name: "Report Documentation", category: "hardSkills" },
];
