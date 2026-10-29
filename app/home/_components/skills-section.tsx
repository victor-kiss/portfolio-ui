"use client";

import { skillCategories } from "@/data/skills";
import dynamic from "next/dynamic";

const AlienHandScene = dynamic(
  () => import("@/app/_components/experience/scenes/alien-hand-scene"),
  { ssr: false }
);

export default function SkillsSection() {
  return (
    <section
      id="stack"
      className="p-6 md:p-12 w-full min-h-dvh max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center"
    >
      {/* Coluna da Esquerda: Titulo, Descrição e Accordion de Skills (Ocupa 6 de 12 colunas) */}
      <div className="flex flex-col justify-center space-y-8 w-full lg:col-span-6">
        <div className="space-y-4">
          <h2 className="font-extrabold text-2xl sm:text-3xl md:text-4xl tracking-widest uppercase text-zinc-900">
            Skills
          </h2>

          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed max-w-2xl">
            Tecnologias, ferramentas e domínios técnicos envolvidos
            no desenvolvimento de soluções de ponta a ponta.
          </p>
        </div>

        {/* Accordions com padding e espaçamento ampliados */}
        <div className="space-y-4 w-full">
          {skillCategories.map((category, index) => (
            <details
              key={category.title || index}
              className="group bg-white border border-zinc-200/80 rounded-2xl overflow-hidden shadow-xs transition-all duration-300 hover:border-zinc-300 open:border-zinc-900 open:shadow-md"
            >
              {/* Cabeçalho do Accordion */}
              <summary className="flex items-center justify-between p-5 sm:p-6 font-bold cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 transition-colors hover:bg-zinc-50/80">
                <div className="flex items-center gap-3.5">
                  <span className="uppercase text-xs sm:text-sm tracking-widest font-bold text-zinc-900">
                    {category.title}
                  </span>

                  {/* Badge com a Quantidade de Skills */}
                  <span className="text-xs font-mono font-medium px-2.5 py-0.5 bg-zinc-100 text-zinc-700 rounded-md border border-zinc-200/80">
                    {category.skills?.length || 0}
                  </span>
                </div>

                {/* Ícone de Seta Indicadora */}
                <div className="ml-4 flex-shrink-0 p-2 rounded-xl bg-zinc-50 border border-zinc-200/60 text-zinc-500 group-hover:text-zinc-900 group-hover:border-zinc-300 group-open:text-white group-open:border-zinc-900 transition-all duration-300">
                  <svg
                    className="w-4 h-4 transition-transform duration-300 ease-out group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </summary>

              {/* Lista de Skills Expandida */}
              <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-zinc-100 bg-zinc-50/50 flex flex-wrap gap-2.5 animate-in fade-in duration-200">
                {category.skills?.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-3.5 py-2 text-xs font-mono bg-white text-zinc-800 rounded-lg border border-zinc-200/80 shadow-2xs hover:border-zinc-900 hover:text-black hover:bg-zinc-100 transition-all cursor-default select-none flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 group-hover:bg-zinc-900 transition-colors" />
                    {skill}
                  </span>
                ))}
              </div>
            </details>
          ))}
        </div>
      </div>

      {/* Coluna da Direita: Cena 3D / Canvas Interativo (Ocupa 6 de 12 colunas) */}
      <div className="w-full h-full min-h-[400px] lg:min-h-[580px] lg:col-span-6 flex items-center justify-center">
        <AlienHandScene />
      </div>
    </section>
  );
}