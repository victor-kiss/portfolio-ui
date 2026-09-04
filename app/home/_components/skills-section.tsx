"use client";

import { skillCategories } from "@/data/skills";
import dynamic from "next/dynamic";

const AlienHandScene = dynamic(
  () => import("@/app/_components/experience/scenes/alien-hand-scene"));

export default function SkillsSection() {
  return (
    <section
      className="p-6 md:p-10 w-full min-h-dvh grid grid-cols-1 lg:grid-cols-2 xl:gap-8 items-center"
      id="stack"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="space-y-8 w-full">
          <h2 className="font-extrabold leading-relaxed text-2xl sm:text-3xl md:text-4xl tracking-widest mb-4 uppercase">
            &lt;Skills&#92;&gt;
          </h2>

          <p className="max-w-2xl leading-relaxed ">
            <b>&#42;</b> Tecnologias, ferramentas e domínios técnicos envolvidos
            no desenvolvimento de soluções de ponta a ponta.
          </p>

          <div className="space-y-4 w-full">
            {skillCategories.map((category, index) => (
              <details
                key={index}
                className="group border border-neutral-100 p-4 transition-all rounded-lg shadow-md hover:shadow-sm cursor-pointer hover:border-neutral-200 "
              >
                <summary className="flex items-center justify-between font-bold tracking-wider cursor-pointer select-none py-2 text-neutral-600 transition-colors list-none">
                  <span className="uppercase text-sm tracking-widest text-zinc-900">{category.title}</span>
                  <span className="ml-4 flex-shrink-0 text-zinc-600 group-open:rotate-180 transition-transform duration-200">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </summary>

                <div className="flex flex-wrap gap-2 pt-4 pl-2 animate-in fade-in slide-in-from-top-1 duration-200">
                  {category.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className="px-3 py-1.5 text-sm font-mono bg-gray-900 border border-neutral-200 text-neutral-100 rounded hover:border-neutral-400 transition-all shadow-md hover:shadow-sm cursor-default shadow-black/20 select-none"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full h-full min-h-[300px] xl:min-h-full flex items-center justify-center p-4">
        <AlienHandScene />
      </div>
    </section>
  );
}
