export interface Experience {
  id: string;
  title: string;
  company?: string;
  period?: string;
  roleDescription: string;
  technologies: string[];
  fieldsOfExpertise: string[];
}

export const experiences: Experience[] = [
  {
    id: "casa-civil",
    title: "Software Engineer - Casa Civil do Município de São Paulo",
    company: "Casa Civil — Prefeitura de São Paulo",
    period: "2026 — Presente",
    roleDescription: "Atuação na vanguarda da modernização tecnológica de sistemas públicos críticos, liderando frentes que unem desenvolvimento fullstack de alta performance, engenharia de dados e segurança da informação. Responsável por projetar ecossistemas web escaláveis com React e Next.js, estruturar pipelines e rotinas automatizadas em Python para extração e tratamento de dados oficiais, e aplicar práticas rigorosas de hardening, observabilidade e gerenciamento de contêineres em ambientes de produção.",
    technologies: [
      "TypeScript",
      "React",
      "Next.js (App Router)",
      "Go",
      "Python",
      "Tailwind CSS",
      "Framer Motion",
      "PostgreSQL",
      "Podman / Docker",
      "OpenResty / Nginx",
      "Linux / AlmaLinux"
    ],
    fieldsOfExpertise: [
      "Fullstack Architecture",
      "Data Engineering & Automation",
      "Application Security & Incident Remediation",
      "DevOps & Infrastructure",
      "UI/UX Engineering"
    ]
  },
  {
    id: "smul",
    title: "Estagiário de Tecnologia — Secretaria Municipal de Urbanismo e Licenciamento (SMUL)",
    company: "SMUL — Prefeitura de São Paulo",
    period: "2024 - 2026",
    roleDescription: "Idealização e desenvolvimento end-to-end do UrbSync, uma extensão de navegador de alto impacto adotada oficialmente para reestruturar fluxos operacionais críticos. Responsável por projetar arquitetura modular em JavaScript para automação de extração de dados e integração com os sistemas SEI, Aprova Digital e SLCe, eliminando gargalos manuais e gerindo todo o pipeline até a publicação na Chrome Web Store.",
    technologies: [
      "JavaScript (ES6+)",
      "Chrome Extension APIs",
      "Sistemas SEI / Aprova Digital / SLCe",
      "Git & GitHub",
      "Chrome Web Store Publishing"
    ],
    fieldsOfExpertise: [
      "Browser Extension Development",
      "Process Automation & Scripting",
      "Operational Intelligence & Workflows",
      "Asset & Inventory Support"
    ]
  }
];