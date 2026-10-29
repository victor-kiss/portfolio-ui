"use client";

import { experiences } from "@/data/experiences";

export default function ExperienceSection() {
  return (
    <section
      id="experiencia"
      className="w-full py-20 px-6 sm:px-12 max-w-7xl mx-auto flex flex-col"
    >
      {/* Cabeçalho */}
      <div className="space-y-4 mb-16 flex flex-col sm:items-center sm:text-center justify-center">
        <h2 className="font-extrabold text-2xl sm:text-3xl md:text-4xl tracking-widest uppercase text-zinc-900">
          Trajetória
        </h2>
        <p className="text-zinc-600 max-w-2xl text-sm sm:text-base leading-relaxed">
          Histórico de atuação profissional em engenharia de software,
          modernização de sistemas públicos e segurança da informação.
        </p>
      </div>

      {/* Lista de Experiências */}
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <details
            key={index}
            className="group bg-white border border-zinc-200/80 rounded-2xl p-6 sm:p-8 shadow-xs transition-all duration-300 open:shadow-md hover:border-zinc-300"
          >
            <summary className="flex items-center justify-between cursor-pointer list-none select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 rounded-lg">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 w-full pr-4">
                <span className="text-base sm:text-lg font-bold text-zinc-900 tracking-tight group-hover:text-black transition-colors">
                  {exp.title}
                </span>

                {/* Exemplo de metadados opcionais caso existam no seu array */}
                {exp.period && (
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-slate-100 text-indigo-950 border border-zinc-200/60 w-fit">
                    {exp.period}
                  </span>
                )}
              </div>

              {/* Ícone Indicador de Expandir */}
              <span className="ml-4 flex-shrink-0 text-zinc-500 group-hover:text-zinc-900 group-open:rotate-180 transition-transform duration-300 ease-in-out">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </summary>

            <div className="mt-6 space-y-6 pt-6 border-t border-zinc-100 animate-in fade-in-50 duration-200">
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                {exp.roleDescription}
              </p>

              <div className="space-y-5">
                {/* Áreas de Atuação */}
                {exp.fieldsOfExpertise?.length > 0 && (
                  <div>
                    <span className="block text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-2.5">
                      Áreas de Atuação
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {exp.fieldsOfExpertise.map((field, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-3 py-1 rounded-md bg-zinc-100 border border-zinc-200/80 text-zinc-700 font-medium"
                        >
                          {field}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tecnologias */}
                {exp.technologies?.length > 0 && (
                  <div>
                    <span className="block text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-2.5">
                      Stack &amp; Ferramentas
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-3 py-1 rounded-md border border-zinc-800 bg-zinc-900 text-zinc-100 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}