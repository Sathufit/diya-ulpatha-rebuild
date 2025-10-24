"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { 
  Star, Users, Clock, Phone, Gift, 
  CheckCircle, ArrowRight, Utensils, 
  CreditCard, Shield, MessageCircle,
  Package, Crown
} from "lucide-react";
import { IMAGES } from "@/constants/images";

const packages = [
  {
    id: "day-out",
    category: "dayout",
    name: "Day Out Package",
    tagline: "Perfect Day Experience",
    description: "Experience the perfect day at our tea garden resort with activities, meals, and relaxation - all included in one great package.",
    priceAdult: "3,000",
    priceChild: "1,500",
    image: IMAGES.hero.slide1,
    duration: "8 Hours",
    features: [
      "Welcome drink on arrival",
      "Lunch buffet (Vegetable Fried Rice, Steamed Rice, Noodles)",
      "Chicken Curry or Devilled, Fish Stew, Dhal Curry",
      "Potato Tempered, Mixed Salad, Chili Paste, Papadam",
      "Ice cream dessert",
      "Evening snack with hot coffee",
      "Swimming pool access (free)",
      "Playground, Children's Park, Sports courts",
      "1 Changing room (groups 25+)"
    ],
    timings: {
      day: "9:00 AM – 5:00 PM (Pool until 4:30 PM)",
      night: "4:00 PM – 10:00 PM (Pool until 7:00 PM)"
    },
    mealTimes: {
      day: "1:00 PM – 3:00 PM",
      night: "7:00 PM – 10:00 PM"
    },
    popular: true,
    gradient: "from-green-500 via-emerald-600 to-teal-700",
    bgPattern: "radial-gradient(circle at 20% 80%, rgba(34, 197, 94, 0.3) 0%, transparent 50%)"
  },
  {
    id: "full-board",
    category: "overnight",
    name: "Full Board Package",
    tagline: "Complete Overnight Experience",
    description: "Enjoy our comprehensive overnight package with all meals included - from welcome drink to breakfast, experience true hospitality.",
    acPrice: "9,000",
    nonAcPrice: "7,500",
    acPriceChild: "4,500",
    nonAcPriceChild: "3,750",
    image: IMAGES.accommodation.doubleRoom,
    duration: "24 Hours",
    features: [
      "Welcome drink on arrival",
      "Evening soup service",
      "Dinner: Vegetable Rice & Noodles, Chicken Curry or Devilled",
      "Dhal Curry, Vegetable Chop Suey, Chili Paste, Papadam",
      "Mixed Salad, Ice Cream dessert",
      "Bed tea service",
      "Breakfast: Coconut Roti & String Hopper",
      "Chicken Curry or Fish Curry, Dhal/Potato Curry, Coconut Sambal",
      "10:00 AM Coffee or Black Tea",
      "Lunch: Steamed Rice, Chicken/Fish Curry, Mango & Ambarella Curry",
      "Dhal Curry, Pala Mallum, Papadam, Ice Cream/Fruit Salad",
      "Swimming pool access",
      "Sports facilities (groups 20+)"
    ],
    timing: "Check-in: 3:00 PM | Check-out: 12:00 PM",
    gradient: "from-blue-500 via-indigo-600 to-purple-700",
    bgPattern: "radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)"
  },
  {
    id: "half-board",
    category: "overnight", 
    name: "Half Board Package",
    tagline: "Dinner & Breakfast Included",
    description: "Perfect for those who want to explore during the day. Includes comfortable accommodation with dinner and breakfast.",
    acPrice: "8,500",
    nonAcPrice: "7,000",
    acPriceChild: "4,250",
    nonAcPriceChild: "3,500",
    image: IMAGES.accommodation.tripleRoom,
    duration: "24 Hours",
    features: [
      "Welcome drink on arrival",
      "Evening soup service",
      "Dinner: Vegetable Rice & Noodles, Chicken Curry or Devilled",
      "Dhal Curry, Vegetable Chop Suey, Chili Paste, Papadam",
      "Mixed Salad, Ice Cream dessert",
      "Bed tea service",
      "Breakfast: Coconut Roti & String Hopper",
      "Chicken Curry or Fish Curry, Dhal/Potato Curry, Coconut Sambal",
      "10:00 AM Coffee or Black Tea",
      "Swimming pool access",
      "Sports facilities (groups 20+)"
    ],
    timing: "Check-in: 3:00 PM | Check-out: 12:00 PM",
    gradient: "from-amber-500 via-orange-600 to-red-600",
    bgPattern: "radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.3) 0%, transparent 50%)"
  }
];

const policies = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Child Policy",
    items: [
      { label: "Under 5 years", value: "Complimentary", desc: "Free for all packages" },
      { label: "Ages 5-10 years", value: "Special Rate", desc: "Day Out: Rs. 1,500/=, Overnight: 50% discount" }
    ],
    gradient: "from-green-50 to-emerald-50"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Booking Terms",
    items: [
      { label: "Advance Payment", value: "25% Required", desc: "Send receipt via WhatsApp +94 77 625 1855" },
      { label: "Pool Hours", value: "Time Limits Apply", desc: "Day: until 4:30 PM, Night: until 7:00 PM" },
      { label: "Music Policy", value: "Until 7:00 PM", desc: "Evening events only" }
    ],
    gradient: "from-amber-50 to-orange-50"
  }
];

const aLaCarteMenu = [
  { item: "Beef (Fried/Devilled/Stew)", price: "6,000", unit: "1Kg" },
  { item: "Pork (Fried/Devilled/Stew)", price: "5,500", unit: "1Kg" },
  { item: "Fish (Fried/Devilled/Stew)", price: "5,500", unit: "1Kg" },
  { item: "Chicken (Fried/Devilled/Stew)", price: "4,000", unit: "1Kg" },
  { item: "Sausage", price: "3,000", unit: "1Kg" },
  { item: "French Fries", price: "3,000", unit: "1Kg" },
  { item: "Boiled Vegetables", price: "3,500", unit: "1Kg" }
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
          <div className="grid grid-cols-1 lg:grid-cols-7 gap-16 items-center min-h-screen py-20">
            {/* Content Column */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-md rounded-full px-8 py-4 mb-8 shadow-lg border border-white/40">
                <Package className="w-6 h-6 text-green-600" />
                <span className="text-primary font-bold">EXPERIENCE PACKAGES</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[0.9]">
                Perfect
                <span className="block bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
                  Packages
                </span>
                for Every Need
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-2xl">
                From exciting day adventures to relaxing overnight stays, discover packages designed to create unforgettable memories at our beautiful tea garden resort.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 mb-16">
                <a href="#packages" className="group bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-3 justify-center">
                  <Gift className="w-6 h-6" />
                  Explore Packages
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="https://wa.me/94776251855"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/10 backdrop-blur-md border-2 border-green-600/30 text-green-800 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:bg-green-600 hover:text-white flex items-center gap-3 justify-center"
                >
                  <Phone className="w-6 h-6" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>

            {/* Visual Column */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <div className="relative">
                {/* Main Image */}
                <div className={`relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-1000 ${hoveredCard ? 'scale-95' : 'scale-100'}`}>
                  <Image
                    src={IMAGES.hero.slide1}
                    alt="Diya Ulpatha Tea Garden Resort"
                    width={600}
                    height={700}
                    className="object-cover w-full h-[500px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-8 left-8 right-8 text-white">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                      <div className="flex items-center gap-3 mb-3">
                        <Star className="w-6 h-6 text-yellow-400 fill-current" />
                        <span className="font-bold text-lg">Featured Experience</span>
                      </div>
                      <p className="text-white/90 leading-relaxed">
                        Beautiful tea garden setting with modern amenities and authentic Sri Lankan hospitality.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Stats */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl px-6 py-4 shadow-xl animate-float">
                  <div className="text-center">
                    <div className="text-2xl font-bold">3</div>
                    <div className="text-sm opacity-90">Packages</div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-2xl px-6 py-4 shadow-xl animate-float animate-delay-300">
                  <div className="text-center">
                    <div className="text-2xl font-bold">5⭐</div>
                    <div className="text-sm opacity-90">Rating</div>
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
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-2">Choose Your Experience</h2>
              <p className="text-text-muted">Select the perfect package for your visit</p>
            </div>

            <div className="flex bg-white rounded-2xl p-2 shadow-lg border border-gray-100">
              {[
                { id: "all", label: "All Packages", count: packages.length },
                { id: "dayout", label: "Day Out", count: packages.filter(p => p.category === "dayout").length },
                { id: "overnight", label: "Overnight", count: packages.filter(p => p.category === "overnight").length }
              ].map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                  }`}
                >
                  <span>{category.label}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    activeCategory === category.id 
                      ? 'bg-white/20' 
                      : 'bg-gray-200'
                  }`}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modern Package Cards */}
      <section className="py-32 bg-gradient-to-br from-green-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredPackages.map((pkg, index) => (
              <div 
                key={pkg.id}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                onMouseEnter={() => setHoveredCard(pkg.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Package Header Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {pkg.popular && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                      <Crown className="w-4 h-4" />
                      Most Popular
                    </div>
                  )}

                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-white">
                      <p className="text-sm opacity-90 mb-1">{pkg.tagline}</p>
                      <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                    </div>
                  </div>
                </div>

                {/* Package Content */}
                <div className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed">{pkg.description}</p>

                  {/* Pricing */}
                  <div className="mb-6">
                    {pkg.priceAdult ? (
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Adult</span>
                          <span className="text-2xl font-bold text-green-600">Rs. {pkg.priceAdult}/=</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Child (5-10)</span>
                          <span className="text-lg font-semibold text-green-600">Rs. {pkg.priceChild}/=</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Under 5</span>
                          <span className="text-lg font-semibold text-green-600">FREE</span>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold text-blue-900">A/C Room</span>
                            <span className="text-xl font-bold text-blue-600">Rs. {pkg.acPrice}/=</span>
                          </div>
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-blue-700">Child (5-10)</span>
                            <span className="font-semibold text-blue-600">Rs. {pkg.acPriceChild}/=</span>
                          </div>
                        </div>
                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold text-green-900">Non-A/C Room</span>
                            <span className="text-xl font-bold text-green-600">Rs. {pkg.nonAcPrice}/=</span>
                          </div>
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-green-700">Child (5-10)</span>
                            <span className="font-semibold text-green-600">Rs. {pkg.nonAcPriceChild}/=</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Features Preview */}
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      Package Includes
                    </h4>
                    <div className="space-y-2">
                      {pkg.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      {pkg.features.length > 4 && (
                        <div className="text-sm text-green-600 font-medium">
                          +{pkg.features.length - 4} more inclusions
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Timing Info */}
                  <div className="flex items-center gap-3 text-green-600 mb-8 bg-amber-50 rounded-lg p-4">
                    <Clock className="w-5 h-5 text-amber-600" />
                    <span className="font-medium">{pkg.timing || `${pkg.timings?.day} (Day) / ${pkg.timings?.night} (Night)`}</span>
                  </div>

                  {/* CTA Button */}
                  <a
                    href="https://wa.me/94776251855"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full bg-gradient-to-r ${pkg.gradient} hover:shadow-2xl text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center gap-3 justify-center group`}
                  >
                    Book This Package
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* À La Carte Menu Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-amber-100 rounded-full px-6 py-3 mb-6">
                <Utensils className="w-5 h-5 text-amber-600" />
                <span className="text-amber-800 font-semibold">À LA CARTE MENU</span>
              </div>
              <h2 className="text-4xl font-bold mb-4">
                Bites Per <span className="text-amber-600">Kilo</span>
              </h2>
              <p className="text-xl text-gray-600">
                Additional items available for order - all prices per 1kg
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 border border-amber-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {aLaCarteMenu.map((menuItem, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm border border-amber-100 hover:shadow-md transition-shadow">
                    <div>
                      <h4 className="font-semibold text-gray-800">{menuItem.item}</h4>
                      <p className="text-sm text-gray-500">{menuItem.unit}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xl font-bold text-amber-600">Rs. {menuItem.price}/=</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Policy Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Booking <span className="text-green-600">Policies</span>
              </h2>
              <p className="text-xl text-gray-600">
                Important information for your booking
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {policies.map((policy, index) => (
                <div key={index} className={`bg-gradient-to-br ${policy.gradient} rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow`}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-green-600">
                      {policy.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">{policy.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {policy.items.map((item, idx) => (
                      <div key={idx} className="bg-white rounded-xl p-4 shadow-sm">
                        <div className="flex justify-between items-start mb-2">
                          <span className="font-semibold text-gray-800">{item.label}</span>
                          <span className="text-green-600 font-bold">{item.value}</span>
                        </div>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
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
              <MessageCircle className="w-12 h-12 text-green-400" />
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
              Book your perfect package today! Contact us via WhatsApp for instant confirmation and let us create an unforgettable experience for you.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <a
                href="https://wa.me/94776251855"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-3 justify-center"
              >
                <Phone className="w-6 h-6" />
                WhatsApp: +94 77 625 1855
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="mailto:diyaulpatha@gmail.com"
                className="group bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 hover:bg-white hover:text-green-800 flex items-center gap-3 justify-center"
              >
                <CreditCard className="w-6 h-6" />
                Email Inquiry
              </a>
            </div>

            {/* Booking Process */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-6">Simple Booking Process</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h4 className="font-bold mb-2">1. Contact Us</h4>
                  <p className="text-white/80 text-sm">Send us a message via WhatsApp or email</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-amber-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CreditCard className="w-8 h-8 text-amber-400" />
                  </div>
                  <h4 className="font-bold mb-2">2. Pay 25% Advance</h4>
                  <p className="text-white/80 text-sm">Secure your booking with advance payment</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h4 className="font-bold mb-2">3. Confirmation</h4>
                  <p className="text-white/80 text-sm">Send payment receipt for instant confirmation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}