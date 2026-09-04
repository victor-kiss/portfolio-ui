"use client"
import { projects } from "@/data/projects"
import dynamic from "next/dynamic"

const FadeCarousel = dynamic(() => import("@/app/_components/ui/carousel"));
const ProjectCard = dynamic(() => import("@/app/_components/ui/project-card"));

export default function SkillsSection(){
    return (
              <section className="p-6 md:p-10 w-full min-h-dvh grid grid-cols-1 xl:grid-cols-2 xl:gap-8 items-center" id="projetos">
        <div className="flex flex-col items-center justify-center">
          <div className="space-y-6 w-full h-full">
            <h2 className="font-extrabold leading-relaxed text-2xl sm:text-3xl md:text-4xl tracking-widest mb-4 uppercase">
              &lt;Projetos&#92;&gt;
            </h2>

            <p className="leading-relaxed">
                <b>&#42;</b>  Da engenharia de interfaces imersivas à arquitetura de sistemas robustos no backend. Explore projetos desenvolvidos de ponta a ponta, unindo experiências fluidas em React e Next.js com automações, segurança e lógica escalável nos bastidores.
            </p>
          </div>
        </div>

        <div className="relative w-full  h-full  flex items-center justify-center ">
          <FadeCarousel
            options={{ duration: 20 }}
            className="h-auto" // Garante que o carrossel ocupe toda a altura do container pai
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
    )
}