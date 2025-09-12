"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { 
  TreePine, Mountain, Utensils, Wifi, Coffee, Shield, 
  CheckCircle, Star, ArrowRight, Heart, Crown, Snowflake, Thermometer,
  Phone, Users, Sparkles, Eye, Camera, Mail
} from "lucide-react";
import { IMAGES } from "@/constants/images";

const roomRates = [
  {
    type: "DAY ROOM",
    category: "",
    acRate: "5,500/-",
    nonAcRate: "4,500/-",
    isHeader: false
  },
  {
    type: "STANDARD ROOMS",
    category: "",
    acRate: "",
    nonAcRate: "",
    isHeader: true
  },
  {
    type: "Double",
    category: "Standard",
    acRate: "7,500/-",
    nonAcRate: "6,500/-",
    isHeader: false
  },
  {
    type: "Triple",
    category: "Standard", 
    acRate: "9,500/-",
    nonAcRate: "8,000/-",
    isHeader: false
  },
  {
    type: "Family (Quad)",
    category: "Standard",
    acRate: "12,000/-",
    nonAcRate: "10,500/-",
    isHeader: false
  },
  {
    type: "LUXURY ROOMS",
    category: "",
    acRate: "",
    nonAcRate: "",
    isHeader: true
  },
  {
    type: "Double",
    category: "Luxury",
    acRate: "10,000/-",
    nonAcRate: "N/A",
    isHeader: false
  },
  {
    type: "Triple",
    category: "Luxury",
    acRate: "12,500/-",
    nonAcRate: "N/A",
    isHeader: false
  },
  {
    type: "Family",
    category: "Luxury",
    acRate: "15,000/-",
    nonAcRate: "N/A",
    isHeader: false
  }
];

const amenities = [
  {
    icon: <TreePine className="w-8 h-8" />,
    title: "Tea Garden Views",
    description: "Wake up to stunning views of our lush tea plantations",
    highlight: "Natural Setting"
  },
  {
    icon: <Mountain className="w-8 h-8" />,
    title: "Mountain Location",
    description: "Nestled in the beautiful hills of Sri Lanka",
    highlight: "Scenic Beauty"
  },
  {
    icon: <Utensils className="w-8 h-8" />,
    title: "Resort Dining",
    description: "Optional meal packages available for complete experience",
    highlight: "Culinary Options"
  },
  {
    icon: <Snowflake className="w-8 h-8" />,
    title: "Climate Options",
    description: "Choose between AC and non-AC rooms for your comfort",
    highlight: "Flexible Comfort"
  },
  {
    icon: <Crown className="w-8 h-8" />,
    title: "Luxury Upgrades",
    description: "Premium rooms with elegant furnishings available",
    highlight: "Premium Experience"
  },
  {
    icon: <Wifi className="w-8 h-8" />,
    title: "Modern Amenities",
    description: "Essential facilities for a comfortable stay",
    highlight: "Well-Equipped"
  },
  {
    icon: <Coffee className="w-8 h-8" />,
    title: "Tea Experience",
    description: "Immerse yourself in authentic tea culture",
    highlight: "Authentic Experience"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Peaceful Environment",
    description: "Tranquil setting perfect for relaxation",
    highlight: "Serene Atmosphere"
  }
];

const experienceHighlights = [
  {
    icon: <Eye className="w-10 h-10" />,
    title: "Standard Comfort",
    description: "Our Standard Rooms offer cozy and affordable comfort, perfect for travelers and families looking for a relaxing stay. Available with or without air conditioning, they provide all the essential amenities for a pleasant visit.",
    color: "from-green-500/20 to-emerald-500/20",
    accent: "text-green-600"
  },
  {
    icon: <Crown className="w-10 h-10" />,
    title: "Luxury Experience", 
    description: "Elevate your experience in our spacious and elegantly appointed Luxury Rooms. Featuring premium furnishings and exclusive amenities, these rooms are designed for guests seeking an extra layer of comfort and indulgence.",
    color: "from-amber-500/20 to-yellow-500/20",
    accent: "text-amber-600"
  },
  {
    icon: <Heart className="w-10 h-10" />,
    title: "Tea Garden Setting",
    description: "All rooms are situated within our beautiful tea garden resort, offering guests an authentic Sri Lankan experience surrounded by nature's tranquility.",
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
    
    return () => window.removeEventListener('scroll', handleScroll);
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
            alt="Diya Ulpatha Tea Garden Resort accommodation"
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
              <TreePine className="w-5 h-5 text-accent" />
              <span className="font-semibold">TEA GARDEN RESORT</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-8 leading-[0.9]">
              Our
              <span className="block bg-gradient-to-r from-accent via-yellow-400 to-accent bg-clip-text text-transparent">
                Rooms
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
              Discover your perfect sanctuary at Diya Ulpatha Tea Garden Resort. Whether you&apos;re seeking simple comfort or luxury, our rooms provide a peaceful retreat surrounded by nature.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <a 
                href="#rates" 
                className="group bg-accent hover:bg-accent/90 text-primary px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-3 justify-center"
              >
                <Camera className="w-6 h-6" />
                View Rates
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">2</div>
                <div className="text-sm text-white/80">Room Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">Tea</div>
                <div className="text-sm text-white/80">Garden Views</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">Choice</div>
                <div className="text-sm text-white/80">AC / Non-AC</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Room Categories */}
      <section className="py-32 bg-gradient-to-br from-surface via-background to-white relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              What We <span className="bg-gradient-to-r from-accent to-yellow-500 bg-clip-text text-transparent">Offer</span>
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
              Choose from our Standard and Luxury options to find the space that&apos;s right for you. Please note that the rates below are for room-only bookings.
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

      {/* Room Showcase Section - NEW */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-accent to-yellow-500 bg-clip-text text-transparent">Rooms</span>
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Take a closer look at our comfortable accommodations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="relative h-64">
                <Image
                  src={IMAGES.accommodation.doubleRoom}
                  alt="Superior Double Room"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">Double Room</h3>
                  <p className="text-sm text-white/90">Perfect for couples</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="relative h-64">
                <Image
                  src={IMAGES.accommodation.tripleRoom}
                  alt="Superior Triple Room"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">Triple Room</h3>
                  <p className="text-sm text-white/90">Ideal for small groups</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="relative h-64">
                <Image
                  src={IMAGES.accommodation.familyRoom}
                  alt="Superior Family Room"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">Family Room</h3>
                  <p className="text-sm text-white/90">Perfect for families</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Room Rates Section */}
      <section id="rates" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-6 py-3 mb-6">
              <Sparkles className="w-5 h-5 text-accent" />
              <span className="text-primary font-semibold">ROOM RATES</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Choose Your <span className="bg-gradient-to-r from-accent to-yellow-500 bg-clip-text text-transparent">Room</span>
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Transparent pricing for all room categories - rates shown are for room-only bookings
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-primary to-primary-dark text-white p-6">
                <h3 className="text-2xl font-bold text-center">Room Rates</h3>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left p-4 font-semibold text-primary">Room Type</th>
                      <th className="text-center p-4 font-semibold text-primary">
                        <div className="flex items-center justify-center gap-2">
                          <Snowflake className="w-4 h-4" />
                          AC Rate
                        </div>
                      </th>
                      <th className="text-center p-4 font-semibold text-primary">
                        <div className="flex items-center justify-center gap-2">
                          <Thermometer className="w-4 h-4" />
                          Non-AC Rate
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {roomRates.map((rate, index) => (
                      <tr 
                        key={index}
                        className={`
                          ${rate.isHeader 
                            ? 'bg-accent/5 border-l-4 border-accent' 
                            : 'hover:bg-gray-50 transition-colors duration-200'
                          }
                          ${index !== roomRates.length - 1 ? 'border-b border-gray-100' : ''}
                        `}
                      >
                        <td className={`p-4 ${rate.isHeader ? 'font-bold text-primary text-lg' : 'text-text-secondary'}`}>
                          {rate.isHeader ? (
                            <div className="flex items-center gap-3">
                              {rate.type.includes('LUXURY') ? (
                                <Crown className="w-5 h-5 text-accent" />
                              ) : rate.type.includes('STANDARD') ? (
                                <CheckCircle className="w-5 h-5 text-primary" />
                              ) : null}
                              {rate.type}
                            </div>
                          ) : (
                            <div className="flex items-center gap-2">
                              {rate.category === 'Luxury' && <Crown className="w-4 h-4 text-accent" />}
                              {rate.type}
                            </div>
                          )}
                        </td>
                        <td className={`p-4 text-center ${rate.isHeader ? 'font-bold text-primary' : 'text-text-secondary font-medium'}`}>
                          {rate.acRate}
                        </td>
                        <td className={`p-4 text-center ${rate.isHeader ? 'font-bold text-primary' : 'text-text-secondary font-medium'}`}>
                          {rate.nonAcRate}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="bg-gray-50 p-6 text-center">
                <p className="text-sm text-text-muted">
                  All rates are in Sri Lankan Rupees. Room-only pricing - meal packages available separately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Resort <span className="bg-gradient-to-r from-accent to-yellow-500 bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Experience the charm of our tea garden resort with these exceptional features
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
              Ready to Book?
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
              Contact us today to reserve your perfect room at Diya Ulpatha Tea Garden Resort. Looking for an all-inclusive experience? Check out our value-packed packages!
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <a 
                href="tel:+94776251855" 
                className="group bg-accent hover:bg-accent/90 text-primary px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-3 justify-center"
              >
                <Phone className="w-6 h-6" />
                +94 776 251 855
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href="mailto:diyaulpatha@gmail.com" 
                className="group bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 hover:bg-white hover:text-primary flex items-center gap-3 justify-center"
              >
                <Mail className="w-6 h-6" />
                Email Us
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-accent" />
                <span className="font-medium">Instant Confirmation</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 text-accent" />
                <span className="font-medium">Friendly Service</span>
              </div>
              <div className="flex items-center gap-3">
                <Heart className="w-6 h-6 text-accent" />
                <span className="font-medium">Package Deals Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}