"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Leaf, Heart, Award, Users, Clock, Stethoscope, Globe, Star } from "lucide-react";
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
    { year: "Ancient", title: "Ayurveda Origins", description: "5000-year-old healing science from ancient India" },
    { year: "2015", title: "Vision Born", description: "Founder's dream of authentic healing center" },
    { year: "2018", title: "Center Opens", description: "Diya Ulpatha begins with traditional treatments" },
    { year: "2021", title: "Training Program", description: "Professional certification courses added" },
    { year: "Today", title: "Growing Community", description: "Serving patients and students from many countries" }
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
                sizes="50vw"
              />
            </div>
          </div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className={`max-w-4xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-white mb-8">
              <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-6">
                <Leaf className="w-4 h-4" />
                <span className="text-sm font-medium">OUR STORY</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Traditional
                <br/>
                <span className="text-accent">Ayurveda Center</span>
              </h1>
              <p className="text-xl text-primary-light max-w-2xl">
                A simple vision to bring authentic Ayurvedic healing to those seeking natural health solutions in a peaceful environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-on-scroll">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-primary">
              Our <span className="text-accent">Purpose</span>
            </h2>
            <p className="text-2xl text-text-muted leading-relaxed mb-12">
              &ldquo;To provide authentic Ayurvedic treatments and education in a peaceful natural setting, making traditional healing accessible to all who seek it.&rdquo;
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <Heart className="w-12 h-12 text-accent mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary">Traditional</div>
                <div className="text-text-muted">Methods</div>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-text-muted">Patients Helped</div>
              </div>
              <div className="text-center">
                <Award className="w-12 h-12 text-accent mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-text-muted">Treatments</div>
              </div>
              <div className="text-center">
                <Globe className="w-12 h-12 text-accent mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-text-muted">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold mb-4">Our <span className="text-accent">Journey</span></h2>
            <p className="text-xl text-text-muted">How we grew from an idea to a healing center</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-accent/20"></div>
              
              {timeline.map((item, index) => (
                <div 
                  key={index}
                  className={`relative flex items-center mb-8 cursor-pointer animate-on-scroll ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                  onClick={() => setActiveTimeline(index)}
                >
                  <div className={`w-1/2 p-6 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className={`bg-white rounded-2xl p-6 shadow-lg border transition-all duration-300 hover:shadow-xl ${
                      activeTimeline === index ? 'border-accent bg-accent/5' : 'border-gray-200'
                    }`}>
                      <div className="text-accent font-bold text-lg mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                      <p className="text-text-muted">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-white shadow-md"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-32 bg-primary text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll">
            <Star className="w-16 h-16 text-accent mx-auto mb-8" />
            <h2 className="text-4xl font-bold mb-8">About Our Founder</h2>
            <blockquote className="text-2xl font-medium leading-relaxed mb-8 italic">
              &ldquo;I wanted to create a place where people could experience authentic Ayurveda in a simple, honest way. Not luxury, but genuine healing in a peaceful environment.&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <div className="text-left">
                <div className="font-bold text-xl">Mr. Niranjan</div>
                <div className="text-primary-light">Founder & Director</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold mb-4">Why Choose <span className="text-accent">Diya Ulpatha?</span></h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">Three reasons why patients trust us with their health</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="relative group animate-on-scroll">
              <div className="bg-white rounded-2xl p-8 h-full shadow-lg group-hover:shadow-2xl transition-all duration-500 border-l-4 border-accent">
                <Stethoscope className="w-16 h-16 text-accent mb-6" />
                <h3 className="text-2xl font-bold mb-4">Qualified Doctors</h3>
                <p className="text-text-muted leading-relaxed">
                  Our doctors are registered with Sri Lanka Ayurvedic Medical Council and have years of experience in traditional healing.
                </p>
              </div>
            </div>

            <div className="relative group animate-on-scroll animate-delay-200">
              <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-8 h-full border border-accent/20 group-hover:border-accent/40 transition-all duration-500">
                <Award className="w-16 h-16 text-accent mb-6" />
                <h3 className="text-2xl font-bold mb-4">Authentic Methods</h3>
                <p className="text-text-muted leading-relaxed">
                  We use traditional Ayurvedic methods passed down through generations, with natural herbs and time-tested techniques.
                </p>
              </div>
            </div>

            <div className="relative group animate-on-scroll animate-delay-400">
              <div className="bg-white rounded-2xl p-8 h-full shadow-lg group-hover:shadow-2xl transition-all duration-500 border-l-4 border-primary">
                <Clock className="w-16 h-16 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">Convenient Location</h3>
                <p className="text-text-muted leading-relaxed">
                  Located in Kandy with easy access from the city center, surrounded by natural beauty that supports healing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}