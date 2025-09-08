import Link from "next/link";
import { Mail, Phone, MapPin, Leaf } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-6 h-6 text-accent" />
              <span className="text-xl font-bold">Diya Ulpatha</span>
            </div>
            <p className="text-primary-light text-sm leading-relaxed">
              Authentic Ayurvedic healing in Sri Lanka&apos;s natural sanctuary.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">Explore</h4>
            <div className="space-y-2">
              {[
                { href: "/treatments", label: "Treatments" },
                { href: "/training", label: "Training" },
                { href: "/accommodation", label: "Rooms" },
                { href: "/gallery", label: "Gallery" }
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-primary-light hover:text-accent transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">Company</h4>
            <div className="space-y-2">
              {[
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
                { href: "/privacy", label: "Privacy" },
                { href: "/terms", label: "Terms" }
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-primary-light hover:text-accent transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-accent" />
                <a href="tel:+94112223344" className="text-primary-light hover:text-accent transition-colors">
                  +94 11 222 3344
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-accent" />
                <a href="mailto:info@diyaulpatha.com" className="text-primary-light hover:text-accent transition-colors">
                  info@diyaulpatha.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-primary-light">Kandy, Sri Lanka</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-light/30 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-primary-light text-sm">
            &copy; {new Date().getFullYear()} Diya Ulpatha. All rights reserved.
          </p>
          <a 
            href="/contact" 
            className="bg-accent text-primary px-4 py-2 rounded-lg font-medium text-sm hover:bg-accent/90 transition-colors"
          >
            Book Now
          </a>
        </div>
      </div>
    </footer>
  );
}