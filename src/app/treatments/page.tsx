"use client";
import { useState, useEffect } from "react";
import { TreatmentsGrid } from "@/components/TreatmentsGrid";
import { Heart, Shield, Leaf, Users, Star } from "lucide-react";

const treatmentBenefits = [
	{
		icon: <Heart className="w-8 h-8" />,
		title: "Holistic Healing",
		description: "Address root causes, not just symptoms, for lasting wellness",
	},
	{
		icon: <Shield className="w-8 h-8" />,
		title: "Natural & Safe",
		description: "100% natural ingredients with no harmful side effects",
	},
	{
		icon: <Leaf className="w-8 h-8" />,
		title: "Time-Tested",
		description: "5000+ years of proven Ayurvedic wisdom and practice",
	},
	{
		icon: <Users className="w-8 h-8" />,
		title: "Expert Care",
		description: "Qualified doctors and experienced therapists guide your journey",
	},
];

export default function TreatmentsPage() {
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
					<div className="absolute top-20 left-20 w-32 h-32 bg-accent/10 rounded-full animate-float"></div>
					<div className="absolute bottom-20 right-20 w-24 h-24 bg-primary/10 rounded-full animate-float animate-delay-300"></div>
					<div className="absolute top-1/2 right-1/3 w-16 h-16 bg-accent/5 rounded-full animate-pulse-gentle"></div>
				</div>

				<div className="container mx-auto container-padding text-center relative z-10">
					<div
						className={`max-w-5xl mx-auto transition-all duration-1000 transform ${
							isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
						}`}
					>
						<div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
							<Star className="w-5 h-5 text-accent" />
							<span className="text-primary font-medium">Authentic Healing</span>
						</div>

						<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-8">
							Ayurvedic{" "}
							<span className="gradient-text">Treatments</span>
						</h1>
						<p className="text-xl md:text-2xl text-text-muted max-w-4xl mx-auto leading-relaxed mb-12">
							Experience the healing power of ancient Ayurveda through our
							comprehensive range of authentic treatments, each designed to
							restore balance and promote natural wellness.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<a
								href="/contact"
								className="btn-primary text-lg px-8 py-4"
							>
								Book Consultation
							</a>
							<a
								href="#treatments"
								className="btn-secondary text-lg px-8 py-4"
							>
								Explore Treatments
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Treatment Benefits */}
			<section className="section-padding bg-surface">
				<div className="container mx-auto container-padding">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
							Why Choose{" "}
							<span className="text-accent">Ayurvedic Healing?</span>
						</h2>
						<p className="text-xl text-text-muted max-w-3xl mx-auto">
							Discover the unique benefits of our time-tested approach to health
							and wellness
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
						{treatmentBenefits.map((benefit, index) => (
							<div
								key={index}
								className={`card text-center group hover-glow transition-all duration-500 transform ${
									isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
								}`}
								style={{ transitionDelay: `${index * 150}ms` }}
							>
								<div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 text-accent">
									{benefit.icon}
								</div>
								<h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-accent transition-colors duration-300">
									{benefit.title}
								</h3>
								<p className="text-text-muted leading-relaxed">
									{benefit.description}
								</p>
							</div>
						))}
					</div>

					{/* Process Overview */}
					<div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl p-8 md:p-12">
						<div className="text-center mb-8">
							<h3 className="text-3xl font-bold text-text-primary mb-4">
								Your{" "}
								<span className="text-accent">Healing Process</span>
							</h3>
							<p className="text-lg text-text-muted max-w-3xl mx-auto">
								Our systematic approach ensures you receive the most effective
								treatment for your unique needs
							</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							<div className="text-center">
								<div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
									<span className="text-2xl font-bold text-accent">1</span>
								</div>
								<h4 className="font-bold text-text-primary mb-2">
									Consultation
								</h4>
								<p className="text-text-muted text-sm">
									Initial assessment with our qualified Ayurvedic doctor to
									understand your constitution
								</p>
							</div>
							<div className="text-center">
								<div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
									<span className="text-2xl font-bold text-accent">2</span>
								</div>
								<h4 className="font-bold text-text-primary mb-2">
									Personalized Plan
								</h4>
								<p className="text-text-muted text-sm">
									Customized treatment plan designed specifically for your health
									needs and goals
								</p>
							</div>
							<div className="text-center">
								<div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
									<span className="text-2xl font-bold text-accent">3</span>
								</div>
								<h4 className="font-bold text-text-primary mb-2">
									Treatment
								</h4>
								<p className="text-text-muted text-sm">
									Professional therapy sessions with experienced practitioners in a
									peaceful environment
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Treatments Grid */}
			<section id="treatments">
				<TreatmentsGrid />
			</section>

			{/* CTA Section */}
			<section className="section-padding bg-gradient-to-r from-primary via-primary-dark to-primary text-white">
				<div className="container mx-auto container-padding text-center">
					<div className="max-w-4xl mx-auto">
						<h2 className="text-4xl md:text-5xl font-bold mb-6">
							Ready to Begin Your Healing Journey?
						</h2>
						<p className="text-xl text-primary-light mb-10 leading-relaxed">
							Take the first step towards better health and wellness. Our
							experienced team is here to guide you through authentic Ayurvedic
							healing.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<a
								href="/contact"
								className="btn-secondary text-lg px-8 py-4"
							>
								Book Your Consultation
							</a>
							<a
								href="/accommodation"
								className="btn-outline text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-primary"
							>
								View Accommodation
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}