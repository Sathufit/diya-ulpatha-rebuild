"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Leaf, Heart, Award, Users, Clock, Stethoscope, TreePine, Globe, Star } from "lucide-react";
import { IMAGES } from "@/constants/images";

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTimeline, setActiveTimeline] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const timeline = [
    { year: "Ancient", title: "Ayurveda Origins", description: "5000-year-old healing science begins in ancient India" },
    { year: "2015", title: "Vision Born", description: "Founder dreams of authentic healing sanctuary" },
    { year: "2018", title: "Center Founded", description: "Diya Ulpatha opens with traditional treatments" },
    { year: "2021", title: "Training Added", description: "Professional certification programs launched" },
    { year: "Today", title: "Holistic Hub", description: "Complete wellness ecosystem serving global community" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero - Split screen intro */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="grid grid-cols-2 h-full">
            <div className="bg-gradient-to-br from-primary via-primary-dark to-primary"></div>
            <div className="relative">
              <Image 
                src={IMAGES.hero.nature}
                alt="Natural healing environment"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="text-white mb-8">
              <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-6">
                <Leaf className="w-4 h-4" />
                <span className="text-sm font-medium">OUR STORY</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Healing Through<br/>
                <span className="text-accent">Ancient Wisdom</span>
              </h1>
              <p className="text-xl text-primary-light max-w-2xl">
                From a simple vision to a transformative wellness sanctuary - discover the journey that brought authentic Ayurveda to modern seekers.
              </p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Mission Statement - Centered focus */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-primary">
              Our <span className="text-accent">Mission</span>
            </h2>
            <p className="text-2xl text-text-muted leading-relaxed mb-12">
              "To be the bridge between ancient Ayurvedic wisdom and modern wellness seekers, creating a sanctuary where healing happens naturally and transformation is inevitable."
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-accent" />
                </div>
                <h4 className="font-bold text-primary">Authentic</h4>
                <p className="text-sm text-text-muted">Traditional methods</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h4 className="font-bold text-primary">Expert</h4>
                <p className="text-sm text-text-muted">Qualified practitioners</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TreePine className="w-8 h-8 text-accent" />
                </div>
                <h4 className="font-bold text-primary">Natural</h4>
                <p className="text-sm text-text-muted">Organic environment</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-accent" />
                </div>
                <h4 className="font-bold text-primary">Holistic</h4>
                <p className="text-sm text-text-muted">Complete wellness</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="py-32 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our <span className="text-accent">Journey</span></h2>
            <p className="text-xl text-text-muted">The evolution of healing</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-accent/20"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-accent rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Content card */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="text-accent font-bold text-lg mb-2">{item.year}</div>
                      <h4 className="text-xl font-bold text-primary mb-3">{item.title}</h4>
                      <p className="text-text-muted">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story - Personal touch */}
      <section className="py-32 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v40c11.046 0 20-8.954 20-20z'/%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Star className="w-16 h-16 text-accent mx-auto mb-8" />
            <h2 className="text-4xl font-bold mb-8">The Visionary Behind It All</h2>
            <blockquote className="text-2xl font-medium leading-relaxed mb-8 italic">
              &ldquo;When I first envisioned Diya Ulpatha, I saw more than just a wellness center. I saw a place where ancient wisdom could flourish in modern times, where every guest would leave transformed, carrying with them not just healing, but hope.&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-xl">DU</span>
              </div>
              <div className="text-left">
                <div className="font-bold text-lg">Dr. Founder Name</div>
                <div className="text-primary-light">Founder & Chief Ayurvedic Physician</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Grid showcase */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why <span className="text-accent">Diya Ulpatha?</span></h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">Three pillars that make us the perfect choice for your wellness journey</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Qualification */}
            <div className="relative group">
              <div className="bg-white rounded-2xl p-8 h-full shadow-lg group-hover:shadow-2xl transition-all duration-500 border-l-4 border-accent">
                <Stethoscope className="w-16 h-16 text-accent mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-primary">Qualified Excellence</h3>
                <p className="text-text-muted leading-relaxed">
                  Our doctors are registered with Sri Lanka Ayurvedic Medical Council and our therapists possess qualifications from reputed institutions with extensive hands-on experience.
                </p>
              </div>
            </div>

            {/* Facility */}
            <div className="relative group">
              <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-8 h-full border border-accent/20 group-hover:border-accent/40 transition-all duration-500">
                <Award className="w-16 h-16 text-accent mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-primary">Modern Sanctuary</h3>
                <p className="text-text-muted leading-relaxed">
                  Newly constructed facility with state-of-the-art infrastructure, traditional equipment, and comprehensive setup for authentic Ayurveda treatments and immersive training programs.
                </p>
              </div>
            </div>

            {/* Access */}
            <div className="relative group">
              <div className="bg-white rounded-2xl p-8 h-full shadow-lg group-hover:shadow-2xl transition-all duration-500 border-l-4 border-primary">
                <Clock className="w-16 h-16 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-primary">Easy Journey</h3>
                <p className="text-text-muted leading-relaxed">
                  Conveniently located just 90 minutes from Colombo and Bandaranaike International Airport. Only 10 minutes from Southern Expressway for effortless access to your healing retreat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Call to action */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-4xl font-bold mb-6 text-primary">Begin Your Transformation</h3>
            <p className="text-xl text-text-muted mb-8">Join thousands who have discovered the power of authentic Ayurveda</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary text-lg px-8 py-4">
                Start Your Journey
              </a>
              <a href="/treatments" className="btn-outline text-lg px-8 py-4">
                Explore Treatments
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}