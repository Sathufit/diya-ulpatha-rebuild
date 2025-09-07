"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, X, Clock, Star, CheckCircle } from "lucide-react";
import { IMAGES } from "@/constants/images";

export interface Treatment {
  key: string;
  image: string;
  alt: string;
  title: string;
  short: string;
  full: string;
  duration?: string;
  benefits?: string[];
}

export interface TreatmentsGridProps {
  treatments?: Treatment[];
}

const defaultTreatments: Treatment[] = [
  {
    key: "full-body-massage",
    image: IMAGES.treatments.fullBodyMassage,
    alt: "Ayurveda Full Body Massage with warm herbal oils",
    title: "Ayurveda Full Body Massage",
    short: "Complete body rejuvenation removing obesity, body aches, and discomfort",
    full: "Full body massage is a more successful means of removing concerns such as obesity, body aches, and discomfort thus allowing for overall rejuvenation. Ayurvedic oils used in these massages evoke a feeling of well-being as the muscles are encouraged to relax in the operation.",
    duration: "60-90 minutes",
    benefits: ["Removes body aches", "Helps with obesity", "Overall rejuvenation", "Muscle relaxation"]
  },
  {
    key: "head-massage",
    image: IMAGES.treatments.headMassage,
    alt: "Ayurveda Head Massage with herbal oils",
    title: "Ayurveda Head Massage",
    short: "Rejuvenating oil application preventing hair loss and premature graying",
    full: "Ayurveda Head Massage: rejuvenating application of oil to the head, which is experienced through the roots of the hair and prevents hair loss and premature graying. This therapy also makes both mind and soul better by alleviating anxiety, exhaustion and calming muscles and nerve fiber.",
    duration: "45 minutes",
    benefits: ["Prevents hair loss", "Reduces premature graying", "Alleviates anxiety", "Calms nerve fibers"]
  },
  {
    key: "foot-massage",
    image: IMAGES.treatments.footMassage,
    alt: "Ayurvedic Foot Massage therapy",
    title: "Foot Massage",
    short: "Relaxes nervous system, balances energy, and improves circulation",
    full: "An Ayurvedic Foot Massage relaxes the nervous system, balances energy, relieves pain, and increases blood and lymph circulation. It activates our immune system, improves hearing capacity, promotes sleep, reduces stress and anxiety, balances doshas, helps in restless leg syndrome, alleviates diabetic neuropathy, cures headaches, activates metabolism, reduces edema and relieves hypertension.",
    duration: "30-45 minutes",
    benefits: ["Relaxes nervous system", "Improves circulation", "Reduces stress", "Promotes sleep"]
  },
  {
    key: "leg-massage",
    image: IMAGES.treatments.legMassage,
    alt: "Ayurveda Leg Massage therapy",
    title: "Ayurveda Leg Massage",
    short: "Promotes circulation and prevents varicose veins through targeted therapy",
    full: "Ayurveda Leg Massage: a form of massage that promotes good circulation and adds the requisite nutrients to the legs to avoid varicose veins. Massages on large muscles tend to alleviate weakness and soft strokes on lymph nodes help to minimize swelling.",
    duration: "45 minutes",
    benefits: ["Promotes circulation", "Prevents varicose veins", "Alleviates weakness", "Reduces swelling"]
  },
  {
    key: "herbal-bath",
    image: IMAGES.treatments.herbalBath,
    alt: "Ayurvedic Herbal Bath therapy",
    title: "Ayurvedic Herbal Bath",
    short: "Soothing therapy that cleanses, renews and rejuvenates with herbal rinses",
    full: "This soothing therapy will clean, renew and rejuvenate you; it will give you a feeling of absolute well-being. Besides, the usage of herbal rinses is part of the practice of bathing. A mixture of chosen herbs is applied to the hot water prescribed in Ayurveda. They are then diluted with the bathing water. Herbal rinses also offer a sense of freshness, enhance micro-circulation and preserve the natural quality of the skin.",
    duration: "30 minutes",
    benefits: ["Complete cleansing", "Skin rejuvenation", "Enhanced circulation", "Natural skin quality"]
  },
  {
    key: "steam-bath",
    image: IMAGES.treatments.steamBath,
    alt: "Ayurvedic Steam Bath therapy",
    title: "Ayurvedic Steam Bath",
    short: "Detoxifying steam therapy that removes toxins through natural perspiration",
    full: "When you are seated in a steam box, the heat produced by steam causes chemical processes within the body to remove the toxins from the body that have been collected in the body. You have millions of sweat glands in your skin that could be used as an opening to eliminate metabolic and other waste from the body. All this allows Steam Bath therapy an efficient ayurvedic therapy that enables the kidneys and liver to detoxify the body. The steam bath session lasts approximately 30 minutes, although the length varies based on the patient and is determined by the doctor.",
    duration: "30 minutes",
    benefits: ["Deep detoxification", "Liver cleansing", "Kidney support", "Metabolic waste removal"]
  },
  {
    key: "panchakarma",
    image: IMAGES.treatments.panchakarma,
    alt: "Ayurvedic Panchakarma therapy room",
    title: "Ayurvedic Panchakarma",
    short: "Five purifying techniques for complete body cleansing and detoxification",
    full: "Panchakarma is the term in Ayurveda used in five purifying techniques for cleansing and detoxifying the body. These methods are of considerable significance in the Ayurveda method of medicine and are applied to nearly all illnesses. Key treatment containing the five cleaning procedures: Vasti – herbal/oil decoction enemas, Vamana – emesis therapy, Virechana – purgation therapy, Rakta Moksha – bloodletting, Nasya – inhalation.",
    duration: "7-21 days",
    benefits: ["Complete detoxification", "Disease prevention", "Body purification", "Dosha balancing"]
  },
  {
    key: "hair-care",
    image: IMAGES.treatments.hairCare,
    alt: "Ayurvedic Hair Care treatment",
    title: "Hair Care",
    short: "Herbal treatments for hair fall, premature graying, and hair thinning",
    full: "Owing to unhealthy diet, modern lifestyle, stress, and hormonal imbalance, many of us get distressed with consequent factors of hair fall, premature graying, or hair thinning. The ancient practices of Ayurveda suggest herbal medication and therapies identify the underlying root cause and provide thick, lustrous hair.",
    duration: "45-60 minutes",
    benefits: ["Prevents hair fall", "Reduces graying", "Increases hair thickness", "Addresses root causes"]
  },
  {
    key: "skin-care",
    image: IMAGES.treatments.skinCare,
    alt: "Ayurvedic Skin Care treatment",
    title: "Skin Care",
    short: "Holistic approach to skin health addressing deeper imbalances",
    full: "Skincare is a daily routine to support skin integrity, enhancing its luster and glow. Skin disorders may vary greatly in severity as it gets affected due to pollution, chemical products, poor dietary choices, and lifestyle habits. Any imperfection on the surface of the skin is the result of a deeper imbalance hidden within the body. Hence, it is ineffective to treat the signs of imperfection alone. Ayurveda, the world's oldest form of holistic medicine delves deeper and identifies the root cause of skin issues.",
    duration: "60 minutes",
    benefits: ["Enhances skin glow", "Treats root causes", "Natural healing", "Long-lasting results"]
  },
  {
    key: "herbal-face-pack",
    image: IMAGES.treatments.herbalFacePack,
    alt: "Herbal Face Pack treatment",
    title: "Herbal Face Pack",
    short: "Oil-based face massage with herbal pack for skin rejuvenation",
    full: "Herbal Face Pack is an Ayurvedic beauty treatment that includes an oil based face massage, followed by a face pack application. The herbal face pack is formulated with various Ayurvedic ingredients for skin rejuvenation. Regular application of herbal face packs may also prevent pigmentation and reduce wrinkles. As a result, your skin looks naturally young and radiant. One of the best beauty treatments for the face, It calms your stressed muscles while you lie down with your eyes closed. The whole procedure takes around 45 minutes, including preparatory massage, face pack application, cleansing and moisturizing.",
    duration: "45 minutes",
    benefits: ["Prevents pigmentation", "Reduces wrinkles", "Natural radiance", "Muscle relaxation"]
  }
];

export function TreatmentsGrid({ treatments = defaultTreatments }: TreatmentsGridProps) {
  const [selected, setSelected] = useState<Treatment | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section aria-labelledby="treatments-heading" className="section-padding bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-40 h-40 bg-accent/5 rounded-full animate-float"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-primary/5 rounded-full animate-float animate-delay-300"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-accent/10 rounded-full animate-pulse-gentle"></div>
      </div>

      <div className="container mx-auto container-padding relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <Star className="w-5 h-5 text-accent" />
            <span className="text-primary font-medium">Authentic Ayurveda</span>
          </div>
          
          <h2 id="treatments-heading" className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Our <span className="gradient-text">Treatments</span>
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
            Experience authentic Ayurvedic healing through our traditional treatments, 
            each designed to restore balance and promote holistic wellness.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {treatments.map((treatment, index) => (
            <div 
              key={treatment.key} 
              className={`card group hover-lift transition-all duration-500 transform ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ 
                transitionDelay: `${index * 150}ms`,
                animationDelay: `${index * 150}ms`
              }}
            >
              {/* Treatment Image */}
              <div className="relative h-48 rounded-xl overflow-hidden mb-6">
                <Image
                  src={treatment.image}
                  alt={treatment.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Duration badge */}
                {treatment.duration && (
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Clock size={12} />
                    {treatment.duration}
                  </div>
                )}
              </div>

              {/* Treatment Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-text-primary group-hover:gradient-text transition-all duration-300">
                  {treatment.title}
                </h3>
                
                <p className="text-text-secondary leading-relaxed group-hover:text-text-primary transition-colors duration-300">
                  {treatment.short}
                </p>

                {/* Benefits preview */}
                {treatment.benefits && (
                  <div className="flex flex-wrap gap-2">
                    {treatment.benefits.slice(0, 2).map((benefit, idx) => (
                      <span 
                        key={idx} 
                        className="bg-accent/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {benefit}
                      </span>
                    ))}
                    {treatment.benefits.length > 2 && (
                      <span className="text-text-muted text-sm self-center">
                        +{treatment.benefits.length - 2} more
                      </span>
                    )}
                  </div>
                )}

                {/* Action button */}
                <button
                  className="inline-flex items-center gap-2 text-primary hover:text-accent font-semibold transition-all duration-300 transform hover:scale-105 group-hover:translate-x-1"
                  onClick={() => setSelected(treatment)}
                  aria-label={`Learn more about ${treatment.title}`}
                >
                  <span>Learn More</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-text-primary mb-4">
            Begin Your <span className="text-accent">Healing Journey</span>
          </h3>
          <p className="text-lg text-text-muted mb-8 max-w-2xl mx-auto">
            Each treatment is personalized to your unique constitution and health needs. 
            Consult with our experienced Ayurvedic doctors to create your perfect wellness plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary text-lg px-8 py-4">
              Book Consultation
            </a>
            <a href="/treatments" className="btn-secondary text-lg px-8 py-4">
              View All Treatments
            </a>
          </div>
        </div>
        
        {/* Treatment Detail Modal */}
        {selected && (
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 animate-fade-in-up"
            role="dialog"
            aria-modal="true"
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelected(null);
            }}
          >
            <div className="bg-surface rounded-2xl max-w-2xl w-full relative animate-scale-in shadow-2xl max-h-[90vh] overflow-y-auto">
              {/* Close button */}
              <button
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/10 hover:bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center text-text-muted hover:text-primary transition-all duration-300 hover:rotate-90 hover:scale-110"
                onClick={() => setSelected(null)}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              {/* Treatment image */}
              <div className="relative h-64 rounded-t-2xl overflow-hidden">
                <Image
                  src={selected.image}
                  alt={selected.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Title overlay */}
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-3xl font-bold mb-2">{selected.title}</h3>
                  {selected.duration && (
                    <div className="flex items-center gap-2 text-white/90">
                      <Clock size={16} />
                      <span>{selected.duration}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-text-primary mb-3">Treatment Overview</h4>
                  <p className="text-text-secondary leading-relaxed">{selected.full}</p>
                </div>

                {/* Benefits */}
                {selected.benefits && (
                  <div>
                    <h4 className="text-xl font-bold text-text-primary mb-4">Key Benefits</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selected.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle size={16} className="text-accent" />
                          <span className="text-text-secondary">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-border">
                  <a
                    href="/contact"
                    className="btn-primary flex-1 text-center"
                    onClick={() => setSelected(null)}
                  >
                    Book This Treatment
                  </a>
                  <button
                    onClick={() => setSelected(null)}
                    className="btn-secondary flex-1"
                  >
                    Continue Browsing
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}