"use client";

import { experiences } from "@/data/experiences";

export default function ExperienceSection() {
  return (
    <section
      id="experiencia"
      className="w-full py-20 px-6 sm:px-12 max-w-7xl sm:mx-auto flex flex-col"
    >
      <div className="space-y-4 mb-16 flex flex-col sm:items-center justify-center">
        <h2 className="font-extrabold text-2xl sm:text-3xl md:text-4xl tracking-widest uppercase  text-zinc-900">
          &lt;Trajetória&#92;&gt;
        </h2>
        <p className="text-zinc-600 max-w-2xl text-sm sm:text-base leading-relaxed">
          <b>&#42;</b> Histórico de atuação profissional em engenharia de
          software, modernização de sistemas públicos e segurança da informação.
        </p>
      </div>

      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <details
            key={index}
            className="group bg-white border border-zinc-200/80 rounded-2xl p-6 sm:p-8 shadow-xs transition-all open:shadow-md"
          >
            <summary className="flex items-center justify-between cursor-pointer list-none select-none">
              <span className="text-sm font-bold  text-zinc-900 tracking-widest uppercase group-hover:text-black transition-colors">
                {exp.title}
              </span>
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

            <div className="mt-6 space-y-6 pt-6 border-t border-zinc-100">
              <p className="text-zinc-700 text-sm sm:text-base leading-relaxed">
                {exp.roleDescription}
              </p>

              <div className="space-y-4">
                {/* Áreas de Atuação */}
                <div>
                  <span className="block text-xs text-zinc-900 uppercase tracking-wider mb-2">
                    Áreas de Atuação
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {exp.fieldsOfExpertise.map((field, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 rounded-md bg-zinc-600 text-zinc-100 font-medium"
                      >
                        {field}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tecnologias */}
                <div>
                  <span className="block text-xs text-zinc-900 uppercase tracking-wider mb-2">
                    Stack & Ferramentas
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 rounded-md border border-zinc-200 bg-zinc-800 text-zinc-100 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
