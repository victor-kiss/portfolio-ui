"use client";

import dynamic from "next/dynamic";
import Badge from "./badge";

export default function AboutSection() {
  return (
    <section
      id="sobre-mim"
      className="p-6 md:p-12 w-full min-h-dvh max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center"
    >
      {/* Coluna da Esquerda: Bio e Apresentação (Ocupa 7 de 12 colunas) */}
      <div className="flex flex-col justify-center space-y-6 w-full lg:col-span-7">
        <div className="space-y-4">
          <h2 className="font-extrabold text-2xl sm:text-3xl md:text-4xl tracking-widest uppercase text-zinc-900">
            Sobre mim.
          </h2>

          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed max-w-2xl">
            Engenheiro de Software focado na construção de sistemas escaláveis e de alta
            performance, com sólida experiência no ecossistema Fullstack. Minha stack principal
            é baseada em <b className="text-zinc-900 font-semibold">TypeScript</b>, utilizando{" "}
            <b className="text-zinc-900 font-semibold">React</b> e{" "}
            <b className="text-zinc-900 font-semibold">Next.js</b> no frontend, e{" "}
            <b className="text-zinc-900 font-semibold">Go</b> ou{" "}
            <b className="text-zinc-900 font-semibold">Python</b> no backend, com forte ênfase na
            integração contínua e arquitetura limpa.
          </p>

          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed max-w-2xl">
            Tenho especial interesse e atuação prática em automação de dados, web scraping e
            engenharia de infraestrutura, aplicando DevOps e conteinerização (Docker/Podman) para
            garantir a eficiência e a estabilidade das aplicações. Além disso, possuo um
            background robusto em segurança de aplicações (AppSec), análise forense de logs e
            hardening de sistemas, priorizando a segurança by design em todas as etapas do
            desenvolvimento.
          </p>
        </div>
      </div>

      {/* Coluna da Direita: Badge / Elemento Visual (Ocupa 5 de 12 colunas) */}
      <div className="w-full h-full min-h-[350px] lg:min-h-[500px] lg:col-span-5 flex items-center justify-center p-6  ">
        <Badge />
      </div>
    </section>
  );
}