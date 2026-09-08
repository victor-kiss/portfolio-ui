"use client";

import dynamic from "next/dynamic";

const ComputerScene = dynamic(
  () => import("@/app/_components/experience/scenes/computer-scene"));

export default function AboutSection() {
  return (
    <section
      className="p-6 md:p-10 w-full min-h-dvh grid grid-cols-1 xl:grid-cols-2 xl:gap-8 items-center"
      id="sobre-mim"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="space-y-6 w-full">
          <h2 className="font-extrabold leading-relaxed text-2xl sm:text-3xl md:text-4xl tracking-widest mb-4 uppercase">
            &lt;Sobre&#92;&gt;
          </h2>

          <p className="leading-relaxed">
            <b>&#42;</b> Engenheiro de Software focado na construção de sistemas
            escaláveis e de alta performance, com sólida experiência no
            ecossistema Fullstack. Minha stack principal é baseada em{" "}
            <b>TypeScript</b>, utilizando <b>React</b> e <b>Next.js</b> no
            frontend, e <b>Node.js</b> ou <b>Python</b> no backend, com forte
            ênfase na integração contínua e arquitetura limpa.
          </p>

          <p className="leading-relaxed">
            <b>&#42;</b> Tenho especial interesse e atuação prática em automação
            de dados, web scraping e engenharia de infraestrutura, aplicando
            DevOps e conteinerização (Docker) para garantir a eficiência e a
            estabilidade das aplicações. Além disso, possuo um background
            robusto em segurança de aplicações (AppSec), análise forense de logs
            e hardening de sistemas, priorizando a segurança by design em todas
            as etapas do desenvolvimento.
          </p>
        </div>
      </div>
      <div className="w-full h-full min-h-[300px]  xl:min-h-full flex items-center justify-center">
        <ComputerScene />
      </div>
    </section>
  );
}
