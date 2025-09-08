"use client";
import { useState, useEffect } from "react";
import { HeroCarousel } from "@/components/HeroCarousel";
import { TreatmentsGrid } from "@/components/TreatmentsGrid";
import { QuickInquiryForm } from "@/components/QuickInquiryForm";
import { 
  Leaf, Heart, Users, Award, Star, ArrowRight, Play, Sparkles, 
  CheckCircle, Shield, TreePine, Phone, Calendar,
  MessageCircle, ChevronDown, Zap
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
  const [scrollY, setScrollY] = useState(0);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
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
      icon: <Heart className="w-8 h-8" />,
      title: "Healing Treatments",
      subtitle: "Ancient Therapies",
      description: "Experience traditional Panchakarma, Abhyanga, and specialized treatments that address root causes for lasting wellness.",
      features: ["10+ Traditional treatments", "Personalized consultations", "Expert practitioners"],
      image: IMAGES.treatments.fullBodyMassage,
      color: "from-rose-500/20 to-pink-500/20",
      borderColor: "border-rose-200",
      link: "/treatments"
    },
    {
      id: "training",
      icon: <Users className="w-8 h-8" />,
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
      icon: <TreePine className="w-8 h-8" />,
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
    { number: "5000+", label: "Years of Wisdom", icon: <Award className="w-6 h-6" /> },
    { number: "1000+", label: "Lives Transformed", icon: <Heart className="w-6 h-6" /> },
    { number: "15+", label: "Expert Treatments", icon: <Sparkles className="w-6 h-6" /> },
    { number: "98%", label: "Satisfaction Rate", icon: <Star className="w-6 h-6" /> }
  ];

  return (
    <main className="overflow-hidden">
      {/* Modern Hero with Floating Elements */}
      <section className="relative min-h-screen flex items-center">
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 z-0"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <HeroCarousel slides={heroSlides} />
        </div>

        {/* Floating Navigation Dots */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 hidden lg:flex flex-col gap-4">
          {['Welcome', 'Services', 'Testimonials', 'Contact'].map((section, idx) => (
            <div key={idx} className="group flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-white/40 group-hover:bg-accent transition-colors cursor-pointer"></div>
              <span className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 px-2 py-1 rounded whitespace-nowrap">
                {section}
              </span>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <div className="flex flex-col items-center gap-2 text-white/80">
            <span className="text-sm">Scroll to explore</span>
            <ChevronDown className="w-6 h-6" />
          </div>
        </div>
      </section>

      {/* Stats Bar - Floating */}
      <section className="relative -mt-20 z-30">
        <div className="container mx-auto px-4">
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-100 p-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-accent group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-text-muted font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section - Split with Interactive Elements */}
      <section className="py-32 bg-gradient-to-br from-background via-white to-surface relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-40 h-40 bg-accent/5 rounded-full animate-float"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-primary/5 rounded-full animate-float animate-delay-300"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <div className="animate-on-scroll">
                <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-6 py-3 mb-8">
                  <Leaf className="w-5 h-5 text-accent" />
                  <span className="text-primary font-semibold">WELCOME TO DIYA ULPATHA</span>
                </div>

                <h2 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                  Where Ancient 
                  <span className="block bg-gradient-to-r from-accent via-yellow-400 to-accent bg-clip-text text-transparent">
                    Wisdom Meets
                  </span>
                  Modern Wellness
                </h2>

                <p className="text-xl text-text-muted mb-8 leading-relaxed">
                  Discover the healing power of authentic Ayurveda in Sri Lanka&apos;s most peaceful sanctuary. 
                  Our expert practitioners combine 5000 years of ancient wisdom with modern comfort to create 
                  your perfect wellness experience.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <Link href="/about" className="group btn-primary inline-flex items-center gap-2">
                    <Play className="w-5 h-5" />
                    <span>Our Story</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/treatments" className="btn-outline">
                    Explore Treatments
                  </Link>
                </div>

                {/* Quick Features */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <span className="text-text-primary font-medium">Certified Practitioners</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <span className="text-text-primary font-medium">Natural Environment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <span className="text-text-primary font-medium">24/7 Support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <span className="text-text-primary font-medium">Personalized Care</span>
                  </div>
                </div>
              </div>

              {/* Visual */}
              <div className="animate-on-scroll animate-delay-200">
                <div className="relative">
                  <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src={IMAGES.treatments.fullBodyMassage}
                      alt="Ayurvedic treatment"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-6 -right-6 bg-accent/90 backdrop-blur-xl rounded-2xl p-4 shadow-xl animate-float">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="absolute -bottom-6 -left-6 bg-primary/90 backdrop-blur-xl rounded-2xl p-6 shadow-xl text-white animate-float animate-delay-300">
                    <div className="text-2xl font-bold">5000+</div>
                    <div className="text-sm opacity-90">Years Heritage</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Services Showcase */}
      <section className="py-32 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              Complete <span className="bg-gradient-to-r from-accent to-yellow-500 bg-clip-text text-transparent">Wellness Ecosystem</span>
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              From healing treatments to professional training, everything you need for your wellness journey
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            {/* Service Navigation */}
            <div className="flex justify-center mb-12 animate-on-scroll">
              <div className="flex bg-white rounded-2xl p-2 shadow-lg border border-gray-100">
                {services.map((service, index) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveService(index)}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
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

            {/* Active Service Display */}
            <div className="animate-on-scroll">
              <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Content */}
                  <div className="p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl flex items-center justify-center text-accent">
                        {services[activeService].icon}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-accent uppercase tracking-wide">
                          {services[activeService].subtitle}
                        </div>
                        <h3 className="text-3xl font-bold text-primary">
                          {services[activeService].title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-lg text-text-muted mb-8 leading-relaxed">
                      {services[activeService].description}
                    </p>

                    <div className="space-y-4 mb-8">
                      {services[activeService].features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span className="text-text-primary">{feature}</span>
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
                  <div className="relative h-96 lg:h-full">
                    <Image
                      src={services[activeService].image}
                      alt={services[activeService].title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Discover Our <span className="text-accent">Treatments</span>
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Experience authentic Ayurvedic healing through our traditional treatments
            </p>
          </div>
          <TreatmentsGrid />
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                Start Your <span className="bg-gradient-to-r from-accent to-yellow-500 bg-clip-text text-transparent">Wellness Journey</span>
              </h2>
              <p className="text-xl text-text-muted">
                Get in touch with us to begin your transformation
              </p>
            </div>
            <div className="animate-on-scroll animate-delay-200">
              <QuickInquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* Modern CTA */}
      <section className="py-32 bg-gradient-to-br from-primary via-primary-dark to-accent text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M0 0h80v80H0z'/%3E%3Cpath d='M0 0h80v80H0z' stroke='%23ffffff' stroke-width='1' fill='none'/%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-accent/20 backdrop-blur-xl rounded-3xl flex items-center justify-center mx-auto mb-8">
              <Sparkles className="w-10 h-10 text-accent" />
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              Ready to Transform Your Life?
            </h2>
            
            <p className="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed">
              Join thousands who have discovered the power of authentic Ayurvedic healing. 
              Your journey to wellness starts with a single step.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link 
                href="/contact" 
                className="group bg-accent hover:bg-accent/90 text-primary px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-3 justify-center"
              >
                <Calendar className="w-6 h-6" />
                Book Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <a 
                href="tel:+94112223344" 
                className="group bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:bg-white hover:text-primary flex items-center gap-3 justify-center"
              >
                <Phone className="w-6 h-6" />
                Call Now
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-accent" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent" />
                <span>100% Authentic</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-accent" />
                <span>Quick Response</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}