"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { TreatmentsGrid } from "@/components/TreatmentsGrid";
import { 
  Heart, Leaf, Users, Shield, Stethoscope, Award, Clock, Star, 
  Calendar, Phone
} from "lucide-react";
import { IMAGES } from "@/constants/images";

export default function TreatmentsPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const principles = [
    {
      icon: <Heart className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Holistic Healing",
      description: "Unlike conventional medicine that treats symptoms, Ayurveda addresses the root cause of health issues by treating the whole person - body, mind, and spirit.",
      color: "bg-red-50 border-red-200 text-red-700"
    },
    {
      icon: <Leaf className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Natural Medicine",
      description: "All treatments use 100% natural herbs, oils, and therapies with no chemicals or synthetic substances, ensuring complete safety with no side effects.",
      color: "bg-green-50 border-green-200 text-green-700"
    },
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Individual Constitution",
      description: "Every person has a unique constitution (Prakriti). Treatments are personalized based on your specific body type, lifestyle, and current health imbalances.",
      color: "bg-blue-50 border-blue-200 text-blue-700"
    },
    {
      icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Prevention & Wellness",
      description: "Beyond healing illness, Ayurveda focuses on maintaining optimal health and preventing disease through lifestyle guidance and preventive therapies.",
      color: "bg-purple-50 border-purple-200 text-purple-700"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Mobile-Optimized Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/90 z-10"></div>
        <div
          className="h-[60vh] sm:h-[70vh] bg-cover bg-center"
          style={{
            backgroundImage: `url('${IMAGES.hero.treatments}')`,
          }}
        ></div>

        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-4">
            <div className={`max-w-4xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
                <span className="text-white text-xs sm:text-sm font-semibold">AUTHENTIC TREATMENTS</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Ayurvedic
                <br />
                <span className="text-accent">Treatments</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-2xl leading-relaxed">
                Experience the healing power of 5000-year-old wisdom through our authentic Ayurvedic treatments designed to restore balance and promote natural wellness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile-Optimized Ayurveda Principles */}
      <section className="py-16 sm:py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">
              The Science of <span className="text-accent">Life</span>
            </h2>
            <p className="text-lg sm:text-xl text-text-muted max-w-3xl mx-auto">
              Understanding the fundamental principles that make Ayurveda the world&apos;s oldest and most comprehensive healing system
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {principles.map((principle, index) => (
              <div
                key={index}
                className={`${principle.color} rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 transition-all duration-500 hover:scale-105 hover:shadow-xl`}
              >
                <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="flex-shrink-0">
                    {principle.icon}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{principle.title}</h3>
                    <p className="text-sm sm:text-base leading-relaxed">{principle.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments Grid */}
      <section id="treatments">
        <TreatmentsGrid />
      </section>

      {/* Mobile-Optimized Treatment Process */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">
              Your <span className="text-accent">Treatment Journey</span>
            </h2>
            <p className="text-lg sm:text-xl text-text-muted max-w-3xl mx-auto">
              Our systematic approach ensures personalized care for optimal results
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">
              {[
                { step: "01", title: "Consultation", desc: "Detailed assessment of your constitution and health" },
                { step: "02", title: "Treatment Plan", desc: "Customized therapy program designed for your needs" },
                { step: "03", title: "Healing Journey", desc: "Guided treatments with continuous monitoring" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-accent text-primary rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-lg sm:text-xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{item.title}</h3>
                  <p className="text-sm sm:text-base text-text-muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile-Optimized Why Choose Section */}
      <section className="py-16 sm:py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">
              Why Choose <span className="text-accent">Our Treatments</span>
            </h2>
            <p className="text-lg sm:text-xl text-text-muted max-w-3xl mx-auto">
              Experience the difference that authentic, personalized Ayurvedic care makes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border-l-4 border-accent">
              <Stethoscope className="w-10 h-10 sm:w-12 sm:h-12 text-accent mb-4 sm:mb-6" />
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Expert Practitioners</h3>
              <p className="text-sm sm:text-base text-text-muted">Qualified doctors with years of traditional Ayurvedic training</p>
            </div>

            <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-6 sm:p-8 border border-accent/20">
              <Award className="w-10 h-10 sm:w-12 sm:h-12 text-accent mb-4 sm:mb-6" />
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Authentic Methods</h3>
              <p className="text-sm sm:text-base text-text-muted">Traditional techniques passed down through generations</p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border-l-4 border-primary">
              <Clock className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4 sm:mb-6" />
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Proven Results</h3>
              <p className="text-sm sm:text-base text-text-muted">Thousands of successful treatments over the years</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile-Optimized CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-primary to-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M0 0h80v80H0V0zm20 20v40h40V20H20zm20 35a15 15 0 1 1 0-30 15 15 0 0 1 0 30z' fill-rule='evenodd'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
              Ready to Begin Your Healing Journey?
            </h3>
            <p className="text-lg sm:text-xl text-primary-light mb-8 sm:mb-10 leading-relaxed">
              Take the first step towards better health and wellness. Our experienced team is here to guide you through authentic Ayurvedic healing tailored specifically for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link 
                href="/contact" 
                className="btn-secondary inline-flex items-center gap-2 justify-center"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                Book Consultation
              </Link>
              <a 
                href="tel:+94112223344" 
                className="btn-outline text-white border-white hover:bg-white hover:text-primary inline-flex items-center gap-2 justify-center"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}