"use client";
import { useState, useEffect } from "react";
import { HeroCarousel } from "@/components/HeroCarousel";
import { TreatmentsGrid } from "@/components/TreatmentsGrid";
import { QuickInquiryForm } from "@/components/QuickInquiryForm";
import { 
  Leaf, Heart, Users, Award, Star, ArrowRight, Play, Sparkles, 
  CheckCircle, TreePine, ChevronDown
} from "lucide-react";
import { IMAGES } from "@/constants/images";
import Image from "next/image";
import Link from "next/link";

const heroSlides = [
  {
    image: IMAGES.hero.slide1,
    alt: "Peaceful Ayurveda treatment room with natural lighting",
    heading: "Authentic Ayurveda Wellness",
    subheading: "Experience 5000 years of healing wisdom in Sri Lanka's most tranquil sanctuary",
    cta: { label: "Begin Your Journey", href: "/contact" },
  },
  {
    image: IMAGES.hero.slide2,
    alt: "Natural medicinal garden with healing herbs",
    heading: "Connect with Nature",
    subheading: "Discover harmony in our medicinal gardens where every breath brings you closer to wellness",
    cta: { label: "Explore Treatments", href: "/treatments" },
  },
  {
    image: IMAGES.hero.slide3,
    alt: "Serene accommodation surrounded by lush gardens",
    heading: "Your Wellness Retreat",
    subheading: "Find peace in our comfortable accommodations designed for healing and transformation",
    cta: { label: "View Rooms", href: "/accommodation" },
  },
];

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const services = [
    {
      id: "treatments",
      icon: <Heart className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Healing Treatments",
      subtitle: "Ancient Therapies",
      description: "Experience traditional Panchakarma, Abhyanga, and specialized treatments that address root causes for lasting wellness.",
      features: ["10+ Traditional treatments", "Personalized consultations", "Expert practitioners"],
      image: IMAGES.treatments.steamBath,
      color: "from-rose-500/20 to-pink-500/20",
      borderColor: "border-rose-200",
      link: "/treatments"
    },
    {
      id: "training",
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Training Programs",
      subtitle: "Professional Certification",
      description: "14-day comprehensive courses combining ancient wisdom with practical skills for aspiring practitioners.",
      features: ["Professional certification", "Hands-on training", "Expert guidance"],
      image: IMAGES.treatments.panchakarma,
      color: "from-blue-500/20 to-indigo-500/20",
      borderColor: "border-blue-200",
      link: "/training"
    },
    {
      id: "accommodation",
      icon: <TreePine className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Wellness Retreat",
      subtitle: "Nature Integration",
      description: "Superior accommodations with natural rock features and garden views designed for healing journeys.",
      features: ["Garden views", "Natural rock features", "Peaceful environment"],
      image: IMAGES.accommodation.doubleRoom,
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-200",
      link: "/accommodation"
    }
  ];

  const stats = [
    { number: "5000+", label: "Years of Wisdom", icon: <Award className="w-4 h-4 sm:w-6 sm:h-6" /> },
    { number: "100+", label: "Lives Transformed", icon: <Heart className="w-4 h-4 sm:w-6 sm:h-6" /> },
    { number: "15+", label: "Expert Treatments", icon: <Sparkles className="w-4 h-4 sm:w-6 sm:h-6" /> },
    { number: "98%", label: "Satisfaction Rate", icon: <Star className="w-4 h-4 sm:w-6 sm:h-6" /> }
  ];

  // --- ADD: safe helper to compute parallax offset without touching `window` during SSR
  const getParallaxOffset = () => {
    // server-side guard
    if (typeof window === "undefined") return 0;
    return scrollY * (window.innerWidth < 768 ? 0.2 : 0.5);
  };
  // --- END ADD

  return (
    <main className="overflow-hidden">
      {/* Mobile-Optimized Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center">
        {/* Parallax Background - Reduced on mobile */}
        <div 
          className="absolute inset-0 z-0"
          style={{ transform: `translateY(${getParallaxOffset()}px)` }}
        >
          <HeroCarousel slides={heroSlides} />
        </div>

        {/* Mobile-friendly floating dots - Hidden on mobile, shown on lg+ */}
        <div className="absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 z-20 hidden lg:flex flex-col gap-4">
          {['Welcome', 'Services', 'Testimonials', 'Contact'].map((section, idx) => (
            <div key={idx} className="group flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-white/40 group-hover:bg-accent transition-colors cursor-pointer"></div>
              <span className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 px-2 py-1 rounded whitespace-nowrap">
                {section}
              </span>
            </div>
          ))}
        </div>

        {/* Mobile-optimized scroll indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <div className="flex flex-col items-center gap-1 sm:gap-2 text-white/80">
            <span className="text-xs sm:text-sm">Scroll to explore</span>
            <ChevronDown className="w-4 h-4 sm:w-6 sm:h-6" />
          </div>
        </div>
      </section>

      {/* Mobile-Optimized Stats Bar */}
      <section className="relative -mt-10 sm:-mt-20 z-30 px-4">
        <div className="container mx-auto">
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl border border-gray-100 p-4 sm:p-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-4 text-accent group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-xl sm:text-3xl lg:text-4xl font-bold text-primary mb-1 sm:mb-2">{stat.number}</div>
                  <div className="text-xs sm:text-base text-text-muted font-medium leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile-Optimized Welcome Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-background via-white to-surface relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-20 sm:w-40 h-20 sm:h-40 bg-accent/5 rounded-full animate-float"></div>
          <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-16 sm:w-32 h-16 sm:h-32 bg-primary/5 rounded-full animate-float animate-delay-300"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              {/* Content */}
              <div className="animate-on-scroll order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8">
                  <Leaf className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                  <span className="text-primary font-semibold text-sm sm:text-base">WELCOME TO DIYA ULPATHA</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
                  Where Ancient 
                  <span className="block bg-gradient-to-r from-accent via-yellow-400 to-accent bg-clip-text text-transparent">
                    Wisdom Meets
                  </span>
                  Modern Wellness
                </h2>

                <p className="text-lg sm:text-xl text-text-muted mb-6 sm:mb-8 leading-relaxed">
                  Discover the healing power of authentic Ayurveda in Sri Lanka&apos;s most peaceful sanctuary. 
                  Our expert practitioners combine 5000 years of ancient wisdom with modern comfort to create 
                  your perfect wellness experience.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
                  <Link href="/about" className="group btn-primary inline-flex items-center gap-2 justify-center">
                    <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Our Story</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/treatments" className="btn-outline text-center">
                    Explore Treatments
                  </Link>
                </div>

                {/* Mobile-optimized Quick Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-6 sm:h-6 text-green-500 flex-shrink-0" />
                    <span className="text-text-primary font-medium text-sm sm:text-base">Certified Practitioners</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-6 sm:h-6 text-green-500 flex-shrink-0" />
                    <span className="text-text-primary font-medium text-sm sm:text-base">Natural Environment</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-6 sm:h-6 text-green-500 flex-shrink-0" />
                    <span className="text-text-primary font-medium text-sm sm:text-base">24/7 Support</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-6 sm:h-6 text-green-500 flex-shrink-0" />
                    <span className="text-text-primary font-medium text-sm sm:text-base">Personalized Care</span>
                  </div>
                </div>
              </div>

              {/* Visual */}
              <div className="animate-on-scroll animate-delay-200 order-1 lg:order-2">
                <div className="relative">
                  <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl">
                    <Image
                      src={IMAGES.treatments.fullBodyMassage}
                      alt="Ayurvedic treatment"
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>

                  {/* Mobile-optimized Floating Elements */}
                  <div className="absolute -top-3 sm:-top-6 -right-3 sm:-right-6 bg-accent/90 backdrop-blur-xl rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-xl animate-float">
                    <Star className="w-4 h-4 sm:w-8 sm:h-8 text-white" />
                  </div>
                  
                  <div className="absolute -bottom-3 sm:-bottom-6 -left-3 sm:-left-6 bg-primary/90 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-6 shadow-xl text-white animate-float animate-delay-300">
                    <div className="text-lg sm:text-2xl font-bold">5000+</div>
                    <div className="text-xs sm:text-sm opacity-90">Years Heritage</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile-Optimized Interactive Services */}
      <section className="py-16 sm:py-24 lg:py-32 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
              Complete <span className="bg-gradient-to-r from-accent to-yellow-500 bg-clip-text text-transparent">Wellness Ecosystem</span>
            </h2>
            <p className="text-lg sm:text-xl text-text-muted max-w-3xl mx-auto">
              From healing treatments to professional training, everything you need for your wellness journey
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            {/* Mobile-first Service Navigation */}
            <div className="flex justify-center mb-8 sm:mb-12 animate-on-scroll overflow-x-auto">
              <div className="flex bg-white rounded-xl sm:rounded-2xl p-1 sm:p-2 shadow-lg border border-gray-100 min-w-max">
                {services.map((service, index) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveService(index)}
                    className={`px-3 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 whitespace-nowrap ${
                      activeService === index
                        ? 'bg-primary text-white shadow-lg'
                        : 'text-text-muted hover:text-primary'
                    }`}
                  >
                    {service.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile-optimized Active Service Display */}
            <div className="animate-on-scroll">
              <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl border border-gray-100">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Content */}
                  <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl sm:rounded-2xl flex items-center justify-center text-accent">
                        {services[activeService].icon}
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-wide">
                          {services[activeService].subtitle}
                        </div>
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary">
                          {services[activeService].title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-base sm:text-lg text-text-muted mb-6 sm:mb-8 leading-relaxed">
                      {services[activeService].description}
                    </p>

                    <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                      {services[activeService].features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 sm:gap-3">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                          <span className="text-text-primary text-sm sm:text-base">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link 
                      href={services[activeService].link}
                      className="btn-primary w-fit"
                    >
                      Learn More
                    </Link>
                  </div>

                  {/* Image */}
                  <div className="relative h-64 sm:h-80 lg:h-full order-1 lg:order-2">
                    <Image
                      src={services[activeService].image}
                      alt={services[activeService].title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:hidden"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile-Optimized Treatments Preview */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Discover Our <span className="text-accent">Treatments</span>
            </h2>
            <p className="text-lg sm:text-xl text-text-muted max-w-3xl mx-auto">
              Experience authentic Ayurvedic healing through our traditional treatments
            </p>
          </div>
          <TreatmentsGrid />
        </div>
      </section>

      {/* Mobile-Optimized Contact Form */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 animate-on-scroll">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
                Start Your <span className="bg-gradient-to-r from-accent to-yellow-500 bg-clip-text text-transparent">Wellness Journey</span>
              </h2>
              <p className="text-lg sm:text-xl text-text-muted">
                Get in touch with us to begin your transformation
              </p>
            </div>
            <div className="animate-on-scroll animate-delay-200">
              <QuickInquiryForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}