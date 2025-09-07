"use client";
import { useState, useEffect } from "react";
import { QuickInquiryForm } from "@/components/QuickInquiryForm";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  MessageCircle,
  Send,
  Globe,
  Leaf,
} from "lucide-react";

const contactInfo = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Phone",
    details: "+94 11 222 3344",
    subtext: "Available 24/7 for emergencies",
    href: "tel:+94112223344",
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    details: "info@diyaulpatha.com",
    subtext: "We respond within 24 hours",
    href: "mailto:info@diyaulpatha.com",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Address",
    details: "123 Wellness Road, Kandy, Sri Lanka",
    subtext: "15 minutes from city center",
    href: "https://maps.google.com",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Hours",
    details: "8:00 AM - 8:00 PM",
    subtext: "Monday to Sunday",
    href: null,
  },
];

const faqs = [
  {
    question: "How do I book a treatment?",
    answer:
      "You can book a treatment by filling out our contact form, calling us directly, or visiting our center. We recommend booking in advance to ensure availability.",
  },
  {
    question: "What should I expect during my first visit?",
    answer:
      "Your first visit includes a consultation with our Ayurvedic doctor to assess your constitution (prakriti) and current imbalances (vikriti), followed by a personalized treatment plan.",
  },
  {
    question: "Do you offer accommodation packages?",
    answer:
      "Yes, we offer various accommodation packages that include meals, treatments, and wellness activities. Contact us for detailed package information.",
  },
  {
    question: "Are your practitioners certified?",
    answer:
      "All our practitioners are certified Ayurveda specialists with years of training and experience in traditional healing methods.",
  },
];

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("contact");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding hero-gradient relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-32 h-32 bg-accent/10 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-primary/10 rounded-full animate-float animate-delay-300"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-accent/5 rounded-full animate-pulse-gentle"></div>
        </div>

        <div className="container mx-auto container-padding text-center relative z-10">
          <div
            className={`max-w-5xl mx-auto transition-all duration-1000 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <MessageCircle className="w-5 h-5 text-accent" />
              <span className="text-primary font-medium">Get in Touch</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-8">
              Contact <span className="gradient-text">Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-muted max-w-4xl mx-auto leading-relaxed mb-12">
              Ready to begin your wellness journey? We're here to guide you every
              step of the way. Reach out and let's start your healing
              transformation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact-form"
                className="btn-primary text-lg px-8 py-4"
              >
                Send Message
              </a>
              <a
                href="tel:+94112223344"
                className="btn-secondary text-lg px-8 py-4"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="bg-surface border-b border-border sticky top-0 z-40">
        <div className="container mx-auto container-padding">
          <div className="flex justify-center">
            <div className="flex bg-muted rounded-xl p-1">
              {[
                { id: "contact", label: "Contact Info", icon: <Phone size={16} /> },
                { id: "form", label: "Send Message", icon: <Send size={16} /> },
                { id: "faq", label: "FAQ", icon: <MessageCircle size={16} /> },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-accent text-primary shadow-lg"
                      : "text-text-secondary hover:text-primary"
                  }`}
                >
                  {tab.icon}
                  <span className="hidden sm:block">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Tab */}
      {activeTab === "contact" && (
        <section className="section-padding bg-background">
          <div className="container mx-auto container-padding">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
                Get in <span className="text-accent">Touch</span>
              </h2>
              <p className="text-xl text-text-muted max-w-3xl mx-auto">
                Multiple ways to reach us - choose what works best for you
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className={`card text-center group hover-glow transition-all duration-500 transform ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="text-accent mb-6 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">
                    {info.title}
                  </h3>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-text-secondary hover:text-accent transition-colors duration-300 font-medium block mb-2"
                    >
                      {info.details}
                    </a>
                  ) : (
                    <p className="text-text-secondary font-medium mb-2">
                      {info.details}
                    </p>
                  )}
                  <p className="text-text-muted text-sm">{info.subtext}</p>
                </div>
              ))}
            </div>

            {/* Map Section */}
            <div className="bg-surface rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-text-primary mb-4">
                  Visit Our Center
                </h3>
                <p className="text-text-muted">
                  Located in the peaceful hills near Kandy
                </p>
              </div>

              <div className="bg-muted rounded-xl h-64 flex items-center justify-center mb-8">
                <div className="text-center text-text-muted">
                  <MapPin className="w-16 h-16 mx-auto mb-4 text-accent" />
                  <p className="text-lg font-medium">
                    Interactive Map Coming Soon
                  </p>
                  <p className="text-sm">123 Wellness Road, Kandy, Sri Lanka</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <h4 className="font-semibold text-text-primary">By Car</h4>
                  <p className="text-text-muted text-sm">
                    15 minutes from Kandy city center via A1 highway
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-text-primary">By Train</h4>
                  <p className="text-text-muted text-sm">
                    Kandy Railway Station + 10 min taxi ride
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-text-primary">From Airport</h4>
                  <p className="text-text-muted text-sm">
                    2.5 hours from Colombo International Airport
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contact Form Tab */}
      {activeTab === "form" && (
        <section id="contact-form" className="section-padding bg-background">
          <div className="container mx-auto container-padding">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
                  Send Us a <span className="gradient-text">Message</span>
                </h2>
                <p className="text-xl text-text-muted">
                  Fill out the form below and we'll get back to you within 24
                  hours
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Form */}
                <div className="lg:col-span-2">
                  <QuickInquiryForm className="max-w-none shadow-xl" />
                </div>

                {/* Quick Contact Options */}
                <div className="space-y-6">
                  <div className="card">
                    <h3 className="text-xl font-bold text-text-primary mb-4">
                      Quick Contact
                    </h3>
                    <div className="space-y-4">
                      <a
                        href="tel:+94112223344"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors duration-300"
                      >
                        <Phone className="w-5 h-5 text-accent" />
                        <div>
                          <p className="font-medium text-text-primary">Call Us</p>
                          <p className="text-sm text-text-muted">
                            +94 11 222 3344
                          </p>
                        </div>
                      </a>
                      <a
                        href="mailto:info@diyaulpatha.com"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors duration-300"
                      >
                        <Mail className="w-5 h-5 text-accent" />
                        <div>
                          <p className="font-medium text-text-primary">Email Us</p>
                          <p className="text-sm text-text-muted">
                            info@diyaulpatha.com
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div className="card">
                    <h3 className="text-xl font-bold text-text-primary mb-4">
                      Follow Us
                    </h3>
                    <div className="flex gap-4">
                      <a
                        href="https://facebook.com"
                        className="w-12 h-12 bg-muted rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300"
                        aria-label="Facebook"
                      >
                        <Facebook size={20} />
                      </a>
                      <a
                        href="https://instagram.com"
                        className="w-12 h-12 bg-muted rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300"
                        aria-label="Instagram"
                      >
                        <Instagram size={20} />
                      </a>
                    </div>
                  </div>

                  <div className="card bg-gradient-to-br from-accent/10 to-primary/10">
                    <div className="text-center">
                      <Leaf className="w-12 h-12 text-accent mx-auto mb-4" />
                      <h3 className="text-lg font-bold text-text-primary mb-2">
                        Emergency Contact
                      </h3>
                      <p className="text-text-muted text-sm mb-4">
                        For urgent matters outside business hours
                      </p>
                      <a
                        href="tel:+94112223344"
                        className="btn-primary w-full text-center"
                      >
                        Call Emergency Line
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Tab */}
      {activeTab === "faq" && (
        <section className="section-padding bg-background">
          <div className="container mx-auto container-padding">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
                  Frequently Asked <span className="text-accent">Questions</span>
                </h2>
                <p className="text-xl text-text-muted">
                  Quick answers to common questions about our services
                </p>
              </div>

              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className={`card cursor-pointer transition-all duration-500 transform ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    } ${expandedFaq === index ? "ring-2 ring-accent" : ""}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                    onClick={() =>
                      setExpandedFaq(expandedFaq === index ? null : index)
                    }
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-text-primary pr-4">
                        {faq.question}
                      </h3>
                      <div
                        className={`text-accent transition-transform duration-300 ${
                          expandedFaq === index ? "rotate-45" : ""
                        }`}
                      >
                        <Send size={20} />
                      </div>
                    </div>

                    {expandedFaq === index && (
                      <div className="mt-4 pt-4 border-t border-border animate-fade-in-up">
                        <p className="text-text-secondary leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <div className="bg-gradient-to-r from-accent/20 to-primary/10 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-text-primary mb-4">
                    Still Have Questions?
                  </h3>
                  <p className="text-text-muted mb-6">
                    Our team is here to help with any specific questions about
                    treatments, accommodations, or training programs.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={() => setActiveTab("form")}
                      className="btn-primary px-8 py-3"
                    >
                      Contact Us
                    </button>
                    <a
                      href="/treatments"
                      className="btn-secondary px-8 py-3"
                    >
                      View Treatments
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary via-primary-dark to-primary text-white">
        <div className="container mx-auto container-padding text-center">
          <div className="max-w-4xl mx-auto">
            <Globe className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your Wellness Journey Starts Here
            </h2>
            <p className="text-xl text-primary-light mb-10 leading-relaxed">
              Whether you're seeking healing treatments, learning opportunities,
              or a peaceful retreat, we're here to guide you on your path to
              wellness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/treatments"
                className="btn-secondary text-lg px-8 py-4"
              >
                Explore Treatments
              </a>
              <a
                href="/accommodation"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary transition-all duration-300"
              >
                View Accommodation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}