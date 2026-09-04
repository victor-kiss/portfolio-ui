import { ProjectInterface } from '@/data/projects'
import Image from 'next/image'
import Link from 'next/link'

export default function ProjectCard({ title, description, image, techs, madeIn, link }: ProjectInterface) {
    return (
        // max-w-md e mx-auto impedem que o card fique gigante no desktop
        <div className="flex flex-col w-full max-w-md mx-auto bg-white border border-gray-100 overflow-hidden shadow-md hover:shadow-lg shadow-black/20 transition-shadow h-full">
            
            {/* Altura reduzida (h-48 sm:h-56) para não roubar tanto espaço vertical */}
            <div className="relative w-full h-48 sm:h-56 flex-shrink-0">
                <Image 
                    src={image} 
                    alt={title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover" 
                />
            </div>

          
            <div className="flex flex-col flex-grow p-5">
                
                <h3 className="text-lg sm:text-xl font-extrabold tracking-widest my-4 text-gray-900">
                    <b>&#9654;</b> {title}
                </h3>
                
             
                <p className="text-sm sm:text-base text-gray-800 my-4 line-clamp-3">
                  <b>&#42;</b> {description}
                </p>

                {/* mt-auto empurra o rodapé para baixo.  */}
                <div className="mt-auto border-t border-gray-300 pt-4">
                    
                    <div className="flex flex-wrap gap-x-2 gap-y-1 my-4 items-center">
                        <span className='text-xs font-bold text-gray-900 uppercase'>&#91;Techs&#93;:</span>
                        {techs.map((tech, index) => (
                            <span 
                                key={index} 
                                className="text-xs font-medium text-gray-800"
                            >
                               &#45; {tech}
                            </span>
                        ))}
                    </div>
                    
                    <div className='flex flex-wrap gap-2 my-4 items-center'>
                        <span className='text-xs font-bold text-gray-900 uppercase'>&#91;Feito em&#93;:</span>
                        <span className='text-xs text-gray-800'>{madeIn}</span>
                    </div>
                    
                    {/* Botão padronizado com w-full para preencher a base */}
                    <Link 
                        href={link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center justify-center w-full text-sm text-gray-100 tracking-wide bg-gray-800 hover:bg-gray-900 transition-colors border border-gray-100 py-2.5 px-4 shadow-sm"
                    >
                        Ver Projeto
                    </Link>
                </div>
            </div>
        </div>
    )
}