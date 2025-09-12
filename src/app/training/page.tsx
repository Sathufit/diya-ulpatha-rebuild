"use client";
import { useState, useEffect } from "react";
import { 
  Clock, 
  Users, 
  Award, 
  CheckCircle, 
  BookOpen, 
  GraduationCap, 
  Stethoscope,
  Phone,
  Mail,
  ChevronDown,
  ChevronUp,
  Calendar,
  Target,
  Brain,
  Heart,
  Globe,
  Zap,
  FileText
} from "lucide-react";

interface Course {
  id: string;
  title: string;
  level: string;
  duration: string;
  price: string;
  description: string;
  features: string[];
  popular: boolean;
  certification: string;
  methodology: string[];
  eligibility: string;
}

const mainCourse: Course = {
  id: "practical-awareness",
  title: "Practical Awareness in Ayurvedic Therapies & Massage",
  level: "All Levels",
  duration: "14 days",
  price: "Contact for pricing",
  description: "A perfect opportunity to learn Ayurveda from the abode of this ancient healing system. This course provides pragmatic awareness about Ayurvedic treatments with hands-on training under experienced physicians.",
  features: [
    "Comprehensive theory and practical sessions",
    "Daily hands-on training with real patients",
    "Learn from qualified Ayurvedic doctors",
    "Traditional massage techniques",
    "Herbal medicine preparation",
    "Pulse diagnosis fundamentals",
    "Treatment planning and case studies",
    "Business guidance for practitioners"
  ],
  popular: true,
  certification: "Internationally recognized certificate upon completion",
  methodology: [
    "Morning theory sessions (2 hours)",
    "Practical demonstrations (3 hours)",
    "Hands-on patient treatment (2 hours)",
    "Self-practice and assessment (1 hour)"
  ],
  eligibility: "Open to healthcare professionals, massage therapists, wellness enthusiasts, and anyone interested in authentic Ayurvedic healing"
};

const faqs = [
  {
    question: "What is included in the 14-day program?",
    answer: "The program includes daily theory classes, practical demonstrations, hands-on training, all study materials, accommodation, three Ayurvedic meals per day, and a certificate upon completion."
  },
  {
    question: "Do I need prior medical experience?",
    answer: "No prior medical experience is required. Our program is designed for beginners as well as experienced practitioners. We start with fundamentals and gradually progress to advanced techniques."
  },
  {
    question: "What type of certification do I receive?",
    answer: "You receive an internationally recognized certificate in Practical Awareness of Ayurvedic Therapies & Massage, which enables you to practice these therapies professionally."
  },
  {
    question: "Is accommodation included?",
    answer: "Yes, comfortable accommodation in our wellness center is included in the program fee, along with three nutritious Ayurvedic meals per day."
  },
  {
    question: "Can I practice after completing this course?",
    answer: "Yes, our certification enables you to practice Ayurvedic therapies professionally. We also provide guidance on setting up your practice."
  }
];

export default function TrainingPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {}, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Modern Split Layout */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-accent">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-16.569-13.431-30-30-30v60c16.569 0 30-13.431 30-30zM0 30c16.569 0 30 13.431 30 30H0V30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-6 py-3 mb-8">
                <GraduationCap className="w-5 h-5" />
                <span className="font-semibold">PROFESSIONAL TRAINING</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                Master
                <span className="block text-accent">Ayurvedic Arts</span>
              </h1>

              <p className="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed">
                Transform your career with our comprehensive 14-day certification program. Learn authentic Ayurvedic therapies from experienced practitioners in the birthplace of this ancient healing science.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <a href="#course-details" className="bg-accent hover:bg-accent/90 text-primary px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-3 justify-center">
                  <BookOpen className="w-6 h-6" />
                  Explore Program
                </a>
              </div>
            </div>

            {/* Quick Info Card */}
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-accent to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {mainCourse.title}
                </h3>
                <p className="text-accent font-semibold">{mainCourse.level} • {mainCourse.duration}</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-accent" />
                  <span className="text-text-primary">14 Days Intensive Program</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-accent" />
                  <span className="text-text-primary">Small Batch Training</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-accent" />
                  <span className="text-text-primary">International Certification</span>
                </div>
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-accent" />
                  <span className="text-text-primary">Complete Study Materials</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <p className="text-sm text-text-muted mb-4">Next batch starts soon!</p>
                <div className="flex gap-3">
                  <a href="/contact" className="flex-1 bg-primary hover:bg-primary-dark text-white py-3 px-4 rounded-xl font-semibold text-center transition-colors">
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Navigation Tabs */}
      <section className="sticky top-0 z-40 bg-white shadow-lg border-b">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto">
            {[
              { id: "overview", label: "Overview", icon: <Target className="w-4 h-4" /> },
              { id: "curriculum", label: "Curriculum", icon: <BookOpen className="w-4 h-4" /> },
              { id: "methodology", label: "Teaching", icon: <Brain className="w-4 h-4" /> },
              { id: "certification", label: "Certification", icon: <Award className="w-4 h-4" /> },
              { id: "faqs", label: "FAQs", icon: <ChevronDown className="w-4 h-4" /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 font-semibold border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? "border-accent text-accent"
                    : "border-transparent text-text-muted hover:text-primary"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section id="course-details" className="py-20">
        <div className="container mx-auto px-4">
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">
                  Transform Your <span className="text-accent">Career</span>
                </h2>
                <p className="text-xl text-text-muted">
                  Join our intensive program and become a certified Ayurvedic practitioner
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <div>
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Heart className="w-8 h-8 text-accent" />
                    Why Choose This Program?
                  </h3>
                  <div className="space-y-4">
                    {mainCourse.features.slice(0, 4).map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                        <span className="text-text-primary">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Globe className="w-8 h-8 text-accent" />
                    Career Opportunities
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <span className="text-text-primary">Start your own wellness practice</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <span className="text-text-primary">Join established wellness centers</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <span className="text-text-primary">Offer specialized Ayurvedic massages</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <span className="text-text-primary">Pursue advanced Ayurvedic studies</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-8 border border-accent/20">
                <h3 className="text-2xl font-bold mb-4 text-center">Program Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Stethoscope className="w-8 h-8 text-accent" />
                    </div>
                    <h4 className="font-bold mb-2">Expert Faculty</h4>
                    <p className="text-sm text-text-muted">Learn from qualified Ayurvedic physicians</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-accent" />
                    </div>
                    <h4 className="font-bold mb-2">Small Batches</h4>
                    <p className="text-sm text-text-muted">Personalized attention with limited seats</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-accent" />
                    </div>
                    <h4 className="font-bold mb-2">Intensive Schedule</h4>
                    <p className="text-sm text-text-muted">8 hours daily of theory and practice</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Curriculum Tab */}
          {activeTab === "curriculum" && (
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">
                  Comprehensive <span className="text-accent">Curriculum</span>
                </h2>
                <p className="text-xl text-text-muted">
                  14 days of intensive learning covering all aspects of Ayurvedic therapy
                </p>
              </div>

              <div className="space-y-8">
                {[
                  {
                    week: "Week 1: Foundations",
                    days: "Days 1-7",
                    topics: [
                      "Introduction to Ayurveda and its principles",
                      "Understanding Doshas and body constitution",
                      "Basic anatomy and physiology in Ayurveda",
                      "Fundamental massage techniques",
                      "Oil selection and preparation",
                      "Pulse diagnosis basics",
                      "Patient assessment methods"
                    ]
                  },
                  {
                    week: "Week 2: Advanced Practice",
                    days: "Days 8-14",
                    topics: [
                      "Specialized massage techniques",
                      "Panchakarma procedures",
                      "Herbal medicine preparation",
                      "Treatment planning and protocols",
                      "Business aspects of practice",
                      "Ethics and professional conduct",
                      "Final assessment and certification"
                    ]
                  }
                ].map((week, index) => (
                  <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-primary">{week.week}</h3>
                        <p className="text-accent font-semibold">{week.days}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {week.topics.map((topic, topicIndex) => (
                        <div key={topicIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                          <span className="text-text-primary">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Teaching Methodology Tab */}
          {activeTab === "methodology" && (
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">
                  Our Teaching <span className="text-accent">Approach</span>
                </h2>
                <p className="text-xl text-text-muted">
                  Balanced combination of theory and practical hands-on training
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <Brain className="w-12 h-12 text-accent mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Daily Schedule</h3>
                  <div className="space-y-3">
                    {mainCourse.methodology.map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-accent" />
                        <span className="text-text-primary">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <Zap className="w-12 h-12 text-accent mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Learning Features</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-text-primary">Interactive demonstrations</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-text-primary">Hands-on patient practice</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-text-primary">Case study discussions</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-text-primary">Practical assessments</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/20">
                <h3 className="text-2xl font-bold mb-6 text-center">Eligibility & Requirements</h3>
                <p className="text-lg text-text-primary mb-6 text-center">{mainCourse.eligibility}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3">Ideal for:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm">Healthcare professionals</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm">Massage therapists</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm">Wellness enthusiasts</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3">Prerequisites:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm">No prior experience required</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm">Basic English proficiency</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm">Commitment to full program</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Certification Tab */}
          {activeTab === "certification" && (
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-16">
                <h2 className="text-4xl font-bold mb-6">
                  International <span className="text-accent">Certification</span>
                </h2>
                <p className="text-xl text-text-muted">
                  Recognized qualification to practice Ayurvedic therapies worldwide
                </p>
              </div>

              <div className="bg-white rounded-2xl p-12 shadow-2xl border border-gray-100 mb-12">
                <Award className="w-24 h-24 text-accent mx-auto mb-8" />
                <h3 className="text-3xl font-bold mb-4">Certificate Details</h3>
                <p className="text-lg text-text-primary mb-8">{mainCourse.certification}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <GraduationCap className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h4 className="font-bold mb-2">Accredited Program</h4>
                    <p className="text-sm text-text-muted">Internationally recognized certification</p>
                  </div>
                  <div>
                    <FileText className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h4 className="font-bold mb-2">Comprehensive Curriculum</h4>
                    <p className="text-sm text-text-muted">Covers all aspects of Ayurvedic therapies</p>
                  </div>
                  <div>
                    <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h4 className="font-bold mb-2">Expert Instructors</h4>
                    <p className="text-sm text-text-muted">Learn from experienced Ayurvedic doctors</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">Frequently Asked <span className="text-accent">Questions</span></h2>
              <p className="text-xl text-gray-600">Everything you need to know about our training program</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-300"
                  >
                    <h3 className="font-bold text-primary text-lg">{faq.question}</h3>
                    {expandedFaq === index ? (
                      <ChevronUp className="w-6 h-6 text-accent" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-accent" />
                    )}
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment CTA */}
      <section id="enroll" className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6">Ready to Transform Lives?</h2>
            <p className="text-xl text-primary-light mb-10 max-w-2xl mx-auto leading-relaxed">
              Join our next cohort and embark on a journey that will not only transform your understanding 
              of healing but also empower you to make a difference in others&apos; lives.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <Calendar className="w-8 h-8 mx-auto mb-3 text-accent" />
                  <div className="font-bold text-lg">Next Batch</div>
                  <div className="text-primary-light">January 2025</div>
                </div>
                <div>
                  <Users className="w-8 h-8 mx-auto mb-3 text-accent" />
                  <div className="font-bold text-lg">Limited Seats</div>
                  <div className="text-primary-light">Only 20 students</div>
                </div>
                <div>
                  <Clock className="w-8 h-8 mx-auto mb-3 text-accent" />
                  <div className="font-bold text-lg">Early Bird</div>
                  <div className="text-primary-light">25% Discount</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-secondary text-lg px-8 py-4 inline-flex items-center gap-2">
                <Mail size={20} />
                Enroll Now
              </a>
              <a href="tel:+94112223344" className="btn-outline text-white border-white hover:bg-white hover:text-primary text-lg px-8 py-4 inline-flex items-center gap-2">
                <Phone size={20} />
                Call: +94 11 222 3344
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}