"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full block bg-gray-50 border-t border-zinc-200 py-12 px-6 sm:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Lado Esquerdo: Marca & Status */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <Link
            href="/"
            className="font-[family-name:var(--font-syne)] text-2xl font-extrabold uppercase tracking-tight text-zinc-900 hover:text-black transition-colors"
          >
            Victor Kiss
          </Link>
        </div>

        {/* Centro: Links de Navegação Rápida */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-xs tracking-widest text-zinc-800">
           <Link
            href="/home"
            className="hover:text-zinc-950 transition-colors"
          >
            Inicio
          </Link>
           <Link
            href="#projetos"
            className="hover:text-zinc-950 transition-colors"
          >
            Sobre mim
          </Link>
          <Link href="#stack" className="hover:text-zinc-950 transition-colors">
            Skills
          </Link>
          <Link
            href="#projetos"
            className="hover:text-zinc-950 transition-colors"
          >
            Projetos
          </Link>
          <Link
            href="#experiencia"
            className="hover:text-zinc-950 transition-colors"
          >
            Experiência
          </Link>
        </div>

        {/* Lado Direito: Redes Sociais */}
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 text-xs tracking-widest text-zinc-800">
          <Link
            href="https://github.com/victor-kiss"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold hover:text-zinc-950 transition-colors uppercase"
          >
            GitHub
          </Link>
          <Link
            href="https://linkedin.com/in/victor-kiss"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold hover:text-zinc-950 transition-colors uppercase"
          >
            LinkedIn
          </Link>
        </div>
      </div>

      {/* Terceira div abaixo das colunas com texto fallback e créditos */}
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-zinc-300 flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
        <p className=" text-xs text-zinc-800">Todos os direitos reservados.</p>
        <p className=" text-xs text-zinc-800">
          © {currentYear} — Desenvolvido por Victor Kiss
        </p>
      </div>
    </footer>
  );
}
