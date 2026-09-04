"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitora o scroll da página para ativar o fundo branco
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNavbar = () => {
    setOpen(!open);
  };

  const closeNavbar = () => {
    setOpen(false);
  };

  const links = [
    { title: "Início", url: "/", target: null },
    { title: "Sobre Mim", url: "#sobre-mim ", target: null },
    { title: "Skills", url: "#stack", target: null },
    { title: "Projetos", url: "#projetos", target: null },
    { title: "Experiência", url: "#experiencia", target: null },
  ];

  return (
    <div className="fixed top-0 left-0 z-60 w-full">
      <nav
        className={`w-full px-6 sm:px-12 py-4 transition-all duration-300 ${
          scrolled
            ? "bg-white backdrop-blur-md border-b border-gray-100 shadow-md shadow-black/5"
            : "bg-transparent border-b border-transparent backdrop-blur-md"
        }`}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo limpo e tipográfico */}
          <Link
            href={"/"}
            className={`text-xl font-bold tracking-tight transition-colors ${
              scrolled
                ? "text-gray-900 hover:text-black"
                : "text-gray-900 hover:text-gray-600"
            }`}
            onClick={closeNavbar}
          >
            &#91;VK&#93;
          </Link>

          {/* Botão Mobile */}
          <div className="sm:hidden h-full flex items-center">
            <button
              className="text-gray-700 hover:text-black transition-colors focus:outline-none p-2"
              onClick={toggleNavbar}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 8h16M4 16h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Menu Desktop & Mobile Container */}
          <div
            className={`sm:flex flex-col sm:flex-row items-center gap-8 absolute sm:relative top-full left-0 w-full sm:w-auto bg-white sm:bg-transparent border-b sm:border-none border-gray-100 p-6 sm:p-0 transition-all duration-300 ease-in-out origin-top ${open ? "scale-y-100 opacity-100 shadow-xl" : "scale-y-0 opacity-0 sm:scale-y-100 sm:opacity-100"}`}
          >
            <ul className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 w-full sm:w-auto">
              {links.map((data, i) => (
                <li key={i}>
                  <Link
                    href={data.url}
                    target={data.target ? "_blank" : "_self"}
                    className="text-sm font-medium text-gray-900 hover:text-gray-950 transition-colors"
                    onClick={closeNavbar}
                  >
                    {data.title}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Botão Call to Action */}
          </div>
        </div>
      </nav>
    </div>
  );
}
