"use client";
import { useState, useEffect } from "react";
import { HeroCarousel, type HeroSlide } from "@/components/HeroCarousel";
import { QuickInquiryForm } from "@/components/QuickInquiryForm";
import { IMAGES } from "@/constants/images";
import {
  ArrowRight,
  Heart,
  Leaf,
  Users,
  Clock,
  Star,
  CheckCircle,
  TreePine,
  Mountain,
  Waves,
  Award,
  Shield,
  Eye,
  Calendar,
  Phone,
} from "lucide-react";
import Image from "next/image";

const heroSlides: HeroSlide[] = [
  {
    image: IMAGES.hero.slide1,
    alt: "Peaceful Ayurveda retreat surrounded by nature",
    heading: "Welcome to Diya Ulpatha",
    subheading:
      "Experience authentic Ayurvedic healing in the heart of Sri Lanka's natural beauty",
    cta: {
      label: "Begin Your Journey",
      href: "/treatments",
    },
  },
  {
    image: IMAGES.hero.slide2,
    alt: "Traditional Ayurvedic treatment session",
    heading: "Ancient Wisdom, Modern Comfort",
    subheading:
      "5000-year-old healing traditions combined with contemporary wellness facilities",
    cta: {
      label: "Explore Treatments",
      href: "/treatments",
    },
  },
  {
    image: IMAGES.hero.slide3,
    alt: "Serene accommodation with garden views",
    heading: "Your Wellness Sanctuary",
    subheading: "Peaceful accommodation designed to complement your healing journey",
    cta: {
      label: "View Accommodation",
      href: "/accommodation",
    },
  },
];

// Featured treatments for homepage
const featuredTreatments = [
  {
    key: "full-body-massage",
    image: IMAGES.treatments.fullBodyMassage,
    title: "Ayurveda Full Body Massage",
    description:
      "Complete body rejuvenation removing obesity, body aches, and discomfort",
    benefits: ["Removes body aches", "Helps with obesity", "Overall rejuvenation"],
  },
  {
    key: "panchakarma",
    image: IMAGES.treatments.panchakarma,
    title: "Panchakarma Therapy",
    description:
      "Five purifying techniques for complete body cleansing and detoxification",
    benefits: ["Complete detox", "System rejuvenation", "Balance restoration"],
  },
  {
      key: "steam-bath",
      image: IMAGES.treatments.steamBath,
      title: "Ayurvedic Steam Bath",
      description: "Detoxifying steam therapy that removes toxins through natural perspiration",
      benefits: ["Deep detoxification", "Liver cleansing", "Kidney support", "Metabolic waste removal"]
    },
];

const features = [
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Holistic Healing",
    description:
      "5000+ years of proven Ayurvedic wisdom addressing root causes for lasting wellness",
  },
  {
    icon: <TreePine className="w-8 h-8" />,
    title: "Natural Setting",
    description: "Peaceful sanctuary surrounded by medicinal gardens and pristine nature",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Expert Care",
    description: "Qualified doctors and experienced therapists guide your healing journey",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Authentic Treatments",
    description:
      "Traditional methods using pure herbal ingredients with no harmful side effects",
  },
];

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Carousel */}
      <HeroCarousel slides={heroSlides} />

      {/* About Preview */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-on-scroll">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Leaf className="w-5 h-5 text-accent" />
                <span className="text-primary font-medium">Our Story</span>
              </div>

              <h2 className="heading-lg text-text-primary">
                Welcome to{" "}
                <span className="gradient-text">Diya Ulpatha</span>
              </h2>

              <div className="space-y-6">
                <p className="body-md text-text-secondary">
                  Discover your soul, be one with nature, and connect with your
                  real self. Experience 5000-year-old time-tested science of life
                  in our tranquil sanctuary designed for holistic healing and
                  blissful experiences.
                </p>

                <p className="body-md text-text-secondary">
                  Founded by visionary Mr. Niranjan, our center combines ancient
                  Ayurvedic wisdom with modern facilities, creating the perfect
                  environment for your wellness journey.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/about" className="btn-primary px-6 py-3">
                  Learn Our Story
                </a>
                <a href="/training" className="btn-secondary px-6 py-3">
                  Ayurveda Training
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 animate-on-scroll animate-delay-300">
              <div className="space-y-6">
                <div className="card-feature">
                  <Mountain className="w-10 h-10 text-accent mb-4" />
                  <h3 className="text-lg font-bold text-text-primary mb-2">
                    Natural Setting
                  </h3>
                  <p className="text-text-muted text-sm">
                    Peaceful sanctuary in nature
                  </p>
                </div>
                <div className="card-feature">
                  <Award className="w-10 h-10 text-accent mb-4" />
                  <h3 className="text-lg font-bold text-text-primary mb-2">
                    Expert Care
                  </h3>
                  <p className="text-text-muted text-sm">
                    Qualified Ayurvedic doctors
                  </p>
                </div>
              </div>
              <div className="space-y-6 mt-8">
                <div className="card-feature">
                  <Waves className="w-10 h-10 text-accent mb-4" />
                  <h3 className="text-lg font-bold text-text-primary mb-2">
                    Holistic Approach
                  </h3>
                  <p className="text-text-muted text-sm">
                    Mind, body, and soul healing
                  </p>
                </div>
                <div className="card-feature">
                  <Shield className="w-10 h-10 text-accent mb-4" />
                  <h3 className="text-lg font-bold text-text-primary mb-2">
                    Authentic Methods
                  </h3>
                  <p className="text-text-muted text-sm">
                    Traditional healing practices
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-30"></div>

        <div className="container mx-auto container-padding relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <Star className="w-5 h-5 text-accent" />
              <span className="text-primary font-medium">Why Choose Ayurveda</span>
            </div>

            <h2 className="heading-lg text-text-primary mb-6">
              Discover{" "}
              <span className="gradient-text">Authentic Healing</span>
            </h2>
            <p className="body-lg text-text-muted mb-12 max-w-3xl mx-auto">
              Experience the transformative power of traditional healing in our
              peaceful sanctuary
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`card text-center group hover-glow animate-on-scroll transition-all duration-500 transform`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 text-accent">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-text-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Treatments */}
      <section className="section-padding bg-background">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="heading-lg text-text-primary mb-6">
              Featured{" "}
              <span className="gradient-text">Treatments</span>
            </h2>
            <p className="body-lg text-text-muted max-w-3xl mx-auto mb-8">
              Experience our most popular Ayurvedic therapies designed to restore
              balance and promote wellness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredTreatments.map((treatment, index) => (
              <div
                key={treatment.key}
                className={`card group hover-lift animate-on-scroll transition-all duration-500 transform`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative h-48 rounded-xl overflow-hidden mb-6">
                  <Image
                    src={treatment.image}
                    alt={treatment.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Clock size={12} />
                    {treatment.duration}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-text-primary group-hover:gradient-text transition-all duration-300">
                    {treatment.title}
                  </h3>

                  <p className="text-text-secondary leading-relaxed">
                    {treatment.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {treatment.benefits.slice(0, 2).map((benefit, idx) => (
                      <span
                        key={idx}
                        className="bg-accent/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center animate-on-scroll">
            <a
              href="/treatments"
              className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2 group"
            >
              <span>Explore All Treatments</span>
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Accommodation Preview */}
      <section className="section-padding bg-surface">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="heading-lg text-text-primary mb-6">
              Superior Rooms with{" "}
              <span className="gradient-text">Garden Views</span>
            </h2>
            <p className="body-lg text-text-muted max-w-3xl mx-auto">
              Experience comfort and tranquility in our unique accommodations
              featuring natural rock surfaces and stunning garden views
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Double Room",
                image: IMAGES.accommodation.doubleRoom,
                features: [
                  "Garden Views",
                  "Natural Rock Features",
                  "Private Bathroom",
                ],
              },
              {
                title: "Triple Room",
                image: IMAGES.accommodation.tripleRoom,
                features: [
                  "Spacious Layout",
                  "Nature Integration",
                  "Modern Amenities",
                ],
              },
              {
                title: "Family Room",
                image: IMAGES.accommodation.familyRoom,
                features: ["Separate Living Area", "Family Focused", "Premium Access"],
              },
            ].map((room, index) => (
              <div
                key={index}
                className={`card group hover-lift animate-on-scroll transition-all duration-500 transform`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative h-48 rounded-xl overflow-hidden mb-6">
                  <Image
                    src={room.image}
                    alt={room.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-text-primary">
                    {room.title}
                  </h3>
                  <div className="space-y-2">
                    {room.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-text-secondary"
                      >
                        <CheckCircle size={14} className="text-accent" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center animate-on-scroll">
            <a
              href="/accommodation"
              className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2 group"
            >
              <span>View All Rooms</span>
              <Eye size={20} className="group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-padding bg-background">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="heading-lg text-text-primary mb-6">
              Visual <span className="gradient-text">Journey</span>
            </h2>
            <p className="body-lg text-text-muted max-w-3xl mx-auto">
              Take a glimpse into our peaceful sanctuary and healing experiences
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              IMAGES.treatments.fullBodyMassage,
              IMAGES.accommodation.doubleRoom,
              IMAGES.treatments.panchakarma,
              IMAGES.accommodation.familyRoom,
            ].map((image, index) => (
              <div
                key={index}
                className={`relative aspect-square rounded-xl overflow-hidden group cursor-pointer animate-on-scroll`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Image
                  src={image}
                  alt="Gallery preview"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
              </div>
            ))}
          </div>

          <div className="text-center animate-on-scroll">
            <a
              href="/gallery"
              className="btn-secondary text-lg px-8 py-4 inline-flex items-center gap-2 group"
            >
              <span>View Full Gallery</span>
              <Eye size={20} className="group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-gradient-to-r from-primary via-primary-dark to-primary text-white">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-on-scroll">
              <h2 className="heading-lg mb-6">
                Ready to Begin Your{" "}
                <span className="text-accent">Wellness Journey?</span>
              </h2>
              <p className="body-lg text-primary-light leading-relaxed">
                Take the first step towards better health and wellness. Our
                experienced team is here to guide you through authentic Ayurvedic
                healing.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold">Call Us</p>
                    <a
                      href="tel:+94112223344"
                      className="text-primary-light hover:text-accent transition-colors"
                    >
                      +94 11 222 3344
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold">Available</p>
                    <p className="text-primary-light">8:00 AM - 8:00 PM Daily</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll animate-delay-300">
              <QuickInquiryForm className="bg-white/10 backdrop-blur-sm border border-white/20" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
