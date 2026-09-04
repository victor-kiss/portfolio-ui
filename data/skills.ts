
export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: [
      "TypeScript",
      "JavaScript (ES6+)",
      "React",
      "Next.js (App Router)",
      "Tailwind CSS",
      "Three.js / React Three Fiber",
      "Framer Motion / GSAP",
    ],
  },
  {
    title: "Backend & Systems",
    skills: [
      "Node.js",
      "Python",
      "Go (Golang)",
      "REST APIs",
      "Microservices",
      "PostgreSQL",
    ],
  },
  {
    title: "DevOps, Automation & Scraping",
    skills: [
      "Docker / Containerization",
      "CI/CD Pipelines",
      "Linux / Shell Scripting",
      "Web Scraping (Python)",
      "Git / GitHub Actions",
    ],
  },
  {
    title: "Cybersecurity & Hardening",
    skills: [
      "Application Security (AppSec)",
      "Hardening de Sistemas",
      "Análise Forense de Logs",
      "OWASP Top 10",
      "Security by Design",
    ],
  },
];