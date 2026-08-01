// EDIT ME: add/remove skills freely — no proficiency levels, just group by category.

export interface SkillGroup {
  category: string;
  note: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    note: " core.syntax",
    skills: ["Java", "Python", "SQL"],
  },
  {
    category: "Frameworks & Libraries",
    note: "build.on_top",
    skills: [
      "Spring Boot",
      "Spring Security",
      "Hibernate",
      "JPA",
      "LangChain"
    ],
  },
  {
    category: "Core CS",
    note: "fundamentals",
    skills: ["Data Structure and Algorithm", "Object Oriented Programming", "Database Management System", "Operating Systems", "Computer Networks"],
  },
  {
    category: "Database",
    note:"storage layer",
    skills: ["MySQL", "MongoDB","Vector Databases"],
  },
  {
    category: "Exploring",
    note: "AI",
    skills: [
      "Generative AI",
      "Agentic AI"
    ],
  },
  {
    category: "Tools",
    note: " dev.environment",
    skills: ["Git", "GitHub", "Postman", "Docker", "Maven", "VS Code", "IntelliJ IDEA", "STS"],
  },
];