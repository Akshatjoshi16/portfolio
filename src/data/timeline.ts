// EDIT ME: all timeline / list-based content lives here.

export interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  cgpa: string;
}

export const education: EducationItem[] = [
  { institution: "Medicaps University", degree: "B.TECH (CSE-AI)", duration: "2022 – 2026", cgpa: "7.53" },
  { institution: "Govt. School of Excellence", degree: "Class XII", duration: "2022", cgpa: "86%" },
];

export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  responsibilities: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: "HCL",
    role: "AI/LLM Developer — Training Program",
    duration: "Jan 2026 – May 2026",
    responsibilities: [
      "Completed structured coursework on LLM fundamentals and Generative AI concepts, including tokenization, embeddings, attention mechanisms, and prompt engineering",
      "Built a hands-on RAG/LLM application as part of the program, applying retrieval, vector search, and LLM integration in a working pipeline",
      "Practiced applying GenAI concepts to real-world use cases, translating theoretical modules into a functioning end-to-end project",
    ],
  },
];

export interface Certification {
  name: string;
  issuedBy: string;
  link: string;
}

export const certifications: Certification[] = [
  { name: "Cisco Certified Networking Associate", issuedBy: "Cisco", link: "#" },
  { name: "Java and Spring Boot Development", issuedBy: "Udemy", link: "#" },
  { name: "Python essential 1 & 2", issuedBy: "Cisco", link: "#" },
];

// export interface Achievement {
//   label: string;
//   value: string;
// }

// export const achievements: Achievement[] = [
//   { label: "DSA Problems Solved", value: "350+" },
//   { label: "Coding Contests", value: "12+" },
//   { label: "Hackathons", value: "3" },
//   { label: "Certifications", value: "5" },
//   { label: "Awards", value: "1" },
//   { label: "Open Source Contributions", value: "4" },
// ];



export interface CodingProfile {
  name: string;
  link: string;
}

export const codingProfiles: CodingProfile[] = [
  { name: "GitHub", link: "https://github.com/akshatjoshi16" },
  { name: "LinkedIn", link: "https://linkedin.com/in/akshat-joshi-ba9123315/" },
  { name: "LeetCode", link: "https://leetcode.com/akshat_joshi1" },
  { name: "Codeforces", link: "https://codeforces.com/profile/akshat_joshi1" },
  { name: "Medium", link: "https://codeforces.com/profile/akshat_joshi1" },

];
