import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("./_components/hero-section"));
const AboutSection = dynamic(() => import("./_components/about-section"));
const SkillsSection = dynamic(() => import("./_components/skills-section"));
const ProjectsSection = dynamic(() => import("./_components/projects-section"))
const ExperienceSection = dynamic(() => import("./_components/experience-section"));

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
