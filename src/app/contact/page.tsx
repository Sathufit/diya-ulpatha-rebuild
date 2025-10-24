"use client";
import { useState, useEffect } from "react";
import { QuickInquiryForm } from "@/components/QuickInquiryForm";
import { 
  Phone, Mail, MapPin, Clock, MessageCircle, Send,
  Shield, Users, Globe, Zap, ChevronDown, ChevronUp
} from "lucide-react";

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Call Us",
      primary: "+94 77 625 1855",
      secondary: "Available 8AM - 8PM",
      action: "tel:+94776251855",
      color: "bg-green-50 text-green-600 border-green-200",
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Us",
      primary: "diyaulpatha@gmail.com",
      secondary: "Response within 24 hours",
      action: "mailto:diyaulpatha@gmail.com",
      color: "bg-blue-50 text-blue-600 border-blue-200",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Visit Us",
      primary: "Matugama, Sri Lanka",
      secondary: "Horawala Welipenna, Mawathagoda Road",
      action: "https://maps.google.com",
      color: "bg-purple-50 text-purple-600 border-purple-200",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Open Hours",
      primary: "8:00 AM - 8:00 PM",
      secondary: "Monday to Sunday",
      action: null,
      color: "bg-orange-50 text-orange-600 border-orange-200",
    },
  ];

  const faqs = [
    {
      question: "How do I make a reservation?",
      answer:
        "You can book through our contact form, WhatsApp (+94 77 625 1855), or email. We require 25% advance payment to confirm your booking. After payment, send the receipt via WhatsApp for instant confirmation.",
    },
    {
      question: "What packages do you offer?",
      answer:
        "We offer Day Out Packages (Rs. 3,000 per adult), Full Board overnight packages (Rs. 9,000 A/C, Rs. 7,500 Non-A/C), and Half Board packages (Rs. 8,500 A/C, Rs. 7,000 Non-A/C). All include meals and swimming pool access.",
    },
    {
      question: "Do you offer discounts for children?",
      answer:
        "Yes! Children under 5 years stay free. Children aged 5-10 years get 50% discount on overnight packages and pay Rs. 1,500 for day out packages.",
    },
    {
      question: "What facilities do you have?",
      answer:
        "We have swimming pool, playground, children's park, volleyball court, badminton court, restaurant, and beautiful tea garden surroundings. Changing rooms are provided for groups of 25+ people.",
    },
    {
      question: "Can we host events at your resort?",
      answer:
        "Absolutely! We host family gatherings, corporate events, team building activities, and celebrations. Music is allowed until 7:00 PM for evening events. Contact us to discuss your event requirements.",
    },
    {
      question: "What are the pool hours?",
      answer:
        "For day events, pool access is until 4:30 PM. For night events, pool closes at 7:00 PM. Pool access is included in all our packages.",
    },
  ];

  const quickStats = [
    { icon: <Zap className="w-6 h-6" />, label: "Quick Response", value: "< 24 hours" },
    { icon: <Shield className="w-6 h-6" />, label: "Trusted", value: "100+ Guests" },
    { icon: <Users className="w-6 h-6" />, label: "Happy Visitors", value: "5★ Rating" },
    { icon: <Globe className="w-6 h-6" />, label: "Location", value: "Matugama" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero - Contact focused */}
      <section className="relative py-32 bg-gradient-to-br from-primary via-primary-dark to-accent text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-16.569-13.431-30-30-30v60c16.569 0 30-13.431 30-30zM0 30c16.569 0 30 13.431 30 30H0V30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-8">
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm font-medium">GET IN TOUCH</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Let&apos;s Plan Your
              <br />
              <span className="text-accent">Perfect Stay</span>
            </h1>

            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
              Ready to experience our beautiful tea garden resort? We&apos;re here to help you plan the perfect getaway, event, or celebration at Diya Ulpatha.
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {quickStats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"
                >
                  <div className="flex justify-center mb-2 text-accent">
                    {stat.icon}
                  </div>
                  <div className="font-bold text-lg">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods - Card grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">
              Multiple Ways to{" "}
              <span className="text-accent">Connect</span>
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Choose your preferred method to reach us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {contactMethods.map((method, index) => (
              <div key={index} className="group">
                {method.action ? (
                  <a
                    href={method.action}
                    className={`block p-8 rounded-2xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl ${method.color}`}
                  >
                    <div className="text-center">
                      <div className="flex justify-center mb-4">
                        {method.icon}
                      </div>
                      <h3 className="font-bold text-lg mb-2">{method.title}</h3>
                      <p className="font-semibold mb-1">{method.primary}</p>
                      <p className="text-sm opacity-75">{method.secondary}</p>
                    </div>
                  </a>
                ) : (
                  <div className={`block p-8 rounded-2xl border-2 transition-all duration-300 ${method.color}`}>
                    <div className="text-center">
                      <div className="flex justify-center mb-4">
                        {method.icon}
                      </div>
                      <h3 className="font-bold text-lg mb-2">{method.title}</h3>
                      <p className="font-semibold mb-1">{method.primary}</p>
                      <p className="text-sm opacity-75">{method.secondary}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form - Two column layout */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <QuickInquiryForm />
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold text-primary mb-6">Why Choose Our Wellness Center?</h3>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Shield className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-primary mb-2">Authentic Treatments</h4>
                        <p className="text-text-muted">Traditional Ayurvedic therapies performed by certified practitioners</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-primary mb-2">Expert Care</h4>
                        <p className="text-text-muted">Personalized treatments designed for your unique constitution</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Globe className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-primary mb-2">Natural Environment</h4>
                        <p className="text-text-muted">Peaceful sanctuary surrounded by medicinal gardens</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h4 className="text-xl font-bold text-primary mb-4">Quick Contact Info</h4>
                  <div className="space-y-3">
                    <p className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-accent" />
                      <span>+94 11 222 3344</span>
                    </p>
                    <p className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-accent" />
                      <span>info@diyaulpatha.com</span>
                    </p>
                    <p className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-accent" />
                      <span>Kandy, Sri Lanka</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - Expandable section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-primary">
                Frequently Asked <span className="text-accent">Questions</span>
              </h2>
              <p className="text-xl text-text-muted">
                Quick answers to common questions
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden">
                  <button
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  >
                    <span className="font-semibold text-lg text-primary">{faq.question}</span>
                    {expandedFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-accent" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-text-muted leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-text-muted mb-4">Still have questions?</p>
              <a
                href="mailto:info@diyaulpatha.com"
                className="btn-primary inline-flex items-center gap-2"
              >
                <Send size={16} />
                Email Us Directly
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}