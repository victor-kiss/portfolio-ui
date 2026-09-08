"use client";

import dynamic from "next/dynamic";
import { motion, Variants } from "framer-motion";

const HeroScene = dynamic(
  () => import("@/app/_components/experience/scenes/hero-scene")
);

// Variantes para orquestrar o container e os filhos (Staggered Fade-Up)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1], 
    },
  },
};

export default function HeroSection() {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        {/* CAMADA DE FUNDO RESPONSIVA (Texto Gigante) */}
        <div className="absolute bottom-0 w-full h-20 bg-linear-to-t from-slate-100 via-white/10 to-transparent z-50 backdrop-blur-md [mask-image:linear-gradient(to_top,black_20%,transparent_100%)] pointer-events-none"></div>
        
        {/* Fundo animado suave para os textos gigantes de fundo */}
        <div 
          className="absolute inset-0 w-full h-full flex items-center justify-center flex-col select-none pointer-events-none blur-sm overflow-hidden"
        >
          {Array.from({ length: 6 }).map((_, index) => (
            <span
              className="font-extrabold text-[27vw] sm:text-[20vw] uppercase leading-none tracking-tighter text-white/50 whitespace-nowrap"
              key={index}
            >
              Victor
            </span>
          ))}
        </div>

        {/* CAMADA DE CONTEÚDO PRINCIPAL (Staggered Fade-Up) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="absolute top-1/3 sm:top-1/5 md:top-1/5 xl:top-1/2 -translate-y-1/2 left-0 w-auto z-10 flex items-start justify-start flex-col gap-2 px-6 sm:px-12"
        >
          <h1 className="flex flex-col select-none">
            <motion.span 
              variants={itemVariants}
              className="font-extrabold text-4xl md:text-5xl uppercase leading-tight text-black"
            >
              Victor Kiss
            </motion.span>
            
            <motion.span 
              variants={itemVariants}
              className="font-semibold text-sm sm:text-lg md:text-xl uppercase leading-tight text-black tracking-[0.25em] mt-2 italic"
            >
              Software Engineer
            </motion.span>
          </h1>
        </motion.div>

        <div className="w-full h-screen bg-linear-to-r from-slate-200 via-slate-300 to-slate-200 ">
           <HeroScene />
        </div>  
       
        {/* Aviso flutuante com entrada suave */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
          className="absolute w-full bottom-0 h-full z-50 flex items-end justify-center pointer-events-none p-5"
        >
          <span className="bg-black/70 text-white px-4 py-2.5 text-xs sm:text-sm shadow-md backdrop-blur-sm tracking-widest pointer-events-auto">
            &#x21BB; Modelos interativos: gire para ver os detalhes.
          </span>
        </motion.div>
      </div>
    </>
  );
}