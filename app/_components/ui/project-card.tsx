import { ProjectInterface } from '@/data/projects'
import Image from 'next/image'
import Link from 'next/link'

export default function ProjectCard({ title, description, image, techs, madeIn, link }: ProjectInterface) {
  return (
    <div className="group flex flex-col w-full max-w-md mx-auto bg-white border border-slate-200/80 rounded-2xl overflow-hidden drop-shadow-md hover:drop-shadow-xl hover:border-slate-300/80 transition-all duration-300 h-full ">
      
      {/* Imagem com efeito Zoom e Badge Flutuante */}
      <div className="relative w-full h-48 sm:h-52 flex-shrink-0 overflow-hidden bg-slate-100">
        <Image 
          src={image} 
          alt={title} 
          fill 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
        />

        {/* Badge 'Feito em' estilo Glassmorphism na imagem */}
        {madeIn && (
          <div className="absolute top-3 right-3 px-2.5 py-1 text-[11px] font-mono font-medium bg-slate-900/80 backdrop-blur-md text-slate-100 rounded-full border border-white/10 shadow-xs">
            Feito em: {madeIn}
          </div>
        )}
      </div>

      {/* Conteúdo Principal */}
      <div className="flex flex-col flex-grow p-6">
        
        {/* Título do Projeto */}
        <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900">
          {title}
        </h3>
        
        {/* Descrição */}
        <p className="text-sm text-slate-600 leading-relaxed mt-2.5 mb-6 line-clamp-3">
          {description}
        </p>

        {/* Rodapé empurrado para a base */}
        <div className="mt-auto py-4 border-t border-slate-100 flex flex-col gap-4">
          
          {/* Techs em formato de Pílulas / Badges */}
          <div className="flex flex-wrap gap-1.5 items-center">
            {techs.map((tech, index) => (
              <span 
                key={index} 
                className="px-2.5 py-1 text-xs font-mono font-medium bg-slate-100/80 text-slate-700 rounded-md border border-slate-200/60 transition-colors hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200"
              >
                {tech}
              </span>
            ))}
          </div>
          
          {/* Botão de Ação com Seta Animada */}
          <Link 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center justify-center gap-2 w-full text-sm font-semibold text-white bg-slate-900 hover:text-purple-200 transition-all duration-200 rounded-xl py-2.5 px-4 my-2 shadow-xs active:scale-[0.98] group/btn"
          >
            <span>Ver Projeto</span>
            <svg 
              className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>

        </div>
      </div>
    </div>
  )
}