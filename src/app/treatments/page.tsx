"use client";
import { useState, useEffect } from "react";
import { TreatmentsGrid } from "@/components/TreatmentsGrid";
import { Heart, Shield, Leaf, Users, Star, Grid, List, Stethoscope, Award, Clock } from "lucide-react";
import { IMAGES } from "@/constants/images";

export default function TreatmentsPage() {
    const [viewMode, setViewMode] = useState("grid");
    const [activeFilter, setActiveFilter] = useState("all");

    useEffect(() => {
        const timer = setTimeout(() => {}, 100);
        return () => clearTimeout(timer);
    }, []);

    const categories = [
        { id: "all", label: "All Treatments", count: 10 },
        { id: "massage", label: "Massage Therapy", count: 4 },
        { id: "detox", label: "Detoxification", count: 3 },
        { id: "beauty", label: "Beauty Care", count: 3 },
    ];

    const principles = [
        {
            icon: <Heart className="w-8 h-8" />,
            title: "Holistic Healing",
            description: "Unlike conventional medicine that treats symptoms, Ayurveda addresses the root cause of health issues by treating the whole person - body, mind, and spirit.",
            color: "bg-red-50 border-red-200 text-red-700"
        },
        {
            icon: <Leaf className="w-8 h-8" />,
            title: "Natural Medicine",
            description: "All treatments use 100% natural herbs, oils, and therapies with no chemicals or synthetic substances, ensuring complete safety with no side effects.",
            color: "bg-green-50 border-green-200 text-green-700"
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Individual Constitution",
            description: "Every person has a unique constitution (Prakriti). Treatments are personalized based on your specific body type, lifestyle, and current health imbalances.",
            color: "bg-blue-50 border-blue-200 text-blue-700"
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Prevention & Wellness",
            description: "Beyond healing illness, Ayurveda focuses on maintaining optimal health and preventing disease through lifestyle guidance and preventive therapies.",
            color: "bg-purple-50 border-purple-200 text-purple-700"
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/90 z-10"></div>
                <div
                    className="h-[70vh] bg-cover bg-center"
                    style={{
                        backgroundImage: `url('${IMAGES.hero.treatments}')`,
                    }}
                ></div>

                <div className="absolute inset-0 z-20 flex items-center">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl">
                            <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-6">
                                <Star className="w-4 h-4 text-accent" />
                                <span className="text-sm font-medium text-white">AUTHENTIC HEALING</span>
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                                Ayurvedic
                                <br />
                                <span className="text-accent">Treatments</span>
                            </h1>
                            <p className="text-xl text-white/90 max-w-2xl mb-8">
                                Experience the healing power of ancient Ayurveda through our
                                comprehensive range of authentic treatments designed to restore
                                balance and promote natural wellness.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ayurveda Principles - New Section */}
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">
                            The Science of{" "}
                            <span className="text-accent">Ayurvedic Healing</span>
                        </h2>
                        <p className="text-xl text-text-muted max-w-3xl mx-auto">
                            Understanding the fundamental principles that make Ayurveda the world&apos;s oldest and most comprehensive healing system
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {principles.map((principle, index) => (
                            <div
                                key={index}
                                className={`rounded-2xl p-8 border-2 transition-all duration-500 transform hover:scale-105 ${principle.color}`}
                                style={{ transitionDelay: `${index * 150}ms` }}
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    {principle.icon}
                                    <h3 className="text-2xl font-bold">{principle.title}</h3>
                                </div>
                                <p className="text-lg leading-relaxed">
                                    {principle.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Filter Bar - Sticky navigation */}
            <section className="sticky top-0 z-40 bg-white border-b shadow-sm">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-4 overflow-x-auto">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveFilter(category.id)}
                                    className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                                        activeFilter === category.id
                                            ? "bg-primary text-white"
                                            : "bg-muted text-text-muted hover:bg-primary/10"
                                    }`}
                                >
                                    {category.label} ({category.count})
                                </button>
                            ))}
                        </div>

                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setViewMode("grid")}
                                className={`p-2 rounded-lg ${
                                    viewMode === "grid"
                                        ? "bg-primary text-white"
                                        : "bg-muted text-text-muted"
                                }`}
                            >
                                <Grid size={20} />
                            </button>
                            <button
                                onClick={() => setViewMode("list")}
                                className={`p-2 rounded-lg ${
                                    viewMode === "list"
                                        ? "bg-primary text-white"
                                        : "bg-muted text-text-muted"
                                }`}
                            >
                                <List size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Treatments Grid - Main content */}
            <section id="treatments">
                <TreatmentsGrid />
            </section>

            {/* Treatment Process - Moved after treatments */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">
                            Your{" "}
                            <span className="text-accent">Healing Journey</span>
                        </h2>
                        <p className="text-xl text-text-muted max-w-3xl mx-auto">
                            Our systematic approach ensures personalized care for optimal results
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                            <div className="text-center">
                                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="text-2xl font-bold text-primary">1</span>
                                </div>
                                <h3 className="text-xl font-bold mb-4">Consultation</h3>
                                <p className="text-text-muted">Detailed assessment of your constitution and health needs</p>
                            </div>
                            <div className="text-center">
                                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="text-2xl font-bold text-primary">2</span>
                                </div>
                                <h3 className="text-xl font-bold mb-4">Treatment Plan</h3>
                                <p className="text-text-muted">Customized therapy program based on your unique needs</p>
                            </div>
                            <div className="text-center">
                                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="text-2xl font-bold text-primary">3</span>
                                </div>
                                <h3 className="text-xl font-bold mb-4">Healing</h3>
                                <p className="text-text-muted">Experience transformation through authentic treatments</p>
                            </div>
                            <div className="hidden md:block absolute top-1/2 left-1/3 right-1/3 h-px bg-accent/30 transform -translate-y-1/2"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Our Treatments */}
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">
                            Why Choose <span className="text-accent">Our Treatments</span>
                        </h2>
                        <p className="text-xl text-text-muted max-w-3xl mx-auto">
                            Experience the difference that authentic, personalized Ayurvedic care makes
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-accent">
                            <Stethoscope className="w-12 h-12 text-accent mb-6" />
                            <h3 className="text-2xl font-bold mb-4">Expert Doctors</h3>
                            <p className="text-text-muted">Qualified Ayurvedic physicians with years of experience</p>
                        </div>

                        <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-8 border border-accent/20">
                            <Award className="w-12 h-12 text-accent mb-6" />
                            <h3 className="text-2xl font-bold mb-4">Authentic Methods</h3>
                            <p className="text-text-muted">Traditional techniques passed down through generations</p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-primary">
                            <Clock className="w-12 h-12 text-primary mb-6" />
                            <h3 className="text-2xl font-bold mb-4">Flexible Timing</h3>
                            <p className="text-text-muted">Treatments scheduled to fit your personal needs</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA - Appointment booking */}
            <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M0 0h80v80H0V0zm20 20v40h40V20H20zm20 35a15 15 0 1 1 0-30 15 15 0 0 1 0 30z' fill-rule='evenodd'/%3E%3C/g%3E%3C/svg%3E")`,
                        }}
                    ></div>
                </div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-4xl font-bold mb-6">
                            Ready to Begin Your Healing Journey?
                        </h3>
                        <p className="text-xl text-primary-light mb-10 leading-relaxed">
                            Take the first step towards better health and wellness. Our experienced team is here to guide you through authentic Ayurvedic healing tailored specifically for you.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/contact" className="btn-secondary">
                                Book Consultation
                            </a>
                            <a href="tel:+94112223344" className="btn-outline text-white border-white hover:bg-white hover:text-primary">
                                Call Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}