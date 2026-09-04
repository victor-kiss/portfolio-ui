"use client";

import { useProgress } from "@react-three/drei";

export default function ModelLoader() {
  // Pega a porcentagem real de carregamento do modelo 3D
  const { progress } = useProgress();

  return (
    <div className="w-64 flex flex-col items-center justify-center gap-5 bg-zinc-950 p-6 rounded-2xl border border-zinc-200/20 backdrop-blur-md shadow-2xl">
      
      {/* Spinner com contraste melhorado */}
      <div className="w-8 h-8 border-[3px] border-zinc-400/30 border-t-zinc-100 rounded-full animate-spin" />
      
      <div className="w-full flex flex-col items-center gap-2">
        <span className="font-[family-name:var(--font-mono)] text-xs text-zinc-200 uppercase tracking-widest text-center">
          Carregando 3D
        </span>
        
        {/* Barra de progresso visual */}
        <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden">
          <div 
            className="h-full bg-zinc-200 transition-all duration-300 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        {/* Porcentagem numérica */}
        <span className="font-[family-name:var(--font-mono)] text-[10px] text-zinc-200 tracking-wider">
          {progress.toFixed(0)}%
        </span>
      </div>
    </div>
  );
}