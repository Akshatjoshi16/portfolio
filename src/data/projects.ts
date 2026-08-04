// EDIT ME: duplicate an object below for each new project. Add more freely.

export interface Project {
  title: string;
  description: string;
  image?: string;
  techStack: string[];
  problem: string;
  features: string[];
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Purohitam — Vedic Pooja Booking Platform",
    description:
      "A production-ready booking platform for Vedic pooja services, themed around Ujjain, enabling devotees to discover, book, and manage appointments with verified purohits through a seamless digital experience. The platform also provides a dedicated admin dashboard for managing bookings, users, and the complete booking lifecycle.",
    techStack: ["Spring Boot", "MySQL", "React", "TypeScript", "Tailwind CSS", "JWT"],
    problem:
      "Devotees previously relied on word-of-mouth and offline coordination to find and schedule purohits for religious rituals. Purohitam digitizes the entire process with a structured booking workflow, real-time status tracking, and automated notifications, making the experience more reliable and transparent.",
    features: [
      "End-to-end booking flow — entities, DTOs, service, controller, email notifications across the booking lifecycle",
      "Admin dashboard with booking management and status actions",
      "HTTP-only cookie-based JWT authentication",
    ],
    githubUrl: "https://github.com/akshatjoshi16/purohitam",
  },
  {
  title: "Hospital Operation Knowledge Bot",
  description:
    "A retrieval-augmented generation chatbot that answers questions about hospital operations by retrieving relevant context from internal documents before generating a response.",
  techStack: ["Python", "LangChain", "Vector DB", "LLM API"],
  problem:
    "Hospital staff — especially new hires and night-shift teams — often need quick answers to operational questions (admission procedures, department protocols, equipment handling, escalation paths) buried across scattered SOP documents and manuals. Finding the right answer meant manually searching PDFs or interrupting a senior colleague. This bot puts that knowledge one question away, grounded directly in the hospital's own documentation.",
  features: [
    "Answers grounded in retrieved document context rather than the model's general knowledge, reducing hallucinated procedures",
    "Ingests and indexes multiple SOP/operations documents into a searchable vector store",
    "Designed for fast, conversational lookup — reduces dependency on manually searching PDFs or asking a colleague for routine procedural questions",
  ],
  githubUrl: "https://github.com/akshatjoshi16/hospital_assistant",
},
];