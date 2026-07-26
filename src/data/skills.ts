// EDIT ME: adjust proficiency (0-100) and add/remove skills freely.

export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface SkillGroup {
  category: string;
  note: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Backend",
    note: "// core.services",
    skills: [
      { name: "Java", level: 85 },
      { name: "Spring Boot", level: 80 },
      { name: "Spring Security", level: 65 },
      { name: "REST APIs", level: 85 },
      { name: "Hibernate", level: 70 },
      { name: "JPA", level: 70 },
      { name: "JWT", level: 70 },
      { name: "Microservices", level: 50 },
    ],
  },
  {
    category: "Database",
    note: "// storage.layer",
    skills: [
      { name: "MySQL", level: 80 },
      { name: "PostgreSQL", level: 65 },
      { name: "MongoDB", level: 55 },
    ],
  },
  {
    category: "Frontend",
    note: "// client.surface",
    skills: [
      { name: "HTML", level: 85 },
      { name: "CSS", level: 80 },
      { name: "JavaScript", level: 75 },
      { name: "React", level: 65 },
      { name: "Tailwind CSS", level: 70 },
    ],
  },
  {
    category: "Generative AI",
    note: "// llm.pipeline",
    skills: [
      { name: "Python", level: 70 },
      { name: "LangChain", level: 60 },
      { name: "RAG", level: 60 },
      { name: "Prompt Engineering", level: 65 },
      { name: "Hugging Face", level: 50 },
      { name: "FAISS", level: 55 },
      { name: "ChromaDB", level: 50 },
      { name: "Vector Databases", level: 55 },
      { name: "Embeddings", level: 55 },
      { name: "Transformers", level: 45 },
      { name: "OpenAI APIs", level: 60 },
      { name: "Groq", level: 45 },
      { name: "Ollama", level: 45 },
      { name: "LLM Applications", level: 55 },
    ],
  },
  {
    category: "Tools",
    note: "// dev.environment",
    skills: [
      { name: "Git", level: 80 },
      { name: "GitHub", level: 80 },
      { name: "Postman", level: 75 },
      { name: "Docker", level: 50 },
      { name: "Maven", level: 65 },
      { name: "VS Code", level: 85 },
      { name: "IntelliJ IDEA", level: 80 },
    ],
  },
];
