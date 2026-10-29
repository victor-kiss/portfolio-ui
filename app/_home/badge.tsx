"use client";

import Image from "next/image";

export default function Badge() {
  return (
    <div className="flex items-center justify-center w-full py-12 ">
      {/* Container Principal (Mantido em 2D, com leve escala no hover) */}
      <div className="relative group transition-all duration-300 ease-out hover:scale-[1.02] cursor-pointer">
        
        {/* ================= CRACHÁ (CORPO PVC COM LUZ E SOMBRAS) ================= */}
        <div className="relative bg-white rounded-2xl border border-zinc-300/80 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25),0_10px_20px_-5px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.9)] flex flex-col w-[260px] sm:w-[290px] z-10 overflow-hidden">
          
          {/* Camada de Película Plástica / Reflexo Diagnonal de Luz (Glassy Sheen) */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/50 opacity-70 z-30 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Sombra Interna da Borda (Bisel Plastificado) */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.6)] z-30" />

          {/* Perfuração do Slot Punch com Relevo Negativo Profundo */}
          <div className="flex flex-col w-full items-center justify-center px-4 pt-2.5 pb-2 bg-gradient-to-b from-zinc-200/80 via-zinc-100 to-zinc-50 border-b border-zinc-200/80 shadow-[inset_0_-1px_2px_rgba(0,0,0,0.04)] relative z-10">
            <div className="w-11 sm:w-13 h-2.5 sm:h-3 bg-zinc-900/90 rounded-full border border-zinc-400/80 shadow-[inset_0_2px_4px_rgba(0,0,0,0.8),0_1px_1px_rgba(255,255,255,0.9)]" />
          </div>

          {/* Faixa Superior com Iluminação Suave */}
          <div className="h-2 w-full bg-gradient-to-r from-indigo-700 via-indigo-600 to-indigo-700 shadow-xs" />

          {/* Foto do Usuário (Sombra Projetada e Moldura Simples, sem Gradiente) */}
          <div className="flex flex-col justify-center items-center pt-5 pb-4 relative z-10">
            <div className="relative rounded-full p-0.5 bg-white border border-zinc-300 shadow-[0_6px_16px_rgba(0,0,0,0.12),inset_0_1px_2px_rgba(0,0,0,0.05)]">
              <Image
                src="/alien.jpeg"
                width={120}
                height={120}
                alt="Victor Kiss"
                className="rounded-full object-cover w-24 h-24 sm:w-28 sm:h-28 shadow-inner"
                priority
              />
            </div>
          </div>

          {/* Informações do Usuário com Leve Sombra de Texto */}
          <div className="pb-4 flex flex-col gap-1 px-4 text-center relative z-10">
            <span className="uppercase font-black text-slate-900 text-base sm:text-lg tracking-wide drop-shadow-[0_1px_1px_rgba(255,255,255,1)]">
              Victor Kiss
            </span>
            <div className="inline-flex items-center justify-center mx-auto px-2.5 py-0.5 rounded-full bg-slate-50/90 border border-slate-200/90 shadow-xs">
              <span className=" font-mono text-[11px] font-bold text-slate-700 tracking-tight">
                Software Engineer
              </span>
            </div>
          </div>

          {/* Grid de Dados PVC com Sombra de Separação */}
          <div className="grid grid-cols-2 py-3 border-t border-zinc-200/90 bg-gradient-to-b from-zinc-50 to-zinc-100/80 font-mono text-xs relative z-10 shadow-[inset_0_1px_3px_rgba(0,0,0,0.03)]">
            <div className="flex flex-col items-center gap-0.5 border-r border-zinc-200/80">
              <span className="text-[9px] font-extrabold text-zinc-400 uppercase tracking-widest">
                ID NO.
              </span>
              <span className="font-bold text-slate-800 tracking-wider">8163264</span>
            </div>
            
            <div className="flex flex-col items-center gap-0.5">
              <span className="text-[9px] font-extrabold text-zinc-400 uppercase tracking-widest">
                STATUS
              </span>
              <span className="font-bold text-slate-700 flex items-center gap-1.5">
               
                Ativo
              </span>
            </div>
          </div>

          {/* Código de Barras e Rodapé */}
          <div className="bg-white border-t border-zinc-200/80 p-4 flex flex-col items-center justify-center gap-1 relative z-10">
            <div className="h-6 w-full bg-[repeating-linear-gradient(90deg,#000,#000_1px,#fff_1px,#fff_3px,#000_3px,#000_5px,#fff_5px,#fff_6px)] opacity-85" />
          </div>

        </div>
      </div>
    </div>
  );
}