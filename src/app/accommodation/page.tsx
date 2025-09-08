"use client";
import { useState, useEffect } from "react";
import { RoomsGrid } from "@/components/RoomsGrid";
import Image from "next/image";
import { 
  TreePine, Mountain, Utensils, Waves, Dumbbell, Wifi, Coffee, Shield, 
  CheckCircle, Clock, MapPin, Star, ArrowRight, Heart,
  Calendar, Phone, Users, Sparkles, Eye, Camera
} from "lucide-react";
import { IMAGES } from "@/constants/images";

const amenities = [
  {
    icon: <TreePine className="w-8 h-8" />,
    title: "Garden Views",
    description: "Stunning views of our medicinal herb gardens from every room",
    highlight: "Every Room"
  },
  {
    icon: <Mountain className="w-8 h-8" />,
    title: "Natural Rock Features",
    description: "Unique natural rock surfaces creating distinctive ambiance",
    highlight: "Unique Design"
  },
  {
    icon: <Utensils className="w-8 h-8" />,
    title: "Ayurvedic Dining",
    description: "Nutritious meals prepared according to Ayurvedic principles",
    highlight: "Healthy Cuisine"
  },
  {
    icon: <Waves className="w-8 h-8" />,
    title: "Wellness Integration",
    description: "Perfect complement to your Ayurveda wellness journey",
    highlight: "Holistic Experience"
  },
  {
    icon: <Dumbbell className="w-8 h-8" />,
    title: "Training Friendly",
    description: "Ideal for immersive Ayurveda training programs",
    highlight: "Educational Focus"
  },
  {
    icon: <Wifi className="w-8 h-8" />,
    title: "Modern Comfort",
    description: "All modern amenities while maintaining natural harmony",
    highlight: "Contemporary Luxury"
  },
  {
    icon: <Coffee className="w-8 h-8" />,
    title: "Long-Stay Comfort",
    description: "Designed for extended wellness retreats",
    highlight: "Extended Stays"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Enhanced Privacy",
    description: "Natural elements create intimate and peaceful spaces",
    highlight: "Personal Sanctuary"
  }
];

const policies = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Check-in / Check-out",
    details: "Check-in: 2:00 PM | Check-out: 12:00 PM",
    subtext: "Flexible timing available upon request"
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Location",
    details: "Nestled in lush gardens, 15 minutes from Kandy city center",
    subtext: "Easy access to city amenities"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Wellness Focus",
    details: "All accommodations designed to support your healing journey",
    subtext: "Purpose-built for wellness"
  }
];

const experienceHighlights = [
  {
    icon: <Eye className="w-10 h-10" />,
    title: "Panoramic Views",
    description: "Wake up to breathtaking garden vistas that change with the seasons",
    color: "from-green-500/20 to-emerald-500/20",
    accent: "text-green-600"
  },
  {
    icon: <Mountain className="w-10 h-10" />,
    title: "Natural Architecture",
    description: "Experience rooms that incorporate natural rock formations for unique ambiance",
    color: "from-stone-500/20 to-gray-500/20",
    accent: "text-gray-600"
  },
  {
    icon: <Heart className="w-10 h-10" />,
    title: "Wellness Integration",
    description: "Every detail designed to support your healing and transformation journey",
    color: "from-rose-500/20 to-pink-500/20",
    accent: "text-rose-600"
  }
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Wellness Retreat Guest",
    content: "The natural rock features in my room created such a unique, peaceful atmosphere. I felt truly connected to nature throughout my stay.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face&q=80",
    stay: "7-day retreat"
  },
  {
    name: "Dr. James Chen",
    role: "Training Program Participant",
    content: "The accommodation perfectly complemented our intensive training. The garden views provided daily inspiration and tranquility.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face&q=80",
    stay: "14-day program"
  },
  {
    name: "Emma Rodriguez",
    role: "Family Retreat",
    content: "Our family room was spacious and beautifully designed. The natural elements made our children feel like they were on an adventure.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face&q=80",
    stay: "Family package"
  }
];

export default function AccommodationPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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

    // Testimonial auto-rotate
    const testimonialTimer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
      clearInterval(testimonialTimer);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section - Immersive Visual */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 z-0"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <Image
            src={IMAGES.accommodation.doubleRoom}
            alt="Luxurious accommodation with garden views"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full backdrop-blur-sm animate-float border border-white/20"></div>
          <div className="absolute bottom-32 left-16 w-24 h-24 bg-accent/20 rounded-full animate-float animate-delay-300"></div>
          <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-primary/20 rounded-full animate-float animate-delay-200"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center text-white max-w-5xl mx-auto px-4">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-white/20">
              <Mountain className="w-5 h-5 text-accent" />
              <span className="font-semibold">NATURAL SANCTUARY</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-8 leading-[0.9]">
              Where Nature
              <span className="block bg-gradient-to-r from-accent via-yellow-400 to-accent bg-clip-text text-transparent">
                Meets Luxury
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
              Experience unparalleled comfort in our thoughtfully designed rooms featuring natural rock formations, stunning garden views, and modern amenities that harmonize with nature.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <a 
                href="#rooms" 
                className="group bg-accent hover:bg-accent/90 text-primary px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-3 justify-center"
              >
                <Camera className="w-6 h-6" />
                Explore Rooms
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">3</div>
                <div className="text-sm text-white/80">Room Types</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">100%</div>
                <div className="text-sm text-white/80">Garden Views</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                <div className="text-sm text-white/80">Wellness Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Highlights - Unique Grid */}
      <section className="py-32 bg-gradient-to-br from-surface via-background to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20 animate-on-scroll">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Designed for <span className="bg-gradient-to-r from-accent to-yellow-500 bg-clip-text text-transparent">Transformation</span>
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
              Every element of our accommodations has been carefully crafted to support your wellness journey
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {experienceHighlights.map((highlight, index) => (
              <div 
                key={index}
                className={`animate-on-scroll group relative overflow-hidden rounded-3xl transition-all duration-700 hover:-translate-y-6 hover:scale-105`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-100 h-full">
                  <div className={`w-20 h-20 bg-gradient-to-br ${highlight.color} rounded-2xl flex items-center justify-center mb-8 ${highlight.accent} group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    {highlight.icon}
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-6 group-hover:text-accent transition-colors duration-300">
                    {highlight.title}
                  </h3>
                  
                  <p className="text-text-muted text-lg leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Immersive Room Showcase */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-6 py-3 mb-6">
              <Sparkles className="w-5 h-5 text-accent" />
              <span className="text-primary font-semibold">ROOM COLLECTION</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Your <span className="bg-gradient-to-r from-accent to-yellow-500 bg-clip-text text-transparent">Perfect Sanctuary</span>
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Choose from our thoughtfully designed rooms, each offering unique features and unparalleled comfort
            </p>
          </div>
        </div>
        
        <div id="rooms" className="animate-on-scroll">
          <RoomsGrid />
        </div>
      </section>

      {/* Dynamic Testimonials */}
      <section className="py-32 bg-gradient-to-r from-primary/5 via-accent/5 to-surface relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Guest <span className="text-accent">Experiences</span>
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Hear from those who have found their sanctuary with us
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white rounded-3xl p-12 shadow-2xl border border-gray-100 animate-on-scroll">
              {/* Active Testimonial */}
              <div className="text-center mb-8">
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-accent text-accent" />
                  ))}
                </div>
                
                <blockquote className="text-2xl lg:text-3xl text-text-primary leading-relaxed mb-8 italic">
                  &ldquo;{testimonials[currentTestimonial].content}&rdquo;
                </blockquote>
                
                <div className="flex items-center justify-center gap-4">
                  <Image
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    width={80}
                    height={80}
                    className="rounded-full object-cover shadow-lg"
                  />
                  <div className="text-left">
                    <div className="font-bold text-xl text-primary">{testimonials[currentTestimonial].name}</div>
                    <div className="text-text-muted">{testimonials[currentTestimonial].role}</div>
                    <div className="text-accent text-sm font-medium">{testimonials[currentTestimonial].stay}</div>
                  </div>
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentTestimonial === index 
                        ? 'bg-accent w-8' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities - Interactive Grid */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-on-scroll">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Exceptional <span className="bg-gradient-to-r from-accent to-yellow-500 bg-clip-text text-transparent">Amenities</span>
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Every detail crafted to enhance your wellness experience and connection with nature
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className={`animate-on-scroll group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:scale-105 relative`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-accent group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  {amenity.icon}
                </div>
                
                <div className="mb-4">
                  <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium mb-3">
                    {amenity.highlight}
                  </span>
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                    {amenity.title}
                  </h3>
                </div>
                
                <p className="text-text-muted text-sm leading-relaxed">
                  {amenity.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policies - Modern Cards */}
      <section className="py-32 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-on-scroll">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Essential <span className="text-accent">Information</span>
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Everything you need to know for a seamless and comfortable stay
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {policies.map((policy, index) => (
              <div
                key={index}
                className={`animate-on-scroll group bg-white rounded-3xl p-10 shadow-xl border border-gray-100 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-8 text-accent group-hover:scale-110 transition-transform duration-300">
                  {policy.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                  {policy.title}
                </h3>
                
                <p className="text-lg text-text-primary font-medium mb-3">
                  {policy.details}
                </p>
                
                <p className="text-text-muted text-sm">
                  {policy.subtext}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern CTA */}
      <section className="py-32 bg-gradient-to-br from-primary via-primary-dark to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M0 0h80v80H0z'/%3E%3Cpath d='M0 0h80v80H0z' stroke='%23ffffff' stroke-width='1' fill='none'/%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto animate-on-scroll">
            <div className="w-24 h-24 bg-accent/20 backdrop-blur-xl rounded-3xl flex items-center justify-center mx-auto mb-8">
              <Star className="w-12 h-12 text-accent" />
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Your Wellness Retreat Awaits
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
              Experience the perfect harmony of luxury and nature. Book your transformative stay in our unique garden sanctuary today.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <a 
                href="/contact" 
                className="group bg-accent hover:bg-accent/90 text-primary px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-3 justify-center"
              >
                <Calendar className="w-6 h-6" />
                Reserve Your Room
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href="tel:+94112223344" 
                className="group bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 hover:bg-white hover:text-primary flex items-center gap-3 justify-center"
              >
                <Phone className="w-6 h-6" />
                Call Directly
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-accent" />
                <span className="font-medium">Instant Confirmation</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 text-accent" />
                <span className="font-medium">Expert Support</span>
              </div>
              <div className="flex items-center gap-3">
                <Heart className="w-6 h-6 text-accent" />
                <span className="font-medium">Wellness Focused</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}