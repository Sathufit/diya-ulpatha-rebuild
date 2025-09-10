"use client";
import { useState, useEffect } from "react";
import { RoomsGrid } from "@/components/RoomsGrid";
import Image from "next/image";
import { 
  TreePine, Mountain, Utensils, Waves, Dumbbell, Wifi, Coffee, Shield, 
  CheckCircle, Star, ArrowRight, Heart,
  Calendar, Phone, Users, Sparkles, Eye, Camera
} from "lucide-react";
import { IMAGES } from "@/constants/images";

const amenities = [
  {
    icon: <TreePine className="w-8 h-8" />,
    title: "Garden Views",
    description: "Pleasant views of our medicinal herb gardens",
    highlight: "Natural Setting"
  },
  {
    icon: <Mountain className="w-8 h-8" />,
    title: "Natural Features",
    description: "Rooms incorporate natural rock surfaces",
    highlight: "Unique Design"
  },
  {
    icon: <Utensils className="w-8 h-8" />,
    title: "Simple Meals",
    description: "Healthy Ayurvedic meals available",
    highlight: "Traditional Food"
  },
  {
    icon: <Waves className="w-8 h-8" />,
    title: "Treatment Support",
    description: "Convenient for daily treatment sessions",
    highlight: "Easy Access"
  },
  {
    icon: <Dumbbell className="w-8 h-8" />,
    title: "Training Friendly",
    description: "Suitable for course participants",
    highlight: "Educational Stay"
  },
  {
    icon: <Wifi className="w-8 h-8" />,
    title: "Basic Amenities",
    description: "Essential modern facilities provided",
    highlight: "Comfortable"
  },
  {
    icon: <Coffee className="w-8 h-8" />,
    title: "Extended Stays",
    description: "Suitable for longer treatment periods",
    highlight: "Flexible Duration"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Peaceful Environment",
    description: "Quiet location for rest and recovery",
    highlight: "Restful"
  }
];

const experienceHighlights = [
  {
    icon: <Eye className="w-10 h-10" />,
    title: "Natural Views",
    description: "Wake up to views of our medicinal garden and surrounding nature",
    color: "from-green-500/20 to-emerald-500/20",
    accent: "text-green-600"
  },
  {
    icon: <Mountain className="w-10 h-10" />,
    title: "Simple Comfort",
    description: "Clean, comfortable rooms with unique natural rock features",
    color: "from-stone-500/20 to-gray-500/20",
    accent: "text-gray-600"
  },
  {
    icon: <Heart className="w-10 h-10" />,
    title: "Treatment Focus",
    description: "Accommodation designed to support your healing journey",
    color: "from-rose-500/20 to-pink-500/20",
    accent: "text-rose-600"
  }
];

export default function AccommodationPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <Image
            src={IMAGES.accommodation.doubleRoom}
            alt="Simple, comfortable accommodation"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40"></div>
        </div>

        <div className="relative z-20 text-center text-white max-w-5xl mx-auto px-4">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-white/20">
              <Mountain className="w-5 h-5 text-accent" />
              <span className="font-semibold">PATIENT ACCOMMODATION</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-8 leading-[0.9]">
              Comfortable
              <span className="block bg-gradient-to-r from-accent via-yellow-400 to-accent bg-clip-text text-transparent">
                Stay for Healing
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
              Simple, clean accommodation with garden views. Perfect for patients undergoing treatment or participants in our training programs.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <a 
                href="#rooms" 
                className="group bg-accent hover:bg-accent/90 text-primary px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-3 justify-center"
              >
                <Camera className="w-6 h-6" />
                View Rooms
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">3</div>
                <div className="text-sm text-white/80">Room Types</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">Garden</div>
                <div className="text-sm text-white/80">Views</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">Clean</div>
                <div className="text-sm text-white/80">& Comfortable</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-32 bg-gradient-to-br from-surface via-background to-white relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              What We <span className="bg-gradient-to-r from-accent to-yellow-500 bg-clip-text text-transparent">Offer</span>
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
              Simple, comfortable accommodation focused on supporting your treatment and recovery
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {experienceHighlights.map((highlight, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-3xl transition-all duration-700 hover:-translate-y-6 hover:scale-105"
              >
                <div className="relative bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-100 h-full">
                  <div className={`w-20 h-20 bg-gradient-to-br ${highlight.color} rounded-2xl flex items-center justify-center mb-8 ${highlight.accent} group-hover:scale-110 transition-all duration-500`}>
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

      {/* Room Showcase */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-6 py-3 mb-6">
              <Sparkles className="w-5 h-5 text-accent" />
              <span className="text-primary font-semibold">ACCOMMODATION OPTIONS</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Choose Your <span className="bg-gradient-to-r from-accent to-yellow-500 bg-clip-text text-transparent">Room</span>
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Simple, clean rooms suitable for patients and course participants
            </p>
          </div>
        </div>
        
        <div id="rooms">
          <RoomsGrid />
        </div>
      </section>

      {/* Amenities */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Room <span className="bg-gradient-to-r from-accent to-yellow-500 bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Basic amenities to ensure a comfortable stay during your treatment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl relative"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-accent group-hover:scale-110 transition-all duration-500">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-32 bg-gradient-to-br from-primary via-primary-dark to-accent text-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="w-24 h-24 bg-accent/20 backdrop-blur-xl rounded-3xl flex items-center justify-center mx-auto mb-8">
              <Star className="w-12 h-12 text-accent" />
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Book Your Stay
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
              Reserve a room for your treatment period or training course. Simple booking process with flexible dates.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <a 
                href="/contact" 
                className="group bg-accent hover:bg-accent/90 text-primary px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-3 justify-center"
              >
                <Calendar className="w-6 h-6" />
                Book Now
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href="tel:+94112223344" 
                className="group bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 hover:bg-white hover:text-primary flex items-center gap-3 justify-center"
              >
                <Phone className="w-6 h-6" />
                Call Us
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-accent" />
                <span className="font-medium">Flexible Booking</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 text-accent" />
                <span className="font-medium">Friendly Service</span>
              </div>
              <div className="flex items-center gap-3">
                <Heart className="w-6 h-6 text-accent" />
                <span className="font-medium">Treatment Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}