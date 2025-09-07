"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from 'swiper/modules';
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
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section aria-label="Hero Carousel" className="relative overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop
        autoplay={{ 
          delay: 6000,
          disableOnInteraction: false
        }}
        speed={1000}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-[600px] w-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative h-[600px] w-full group">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                className="object-cover transition-transform duration-[6000ms] group-hover:scale-105"
                priority={idx === 0}
                sizes="100vw"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
              
              {/* Animated Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center z-10">
                <div className="max-w-4xl mx-auto px-4">
                  <h1 
                    className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 transition-all duration-1000 transform ${
                      activeIndex === idx 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-8 opacity-0'
                    }`}
                    style={{ transitionDelay: '200ms' }}
                  >
                    {slide.heading.split(' ').map((word, wordIndex) => (
                      <span 
                        key={wordIndex}
                        className="inline-block mr-4 animate-fade-in-up"
                        style={{ animationDelay: `${(wordIndex + 2) * 100}ms` }}
                      >
                        {word}
                      </span>
                    ))}
                  </h1>
                  
                  <p 
                    className={`text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 transform ${
                      activeIndex === idx 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-8 opacity-0'
                    }`}
                    style={{ transitionDelay: '400ms' }}
                  >
                    {slide.subheading}
                  </p>
                  
                  <a
                    href={slide.cta.href}
                    className={`inline-block bg-accent text-primary px-8 py-4 rounded-xl shadow-lg font-semibold transition-all duration-1000 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white active:scale-95 ${
                      activeIndex === idx 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-8 opacity-0'
                    } hover:bg-accent/90 group`}
                    style={{ transitionDelay: '600ms' }}
                  >
                    <span className="group-hover:animate-shimmer">
                      {slide.cta.label}
                    </span>
                  </a>
                </div>
              </div>

              {/* Floating Decorative Elements */}
              <div className="absolute top-20 left-20 w-8 h-8 border border-white/30 rounded-full animate-float opacity-60"></div>
              <div className="absolute bottom-32 right-32 w-6 h-6 border border-accent/50 rounded-full animate-float animate-delay-300 opacity-80"></div>
              <div className="absolute top-1/2 left-32 w-4 h-4 bg-accent/40 rounded-full animate-pulse-gentle animate-delay-500"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeIndex === idx 
                ? 'bg-accent scale-125' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
            onClick={() => swiperRef.current?.slideToLoop(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}