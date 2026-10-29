"use client";

import { projects } from "@/data/projects";
import dynamic from "next/dynamic";

const FadeCarousel = dynamic(() => import("@/app/_components/ui/carousel"));
const ProjectCard = dynamic(() => import("@/app/_components/ui/project-card"));

export default function ProjectsSection() {
  return (
    <section
      id="projetos"
      className="p-6 md:p-12 w-full min-h-dvh max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-12 items-center"
    >
      {/* Coluna da Esquerda: Titulo e Descrição */}
      <div className="flex flex-col justify-center space-y-6 w-full">
        <div className="space-y-4">
          <h2 className="font-extrabold text-2xl sm:text-3xl md:text-4xl tracking-widest uppercase text-zinc-900">
            Projetos
          </h2>

          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed max-w-xl">
            Da engenharia de interfaces imersivas à arquitetura de sistemas
            robustos no backend. Explore projetos desenvolvidos de ponta a
            ponta, unindo experiências fluidas em React e Next.js com automações,
            segurança e lógica escalável nos bastidores.
          </p>
        </div>
      </div>

      {/* Coluna da Direita: Carrossel com Cards de Projetos */}
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-2xl">
        <FadeCarousel
          options={{ duration: 20 }}
          className="w-full h-auto"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              techs={project.techs}
              madeIn={project.madeIn}
              link={project.link}
            />
          ))}
        </FadeCarousel>
      </div>
    </section>
  );
}