"use client";
import { useState, useEffect } from "react";
import { RoomsGrid } from "@/components/RoomsGrid";
import { Wifi, Coffee, Car, Trees, Utensils, Dumbbell, Waves, Shield, Star, CheckCircle, MapPin, Clock, Mountain, TreePine } from "lucide-react";

const amenities = [
	{
		icon: <TreePine className="w-8 h-8" />,
		title: "Garden Views",
		description: "Stunning views of our medicinal herb gardens from every room",
	},
	{
		icon: <Mountain className="w-8 h-8" />,
		title: "Natural Rock Features",
		description: "Unique natural rock surfaces creating distinctive ambiance",
	},
	{
		icon: <Utensils className="w-8 h-8" />,
		title: "Ayurvedic Dining",
		description: "Nutritious meals prepared according to Ayurvedic principles",
	},
	{
		icon: <Waves className="w-8 h-8" />,
		title: "Wellness Integration",
		description: "Perfect complement to your Ayurveda wellness journey",
	},
	{
		icon: <Dumbbell className="w-8 h-8" />,
		title: "Training Friendly",
		description: "Ideal for immersive Ayurveda training programs",
	},
	{
		icon: <Wifi className="w-8 h-8" />,
		title: "Modern Comfort",
		description: "All modern amenities while maintaining natural harmony",
	},
	{
		icon: <Coffee className="w-8 h-8" />,
		title: "Long-Stay Comfort",
		description: "Designed for extended wellness retreats",
	},
	{
		icon: <Shield className="w-8 h-8" />,
		title: "Enhanced Privacy",
		description: "Natural elements create intimate and peaceful spaces",
	},
];

const testimonials = [
	{
		name: "James Wilson",
		room: "Superior Family Room",
		image:
			"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
		text: "The natural rock features and garden views created such a unique atmosphere. Our family felt completely connected to nature while enjoying modern comfort.",
		rating: 5,
	},
	{
		name: "Maria Garcia",
		room: "Superior Double Room",
		image:
			"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
		text: "Perfect for our wellness retreat. The room's integration with the garden and the natural rock surfaces made it feel like a true sanctuary.",
		rating: 5,
	},
	{
		name: "David Chen",
		room: "Superior Triple Room",
		image:
			"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
		text: "Ideal for our Ayurveda training program. The room perfectly complemented our learning journey with its peaceful ambiance and thoughtful design.",
		rating: 5,
	},
];

const policies = [
	{
		icon: <Clock className="w-6 h-6" />,
		title: "Check-in / Check-out",
		details: "Check-in: 2:00 PM | Check-out: 12:00 PM",
	},
	{
		icon: <MapPin className="w-6 h-6" />,
		title: "Location",
		details: "Nestled in lush gardens, 15 minutes from Kandy city center",
	},
	{
		icon: <Shield className="w-6 h-6" />,
		title: "Wellness Focus",
		details: "All accommodations designed to support your healing journey",
	},
];

export default function AccommodationPage() {
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
					<div className="absolute top-10 right-10 w-40 h-40 bg-accent/5 rounded-full animate-float"></div>
					<div className="absolute bottom-10 left-10 w-32 h-32 bg-primary/5 rounded-full animate-float animate-delay-300"></div>
					<div className="absolute top-1/2 left-1/3 w-20 h-20 bg-accent/10 rounded-full animate-pulse-gentle"></div>
				</div>

				<div className="container mx-auto container-padding text-center relative z-10">
					<div
						className={`max-w-5xl mx-auto transition-all duration-1000 transform ${
							isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
						}`}
					>
						<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-8">
							Superior Rooms with{" "}
							<span className="gradient-text">Garden Views</span>
						</h1>
						<p className="text-xl md:text-2xl text-text-muted max-w-4xl mx-auto leading-relaxed mb-12">
							Experience a unique and comfortable stay in our double, triple, and family options. 
							Enjoy stunning garden views and distinctive ambiance with natural rock surfaces 
							for a one-of-a-kind aesthetic.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<a href="/contact" className="btn-primary text-lg px-8 py-4">
								Reserve Your Room
							</a>
							<a href="#rooms" className="btn-secondary text-lg px-8 py-4">
								View Room Options
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Nature & Comfort Integration */}
			<section className="section-padding bg-surface">
				<div className="container mx-auto container-padding">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
							Perfect Blend of{" "}
							<span className="text-accent">Nature & Comfort</span>
						</h2>
						<p className="text-xl text-text-muted max-w-3xl mx-auto">
							Our superior rooms seamlessly blend with the lush garden setting, offering a serene retreat where nature surrounds you
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
						<div className="card text-center group">
							<div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
								<Mountain className="w-10 h-10 text-accent" />
							</div>
							<h3 className="text-xl font-bold text-text-primary mb-3">
								Natural Rock Surfaces
							</h3>
							<p className="text-text-muted">
								Unique natural rock features enhance privacy and create a distinctive ambiance that connects you with the environment
							</p>
						</div>
						<div className="card text-center group">
							<div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
								<TreePine className="w-10 h-10 text-accent" />
							</div>
							<h3 className="text-xl font-bold text-text-primary mb-3">
								Garden Integration
							</h3>
							<p className="text-text-muted">
								Wake up to soothing sounds of birds and embrace the tranquility of your lush garden surroundings
							</p>
						</div>
						<div className="card text-center group">
							<div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
								<Waves className="w-10 h-10 text-accent" />
							</div>
							<h3 className="text-xl font-bold text-text-primary mb-3">
								Wellness Journey
							</h3>
							<p className="text-text-muted">
								Ideal for long stays and perfectly complement your Ayurveda wellness journey or training programs
							</p>
						</div>
					</div>

					{/* Feature Highlight */}
					<div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl p-8 md:p-12">
						<div className="max-w-4xl mx-auto text-center">
							<h3 className="text-3xl font-bold text-text-primary mb-6">
								Experience Comfort, Privacy, and Nature in Perfect Harmony
							</h3>
							<p className="text-lg text-text-secondary leading-relaxed mb-8">
								Some rooms feature natural rock surfaces, enhancing privacy and creating a unique ambiance 
								that makes you feel truly connected to the environment. Each accommodation is designed to 
								be ideal for long stays, perfectly complementing your Ayurveda wellness journey, whether 
								you're here for relaxation or immersive Ayurveda training.
							</p>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
								<div className="flex items-center justify-center gap-3">
									<CheckCircle className="w-6 h-6 text-accent" />
									<span className="font-medium text-text-primary">Unique Natural Aesthetic</span>
								</div>
								<div className="flex items-center justify-center gap-3">
									<CheckCircle className="w-6 h-6 text-accent" />
									<span className="font-medium text-text-primary">Enhanced Privacy</span>
								</div>
								<div className="flex items-center justify-center gap-3">
									<CheckCircle className="w-6 h-6 text-accent" />
									<span className="font-medium text-text-primary">Long-Stay Comfort</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Rooms Section */}
			<section id="rooms">
				<RoomsGrid />
			</section>

			{/* Amenities Section */}
			<section className="section-padding bg-gradient-to-br from-muted via-background to-surface">
				<div className="container mx-auto container-padding">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
							Thoughtfully Designed{" "}
							<span className="gradient-text">Amenities</span>
						</h2>
						<p className="text-xl text-text-muted max-w-3xl mx-auto">
							Every feature carefully chosen to support your wellness journey and connection with nature
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{amenities.map((amenity, index) => (
							<div
								key={index}
								className={`card text-center group hover-glow transition-all duration-500 transform ${
									isVisible
										? "translate-y-0 opacity-100"
										: "translate-y-8 opacity-0"
								}`}
								style={{ transitionDelay: `${index * 100}ms` }}
							>
								<div className="text-accent mb-4 group-hover:scale-110 transition-transform duration-300">
									{amenity.icon}
								</div>
								<h3 className="text-lg font-bold text-text-primary mb-2">
									{amenity.title}
								</h3>
								<p className="text-text-muted text-sm">
									{amenity.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}