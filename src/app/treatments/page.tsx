"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Heart, Leaf, Clock, Star, Calendar, Phone, Sparkles, Construction
} from "lucide-react";
import { IMAGES } from "@/constants/images";

export default function TreatmentsPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
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
                <Construction className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
                <span className="text-white text-xs sm:text-sm font-semibold">COMING SOON</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Ayurvedic
                <br />
                <span className="text-accent">Treatments</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-2xl leading-relaxed">
                We're preparing to offer authentic Ayurvedic treatments. Stay tuned for updates on our healing services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-32 h-32 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <Construction className="w-16 h-16 text-accent" />
            </div>
            
            <h2 className="text-4xl font-bold mb-6">
              Treatments <span className="text-accent">Coming Soon</span>
            </h2>
            
            <p className="text-xl text-text-muted mb-12 leading-relaxed">
              We're currently setting up our Ayurvedic treatment facilities. In the meantime, 
              explore our beautiful tea garden resort with comfortable accommodation and exciting packages.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-accent">
                <Sparkles className="w-12 h-12 text-accent mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-3">What's Available Now</h3>
                <ul className="text-left space-y-2 text-text-muted">
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-accent flex-shrink-0" />
                    Comfortable Accommodation
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-accent flex-shrink-0" />
                    Day Out Packages
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-accent flex-shrink-0" />
                    Event Spaces
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-accent flex-shrink-0" />
                    Swimming Pool
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-8 border border-accent/20">
                <Heart className="w-12 h-12 text-accent mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-3">Stay Updated</h3>
                <p className="text-text-muted mb-4">
                  Contact us to learn more about our upcoming treatment services and be the first to know when we launch.
                </p>
                <a 
                  href="https://wa.me/94776251855"
                  className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp: +94 77 625 1855
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/accommodation" 
                className="btn-primary inline-flex items-center gap-2 justify-center"
              >
                <Calendar className="w-5 h-5" />
                View Accommodation
              </Link>
              <Link 
                href="/packages" 
                className="btn-secondary inline-flex items-center gap-2 justify-center"
              >
                <Sparkles className="w-5 h-5" />
                Explore Packages
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary-dark text-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl sm:text-4xl font-bold mb-6">
              Experience Our Resort Today
            </h3>
            <p className="text-lg sm:text-xl text-primary-light mb-8 leading-relaxed">
              While we prepare our treatment facilities, enjoy our beautiful tea garden resort, 
              comfortable rooms, and exciting day packages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="btn-secondary inline-flex items-center gap-2 justify-center"
              >
                <Phone className="w-5 h-5" />
                Contact Us
              </Link>
              <a 
                href="https://wa.me/94776251855"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-white border-white hover:bg-white hover:text-primary inline-flex items-center gap-2 justify-center"
              >
                <Phone className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}