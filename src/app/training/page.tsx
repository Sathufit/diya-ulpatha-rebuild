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
  Leaf
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

const customOptions = [
  {
    id: "customized",
    title: "Customized Training Packages",
    icon: <UsersIcon className="w-12 h-12" />,
    description: "Tailor-made training packages for individuals and groups. Course content planned as per your specific requirements.",
    features: [
      "Flexible course content",
      "Group or individual focus",
      "Customized duration",
      "Specific treatment focus",
      "Professional guidance"
    ]
  },
  {
    id: "individual",
    title: "Individual Training Sessions", 
    icon: <User className="w-12 h-12" />,
    description: "Individual training on almost all treatments. Duration depends on the treatment and ranges from 3 hours to full day.",
    features: [
      "One-on-one training",
      "Flexible scheduling",
      "3 hours to full day",
      "All treatments available",
      "Personalized attention"
    ]
  }
];

const packageFacilities = [
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: "Accommodation",
    description: "Comfortable rooms with all amenities"
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: "Food",
    description: "Nutritious Ayurvedic meals"
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: "Short Tours & Excursions", 
    description: "Cultural and nature exploration"
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: "Leisure Activities",
    description: "Yoga, meditation, and relaxation"
  }
];

const courseHighlights = [
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Comprehensive Curriculum",
    description: "14-day intensive program covering theory and practical applications"
  },
  {
    icon: <Stethoscope className="w-8 h-8" />,
    title: "Expert Instructors", 
    description: "Learn from qualified Ayurvedic doctors and experienced therapists"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Hands-On Training",
    description: "Practical demonstrations and supervised practice sessions"
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Certification",
    description: "Receive official certificate upon successful completion"
  }
];

const benefits = [
  "Learn authentic Ayurvedic principles and practices",
  "Gain practical experience with traditional treatments",
  "Understand anatomy from an Ayurvedic perspective", 
  "Master various massage techniques",
  "Study herbal medicine and pharmacology",
  "Receive certification for professional practice",
  "Network with fellow wellness practitioners",
  "Experience Sri Lankan Ayurvedic traditions firsthand"
];

export default function TrainingPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [showMoreDetails, setShowMoreDetails] = useState(false);

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
          <div className={`max-w-5xl mx-auto transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <GraduationCap className="w-5 h-5 text-accent" />
              <span className="text-primary font-medium">Professional Training</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-8">
              Ayurveda <span className="gradient-text">Training</span> Programs
            </h1>
            <p className="text-xl md:text-2xl text-text-muted max-w-4xl mx-auto leading-relaxed mb-12">
              Master the ancient art of Ayurvedic healing through our comprehensive training programs. 
              Learn from experienced practitioners in the birthplace of this timeless healing tradition.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary text-lg px-8 py-4">
                Enroll Now
              </a>
              <a href="#course-details" className="btn-secondary text-lg px-8 py-4">
                Course Details
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Course Highlights */}
      <section className="section-padding bg-surface">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
              Why Choose Our <span className="text-accent">Training?</span>
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Learn from the source of Ayurvedic wisdom with hands-on experience and expert guidance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courseHighlights.map((highlight, index) => (
              <div key={index} className={`card text-center group hover-glow transition-all duration-500 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`} style={{ transitionDelay: `${index * 150}ms` }}>
                <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 text-accent">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                  {highlight.title}
                </h3>
                <p className="text-text-muted leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Course Section */}
      <section id="course-details" className="section-padding bg-background">
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-6 py-3 mb-8">
                <Star className="w-5 h-5 text-accent" />
                <span className="text-primary font-medium">Featured Course</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
                {mainCourse.title}
              </h2>
              <p className="text-xl text-text-muted max-w-4xl mx-auto leading-relaxed">
                {mainCourse.description}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Course Overview */}
              <div className="lg:col-span-2 space-y-8">
                <div className="card">
                  <h3 className="text-2xl font-bold text-text-primary mb-6">Course Overview</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Clock className="w-8 h-8 text-accent" />
                      </div>
                      <h4 className="font-bold text-text-primary mb-2">Duration</h4>
                      <p className="text-text-muted">{mainCourse.duration}</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="w-8 h-8 text-accent" />
                      </div>
                      <h4 className="font-bold text-text-primary mb-2">Level</h4>
                      <p className="text-text-muted">{mainCourse.level}</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Award className="w-8 h-8 text-accent" />
                      </div>
                      <h4 className="font-bold text-text-primary mb-2">Certificate</h4>
                      <p className="text-text-muted">Official Certification</p>
                    </div>
                  </div>

                  <div className="border-t border-border pt-8">
                    <h4 className="text-xl font-bold text-text-primary mb-4">Course Curriculum</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {mainCourse.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                          <span className="text-text-secondary">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Methodology */}
                <div className="card">
                  <h3 className="text-2xl font-bold text-text-primary mb-6">Learning Methodology</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {mainCourse.methodology.map((method, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-accent font-bold text-sm">{index + 1}</span>
                        </div>
                        <span className="text-text-secondary font-medium">{method}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Details */}
                {showMoreDetails && (
                  <div className="card animate-fade-in-up">
                    <h3 className="text-2xl font-bold text-text-primary mb-6">What You&apos;ll Learn</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-text-secondary">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="text-center">
                  <button
                    onClick={() => setShowMoreDetails(!showMoreDetails)}
                    className="btn-outline inline-flex items-center gap-2"
                  >
                    {showMoreDetails ? 'Show Less' : 'Show More Details'}
                    <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${showMoreDetails ? 'rotate-90' : ''}`} />
                  </button>
                </div>
              </div>

              {/* Enrollment Card */}
              <div className="space-y-6">
                <div className="card sticky top-8">
                  <div className="text-center mb-6">
                    {mainCourse.popular && (
                      <div className="inline-flex items-center gap-2 bg-accent text-primary px-4 py-2 rounded-full text-sm font-bold mb-4">
                        <Star size={16} />
                        Most Popular
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-text-primary mb-2">Enroll Today</h3>
                    <p className="text-3xl font-bold text-accent mb-4">{mainCourse.price}</p>
                    <p className="text-text-muted text-sm">14-day intensive program</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-text-muted">Duration</span>
                      <span className="font-medium text-text-primary">{mainCourse.duration}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-text-muted">Level</span>
                      <span className="font-medium text-text-primary">{mainCourse.level}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-text-muted">Certificate</span>
                      <CheckCircle className="w-5 h-5 text-accent" />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-text-muted">Hands-on Training</span>
                      <CheckCircle className="w-5 h-5 text-accent" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <a href="/contact" className="btn-primary w-full text-center">
                      Enroll Now
                    </a>
                    <a href="tel:+94112223344" className="btn-outline w-full text-center inline-flex items-center justify-center gap-2">
                      <Phone size={16} />
                      Call for Details
                    </a>
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <h4 className="font-bold text-text-primary mb-3">Eligibility</h4>
                    <p className="text-text-muted text-sm leading-relaxed">{mainCourse.eligibility}</p>
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="card">
                  <h4 className="font-bold text-text-primary mb-4">Quick Contact</h4>
                  <div className="space-y-3">
                    <a href="tel:+94112223344" className="flex items-center gap-3 text-text-muted hover:text-accent transition-colors">
                      <Phone size={16} />
                      <span>+94 11 222 3344</span>
                    </a>
                    <a href="mailto:info@diyaulpatha.com" className="flex items-center gap-3 text-text-muted hover:text-accent transition-colors">
                      <Mail size={16} />
                      <span>info@diyaulpatha.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Training Options */}
      <section className="section-padding bg-background">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
              Flexible <span className="gradient-text">Training Options</span>
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Customized programs designed to meet your specific learning needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {customOptions.map((option, index) => (
              <div key={index} className="card-feature hover-lift">
                <div className="text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                  {option.icon}
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-4 group-hover:gradient-text transition-all duration-300">
                  {option.title}
                </h3>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {option.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-text-secondary">
                      <CheckCircle size={16} className="text-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="/contact" className="btn-secondary w-full">
                  Learn More
                </a>
              </div>
            ))}
          </div>

          {/* Package Facilities */}
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                Multi-Day Package Facilities
              </h3>
              <p className="text-text-muted">Complete support for your learning journey</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {packageFacilities.map((facility, index) => (
                <div key={index} className="text-center">
                  <div className="text-accent mb-3 flex justify-center">
                    {facility.icon}
                  </div>
                  <h4 className="font-semibold text-text-primary mb-2">{facility.title}</h4>
                  <p className="text-text-muted text-sm">{facility.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-accent/10 to-primary/5">
        <div className="container mx-auto container-padding text-center">
          <div className="max-w-4xl mx-auto">
            <Leaf className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
              Ready to Begin Your Learning Journey?
            </h2>
            <p className="text-xl text-text-muted mb-10 leading-relaxed">
              Join us at the birthplace of Ayurveda and gain practical skills that will transform 
              your understanding of holistic healing. Your journey to becoming a skilled practitioner starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary text-lg px-8 py-4">
                Enquire About Courses
              </a>
              <a href="tel:+94112223344" className="btn-secondary text-lg px-8 py-4">
                Call: +94 11 222 3344
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}