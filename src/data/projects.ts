// EDIT ME: duplicate an object below for each new project. Add more freely.

export interface Project {
  title: string;
  description: string;
  image?: string;
  techStack: string[];
  problem: string;
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Purohitam — Pooja Booking Platform",
    description:
      "[PROJECT DESCRIPTION] A full-stack booking application for Vedic pooja services, with an admin dashboard and email notifications.",
    techStack: ["Spring Boot", "MySQL", "React", "TypeScript", "Tailwind CSS", "JWT"],
    problem:
      "[BUSINESS PROBLEM] Helped devotees discover and book verified purohits for rituals without relying on word-of-mouth scheduling.",
    features: ["End-to-end booking flow", "Admin dashboard with status management", "HTTP-only cookie JWT auth"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "PDF Chatbot (RAG)",
    description:
      "[PROJECT DESCRIPTION] A chat interface over uploaded PDFs using retrieval-augmented generation.",
    techStack: ["Python", "LangChain", "Streamlit", "Google Generative AI", "FAISS"],
    problem:
      "[BUSINESS PROBLEM] Let users query long documents conversationally instead of manually searching for answers.",
    features: ["Disk-cached vector store", "Local embeddings fallback for quota-free dev", "Source-grounded answers"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "RAG Resume Screener",
    description:
      "[PROJECT DESCRIPTION] A modular resume screening system that retrieves per-resume evidence against a job description.",
    techStack: ["Python", "LangChain", "Vector DB", "Embeddings"],
    problem:
      "[BUSINESS PROBLEM] Speeds up first-pass resume screening while keeping retrieval scoped per candidate rather than a single global index.",
    features: ["Per-resume retrieval (not global top-k)", "Modular ingestion/chunking pipeline", "JD-based screening stage"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "[PROJECT TITLE]",
    description: "[PROJECT DESCRIPTION]",
    techStack: ["[TECH", "STACK]"],
    problem: "[BUSINESS PROBLEM]",
    features: ["[Feature 1]", "[Feature 2]", "[Feature 3]"],
    liveUrl: "#",
    githubUrl: "#",
  },
];
