"use client";

import React, { ReactNode, useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

import { EmblaOptionsType } from "embla-carousel";

interface FadeCarouselProps {
  children: ReactNode;
  options?: EmblaOptionsType;
  className?: string;
}

export const FadeCarousel: React.FC<FadeCarouselProps> = ({
  children,
  options,
  className = "",
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: false,
    ...options,
  });

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);

    const animationFrame = requestAnimationFrame(() => {
      onSelect();
    });

    return () => cancelAnimationFrame(animationFrame);
  }, [emblaApi, onSelect]);

  return (
    <div className={`flex flex-col w-full mx-auto ${className}`}>
      {/* Viewport do Carrossel */}
      <div className="overflow-hidden w-full" ref={emblaRef}>
        <div className="flex touch-pan-y touch-pinch-zoom w-full">
          {React.Children.map(children, (child, index) => (
            // Adicionado flex, items-center e justify-center aqui!
            <div
              className="flex-[0_0_100%] min-w-0 relative flex items-center justify-center"
              key={index}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Controles de Navegação */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          className="w-10 h-10 flex items-center justify-center bg-gray-50 border border-gray-200 rounded-full shadow-sm text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={scrollPrev}
          disabled={prevBtnDisabled}
          aria-label="Projeto anterior"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        <button
          className="w-10 h-10 flex items-center justify-center bg-gray-50 border border-gray-200 rounded-full shadow-sm text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={scrollNext}
          disabled={nextBtnDisabled}
          aria-label="Próximo projeto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FadeCarousel;
