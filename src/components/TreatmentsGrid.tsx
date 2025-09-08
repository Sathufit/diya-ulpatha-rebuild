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
  showOnly?: number;
  showViewMore?: boolean;
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

export function TreatmentsGrid({ 
  treatments = defaultTreatments, 
  showOnly,
  showViewMore = false 
}: TreatmentsGridProps) {
  const [selected, setSelected] = useState<Treatment | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  // Determine which treatments to show
  const treatmentsToShow = showOnly ? treatments.slice(0, showOnly) : treatments;

  return (
    <section aria-labelledby="treatments-heading" className="py-16 bg-background relative">
      <div className="container mx-auto px-4 relative z-10">
        {!showOnly && (
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-accent" />
              <span className="text-primary font-medium text-sm">AUTHENTIC AYURVEDA</span>
            </div>
            
            <h2 id="treatments-heading" className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Our <span className="text-accent">Treatments</span>
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
              Experience authentic Ayurvedic healing through our traditional treatments
            </p>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {treatmentsToShow.map((treatment, index) => (
            <div 
              key={treatment.key} 
              className={`card group hover:shadow-lg transition-all duration-300 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Treatment Image */}
              <div className="relative h-40 rounded-lg overflow-hidden mb-4">
                <Image
                  src={treatment.image}
                  alt={treatment.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                
                {treatment.duration && (
                  <div className="absolute top-3 right-3 bg-white/90 text-primary px-2 py-1 rounded-md text-xs font-medium">
                    {treatment.duration}
                  </div>
                )}
              </div>

              {/* Treatment Content */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-text-primary group-hover:text-accent transition-colors duration-300">
                  {treatment.title}
                </h3>
                
                <p className="text-text-secondary text-sm leading-relaxed">
                  {treatment.short}
                </p>

                <button
                  className="inline-flex items-center gap-2 text-primary hover:text-accent font-medium transition-colors duration-300 text-sm"
                  onClick={() => setSelected(treatment)}
                  aria-label={`Learn more about ${treatment.title}`}
                >
                  <span>Learn More</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-accent/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-text-primary mb-4">
            Begin Your <span className="text-accent">Healing Journey</span>
          </h3>
          <p className="text-text-muted mb-6 max-w-xl mx-auto">
            Each treatment is personalized to your unique needs. Consult with our experienced doctors.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/contact" className="btn-primary">
              Book Consultation
            </a>
            {showViewMore ? (
              <a href="/treatments" className="btn-secondary">
                View All Treatments
              </a>
            ) : (
              <a href="/treatments" className="btn-secondary">
                View All Treatments
              </a>
            )}
          </div>
        </div>
        
        {/* Treatment Detail Modal */}
        {selected && (
          <div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
            role="dialog"
            aria-modal="true"
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelected(null);
            }}
          >
            <div className="bg-white rounded-xl max-w-2xl w-full relative shadow-2xl max-h-[90vh] overflow-y-auto">
              <button
                className="absolute top-4 right-4 z-10 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center"
                onClick={() => setSelected(null)}
                aria-label="Close modal"
              >
                <X size={16} />
              </button>

              <div className="relative h-48 rounded-t-xl overflow-hidden">
                <Image
                  src={selected.image}
                  alt={selected.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-1">{selected.title}</h3>
                  {selected.duration && (
                    <div className="flex items-center gap-2 text-white/90">
                      <Clock size={14} />
                      <span className="text-sm">{selected.duration}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-bold text-text-primary mb-2">Treatment Overview</h4>
                  <p className="text-text-secondary text-sm leading-relaxed">{selected.full}</p>
                </div>

                {selected.benefits && (
                  <div>
                    <h4 className="font-bold text-text-primary mb-3">Key Benefits</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selected.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle size={14} className="text-accent" />
                          <span className="text-text-secondary text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
                  <a
                    href="/contact"
                    className="btn-primary flex-1 text-center text-sm"
                    onClick={() => setSelected(null)}
                  >
                    Book This Treatment
                  </a>
                  <button
                    onClick={() => setSelected(null)}
                    className="btn-secondary flex-1 text-sm"
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