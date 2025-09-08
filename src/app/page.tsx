"use client";
import { useState, useEffect } from "react";
import { HeroCarousel } from "@/components/HeroCarousel";
import { TreatmentsGrid } from "@/components/TreatmentsGrid";
import { QuickInquiryForm } from "@/components/QuickInquiryForm";
import { 
  Heart, Shield, Users, Award, Star, ArrowRight, Leaf, Stethoscope,
  Clock, CheckCircle, Phone, Mail
} from "lucide-react";
import { IMAGES } from "@/constants/images";
import type { HeroSlide } from "@/components/HeroCarousel";

const heroSlides: HeroSlide[] = [
  {
    image: IMAGES.hero.treatments,
    alt: "Peaceful Ayurveda treatment room with natural lighting",
    heading: "Authentic Ayurveda Wellness",
    subheading: "Experience 5000 years of healing wisdom in Sri Lanka's most tranquil sanctuary",
    cta: { label: "Begin Your Journey", href: "/contact" }
  },
  {
    image: IMAGES.hero.nature,
    alt: "Natural medicinal garden with healing herbs",
    heading: "Connect with Nature",
    subheading: "Discover harmony in our medicinal gardens where every breath brings you closer to wellness",
    cta: { label: "Explore Treatments", href: "/treatments" }
  },
  {
    image: IMAGES.hero.main,
    alt: "Serene accommodation surrounded by lush gardens",
    heading: "Your Wellness Retreat",
    subheading: "Find peace in our comfortable accommodations designed for healing and transformation",
    cta: { label: "View Rooms", href: "/accommodation" }
  }
];

const features = [
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Holistic Healing",
    description: "Traditional Ayurvedic treatments that address root causes for lasting wellness",
    color: "bg-red-50 text-red-600"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Natural & Safe",
    description: "100% organic herbs and oils with no chemicals or side effects",
    color: "bg-green-50 text-green-600"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Expert Practitioners",
    description: "Qualified doctors and therapists with years of experience",
    color: "bg-blue-50 text-blue-600"
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Certified Training",
    description: "Professional certification programs for aspiring practitioners",
    color: "bg-purple-50 text-purple-600"
  }
];

const stats = [
  { number: "5000+", label: "Years of Wisdom" },
  { number: "1000+", label: "Lives Healed" },
  { number: "15+", label: "Treatments" },
  { number: "20+", label: "Countries Served" }
];

export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-background">
        {/* Loading skeleton */}
        <div className="h-[70vh] bg-gray-200 animate-pulse"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Carousel */}
      <HeroCarousel slides={heroSlides} />

      {/* Features Section */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-accent" />
              <span className="text-primary font-medium text-sm">WHY CHOOSE US</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Experience Authentic <span className="text-accent">Ayurvedic Healing</span>
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Discover the power of traditional healing in our peaceful sanctuary
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  {feature.title}
                </h3>
                <p className="text-text-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments Preview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Discover Our <span className="text-accent">Treatments</span>
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Experience authentic Ayurvedic healing through our traditional treatments
            </p>
          </div>
        </div>
        <TreatmentsGrid showOnly={3} showViewMore={true} />
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Trusted by <span className="text-accent">Thousands</span>
            </h2>
            <p className="text-xl text-primary-light max-w-3xl mx-auto">
              Join our global community of wellness seekers who have found healing through authentic Ayurveda
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-light font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2 mb-6">
                <Leaf className="w-4 h-4 text-accent" />
                <span className="text-primary font-medium text-sm">OUR STORY</span>
              </div>
              <h2 className="text-4xl font-bold text-primary mb-6">
                Where Ancient Wisdom Meets <span className="text-accent">Modern Wellness</span>
              </h2>
              <p className="text-lg text-text-muted mb-8 leading-relaxed">
                At Diya Ulpatha, we bridge the gap between 5000-year-old Ayurvedic wisdom and contemporary wellness needs. 
                Our authentic treatments, expert practitioners, and serene environment create the perfect sanctuary for healing and transformation.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <Stethoscope className="w-6 h-6 text-accent" />
                  <span className="font-medium text-primary">Certified Practitioners</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-accent" />
                  <span className="font-medium text-primary">Natural Treatments</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-accent" />
                  <span className="font-medium text-primary">Personalized Care</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-accent" />
                  <span className="font-medium text-primary">Proven Results</span>
                </div>
              </div>

              <a href="/about" className="btn-primary inline-flex items-center gap-2">
                Learn More About Us
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={IMAGES.hero.nature}
                  alt="Peaceful Ayurvedic treatment environment"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent text-primary p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm font-medium">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2 mb-6">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-primary font-medium text-sm">GET IN TOUCH</span>
              </div>
              <h2 className="text-4xl font-bold text-primary mb-6">
                Ready to Start Your <span className="text-accent">Wellness Journey?</span>
              </h2>
              <p className="text-lg text-text-muted mb-8 leading-relaxed">
                Take the first step towards better health and well-being. Our team is here to guide you 
                through your personalized healing journey with authentic Ayurvedic treatments.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary">Call Us</div>
                    <a href="tel:+94112223344" className="text-text-muted hover:text-accent">
                      +94 11 222 3344
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary">Email Us</div>
                    <a href="mailto:info@diyaulpatha.com" className="text-text-muted hover:text-accent">
                      info@diyaulpatha.com
                    </a>
                  </div>
                </div>
              </div>

              <a href="/contact" className="btn-outline inline-flex items-center gap-2">
                Visit Contact Page
                <ArrowRight size={16} />
              </a>
            </div>

            <div>
              <QuickInquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}