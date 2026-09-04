export interface ProjectInterface {
    title:string,
    description:string,
    image:string,
    techs:string[],
    madeIn:string,
    link:string
}


export const projects:ProjectInterface[] = [
    {
        title: "UrbSync",
        description: "Extensão para automação e extração de dados nos sistemas Aprova Digital e SEI. gerando arquivos Excel de forma rápida e eficiente.",
        image: "/projects/urbsync.png",
        techs: ["Javascript", "Manifest V3", "Tailwind CSS","Excel JS"],
        link: "https://urbsync.vercel.app/",
        madeIn:"10 dias"
    },
     {
        title: " Macintosh 128K Experience",
        description: "O Macintosh 128K Experience é uma landing page conceitual e um portfólio imersivo que recria a estética revolucionária do primeiro Mac OS.",
        image: "/projects/macintosh.png",
        techs: ["TypeScript", "Next.js", "GSAP","Framer-Motion"],
        link: "https://macintosh-128k-experience.vercel.app/",
        madeIn:"5 horas"
    },
     {
        title: "Amor em Código",
        description: "Uma experiência web que combina afeto e programação para eternizar histórias de amor por meio de uma interface interativa.",
        image: "/projects/amor-em-codigo.png",
        techs: ["TypeScript", "Next.js", "GSAP","Framer-Motion"],
        link: "https://amoremcodigo-zeta.vercel.app/",
        madeIn:"4 horas" 
     },
     {
        title: " Cacau de Origem",
        description: "Uma experiência de UI / UX que conta a jornada do cacau da plantação ao produto final feito por uma marca de chocolates fictícios.",
        image: "/projects/cacau.png",
        techs: ["TypeScript", "Next.js","Framer-Motion"],
        link: "https://cacau-de-origem.vercel.app/",
        madeIn:"6 horas"

     }
]