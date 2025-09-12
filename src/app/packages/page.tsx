"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { 
  Star, Heart, Users, Clock, Phone, Gift, 
  CheckCircle, ArrowRight, Utensils, 
  Sun, Moon, Calendar, CreditCard, Shield, MessageCircle,
  Sparkles, Award, Timer, Package, MapPin, Crown,
  Zap, Play
} from "lucide-react";
import { IMAGES } from "@/constants/images";

const packages = [
  {
    id: "full-board",
    category: "overnight",
    name: "Full Board Experience",
    tagline: "Complete Culinary Journey",
    description: "Immerse yourself in luxury with our all-inclusive dining experience featuring breakfast, lunch, and dinner crafted from the finest local ingredients.",
    acPrice: "9,000",
    nonAcPrice: "7,500",
    acPriceChild: "4,500",
    nonAcPriceChild: "3,750",
    image: IMAGES.accommodation.doubleRoom,
    duration: "24 Hours",
    features: [
      "Welcome cocktail on arrival",
      "Luxury overnight accommodation", 
      "Three gourmet meals daily",
      "Premium tea & coffee service",
      "Swimming pool & spa access",
      "Garden walks & nature tours"
    ],
    timing: "3:00 PM Check-in | 12:00 PM Check-out",
    popular: true,
    gradient: "from-emerald-500 via-green-600 to-teal-700",
    bgPattern: "radial-gradient(circle at 20% 80%, rgba(34, 197, 94, 0.3) 0%, transparent 50%)"
  },
  {
    id: "half-board",
    category: "overnight", 
    name: "Half Board Retreat",
    tagline: "Perfect for Explorers",
    description: "Ideal for adventurous souls! Enjoy comfortable accommodation with hearty breakfast and dinner while you explore the beautiful surroundings.",
    acPrice: "8,500",
    nonAcPrice: "7,000",
    acPriceChild: "4,250",
    nonAcPriceChild: "3,500",
    image: IMAGES.accommodation.tripleRoom,
    duration: "24 Hours",
    features: [
      "Welcome refreshment",
      "Comfortable accommodation",
      "Breakfast & dinner included", 
      "Tea plantation tours",
      "Swimming & recreation",
      "Scenic photography spots"
    ],
    timing: "3:00 PM Check-in | 12:00 PM Check-out",
    gradient: "from-amber-500 via-orange-600 to-red-600",
    bgPattern: "radial-gradient(circle at 80% 20%, rgba(245, 158, 11, 0.3) 0%, transparent 50%)"
  },
  {
    id: "romantic-luxury",
    category: "overnight",
    name: "Romantic Luxury Suite", 
    tagline: "Ultimate Couples Experience",
    description: "Indulge in pure romance with our premium luxury rooms featuring elegant decor, private amenities, and personalized service.",
    fullBoardPrice: "19,750",
    halfBoardPrice: "17,750",
    image: IMAGES.accommodation.familyRoom,
    duration: "24 Hours",
    features: [
      "Decorated luxury suite",
      "Romantic setup & ambiance",
      "Private dining options",
      "Couples spa treatments",
      "Exclusive amenities",
      "Personal butler service"
    ],
    timing: "3:00 PM Check-in | 12:00 PM Check-out",
    isCouple: true,
    badge: "Luxury",
    gradient: "from-rose-500 via-pink-600 to-red-700",
    bgPattern: "radial-gradient(circle at 50% 50%, rgba(244, 114, 182, 0.3) 0%, transparent 50%)"
  },
  {
    id: "couples-day",
    category: "dayout",
    name: "Couples Day Paradise",
    tagline: "Romantic Day Escape", 
    description: "Escape into romance with a perfect day surrounded by lush tea gardens, gourmet dining, and intimate moments.",
    acPrice: "7,500",
    nonAcPrice: "6,500",
    image: IMAGES.hero.slide2,
    duration: "8 Hours",
    features: [
      "Private welcome ceremony",
      "Gourmet lunch for two",
      "Exclusive pool access",
      "Professional photography",
      "Garden picnic setup",
      "Sunset viewing deck"
    ],
    timing: "9:00 AM – 5:00 PM",
    isCouple: true,
    gradient: "from-violet-500 via-purple-600 to-indigo-700",
    bgPattern: "radial-gradient(circle at 30% 70%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)"
  },
  {
    id: "group-day",
    category: "dayout",
    name: "Group Adventure",
    tagline: "Ultimate Team Experience",
    description: "Perfect for celebrations, team building, or family gatherings. Enjoy a full day of activities, dining, and unforgettable memories.",
    priceAdult: "3,000",
    priceChild: "1,500",
    image: IMAGES.hero.slide3,
    duration: "8 Hours",
    features: [
      "Group welcome ceremony",
      "Extensive buffet spread",
      "Team building activities",
      "Entertainment programs",
      "All recreational facilities",
      "Professional event coordination"
    ],
    timing: "9:00 AM – 5:00 PM",
    badge: "Best Value",
    gradient: "from-yellow-500 via-amber-600 to-orange-700",
    bgPattern: "radial-gradient(circle at 70% 30%, rgba(251, 191, 36, 0.3) 0%, transparent 50%)"
  }
];

const policies = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Child Policy",
    items: [
      { label: "Under 5 years", value: "Complimentary", desc: "Free for all packages" },
      { label: "Ages 5-10", value: "50% Discount", desc: "Special rates apply" }
    ],
    gradient: "from-green-50 to-emerald-50"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Booking Terms",
    items: [
      { label: "Advance Payment", value: "25% Required", desc: "Secure your booking" },
      { label: "Cancellation", value: "Reschedule Option", desc: "Up to 2 months flexibility" },
      { label: "Pool Hours", value: "Limited Times", desc: "4:30 PM (day) / 7:00 PM (night)" }
    ],
    gradient: "from-amber-50 to-orange-50"
  }
];

export default function PackagesPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [scrollY, setScrollY] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredPackages = activeCategory === "all" 
    ? packages 
    : packages.filter(pkg => pkg.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-amber-50">
      {/* Revolutionary Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-60">
          <div 
            className="absolute inset-0 transition-transform duration-1000"
            style={{ 
              transform: `translateY(${scrollY * 0.3}px)`,
              background: `
                radial-gradient(circle at 20% 50%, rgba(34, 197, 94, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(245, 158, 11, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 40% 80%, rgba(239, 68, 68, 0.1) 0%, transparent 50%)
              `
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-screen py-20">
            
            {/* Left Content - 7 columns */}
            <div className="lg:col-span-7">
              <div className="space-y-8 transition-all duration-1000 delay-300 opacity-100 translate-x-0">
                
                {/* Animated Badge */}
                <div className="inline-flex items-center gap-3 bg-white/70 backdrop-blur-xl rounded-full px-6 py-3 border border-green-200/50 shadow-lg">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-bold text-green-800">EXCLUSIVE PACKAGES</span>
                  <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse" />
                </div>

                {/* Main Title with Animation */}
                <div className="space-y-4">
                  <h1 className="text-6xl lg:text-8xl font-bold leading-none tracking-tight">
                    <span className="block text-green-800 mb-2">Discover</span>
                    <span className="block bg-gradient-to-r from-green-600 via-amber-600 to-orange-700 bg-clip-text text-transparent mb-2">
                      Your Perfect
                    </span>
                    <span className="block text-green-800">Experience</span>
                  </h1>
                </div>

                {/* Description */}
                <p className="text-xl text-green-700 leading-relaxed max-w-2xl">
                  From romantic getaways to family adventures, our curated packages combine luxury accommodation, 
                  gourmet dining, and unique experiences in Sri Lanka&apos;s most beautiful tea garden setting.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
                    className="group bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-3 justify-center"
                  >
                    <Play className="w-5 h-5" />
                    Explore Packages
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  <button className="group bg-white/80 backdrop-blur-sm border border-green-200 text-green-800 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:bg-white hover:shadow-lg flex items-center gap-3 justify-center">
                    <Phone className="w-5 h-5" />
                    Contact Us
                  </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 pt-8">
                  {[
                    { number: "5+", label: "Unique Packages", icon: <Gift className="w-5 h-5" /> },
                    { number: "24/7", label: "Premium Service", icon: <Star className="w-5 h-5" /> },
                    { number: "100%", label: "Satisfaction", icon: <Heart className="w-5 h-5" /> }
                  ].map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold text-green-800">{stat.number}</div>
                      <div className="text-sm text-green-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content - 5 columns */}
            <div className="lg:col-span-5">
              <div className="transition-all duration-1000 delay-500 opacity-100 translate-x-0">
                
                {/* Floating Package Preview Cards */}
                <div className="relative">
                  
                  {/* Main Featured Card */}
                  <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/50 hover:scale-105 transition-all duration-700 hover:shadow-3xl">
                    <div className="relative h-64">
                      <Image
                        src={packages[0].image}
                        alt={packages[0].name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Floating Badge */}
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-emerald-600 to-green-700 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                        <Star className="w-4 h-4" />
                        Most Popular
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-emerald-100 to-green-100 rounded-xl flex items-center justify-center">
                          <Utensils className="w-5 h-5 text-emerald-700" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-green-800">{packages[0].name}</h3>
                          <p className="text-sm text-emerald-700 font-medium">{packages[0].tagline}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-2xl font-bold text-green-800">Rs. {packages[0].nonAcPrice}</div>
                          <div className="text-xs text-green-600">per person</div>
                        </div>
                        <button className="bg-gradient-to-r from-green-600 to-emerald-700 text-white px-6 py-2 rounded-xl font-medium hover:scale-105 transition-transform">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Floating Mini Cards */}
                  <div className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg p-4 border border-white/50 transform rotate-12 hover:rotate-6 transition-transform duration-500">
                    <div className="flex items-center gap-2 text-sm font-medium text-green-700">
                      <Clock className="w-4 h-4 text-amber-600" />
                      24h Experience
                    </div>
                  </div>

                  <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg p-4 border border-white/50 transform -rotate-12 hover:-rotate-6 transition-transform duration-500">
                    <div className="flex items-center gap-2 text-sm font-medium text-green-700">
                      <Award className="w-4 h-4 text-orange-600" />
                      Premium Service
                    </div>
                  </div>

                  <div className="absolute top-1/2 -right-4 bg-gradient-to-r from-rose-600 to-pink-700 text-white rounded-2xl shadow-lg p-3 transform rotate-45 hover:rotate-12 transition-transform duration-500">
                    <Heart className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Navigation */}
      <section id="packages" className="py-16 bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-green-200/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {[
              { id: "all", label: "All Packages", icon: <Package className="w-5 h-5" /> },
              { id: "overnight", label: "Overnight Stays", icon: <Moon className="w-5 h-5" /> },
              { id: "dayout", label: "Day Experiences", icon: <Sun className="w-5 h-5" /> }
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveCategory(filter.id)}
                className={`group flex items-center gap-3 px-8 py-4 rounded-2xl font-bold transition-all duration-300 ${
                  activeCategory === filter.id
                    ? "bg-gradient-to-r from-green-600 to-emerald-700 text-white shadow-lg scale-105"
                    : "bg-green-100 text-green-700 hover:bg-green-200 hover:scale-105"
                }`}
              >
                <div className={`transition-transform duration-300 ${activeCategory === filter.id ? 'scale-110' : 'group-hover:scale-110'}`}>
                  {filter.icon}
                </div>
                {filter.label}
                {activeCategory === filter.id && (
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Package Cards */}
      <section className="py-32 bg-gradient-to-br from-green-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-green-800">
              Our <span className="bg-gradient-to-r from-green-600 to-amber-600 bg-clip-text text-transparent">Packages</span>
            </h2>
            <p className="text-xl text-green-700 max-w-3xl mx-auto">
              Each package is carefully crafted to provide you with the perfect blend of comfort, cuisine, and unforgettable experiences
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {filteredPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="group relative"
                onMouseEnter={() => setHoveredCard(pkg.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Background Pattern */}
                <div 
                  className="absolute inset-0 rounded-3xl opacity-30 transition-opacity duration-700"
                  style={{ background: pkg.bgPattern }}
                />

                {/* Main Card */}
                <div className={`relative bg-white/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/50 shadow-xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-4 ${
                  hoveredCard === pkg.id ? 'scale-105' : ''
                }`}>
                  
                  {/* Image Section */}
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={pkg.image}
                      alt={pkg.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-opacity duration-500 ${
                      hoveredCard === pkg.id ? 'opacity-80' : 'opacity-60'
                    }`} />

                    {/* Floating Elements */}
                    <div className="absolute top-6 left-6 flex gap-3">
                      {pkg.badge && (
                        <div className={`bg-gradient-to-r ${pkg.gradient} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2 animate-pulse`}>
                          {pkg.badge === "Luxury" && <Crown className="w-4 h-4" />}
                          {pkg.badge === "Best Value" && <Award className="w-4 h-4" />}
                          {pkg.badge}
                        </div>
                      )}
                      {pkg.popular && (
                        <div className="bg-gradient-to-r from-emerald-600 to-green-700 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                          <Star className="w-4 h-4" />
                          Popular
                        </div>
                      )}
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm text-white px-3 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                      <Timer className="w-4 h-4" />
                      {pkg.duration}
                    </div>

                    {/* Package Info Overlay */}
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <h3 className="text-3xl font-bold mb-2">{pkg.name}</h3>
                      <p className="text-white/90 font-medium text-lg">{pkg.tagline}</p>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8">
                    <p className="text-green-700 text-lg leading-relaxed mb-8">
                      {pkg.description}
                    </p>

                    {/* Pricing Section */}
                    <div className="mb-8">
                      <div className="bg-gradient-to-r from-green-50 to-amber-50 rounded-2xl p-6">
                        <h4 className="font-bold text-green-800 mb-4 text-center">Package Pricing</h4>
                        
                        {pkg.isCouple ? (
                          pkg.fullBoardPrice ? (
                            <div className="grid grid-cols-2 gap-4">
                              <div className="text-center bg-white rounded-xl p-4 shadow-sm">
                                <div className="text-2xl font-bold text-green-800">Rs. {pkg.fullBoardPrice}</div>
                                <div className="text-sm text-green-600">Full Board</div>
                              </div>
                              <div className="text-center bg-white rounded-xl p-4 shadow-sm">
                                <div className="text-2xl font-bold text-green-800">Rs. {pkg.halfBoardPrice}</div>
                                <div className="text-sm text-green-600">Half Board</div>
                              </div>
                            </div>
                          ) : (
                            <div className="grid grid-cols-2 gap-4">
                              <div className="text-center bg-white rounded-xl p-4 shadow-sm">
                                <div className="text-2xl font-bold text-green-800">Rs. {pkg.acPrice}</div>
                                <div className="text-sm text-green-600">With A/C</div>
                              </div>
                              <div className="text-center bg-white rounded-xl p-4 shadow-sm">
                                <div className="text-2xl font-bold text-green-800">Rs. {pkg.nonAcPrice}</div>
                                <div className="text-sm text-green-600">Non A/C</div>
                              </div>
                            </div>
                          )
                        ) : pkg.priceAdult ? (
                          <div className="grid grid-cols-2 gap-4">
                            <div className="text-center bg-white rounded-xl p-4 shadow-sm">
                              <div className="text-2xl font-bold text-green-800">Rs. {pkg.priceAdult}</div>
                              <div className="text-sm text-green-600">Adult</div>
                            </div>
                            <div className="text-center bg-white rounded-xl p-4 shadow-sm">
                              <div className="text-xl font-bold text-amber-700">Rs. {pkg.priceChild}</div>
                              <div className="text-sm text-green-600">Child (5-10)</div>
                            </div>
                          </div>
                        ) : (
                          <div className="grid grid-cols-2 gap-4">
                            <div className="text-center bg-white rounded-xl p-4 shadow-sm">
                              <div className="text-xl font-bold text-green-800">Rs. {pkg.acPrice}</div>
                              <div className="text-sm text-green-600">A/C Room</div>
                            </div>
                            <div className="text-center bg-white rounded-xl p-4 shadow-sm">
                              <div className="text-xl font-bold text-green-800">Rs. {pkg.nonAcPrice}</div>
                              <div className="text-sm text-green-600">Non A/C</div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Features Grid */}
                    <div className="mb-8">
                      <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-amber-600" />
                        Package Highlights
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {pkg.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3 bg-green-50 rounded-lg p-3 hover:bg-amber-50 transition-colors duration-200">
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span className="text-sm text-green-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Timing */}
                    <div className="flex items-center gap-3 text-green-600 mb-8 bg-amber-50 rounded-lg p-4">
                      <Clock className="w-5 h-5 text-amber-600" />
                      <span className="font-medium">{pkg.timing}</span>
                    </div>

                    {/* CTA Button */}
                    <button className={`w-full bg-gradient-to-r ${pkg.gradient} hover:shadow-2xl text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center gap-3 justify-center group`}>
                      Book This Package
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Policy Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-green-800">
              Important <span className="bg-gradient-to-r from-green-600 to-amber-600 bg-clip-text text-transparent">Information</span>
            </h2>
            <p className="text-xl text-green-700">Please review our policies before booking</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {policies.map((policy, index) => (
              <div key={index} className={`bg-gradient-to-br ${policy.gradient} rounded-3xl p-8 border border-green-200/50 hover:shadow-xl transition-shadow duration-300`}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-green-700 shadow-sm">
                    {policy.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-green-800">{policy.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {policy.items.map((item, idx) => (
                    <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-bold text-green-800">{item.label}</span>
                        <span className="bg-gradient-to-r from-green-600 to-emerald-700 text-white px-3 py-1 rounded-full text-sm font-bold">
                          {item.value}
                        </span>
                      </div>
                      <p className="text-green-700 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ultra-Modern Booking Section */}
      <section className="py-32 bg-gradient-to-br from-green-900 via-emerald-900 to-amber-900 text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-green-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-amber-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-emerald-400/20 rounded-full blur-2xl animate-pulse delay-500" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Icon */}
            <div className="w-24 h-24 bg-gradient-to-r from-green-400/20 to-amber-400/20 backdrop-blur-xl rounded-3xl flex items-center justify-center mx-auto mb-12 border border-white/10">
              <CreditCard className="w-12 h-12 text-green-400" />
            </div>
            
            {/* Title */}
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Ready to Create
              <span className="block bg-gradient-to-r from-green-400 via-emerald-400 to-amber-400 bg-clip-text text-transparent">
                Memories?
              </span>
            </h2>
            
            {/* Description */}
            <p className="text-xl md:text-2xl text-white/80 mb-16 leading-relaxed max-w-3xl mx-auto">
              Secure your perfect package with just 25% advance payment. Share your receipt via WhatsApp for instant confirmation and let us take care of the rest.
            </p>

            {/* Payment Info Card */}
            <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-8 mb-16 border border-white/20 shadow-2xl max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 flex items-center justify-center gap-3">
                <MapPin className="w-6 h-6 text-green-400" />
                Bank Transfer Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                  <div className="text-green-400 font-semibold mb-2 text-sm">Account Holder</div>
                  <div className="text-lg font-bold">MADRN MANNATHUNGA</div>
                </div>
                <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                  <div className="text-green-400 font-semibold mb-2 text-sm">Bank & Branch</div>
                  <div className="text-lg font-bold">SAMPATH BANK, WADDUWA</div>
                </div>
                <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                  <div className="text-green-400 font-semibold mb-2 text-sm">Account Number</div>
                  <div className="text-xl font-bold font-mono tracking-wider">10755 203 1659</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <a 
                href="https://wa.me/94776251855" 
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-3 justify-center"
              >
                <MessageCircle className="w-6 h-6" />
                WhatsApp: +94 77 625 1855
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href="tel:+94776251855" 
                className="group bg-white/10 backdrop-blur-lg border-2 border-white/30 text-white px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-300 hover:bg-white hover:text-green-900 flex items-center gap-3 justify-center"
              >
                <Phone className="w-6 h-6" />
                Call Now
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
              {[
                { icon: <Shield className="w-6 h-6" />, text: "25% Advance Only", desc: "Secure booking" },
                { icon: <Calendar className="w-6 h-6" />, text: "Flexible Dates", desc: "Easy rescheduling" },
                { icon: <Zap className="w-6 h-6" />, text: "Instant Confirmation", desc: "Quick response" }
              ].map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 border border-white/20">
                    <div className="text-green-400">{item.icon}</div>
                  </div>
                  <div className="font-bold text-lg mb-1">{item.text}</div>
                  <div className="text-sm text-white/60">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}