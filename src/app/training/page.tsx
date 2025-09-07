"use client";
import { useState, useEffect } from "react";
import { Clock, Users, Award, BookOpen, Star, CheckCircle, Calendar, Globe, Heart, Leaf, Target, Brain, Stethoscope, GraduationCap, User, UsersIcon } from "lucide-react";

interface Course {
  id: string;
  title: string;
  level: string;
  duration: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
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

const testimonials = [
  {
    name: "Dr. Sarah Mitchell",
    course: "14-Day Practical Awareness",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    text: "The hands-on training was exceptional. I gained practical skills that I use daily in my practice. The experienced physicians provided invaluable guidance.",
    rating: 5
  },
  {
    name: "Marcus Johnson",
    course: "Individual Training Sessions",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face", 
    text: "The personalized attention and flexible scheduling made it perfect for my busy schedule. Learned authentic techniques in just a few intensive sessions.",
    rating: 5
  },
  {
    name: "Lisa Chen",
    course: "Customized Group Training",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    text: "Our wellness team completed a customized program that was perfectly tailored to our clinic's needs. Outstanding experience and knowledge transfer.",
    rating: 5
  }
];

export default function TrainingPage() {
  const [selectedOption, setSelectedOption] = useState<string>("main");
  const [isVisible, setIsVisible] = useState(false);

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
          <div className="absolute top-1/2 right-32 w-16 h-16 bg-accent/5 rounded-full animate-pulse-gentle"></div>
        </div>

        <div className="container mx-auto container-padding text-center relative z-10">
          <div className={`max-w-5xl mx-auto transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <GraduationCap className="w-5 h-5 text-accent" />
              <span className="text-primary font-medium">Learn from the Source</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-8">
              Master <span className="gradient-text">Ayurveda</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-muted max-w-4xl mx-auto leading-relaxed mb-12">
              Diyaulpatha Ayu Suwapura brings to you a perfect opportunity to learn Ayurveda 
              from the abode of this ancient healing system. Gain practical awareness and hands-on experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#main-course" className="btn-primary text-lg px-8 py-4">
                View Main Course
              </a>
              <a href="/contact" className="btn-secondary text-lg px-8 py-4">
                Enquire Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Learn With Us */}
      <section className="section-padding bg-surface">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
              Why Learn <span className="text-accent">With Us?</span>
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Experience authentic Ayurveda education in its birthplace
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center group hover-glow">
              <Stethoscope className="w-16 h-16 text-accent mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-text-primary mb-3">Experienced Physicians</h3>
              <p className="text-text-muted">Learn under close supervision of qualified Ayurvedic doctors</p>
            </div>
            <div className="card text-center group hover-glow">
              <Target className="w-16 h-16 text-accent mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-text-primary mb-3">Practical Focus</h3>
              <p className="text-text-muted">Hands-on training with easily learnable techniques</p>
            </div>
            <div className="card text-center group hover-glow">
              <Heart className="w-16 h-16 text-accent mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-text-primary mb-3">Authentic Setting</h3>
              <p className="text-text-muted">Learn in the birthplace of Ayurveda with traditional methods</p>
            </div>
            <div className="card text-center group hover-glow">
              <Globe className="w-16 h-16 text-accent mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-text-primary mb-3">Open to All</h3>
              <p className="text-text-muted">Welcome anyone with genuine interest in Ayurvedic healing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Course Section */}
      <section id="main-course" className="section-padding bg-background">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
              Our Signature <span className="gradient-text">Program</span>
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Comprehensive 14-day intensive training in Ayurvedic therapies and massage
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="card-feature ring-2 ring-accent relative overflow-hidden">
              {/* Popular Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-accent text-primary px-6 py-2 rounded-full font-bold text-sm">
                  Most Popular Program
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8">
                {/* Course Overview */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-text-primary mb-4 gradient-text">
                      {mainCourse.title}
                    </h3>
                    <p className="text-text-secondary text-lg leading-relaxed">
                      {mainCourse.description}
                    </p>
                  </div>

                  {/* Course Details */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-accent" />
                      <div>
                        <p className="font-semibold text-text-primary">Duration</p>
                        <p className="text-text-muted">{mainCourse.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-accent" />
                      <div>
                        <p className="font-semibold text-text-primary">Level</p>
                        <p className="text-text-muted">{mainCourse.level}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-accent" />
                      <div>
                        <p className="font-semibold text-text-primary">Certificate</p>
                        <p className="text-text-muted">Included</p>
                      </div>
                    </div>
                  </div>

                  {/* Eligibility */}
                  <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-4 rounded-xl">
                    <h4 className="font-bold text-text-primary mb-2">Eligibility:</h4>
                    <p className="text-text-secondary">{mainCourse.eligibility}</p>
                  </div>
                </div>

                {/* Pricing & CTA */}
                <div className="space-y-6">
                  <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl">
                    <div className="text-3xl font-bold text-accent mb-2">{mainCourse.price}</div>
                    <div className="text-sm text-text-muted mb-4">Complete 14-day program</div>
                    <a href="/contact" className="btn-primary w-full">
                      Enquire Now
                    </a>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-bold text-text-primary">Quick Info:</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-accent" />
                        <span>Hands-on practical training</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-accent" />
                        <span>Expert physician supervision</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-accent" />
                        <span>Certificate upon completion</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-accent" />
                        <span>All materials included</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="section-padding bg-surface">
        <div className="container mx-auto container-padding">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Syllabus */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-text-primary mb-6">Course Syllabus</h3>
                <div className="space-y-4">
                  {mainCourse.features.map((topic, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-background rounded-xl hover:shadow-lg transition-all duration-300">
                      <div className="w-8 h-8 bg-accent text-primary rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary">{topic}</h4>
                        <p className="text-text-muted text-sm mt-1">
                          {index === 0 && "Foundation principles and philosophy of Ayurveda"}
                          {index === 1 && "Understanding body systems from Ayurvedic perspective"}
                          {index === 2 && "Medicinal properties and applications of herbs"}
                          {index === 3 && "Preventive and maintenance therapies"}
                          {index === 4 && "Treatment procedures for various conditions"}
                          {index === 5 && "Practical massage techniques and applications"}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Training Methodology */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-text-primary mb-6">Training Methodology</h3>
                <div className="space-y-4">
                  {mainCourse.methodology.map((method, index) => (
                    <div key={index} className="card-interactive">
                      <div className="flex items-center gap-4">
                        <div className="text-accent">
                          {index === 0 && <BookOpen className="w-8 h-8" />}
                          {index === 1 && <Users className="w-8 h-8" />}
                          {index === 2 && <Brain className="w-8 h-8" />}
                          {index === 3 && <Target className="w-8 h-8" />}
                        </div>
                        <div>
                          <h4 className="font-semibold text-text-primary">{method}</h4>
                          <p className="text-text-muted text-sm">
                            {index === 0 && "Theoretical foundation with expert instruction"}
                            {index === 1 && "Group discussions and Q&A sessions"}
                            {index === 2 && "Live demonstrations by experienced practitioners"}
                            {index === 3 && "Practical experience under supervision"}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-br from-accent/10 to-primary/10 p-6 rounded-xl">
                  <h4 className="font-bold text-text-primary mb-3">Certification</h4>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    Upon successful completion, you will receive our {mainCourse.certification}, 
                    recognized for its practical value and comprehensive training approach.
                  </p>
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