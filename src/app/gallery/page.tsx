"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Camera, Eye, Grid, List, Search, Download, Share2, Heart, ZoomIn } from "lucide-react";
import { IMAGES } from "@/constants/images";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  caption?: string;
  featured?: boolean;
}

const categories = [
  { id: "all", label: "All Photos", count: 14, color: "bg-gradient-to-r from-primary to-primary-dark" },
  { id: "treatments", label: "Treatments", count: 6, color: "bg-gradient-to-r from-green-500 to-emerald-600" },
  { id: "accommodation", label: "Accommodation", count: 3, color: "bg-gradient-to-r from-blue-500 to-indigo-600" },
  { id: "facilities", label: "Facilities", count: 3, color: "bg-gradient-to-r from-purple-500 to-violet-600" },
  { id: "nature", label: "Nature", count: 2, color: "bg-gradient-to-r from-accent to-yellow-500" }
];

const galleryImages: GalleryImage[] = [
  // Featured Images
  {
    id: "1",
    src: IMAGES.treatments.fullBodyMassage,
    alt: "Ayurveda Full Body Massage therapy",
    category: "treatments",
    caption: "Traditional full body massage for complete rejuvenation",
    featured: true
  },
  {
    id: "7",
    src: IMAGES.accommodation.doubleRoom,
    alt: "Superior Double Room with garden view",
    category: "accommodation",
    caption: "Double room with natural rock features and garden views",
    featured: true
  },
  
  // Regular Images
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
  const [viewMode, setViewMode] = useState<"grid" | "masonry">("masonry");
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const filteredImages = galleryImages.filter(img => {
    const matchesCategory = selectedCategory === "all" || img.category === selectedCategory;
    const matchesSearch = img.alt.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         img.caption?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredImages = filteredImages.filter(img => img.featured);
  const regularImages = filteredImages.filter(img => !img.featured);

  const currentIndex = selectedImage 
    ? filteredImages.findIndex(img => img.id === selectedImage.id)
    : -1;

  const goToPrevious = useCallback(() => {
    if (currentIndex > 0) {
      setSelectedImage(filteredImages[currentIndex - 1]);
    }
  }, [currentIndex, filteredImages]);

  const goToNext = useCallback(() => {
    if (currentIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[currentIndex + 1]);
    }
  }, [currentIndex, filteredImages]);

  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    if (selectedImage) {
      if (e.key === "Escape") setSelectedImage(null);
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    }
  }, [selectedImage, goToPrevious, goToNext]);

  const toggleFavorite = (imageId: string) => {
    setFavorites(prev => 
      prev.includes(imageId) 
        ? prev.filter(id => id !== imageId)
        : [...prev, imageId]
    );
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [handleKeyPress]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-surface to-white">
      {/* Modern Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float animate-delay-300"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-accent/5 to-primary/5 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className={`max-w-5xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-md rounded-full px-8 py-4 mb-8 shadow-lg border border-white/40">
              <Camera className="w-6 h-6 text-accent" />
              <span className="text-primary font-bold">VISUAL JOURNEY</span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[0.9]">
              Wellness
              <span className="block bg-gradient-to-r from-accent via-yellow-400 to-accent bg-clip-text text-transparent">
                Gallery
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-text-muted max-w-4xl mx-auto leading-relaxed mb-12">
              Immerse yourself in our visual story of healing, transformation, and natural beauty. 
              Every image captures a moment of wellness, peace, and authentic Ayurvedic experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-6 py-3">
                <Eye className="w-5 h-5 text-accent" />
                <span className="text-primary font-medium">{filteredImages.length} Beautiful Moments</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-3">
                <Heart className="w-5 h-5 text-primary" />
                <span className="text-primary font-medium">{favorites.length} Favorites</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Filter & Search Bar */}
      <section className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search images..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
              />
            </div>

            {/* Category Filters */}
            <div className="flex items-center gap-3 overflow-x-auto">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`group relative px-6 py-3 rounded-2xl font-semibold text-sm whitespace-nowrap transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category.id
                      ? `${category.color} text-white shadow-lg`
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <span className="relative z-10">{category.label}</span>
                  <span className={`ml-2 px-2 py-1 rounded-full text-xs font-bold ${
                    selectedCategory === category.id 
                      ? 'bg-white/20 text-white' 
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 bg-gray-100 rounded-2xl p-1">
              <button
                onClick={() => setViewMode("masonry")}
                className={`p-3 rounded-xl transition-all duration-300 ${
                  viewMode === "masonry" 
                    ? 'bg-primary text-white shadow-md' 
                    : 'text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`p-3 rounded-xl transition-all duration-300 ${
                  viewMode === "grid" 
                    ? 'bg-primary text-white shadow-md' 
                    : 'text-gray-600 hover:bg-gray-200'
                }`}
              >
                <List size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Images Section */}
      {featuredImages.length > 0 && selectedCategory === "all" && (
        <section className="py-16 bg-gradient-to-r from-accent/5 via-transparent to-primary/5">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">
              <span className="text-accent">Featured</span> Moments
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {featuredImages.map((image, index) => (
                <div
                  key={image.id}
                  className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-4 cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    
                    {/* Featured Badge */}
                    <div className="absolute top-6 left-6 bg-accent text-primary px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      ⭐ Featured
                    </div>

                    {/* Hover Actions */}
                    <div className="absolute top-6 right-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(image.id);
                        }}
                        className={`w-10 h-10 rounded-full backdrop-blur-md border border-white/30 flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                          favorites.includes(image.id) 
                            ? 'bg-red-500 text-white' 
                            : 'bg-white/20 text-white hover:bg-white/30'
                        }`}
                      >
                        <Heart size={16} />
                      </button>
                      <button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110">
                        <ZoomIn size={16} />
                      </button>
                    </div>

                    {/* Caption */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="font-bold text-lg mb-2">{image.caption}</h3>
                      <p className="text-sm text-white/80">{image.alt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {viewMode === "masonry" ? (
            /* Masonry Layout */
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
              {regularImages.map((image, index) => (
                <div
                  key={image.id}
                  className="group relative break-inside-avoid mb-6 overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer bg-white"
                  onClick={() => setSelectedImage(image)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={400}
                      height={300}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className={`${categories.find(cat => cat.id === image.category)?.color} text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg`}>
                        {categories.find(cat => cat.id === image.category)?.label}
                      </span>
                    </div>

                    {/* Actions */}
                    <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(image.id);
                        }}
                        className={`w-8 h-8 rounded-full backdrop-blur-md border border-white/30 flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                          favorites.includes(image.id) 
                            ? 'bg-red-500 text-white' 
                            : 'bg-white/20 text-white hover:bg-white/30'
                        }`}
                      >
                        <Heart size={12} />
                      </button>
                    </div>

                    {/* Caption */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-sm font-medium">{image.caption}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Grid Layout */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {regularImages.map((image, index) => (
                <div
                  key={image.id}
                  className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer bg-white"
                  onClick={() => setSelectedImage(image)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  
                  {/* Overlay & Content - Same as masonry */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className={`${categories.find(cat => cat.id === image.category)?.color} text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg`}>
                      {categories.find(cat => cat.id === image.category)?.label}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(image.id);
                      }}
                      className={`w-8 h-8 rounded-full backdrop-blur-md border border-white/30 flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                        favorites.includes(image.id) 
                          ? 'bg-red-500 text-white' 
                          : 'bg-white/20 text-white hover:bg-white/30'
                      }`}
                    >
                      <Heart size={12} />
                    </button>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-sm font-medium">{image.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-7xl w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 z-50 w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20"
              onClick={() => setSelectedImage(null)}
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>

            {/* Navigation Buttons */}
            {currentIndex > 0 && (
              <button
                className="absolute left-6 top-1/2 transform -translate-y-1/2 z-50 w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20"
                onClick={goToPrevious}
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
            )}

            {currentIndex < filteredImages.length - 1 && (
              <button
                className="absolute right-6 top-1/2 transform -translate-y-1/2 z-50 w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20"
                onClick={goToNext}
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            )}

            {/* Image Container */}
            <div className="relative max-h-[85vh] max-w-full">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                className="max-h-[85vh] max-w-full object-contain rounded-xl shadow-2xl"
              />
              
              {/* Image Info Panel */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-8 rounded-b-xl">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-white font-bold text-2xl mb-2">
                      {selectedImage.caption || selectedImage.alt}
                    </h3>
                    <div className="flex items-center gap-4 text-white/80">
                      <span>{currentIndex + 1} of {filteredImages.length}</span>
                      <span className="w-1 h-1 bg-white/50 rounded-full"></span>
                      <span className={`${categories.find(cat => cat.id === selectedImage.category)?.color} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                        {categories.find(cat => cat.id === selectedImage.category)?.label}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <button
                      onClick={() => toggleFavorite(selectedImage.id)}
                      className={`w-12 h-12 rounded-full backdrop-blur-md border border-white/30 flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                        favorites.includes(selectedImage.id) 
                          ? 'bg-red-500 text-white' 
                          : 'bg-white/20 text-white hover:bg-white/30'
                      }`}
                    >
                      <Heart size={20} />
                    </button>
                    <button className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110">
                      <Share2 size={20} />
                    </button>
                    <button className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110">
                      <Download size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}