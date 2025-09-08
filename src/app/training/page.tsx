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
  Star,
  Phone,
  Mail,
  ArrowRight,
  User,
  UsersIcon,
  Leaf,
  Play,
  ChevronDown,
  ChevronUp,
  Calendar,
  Target,
  Brain,
  Heart,
  Globe,
  Zap,
  FileText,
  Video
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
    "Introduction to Ayurveda",
    "Ayurvedic Perspective of Anatomy", 
    "Ayurvedic Pharmacology",
    "Ayurvedic Wellness Procedures",
    "Ayurvedic Therapeutic Procedures",
    "Different Kinds of Ayurvedic Massages"
  ],
  popular: true,
  certification: "Certificate of Practical Awareness in Ayurvedic Therapies",
  methodology: [
    "Lectures & Tutorials",
    "Interactive Sessions", 
    "Practical Demonstrations",
    "Hands-On Training"
  ],
  eligibility: "Anyone with genuine interest in gaining practical knowledge in Ayurvedic Healing"
};

const learningPath = [
  {
    week: "Week 1",
    title: "Foundation & Theory",
    topics: ["Ayurveda Principles", "Constitutional Analysis", "Basic Anatomy"],
    icon: <BookOpen className="w-6 h-6" />
  },
  {
    week: "Week 2", 
    title: "Practical Application",
    topics: ["Massage Techniques", "Herbal Preparations", "Treatment Protocols"],
    icon: <Target className="w-6 h-6" />
  }
];

const stats = [
  { number: "500+", label: "Graduates", icon: <GraduationCap className="w-6 h-6" /> },
  { number: "15+", label: "Countries", icon: <Globe className="w-6 h-6" /> },
  { number: "98%", label: "Success Rate", icon: <Award className="w-6 h-6" /> },
  { number: "14", label: "Day Program", icon: <Calendar className="w-6 h-6" /> }
];

const benefits = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Deep Understanding",
    description: "Master the philosophical foundations and practical applications of Ayurveda"
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Hands-On Experience", 
    description: "Practice authentic techniques under the guidance of experienced masters"
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Global Certification",
    description: "Receive internationally recognized certification to practice worldwide"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Community Network",
    description: "Join a global network of Ayurvedic practitioners and wellness professionals"
  }
];

const faqs = [
  {
    question: "What prior experience do I need?",
    answer: "No prior experience required. Our course is designed for all levels, from complete beginners to healthcare professionals seeking to expand their knowledge."
  },
  {
    question: "Is accommodation included?",
    answer: "Yes, we offer comprehensive packages that include comfortable accommodation, Ayurvedic meals, and all learning materials."
  },
  {
    question: "What certification will I receive?",
    answer: "Upon successful completion, you'll receive a Certificate of Practical Awareness in Ayurvedic Therapies, recognized internationally."
  },
  {
    question: "Can I practice professionally after the course?",
    answer: "Yes, our certification enables you to practice Ayurvedic therapies professionally. We also provide guidance on setting up your practice."
  }
];

export default function TrainingPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Modern Split Layout */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-accent">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Leaf className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">MASTER ANCIENT WISDOM</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Transform Lives Through
                <span className="block text-accent">Ayurvedic Mastery</span>
              </h1>

              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Join our comprehensive 14-day certification program and master the art of Ayurvedic healing. 
                Learn from expert practitioners in the birthplace of this ancient science.
              </p>

              {/* Key Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-accent" />
                  </div>
                  <span className="font-medium">14-Day Intensive</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-accent" />
                  </div>
                  <span className="font-medium">Global Certification</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-accent" />
                  </div>
                  <span className="font-medium">Expert Instructors</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-accent" />
                  </div>
                  <span className="font-medium">All Levels Welcome</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#enroll" className="btn-secondary text-lg px-8 py-4">
                  Start Your Journey
                </a>
                <button className="btn-outline text-white border-white hover:bg-white hover:text-primary text-lg px-8 py-4 inline-flex items-center gap-2">
                  <Play size={20} />
                  Watch Preview
                </button>
              </div>
            </div>

            {/* Right Content - Interactive Stats Card */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-8 text-center">Course Impact</h3>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <div className="text-accent">{stat.icon}</div>
                      </div>
                      <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                      <div className="text-white/80 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path Section - Interactive Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">Your Learning <span className="text-accent">Journey</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">A structured path to mastery designed by expert practitioners</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Progress Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200"></div>
              
              {learningPath.map((phase, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-accent rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10">
                    <div className="text-primary">{phase.icon}</div>
                  </div>
                  
                  {/* Content Card */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="text-accent font-bold text-sm mb-2">{phase.week}</div>
                      <h4 className="text-xl font-bold text-primary mb-3">{phase.title}</h4>
                      <div className="space-y-2">
                        {phase.topics.map((topic, idx) => (
                          <div key={idx} className="text-gray-600 text-sm">{topic}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Course Details - Tabbed Interface */}
      <section id="course-details" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Tab Navigation */}
            <div className="flex justify-center mb-12">
              <div className="bg-white rounded-2xl p-2 shadow-lg">
                {[
                  { id: "overview", label: "Overview", icon: <BookOpen size={20} /> },
                  { id: "curriculum", label: "Curriculum", icon: <FileText size={20} /> },
                  { id: "instructors", label: "Instructors", icon: <Users size={20} /> },
                  { id: "certification", label: "Certification", icon: <Award size={20} /> }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-primary text-white shadow-lg'
                        : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                    }`}
                  >
                    {tab.icon}
                    <span className="hidden sm:block">{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              {activeTab === "overview" && (
                <div className="p-8 md:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                      <h3 className="text-3xl font-bold text-primary mb-6">{mainCourse.title}</h3>
                      <p className="text-gray-600 text-lg leading-relaxed mb-8">{mainCourse.description}</p>
                      
                      {/* Course Info Cards */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-blue-50 rounded-xl p-4 text-center">
                          <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                          <div className="font-bold text-blue-900">{mainCourse.duration}</div>
                          <div className="text-blue-600 text-sm">Duration</div>
                        </div>
                        <div className="bg-green-50 rounded-xl p-4 text-center">
                          <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                          <div className="font-bold text-green-900">{mainCourse.level}</div>
                          <div className="text-green-600 text-sm">Level</div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-primary mb-6">Why Choose This Course?</h4>
                      <div className="space-y-4">
                        {benefits.map((benefit, index) => (
                          <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                            <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center text-accent">
                              {benefit.icon}
                            </div>
                            <div>
                              <h5 className="font-bold text-primary mb-1">{benefit.title}</h5>
                              <p className="text-gray-600 text-sm">{benefit.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "curriculum" && (
                <div className="p-8 md:p-12">
                  <h3 className="text-3xl font-bold text-primary mb-8 text-center">Comprehensive Curriculum</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {mainCourse.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-accent/10 transition-colors duration-300">
                        <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                        <span className="font-medium text-primary">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-12 bg-primary/5 rounded-2xl p-8">
                    <h4 className="text-xl font-bold text-primary mb-4">Learning Methodology</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {mainCourse.methodology.map((method, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <Zap className="w-5 h-5 text-accent" />
                          <span className="text-gray-700">{method}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "instructors" && (
                <div className="p-8 md:p-12 text-center">
                  <h3 className="text-3xl font-bold text-primary mb-8">Expert Instructors</h3>
                  <div className="max-w-2xl mx-auto">
                    <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                      <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                        <Stethoscope className="w-12 h-12 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-primary mb-2">Qualified Ayurvedic Doctors</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Learn from certified practitioners registered with Sri Lanka Ayurvedic Medical Council, 
                        bringing years of clinical experience and traditional knowledge.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-accent mb-2">15+</div>
                        <div className="text-gray-600">Years Experience</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-accent mb-2">500+</div>
                        <div className="text-gray-600">Students Trained</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "certification" && (
                <div className="p-8 md:p-12">
                  <div className="text-center mb-8">
                    <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                      <Award className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-primary mb-4">International Certification</h3>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                      Upon successful completion, receive your official Certificate of Practical Awareness in Ayurvedic Therapies
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-6 rounded-xl bg-blue-50">
                      <Globe className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                      <h4 className="font-bold text-blue-900 mb-2">Global Recognition</h4>
                      <p className="text-blue-600 text-sm">Practice internationally with our certification</p>
                    </div>
                    <div className="text-center p-6 rounded-xl bg-green-50">
                      <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-4" />
                      <h4 className="font-bold text-green-900 mb-2">Quality Assured</h4>
                      <p className="text-green-600 text-sm">Meets international training standards</p>
                    </div>
                    <div className="text-center p-6 rounded-xl bg-purple-50">
                      <Users className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                      <h4 className="font-bold text-purple-900 mb-2">Professional Network</h4>
                      <p className="text-purple-600 text-sm">Join our alumni community worldwide</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
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