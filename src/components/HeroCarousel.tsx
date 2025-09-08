"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import "swiper/css";
import "swiper/css/effect-fade";

export interface HeroSlide {
  image: string;
  alt: string;
  heading: string;
  subheading: string;
  cta: {
    label: string;
    href: string;
  };
}

export interface HeroCarouselProps {
  slides: HeroSlide[];
}

export function HeroCarousel({ slides }: HeroCarouselProps) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section aria-label="Hero Carousel" className="relative overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop
        autoplay={{ 
          delay: 5000,
          disableOnInteraction: false
        }}
        speed={800}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-[70vh] md:h-[80vh] w-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative h-full w-full">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={idx === 0}
                sizes="100vw"
                quality={85}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/50"></div>
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center z-10 px-4">
                <div className="max-w-4xl mx-auto">
                  <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-800 ${
                    activeIndex === idx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}>
                    {slide.heading}
                  </h1>
                  
                  <p className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed transition-all duration-800 delay-200 ${
                    activeIndex === idx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}>
                    {slide.subheading}
                  </p>
                  
                  <a
                    href={slide.cta.href}
                    className={`inline-block bg-accent text-primary px-6 py-3 rounded-lg shadow-lg font-semibold transition-all duration-800 delay-400 hover:scale-105 hover:shadow-xl ${
                      activeIndex === idx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  >
                    {slide.cta.label}
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeIndex === idx ? 'bg-accent w-6' : 'bg-white/50 hover:bg-white/80'
            }`}
            onClick={() => swiperRef.current?.slideToLoop(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}