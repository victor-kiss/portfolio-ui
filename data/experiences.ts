interface Experience {
  title: string;
  roleDescription: string;
  technologies: string[];
  fieldsOfExpertise: string[];
}

export const experiences: Experience[] = [
  {
    title: "Estagiário de Tecnologia  — Secretaria Municipal de Urbanismo e Licenciamento (SMUL)",
    roleDescription: "Idealização e desenvolvimento end-to-end do UrbSync, uma extensão de navegador de alto impacto adotada oficialmente para reestruturar fluxos operacionais críticos. Responsável por projetar arquitetura modular em JavaScript para automação de extração de dados e integração complexa com os sistemas SEI e Aprova Digital, eliminando gargalos manuais e gerindo todo o pipeline de entrega até a publicação na Chrome Web Store.",
    technologies: [
      "JavaScript",
      "GitHub",
      "Chrome Web Store",
      "Sistemas SEI e Aprova Digital"
    ],
    fieldsOfExpertise: [
      "Browser Extension Development",
      "Process Automation",
      "IT Support and Hardware",
      "Asset and Inventory Management",
      "Operational Intelligence and Workflows"
    ]
  },
  {
    title: "Software Engineer — Assessoria de Planejamento (ASPLAN) | Casa Civil SP",
    roleDescription: "Atuação na vanguarda da modernização tecnológica de sistemas críticos estaduais na Casa Civil, liderando frentes que unem desenvolvimento fullstack de alta performance, engenharia de dados robusta e segurança ofensiva/defensiva. Responsável por projetar interfaces escaláveis com React e Next.js, estruturar pipelines de automação em Python para tratamento avançado de dados e atuar na linha de frente de incidentes (AppSec e Forense Digital), aplicando hardening rigoroso em ambientes conteinerizados para mitigar vulnerabilidades em nível de infraestrutura.",
    technologies: [
      "React 18",
      "Next.js (App Router)",
      "Python",
      "Tailwind CSS",
      "Framer Motion",
      "Docker",
      "Linux/WSL2",
      "RESTful APIs"
    ],
    fieldsOfExpertise: [
      "Fullstack Architecture",
      "Data Engineering & Automation",
      "Information Security (AppSec & Digital Forensics)",
      "DevOps & Infrastructure",
      "UI/UX Engineering"
    ]
  }
];