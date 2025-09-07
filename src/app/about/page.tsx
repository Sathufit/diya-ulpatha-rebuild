"use client";
import { useState, useEffect } from "react";
import { Leaf, Heart, Users, Award, Star, Globe, Shield, TreePine, Clock, MapPin, Stethoscope } from "lucide-react";

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  const stats = [
    { number: "5000+", label: "Years of Ayurvedic Wisdom", icon: <Heart className="w-6 h-6" /> },
    { number: "Expert", label: "Qualified Doctors", icon: <Stethoscope className="w-6 h-6" /> },
    { number: "Modern", label: "State-of-Art Facility", icon: <Award className="w-6 h-6" /> },
    { number: "1.5hrs", label: "From Colombo Airport", icon: <MapPin className="w-6 h-6" /> }
  ];

  const whyChooseUs = [
    {
      icon: <Stethoscope className="w-12 h-12" />,
      title: "Well Qualified & Experienced",
      description: "Our Doctors are registered with Sri Lanka Ayurvedic Medical Council and therapists possess qualifications from reputed bodies with extensive experience."
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Modern Facility", 
      description: "We possess newly built facility with all infrastructure, equipment, and setup for Ayurveda treatments and training aids."
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Easy Access",
      description: "The location is just one hour and 30 minutes from Colombo or Bandaranaike International Airport. It's 10 minutes drive from Southern Expressway."
    }
  ];

  const features = [
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Soul Discovery",
      description: "Discover your soul and connect with your real self"
    },
    {
      icon: <TreePine className="w-10 h-10" />,
      title: "One with Nature", 
      description: "Be one with nature in our tranquil atmosphere"
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Expert Panel",
      description: "Well experienced therapists under qualified Ayurveda Doctor"
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Holistic Healing",
      description: "Perfect ambience for holistic healing and blissful experiences"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-32 h-32 bg-accent/5 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-primary/5 rounded-full animate-float animate-delay-300"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-accent/10 rounded-full animate-pulse-gentle"></div>
        </div>

        <div className="container mx-auto container-padding text-center relative z-10">
          <div className={`max-w-5xl mx-auto transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <Leaf className="w-5 h-5 text-accent" />
              <span className="text-primary font-medium">Our Story</span>
            </div>

            <h1 className="heading-xl text-text-primary mb-8">
              <span className="gradient-text">Diyaulpatha</span> Ayu Suwapura
            </h1>
            <p className="body-lg text-text-muted max-w-4xl mx-auto mb-12">
              Discover your soul, be one with nature, and connect with your real self. 
              Experience 5000-year-old time-tested science of life in our tranquil sanctuary.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary text-lg px-8 py-4">
                Start Your Journey
              </a>
              <a href="/treatments" className="btn-secondary text-lg px-8 py-4">
                Our Treatments
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding bg-surface">
        <div className="container mx-auto container-padding">
          <div className="content-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 animate-on-scroll">
                <h2 className="heading-lg text-text-primary">Our Mission</h2>
                <div className="space-y-6">
                  <p className="body-md text-text-secondary">
                    Diyaulpatha provides traditional Ayurvedic treatment with a panel of well-experienced 
                    therapists under the supervision of a well-qualified Ayurveda Doctor. Our whole team 
                    with state-of-the-art facility caters to the wellness needs of our guests.
                  </p>
                  <p className="body-md text-text-secondary">
                    The tranquil atmosphere and destination create the perfect ambience for holistic 
                    healing and blissful experiences. We have all the facilities to offer Ayurveda 
                    treatments for our guests and all the facilities for demonstrating and training 
                    with a modern touch.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-6 rounded-2xl border-l-4 border-accent">
                  <p className="text-text-primary font-semibold italic text-lg">
                    "Experience Ayurveda close to nature with our tailor-made wellness programs. 
                    It has been in the forefront to provide the best Ayurvedic treatment against 
                    a wide range of diseases."
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 animate-on-scroll animate-delay-200">
                {features.map((feature, index) => (
                  <div key={index} className="card-feature">
                    <div className="text-accent mb-4 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-text-primary mb-3">{feature.title}</h3>
                    <p className="text-text-muted text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto container-padding">
          <div className="content-center">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="heading-lg text-text-primary mb-6">The Creator of this Ayurveda Heaven</h2>
              <p className="body-md text-text-muted max-w-3xl mx-auto">
                The visionary behind our transformation from leisure resort to holistic sanctuary
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-3xl p-8 md:p-12 animate-on-scroll">
                <div className="space-y-6">
                  <p className="body-md text-text-secondary leading-relaxed">
                    Founded by a passionate nature lover and creative minded <strong className="text-accent">Mr. Niranjan</strong>, 
                    a tourism expert, dedicated social service advocate, and visionary entrepreneur, our Ayurveda 
                    resort is more than just a retreat—it's a sanctuary of wellness and holistic healing.
                  </p>
                  <p className="body-md text-text-secondary leading-relaxed">
                    Rooted in the principles of Ayurveda and sustainable living, this haven was created to offer 
                    guests a transformative experience, where nature's serenity meets the wisdom of ancient traditions. 
                    With a deep commitment to community empowerment and environmental harmony, every aspect of our 
                    resort reflects a heartfelt mission to nurture both people and the planet.
                  </p>
                  <p className="body-md text-text-secondary leading-relaxed">
                    With a deep-rooted belief in sustainable wellness, he has seamlessly blended ancient Ayurvedic 
                    traditions with modern comfort, creating a sanctuary where guests can reconnect with nature 
                    and rejuvenate their mind, body, and soul.
                  </p>
                  <div className="bg-white/50 rounded-2xl p-6 border-l-4 border-primary">
                    <p className="body-sm text-text-primary font-medium italic">
                      Once a renowned leisure resort popular as "Diya Ulpatha – Tea Garden Resort", this serene 
                      retreat has now been reimagined as a holistic Ayurveda sanctuary, thanks to the vision and 
                      creativity of this passionate entrepreneur making this space where ancient Ayurvedic wisdom 
                      meets modern-day rejuvenation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-surface">
        <div className="container mx-auto container-padding">
          <div className="content-center">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="heading-lg text-text-primary mb-6">
                Why <span className="text-accent">Diyaulpatha?</span>
              </h2>
              <p className="body-md text-text-muted max-w-3xl mx-auto">
                Three key reasons that make us your ideal choice for authentic Ayurvedic healing
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whyChooseUs.map((reason, index) => (
                <div key={index} className={`card-feature animate-on-scroll animate-delay-${(index + 1) * 200}`}>
                  <div className="text-accent mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                    {reason.icon}
                  </div>
                  <h3 className="heading-sm text-text-primary mb-4">{reason.title}</h3>
                  <p className="text-text-secondary body-sm leading-relaxed">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}