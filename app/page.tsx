import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("./_home/hero-section"));
const AboutSection = dynamic(() => import("./_home/about-section"));
const SkillsSection = dynamic(() => import("./_home/skills-section"));
const ProjectsSection = dynamic(() => import("./_home/projects-section"))
const ExperienceSection = dynamic(() => import("./_home/experience-section"));

export default function Home() {
  return (
    <div className="w-full h-full bg-white ">
      {/* Seção Hero Com elemento 3D*/}
      <HeroSection />

      {/* Seção Sobre Mim */}

      <AboutSection />

      {/*Sessão de Skills */}
      <SkillsSection />

      {/* Sessão de Projetos */}

      <ProjectsSection/>
      {/* Seção de Experiência Profissional */}

      <ExperienceSection />
    </div>
  );
}
