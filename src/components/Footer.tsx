import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Instagram, Leaf, Clock, Award, Heart, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white mt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                <Leaf className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Diya Ulpatha</h3>
                <p className="text-accent text-sm font-medium">Ayu Suwapura</p>
              </div>
            </div>
            
            <p className="text-primary-light leading-relaxed text-lg max-w-lg">
              Experience authentic Ayurvedic healing in the heart of Sri Lanka&apos;s natural beauty. 
              Our holistic wellness center offers traditional treatments, expert training, and 
              peaceful accommodation surrounded by medicinal gardens.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-white">5000+ Years</p>
                  <p className="text-primary-light text-sm">Ancient Wisdom</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-white">Expert Care</p>
                  <p className="text-primary-light text-sm">Qualified Doctors</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-xl mb-6 text-accent flex items-center gap-2">
              <Globe className="w-5 h-5" />
              Explore
            </h4>
            <div className="grid grid-cols-1 gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/treatments", label: "Treatments" },
                { href: "/training", label: "Training Programs" },
                { href: "/accommodation", label: "Accommodation" },
                { href: "/gallery", label: "Gallery" },
                { href: "/contact", label: "Contact" }
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-primary-light hover:text-accent transition-colors duration-300 hover:translate-x-1 transform inline-block"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-bold text-xl mb-6 text-accent flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mt-1">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <a
                    href="tel:+94112223344"
                    className="text-white hover:text-accent transition-colors font-semibold"
                  >
                    +94 11 222 3344
                  </a>
                  <p className="text-primary-light text-sm">Available 24/7</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mt-1">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <a
                    href="mailto:info@diyaulpatha.com"
                    className="text-white hover:text-accent transition-colors font-semibold"
                  >
                    info@diyaulpatha.com
                  </a>
                  <p className="text-primary-light text-sm">Quick response</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mt-1">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-white font-semibold">123 Wellness Road</p>
                  <p className="text-primary-light text-sm">Kandy, Sri Lanka</p>
                  <p className="text-primary-light text-sm">15 min from city center</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mt-1">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-white font-semibold">8:00 AM - 8:00 PM</p>
                  <p className="text-primary-light text-sm">Monday to Sunday</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-light/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Media */}
            <div className="flex items-center gap-6">
              <p className="text-primary-light font-medium">Follow Our Journey:</p>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-accent hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://instagram.com"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-accent hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center md:text-right">
              <p className="text-primary-light mb-2">Ready to start your wellness journey?</p>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-accent text-primary px-6 py-3 rounded-xl font-semibold hover:bg-accent/90 transition-all duration-300 hover:scale-105"
              >
                <Phone size={16} />
                Book Consultation
              </Link>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-8 pt-6 border-t border-primary-light/20">
            <p className="text-primary-light">
              &copy; {new Date().getFullYear()} Diya Ulpatha Ayu Suwapura. All rights reserved. | 
              <span className="text-accent font-medium ml-1">Authentic Ayurveda Since Ancient Times</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}