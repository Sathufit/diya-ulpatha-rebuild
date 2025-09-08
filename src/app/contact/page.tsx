"use client";
import { useState, useEffect } from "react";
import { QuickInquiryForm } from "@/components/QuickInquiryForm";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  ChevronDown,
  ChevronUp,
  Globe,
  Zap,
  Shield,
  Users,
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
      primary: "+94 11 222 3344",
      secondary: "Available 24/7",
      action: "tel:+94112223344",
      color: "bg-green-50 text-green-600 border-green-200",
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Us",
      primary: "info@diyaulpatha.com",
      secondary: "Response within 2 hours",
      action: "mailto:info@diyaulpatha.com",
      color: "bg-blue-50 text-blue-600 border-blue-200",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Visit Us",
      primary: "Kandy, Sri Lanka",
      secondary: "15 min from city center",
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
      question: "How do I book my first consultation?",
      answer:
        "You can book through our contact form, call us directly, or visit our center. We recommend advance booking to ensure availability. Your first visit includes a comprehensive consultation with our Ayurvedic doctor.",
    },
    {
      question: "What should I expect during treatments?",
      answer:
        "Each treatment begins with a personal consultation to assess your constitution and current health status. Treatments are customized to your needs and performed by qualified therapists in a peaceful environment.",
    },
    {
      question: "Do you offer residential packages?",
      answer:
        "Yes, we offer comprehensive residential packages that include accommodation, meals, treatments, and wellness activities. Packages range from 3-day retreats to 21-day intensive programs.",
    },
    {
      question: "Are your practitioners certified?",
      answer:
        "All our doctors are registered with Sri Lanka Ayurvedic Medical Council, and our therapists hold qualifications from reputed institutions with extensive practical experience.",
    },
    {
      question: "What is included in training programs?",
      answer:
        "Our 14-day certification program includes theoretical knowledge, practical demonstrations, hands-on training, accommodation, meals, and official certification upon completion.",
    },
  ];

  const quickStats = [
    { icon: <Zap className="w-6 h-6" />, label: "Quick Response", value: "< 2 hours" },
    { icon: <Shield className="w-6 h-6" />, label: "Trust Score", value: "4.9/5" },
    { icon: <Users className="w-6 h-6" />, label: "Happy Clients", value: "500+" },
    { icon: <Globe className="w-6 h-6" />, label: "Countries", value: "15+" },
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
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-8">
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm font-medium">GET IN TOUCH</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Let&apos;s Start Your
              <br />
              <span className="text-accent">Wellness Journey</span>
            </h1>

            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
              Ready to transform your life through authentic Ayurveda? We&apos;re here to guide you every step of the way. Reach out and let&apos;s begin your healing journey together.
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {quickStats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"
                >
                  <div className="text-accent mb-2 flex justify-center">
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
                      <div className="mb-4">{method.icon}</div>
                      <h3 className="font-bold text-lg mb-2">{method.title}</h3>
                      <p className="font-semibold mb-1">{method.primary}</p>
                      <p className="text-sm opacity-75">{method.secondary}</p>
                    </div>
                  </a>
                ) : (
                  <div className={`p-8 rounded-2xl border-2 ${method.color}`}>
                    <div className="text-center">
                      <div className="mb-4">{method.icon}</div>
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
              {/* Left side - Form */}
              <div>
                <h2 className="text-4xl font-bold mb-6 text-primary">
                  Send Us a{" "}
                  <span className="text-accent">Message</span>
                </h2>
                <p className="text-xl text-text-muted mb-8">
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>
                <QuickInquiryForm />
              </div>

              {/* Right side - Info & Map */}
              <div className="space-y-8">
                {/* Location info */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold mb-6 text-primary">
                    Visit Our Sanctuary
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-accent mt-1" />
                      <div>
                        <p className="font-semibold">123 Wellness Road</p>
                        <p className="text-text-muted">Kandy, Sri Lanka</p>
                        <p className="text-sm text-text-muted">
                          15 minutes from city center
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Clock className="w-6 h-6 text-accent mt-1" />
                      <div>
                        <p className="font-semibold">Operating Hours</p>
                        <p className="text-text-muted">8:00 AM - 8:00 PM</p>
                        <p className="text-sm text-text-muted">
                          Monday to Sunday
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="bg-muted rounded-2xl h-64 flex items-center justify-center">
                  <div className="text-center text-text-muted">
                    <MapPin className="w-12 h-12 mx-auto mb-4" />
                    <p className="font-medium">Interactive Map</p>
                    <p className="text-sm">Coming soon</p>
                  </div>
                </div>

                {/* Emergency contact */}
                <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                  <h4 className="font-bold text-red-800 mb-2">
                    24/7 Emergency Support
                  </h4>
                  <p className="text-red-700 text-sm mb-3">
                    For urgent wellness consultations
                  </p>
                  <a
                    href="tel:+94112223344"
                    className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors"
                  >
                    <Phone size={16} />
                    Call Emergency Line
                  </a>
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
                Frequently Asked{" "}
                <span className="text-accent">Questions</span>
              </h2>
              <p className="text-xl text-text-muted">
                Quick answers to common questions
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-border rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setExpandedFaq(expandedFaq === index ? null : index)
                    }
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                  >
                    <h3 className="font-semibold text-lg text-primary">
                      {faq.question}
                    </h3>
                    {expandedFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-accent" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-accent" />
                    )}
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 pb-4 pt-2">
                      <p className="text-text-muted leading-relaxed">
                        {faq.answer}
                      </p>
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

      {/* CTA - Final call to action */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-4xl font-bold mb-6">
              Your Wellness Journey Awaits
            </h3>
            <p className="text-xl text-primary-light mb-8">
              Don&apos;t wait any longer. Take the first step towards a healthier, more balanced you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+94112223344" className="btn-secondary">
                Call Now
              </a>
              <a
                href="/treatments"
                className="btn-outline text-white border-white hover:bg-white hover:text-primary"
              >
                View Treatments
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}