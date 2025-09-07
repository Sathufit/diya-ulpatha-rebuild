"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Filter, Camera, Eye } from "lucide-react";
import { IMAGES } from "@/constants/images";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  caption?: string;
}

const categories = [
  { id: "all", label: "All Photos", count: 14 },
  { id: "treatments", label: "Treatments", count: 6 },
  { id: "accommodation", label: "Accommodation", count: 3 },
  { id: "facilities", label: "Facilities", count: 3 },
  { id: "nature", label: "Nature", count: 2 }
];

const galleryImages: GalleryImage[] = [
  // Treatment Images - Using your local images
  {
    id: "1",
    src: IMAGES.treatments.fullBodyMassage,
    alt: "Ayurveda Full Body Massage therapy",
    category: "treatments",
    caption: "Traditional full body massage for complete rejuvenation"
  },
  {
    id: "2", 
    src: IMAGES.treatments.headMassage,
    alt: "Ayurvedic Head Massage with herbal oils",
    category: "treatments",
    caption: "Rejuvenating head massage to prevent hair loss and reduce stress"
  },
  {
    id: "3",
    src: IMAGES.treatments.footMassage,
    alt: "Therapeutic Foot Massage session",
    category: "treatments",
    caption: "Foot massage to relax nervous system and improve circulation"
  },
  {
    id: "4",
    src: IMAGES.treatments.panchakarma,
    alt: "Panchakarma detoxification therapy",
    category: "treatments",
    caption: "Five purifying techniques for complete body cleansing"
  },
  {
    id: "5",
    src: IMAGES.treatments.herbalBath,
    alt: "Ayurvedic Herbal Bath preparation",
    category: "treatments",
    caption: "Soothing herbal bath therapy for skin rejuvenation"
  },
  {
    id: "6",
    src: IMAGES.treatments.steamBath,
    alt: "Steam Bath detoxification session",
    category: "treatments",
    caption: "Detoxifying steam therapy to remove toxins naturally"
  },
  
  // Accommodation Images - Using your local images
  {
    id: "7",
    src: IMAGES.accommodation.doubleRoom,
    alt: "Superior Double Room with garden view",
    category: "accommodation",
    caption: "Double room with natural rock features and garden views"
  },
  {
    id: "8",
    src: IMAGES.accommodation.tripleRoom,
    alt: "Superior Triple Room with nature integration",
    category: "accommodation", 
    caption: "Spacious triple room perfect for small groups"
  },
  {
    id: "9",
    src: IMAGES.accommodation.familyRoom,
    alt: "Superior Family Room with separate living space",
    category: "accommodation",
    caption: "Family room designed for wellness retreats together"
  },
  
  // Facilities Images - Professional Unsplash images
  {
    id: "10",
    src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop&q=80",
    alt: "Outdoor yoga pavilion for daily sessions",
    category: "facilities",
    caption: "Daily yoga sessions in our serene outdoor pavilion"
  },
  {
    id: "11",
    src: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop&q=80",
    alt: "Ayurvedic dining with healthy cuisine",
    category: "facilities",
    caption: "Nutritious Ayurvedic meals prepared according to ancient principles"
  },
  {
    id: "12",
    src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop&q=80",
    alt: "Meditation space with mountain views",
    category: "facilities",
    caption: "Peaceful meditation area overlooking natural beauty"
  },
  
  // Nature Images - Professional Unsplash images
  {
    id: "13",
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&q=80",
    alt: "Healing garden pathways",
    category: "nature",
    caption: "Tranquil walking paths through our medicinal gardens"
  },
  {
    id: "14",
    src: "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=800&h=600&fit=crop&q=80",
    alt: "Organic medicinal herb garden",
    category: "nature",
    caption: "Our organic garden where we grow healing herbs"
  }
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const filteredImages = selectedCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const currentIndex = selectedImage 
    ? filteredImages.findIndex(img => img.id === selectedImage.id)
    : -1;

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setSelectedImage(filteredImages[currentIndex - 1]);
    }
  };

  const goToNext = () => {
    if (currentIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[currentIndex + 1]);
    }
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (selectedImage) {
      if (e.key === "Escape") setSelectedImage(null);
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [selectedImage, currentIndex]);

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
              <Camera className="w-5 h-5 text-accent" />
              <span className="text-primary font-medium">Visual Journey</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-8">
              Our <span className="gradient-text">Gallery</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-muted max-w-4xl mx-auto leading-relaxed mb-12">
              Take a visual journey through our peaceful retreat, authentic treatments, 
              comfortable accommodations, and beautiful natural surroundings.
            </p>
            
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Eye className="w-5 h-5 text-accent" />
              <span className="text-primary font-medium">{filteredImages.length} Beautiful Moments Captured</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 bg-surface border-b border-border sticky top-0 z-40">
        <div className="container mx-auto container-padding">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-accent" />
              <span className="font-medium text-text-primary">Filter by:</span>
            </div>
            
            {/* Desktop Filters */}
            <div className="hidden md:flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category.id
                      ? 'bg-accent text-primary shadow-lg'
                      : 'bg-muted text-text-secondary hover:bg-primary hover:text-white'
                  }`}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </div>

            {/* Mobile Filter Toggle */}
            <button
              className="md:hidden btn-secondary px-4 py-2"
              onClick={() => setShowFilters(!showFilters)}
            >
              Categories
            </button>
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="md:hidden mt-4 grid grid-cols-2 gap-3 animate-fade-in-up">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setShowFilters(false);
                  }}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-accent text-primary'
                      : 'bg-muted text-text-secondary hover:bg-primary hover:text-white'
                  }`}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className={`group cursor-pointer transition-all duration-500 transform hover-lift ${
                  isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  animationDelay: `${index * 100}ms`
                }}
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-sm font-medium">{image.caption || image.alt}</p>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 bg-accent/90 text-primary px-2 py-1 rounded-lg text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {categories.find(cat => cat.id === image.category)?.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 animate-fade-in-up">
          <div className="relative max-w-5xl w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 z-50 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
              onClick={() => setSelectedImage(null)}
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>

            {/* Navigation Buttons */}
            {currentIndex > 0 && (
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-50 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                onClick={goToPrevious}
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
            )}

            {currentIndex < filteredImages.length - 1 && (
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-50 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                onClick={goToNext}
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            )}

            {/* Image */}
            <div className="relative max-h-[80vh] max-w-full animate-scale-in">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-h-[80vh] max-w-full object-contain rounded-xl shadow-2xl"
              />
              
              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-xl">
                <h3 className="text-white font-semibold text-lg mb-2">
                  {selectedImage.caption || selectedImage.alt}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-white/80">
                    {currentIndex + 1} of {filteredImages.length}
                  </span>
                  <span className="bg-accent/90 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {categories.find(cat => cat.id === selectedImage.category)?.label}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary via-primary-dark to-primary text-white">
        <div className="container mx-auto container-padding text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Experience These Moments Yourself
            </h2>
            <p className="text-xl text-primary-light mb-10 leading-relaxed">
              Ready to create your own healing memories? Book your wellness journey 
              and become part of our peaceful sanctuary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-secondary text-lg px-8 py-4">
                Book Your Stay
              </a>
              <a href="/treatments" className="btn-outline text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-primary">
                Explore Treatments
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}