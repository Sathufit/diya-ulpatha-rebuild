"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
	Users,
	Bed,
	X,
	ArrowRight,
	CheckCircle,
	Mountain,
	TreePine,
	Wifi,
	Coffee,
} from "lucide-react";
import { IMAGES } from "@/constants/images";

export interface Room {
	id: string;
	name: string;
	type: string;
	description: string;
	features: string[];
	maxOccupancy: number;
	bedConfiguration: string;
	image: string;
	price: string;
	specialFeatures: string[];
}

const rooms: Room[] = [
	{
		id: "superior-double",
		name: "Superior Double Room",
		type: "Double",
		description:
			"Perfect for couples seeking a tranquil retreat. Features stunning garden views and unique natural rock surfaces that create an intimate, one-of-a-kind ambiance.",
		features: [
			"Garden views",
			"Natural rock surfaces",
			"Private bathroom",
			"Air conditioning",
			"Complimentary WiFi",
			"Tea/coffee facilities",
		],
		maxOccupancy: 2,
		bedConfiguration: "1 Double Bed",
		image: IMAGES.accommodation.doubleRoom,
		price: "Contact for rates",
		specialFeatures: [
			"Natural rock aesthetic",
			"Enhanced privacy",
			"Garden integration",
		],
	},
	{
		id: "superior-triple",
		name: "Superior Triple Room",
		type: "Triple",
		description:
			"Spacious accommodation for small groups or families. Enjoy the perfect blend of comfort and nature with direct garden access and unique architectural features.",
		features: [
			"Stunning garden views",
			"Natural rock surfaces",
			"Spacious layout",
			"Private bathroom",
			"Air conditioning",
			"Seating area",
		],
		maxOccupancy: 3,
		bedConfiguration: "1 Double + 1 Single Bed",
		image: IMAGES.accommodation.tripleRoom,
		price: "Contact for rates",
		specialFeatures: [
			"Flexible sleeping arrangements",
			"Group-friendly layout",
			"Nature integration",
		],
	},
	{
		id: "superior-family",
		name: "Superior Family Room",
		type: "Family",
		description:
			"Generous space designed for families seeking a wellness retreat together. Features separate areas and unique natural elements that create a memorable stay experience.",
		features: [
			"Panoramic garden views",
			"Natural rock features",
			"Separate living area",
			"Family bathroom",
			"Climate control",
			"Kitchenette facilities",
		],
		maxOccupancy: 4,
		bedConfiguration: "1 Double + 2 Single Beds",
		image: IMAGES.accommodation.familyRoom,
		price: "Contact for rates",
		specialFeatures: [
			"Family-focused design",
			"Multiple living spaces",
			"Premium garden access",
		],
	},
];

export function RoomsGrid() {
	const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setIsVisible(true), 100);
		return () => clearTimeout(timer);
	}, []);

	return (
		<section className="section-padding bg-background">
			<div className="container mx-auto container-padding">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
						Superior Rooms with{" "}
						<span className="gradient-text">Garden Views</span>
					</h2>
					<p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
						Available in double, triple, and family options. Experience
						stunning garden views and distinctive ambiance with natural
						rock surfaces for a one-of-a-kind aesthetic.
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
					{rooms.map((room, index) => (
						<div
							key={room.id}
							className={`card group hover-lift transition-all duration-500 transform ${
								isVisible
									? "translate-y-0 opacity-100"
									: "translate-y-8 opacity-0"
							}`}
							style={{ transitionDelay: `${index * 200}ms` }}
						>
							<div className="relative h-64 rounded-xl overflow-hidden mb-6">
								<Image
									src={room.image}
									alt={room.name}
									fill
									sizes="(max-width: 1024px) 100vw, 33vw"
									className="object-cover group-hover:scale-110 transition-transform duration-700"
								/>
								<div className="absolute top-4 right-4 bg-accent text-primary px-3 py-1 rounded-full text-sm font-medium">
									{room.type}
								</div>
								<div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-sm">
									{room.bedConfiguration}
								</div>
							</div>

							<div className="space-y-4">
								<div className="flex items-center justify-between">
									<h3 className="text-2xl font-bold text-text-primary group-hover:gradient-text transition-all duration-300">
										{room.name}
									</h3>
									<div className="flex items-center gap-1 text-text-muted">
										<Users size={16} className="text-accent" />
										<span>{room.maxOccupancy}</span>
									</div>
								</div>

								<p className="text-text-secondary leading-relaxed group-hover:text-text-primary transition-colors duration-300">
									{room.description}
								</p>

								<div className="space-y-3">
									<div className="flex flex-wrap gap-2">
										{room.features
											.slice(0, 3)
											.map((feature, idx) => (
												<span
													key={idx}
													className="bg-accent/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
												>
													{feature}
												</span>
											))}
										{room.features.length > 3 && (
											<span className="text-text-muted text-sm self-center">
												+{room.features.length - 3} more
											</span>
										)}
									</div>
								</div>

								<div className="flex flex-col gap-3 pt-4 border-t border-border">
									<button
										onClick={() => setSelectedRoom(room)}
										className="btn-primary w-full"
									>
										View Details
									</button>
									<a
										href="/contact"
										className="btn-outline w-full text-center"
									>
										Reserve Room
									</a>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Special Features Section */}
				<div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl p-8 md:p-12">
					<div className="text-center mb-8">
						<h3 className="text-3xl font-bold text-text-primary mb-4">
							A Perfect Blend of{" "}
							<span className="text-accent">Nature & Comfort</span>
						</h3>
						<p className="text-lg text-text-muted max-w-3xl mx-auto">
							Our superior rooms seamlessly blend with the lush garden
							setting, offering a serene retreat where nature surrounds
							you.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						<div className="text-center">
							<Mountain className="w-12 h-12 text-accent mx-auto mb-4" />
							<h4 className="font-bold text-text-primary mb-2">
								Natural Rock Surfaces
							</h4>
							<p className="text-text-muted text-sm">
								Unique architectural features left untouched for
								authentic ambiance
							</p>
						</div>
						<div className="text-center">
							<TreePine className="w-12 h-12 text-accent mx-auto mb-4" />
							<h4 className="font-bold text-text-primary mb-2">
								Garden Integration
							</h4>
							<p className="text-text-muted text-sm">
								Seamlessly blended with lush garden settings for
								natural harmony
							</p>
						</div>
						<div className="text-center">
							<Users className="w-12 h-12 text-accent mx-auto mb-4" />
							<h4 className="font-bold text-text-primary mb-2">
								Enhanced Privacy
							</h4>
							<p className="text-text-muted text-sm">
								Natural elements create intimate spaces and peaceful
								seclusion
							</p>
						</div>
						<div className="text-center">
							<Bed className="w-12 h-12 text-accent mx-auto mb-4" />
							<h4 className="font-bold text-text-primary mb-2">
								Wellness Focused
							</h4>
							<p className="text-text-muted text-sm">
								Ideal for Ayurveda journeys and long-term wellness
								stays
							</p>
						</div>
					</div>

					<div className="mt-8 p-6 bg-white/50 rounded-2xl border-l-4 border-accent">
						<p className="text-text-primary font-medium leading-relaxed">
							<strong>Ideal for long stays</strong>, our accommodations
							perfectly complement your Ayurveda wellness journey,
							whether you're here for relaxation or immersive Ayurveda
							training. Wake up to the soothing sounds of birds and
							embrace the tranquility of your surroundings. Experience
							comfort, privacy, and nature in perfect harmony.
						</p>
					</div>
				</div>

				{/* Room Details Modal */}
				{selectedRoom && (
					<div
						className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 animate-fade-in-up"
						onClick={(e) => {
							if (e.target === e.currentTarget) setSelectedRoom(null);
						}}
					>
						<div className="bg-surface rounded-2xl p-8 max-w-2xl w-full relative animate-scale-in shadow-2xl max-h-[90vh] overflow-y-auto">
							<button
								className="absolute top-4 right-4 w-10 h-10 bg-muted hover:bg-border rounded-full flex items-center justify-center text-text-muted hover:text-primary transition-all duration-300 hover:rotate-90 hover:scale-110"
								onClick={() => setSelectedRoom(null)}
							>
								<X size={20} />
							</button>

							<div className="space-y-6">
								<div className="relative h-64 rounded-xl overflow-hidden">
									<Image
										src={selectedRoom.image}
										alt={selectedRoom.name}
										fill
										sizes="(max-width: 768px) 100vw, 50vw"
										className="object-cover"
									/>
								</div>

								<div>
									<h3 className="text-3xl font-bold text-text-primary mb-4">
										{selectedRoom.name}
									</h3>
									<p className="text-text-secondary leading-relaxed mb-6">
										{selectedRoom.description}
									</p>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div>
										<h4 className="font-bold text-text-primary mb-3 flex items-center gap-2">
											<CheckCircle size={20} className="text-accent" />
											Room Features
										</h4>
										<ul className="space-y-2">
											{selectedRoom.features.map((feature, idx) => (
												<li
													key={idx}
													className="text-text-muted flex items-center gap-2"
												>
													<div className="w-2 h-2 bg-accent rounded-full"></div>
													{feature}
												</li>
											))}
										</ul>
									</div>
									<div>
										<h4 className="font-bold text-text-primary mb-3 flex items-center gap-2">
											<Users size={20} className="text-accent" />
											Room Details
										</h4>
										<div className="space-y-2 text-text-muted">
											<p>
												<strong>Max Occupancy:</strong>{" "}
												{selectedRoom.maxOccupancy} guests
											</p>
											<p>
												<strong>Bed Configuration:</strong>{" "}
												{selectedRoom.bedConfiguration}
											</p>
											<p>
												<strong>Room Type:</strong> {selectedRoom.type}
											</p>
											<p>
												<strong>Rate:</strong> {selectedRoom.price}
											</p>
										</div>
									</div>
								</div>

								<div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-border">
									<a
										href="/contact"
										className="btn-primary flex-1 text-center"
										onClick={() => setSelectedRoom(null)}
									>
										Reserve This Room
									</a>
									<button
										onClick={() => setSelectedRoom(null)}
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