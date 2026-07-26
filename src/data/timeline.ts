// EDIT ME: all timeline / list-based content lives here.

export interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  cgpa: string;
}

export const education: EducationItem[] = [
  { institution: "[COLLEGE NAME]", degree: "[DEGREE]", duration: "[YEAR – YEAR]", cgpa: "[CGPA]" },
  { institution: "[SCHOOL NAME]", degree: "[Class XII / Diploma]", duration: "[YEAR]", cgpa: "[%]" },
];

export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  responsibilities: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: "[COMPANY NAME]",
    role: "[ROLE]",
    duration: "[MMM YYYY – MMM YYYY]",
    responsibilities: ["[Responsibility 1]", "[Responsibility 2]", "[Responsibility 3]"],
  },
];

export interface Certification {
  name: string;
  issuedBy: string;
  link: string;
}

export const certifications: Certification[] = [
  { name: "[CERTIFICATE NAME]", issuedBy: "[ORGANIZATION]", link: "#" },
  { name: "[CERTIFICATE NAME]", issuedBy: "[ORGANIZATION]", link: "#" },
  { name: "[CERTIFICATE NAME]", issuedBy: "[ORGANIZATION]", link: "#" },
];

export interface Achievement {
  label: string;
  value: string;
}

export const achievements: Achievement[] = [
  { label: "DSA Problems Solved", value: "350+" },
  { label: "Coding Contests", value: "12+" },
  { label: "Hackathons", value: "3" },
  { label: "Certifications", value: "5" },
  { label: "Awards", value: "1" },
  { label: "Open Source Contributions", value: "4" },
];

export const aiJourney = [
  "Transformers Fundamentals",
  "Tokenization",
  "Embeddings",
  "Attention Mechanism",
  "BERT",
  "GPT",
  "Prompt Engineering",
  "Vector Databases",
  "LangChain",
  "RAG Applications",
  "LLM Integrations",
  "AI Projects",
];

export interface CodingProfile {
  name: string;
  link: string;
}

export const codingProfiles: CodingProfile[] = [
  { name: "GitHub", link: "https://github.com/yourusername" },
  { name: "LinkedIn", link: "https://linkedin.com/in/yourusername" },
  { name: "LeetCode", link: "https://leetcode.com/yourusername" },
  { name: "Codeforces", link: "https://codeforces.com/profile/yourusername" },
  { name: "HackerRank", link: "https://hackerrank.com/yourusername" },
  { name: "Resume", link: "/resume.pdf" },
];
