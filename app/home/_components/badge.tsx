"use client";

import Image from "next/image";

export default function Badge() {
  return (
    <div className="flex items-center justify-center w-full py-4 overflow-visible">
      <div className="transition-all duration-500 ease-out transform scale-80 sm:scale-90 md:scale-100 [perspective:1000px] [transform:rotateY(-15deg)_rotateX(8deg)] hover:[transform:rotateY(0deg)_rotateX(0deg)] cursor-pointer drop-shadow-xl drop-shadow-black/20">
        
        {/* ================= CORDÃO ================= */}
        <div className="flex flex-col items-center justify-center -mb-3.5 z-10 select-none">
          {/* 1. Fita do Cordão */}
          <div className="w-9 sm:w-10 h-24 sm:h-28 bg-gradient-to-r from-indigo-800 via-indigo-700 to-indigo-900 rounded-t-md shadow-inner relative flex items-center justify-center overflow-hidden">
            {/* Costura das bordas */}
            <div className="absolute inset-y-0 left-1 w-[1px] border-r border-dashed border-zinc-500/40" />
            <div className="absolute inset-y-0 right-1 w-[1px] border-l border-dashed border-zinc-500/40" />
            
            {/* Textura sutil do tecido */}
            <div className="text-[9px] font-mono tracking-widest text-zinc-400 rotate-90 uppercase opacity-60">
              Victor
            </div>
          </div>

          {/* 2. Anel de Metal */}
          <div className="w-6 sm:w-7 h-3.5 sm:h-4 border-2 border-zinc-400 rounded-t-full bg-zinc-300/30 shadow-xs -mt-0.5 z-10" />

          {/* 3. Presilha / Mosquetão Metálico */}
          <div className="w-7 sm:w-8 h-4 sm:h-5 bg-gradient-to-b from-zinc-200 via-zinc-300 to-zinc-400 rounded-xs border border-zinc-400 shadow-md flex items-center justify-center z-20 relative -mt-0.5">
            <div className="w-3.5 sm:w-4 h-1 bg-zinc-600 rounded-full shadow-inner" />
          </div>

          {/* 4. Gancho que passa pela perfuração */}
          <div className="w-3 h-3.5 border-2 border-zinc-400 border-t-0 rounded-b-md z-10 -mt-0.5 bg-zinc-300/40" />
        </div>

        {/* ================= CRACHÁ ================= */}
        <div className="bg-white rounded-2xl drop-shadow-2xl border border-zinc-200/90 flex flex-col w-[260px] sm:w-[290px] relative z-0 overflow-hidden shadow-xl">
          
          {/* Perfuração do Crachá (Slot Punch) */}
          <div className="flex flex-col h-full w-full items-center justify-center px-4 pt-1 pb-1 bg-zinc-100/80 border-b border-zinc-200/60">
            <div className="w-full flex justify-center py-0.5">
              <div className="w-10 sm:w-12 h-2 sm:h-2.5 bg-zinc-400/80 rounded-full border border-zinc-500/30 shadow-inner" />
            </div>
          </div>

          {/* Foto com Borda Técnica */}
          <div className="flex flex-col justify-center items-center py-5 sm:py-6">
            <div className="relative p-1 rounded-full bg-gradient-to-b from-zinc-200 to-zinc-100 border border-zinc-300 shadow-xs">
              <Image
                src="/alien.jpeg"
                width={120}
                height={120}
                alt="Victor Kiss"
                className="rounded-full object-cover w-24 h-24 sm:w-28 sm:h-28"
                priority
              />
            </div>
          </div>

          {/* Informações do Usuário */}
          <div className="pb-4 flex flex-col gap-0.5 px-4 text-center">
            <span className="uppercase font-extrabold text-base sm:text-lg tracking-wider text-zinc-900">
              Victor Kiss
            </span>
            <span className="uppercase font-mono text-xs font-semibold text-zinc-600 tracking-tight">
              Software Engineer
            </span>
          </div>

          {/* Grid de Dados */}
          <div className="grid grid-cols-2 py-4 border-t border-zinc-200/80 bg-zinc-50/80 font-mono text-xs">
            <div className="flex flex-col items-center gap-1 border-r border-zinc-200/60">
              <span className="text-[10px] font-bold text-zinc-700 uppercase tracking-widest">
                ID
              </span>
              <span className="font-semibold text-slate-800">8163264</span>
            </div>
            
            <div className="flex flex-col items-center gap-1">
              <span className="text-[10px] font-bold text-zinc-700 uppercase tracking-widest">
                STATUS
              </span>
              <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                Ativo
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}