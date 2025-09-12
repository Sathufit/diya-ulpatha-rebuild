"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
	Users,
	CheckCircle,
	ArrowRight,
	Star,
} from "lucide-react";
import { IMAGES } from "@/constants/images";

interface Room {
	id: string;
	name: string;
	type: string;
	maxOccupancy: number;
	features: string[];
	image: string;
	alt: string;
	description: string;
	price: string;
	popular?: boolean;
}

const rooms: Room[] = [
	{
		id: "double-room",
		name: "Superior Double Room",
		type: "Double Occupancy",
		maxOccupancy: 2,
		features: [
			"Garden Views",
			"Natural Rock Features",
			"Modern Amenities",
			"Private Bathroom",
			"Air Conditioning",
			"Free WiFi",
		],
		image: IMAGES.accommodation.doubleRoom,
		alt: "Superior Double Room with garden views",
		description:
			"Perfect for couples or individual guests seeking comfort and tranquility with stunning garden views.",
		price: "Contact for rates",
		popular: true,
	},
	{
		id: "triple-room",
		name: "Superior Triple Room",
		type: "Triple Occupancy",
		maxOccupancy: 3,
		features: [
			"Spacious Layout",
			"Garden Views",
			"Natural Integration",
			"Modern Comfort",
			"Private Bathroom",
			"Free WiFi",
		],
		image: IMAGES.accommodation.tripleRoom,
		alt: "Superior Triple Room with nature integration",
		description:
			"Ideal for small groups or families, featuring additional space while maintaining our signature natural harmony.",
		price: "Contact for rates",
	},
	{
		id: "family-room",
		name: "Superior Family Room",
		type: "Family Accommodation",
		maxOccupancy: 4,
		features: [
			"Separate Living Area",
			"Family-Friendly Design",
			"Garden Access",
			"Natural Elements",
			"Private Bathroom",
			"Free WiFi",
		],
		image: IMAGES.accommodation.familyRoom,
		alt: "Superior Family Room with separate living space",
		description:
			"Designed for families seeking wellness together, with separate spaces for relaxation and privacy.",
		price: "Contact for rates",
	},
];

export function RoomsGrid() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setIsVisible(true), 200);
		return () => clearTimeout(timer);
	}, []);

	return (
		<section className="py-16 bg-background">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{rooms.map((room, index) => (
						<div
							key={room.id}
							className={`group bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl ${
								isVisible
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-8"
							}`}
							style={{ transitionDelay: `${index * 200}ms` }}
						>
							{/* Room Image */}
							<div className="relative h-64 overflow-hidden">
								<Image
									src={room.image}
									alt={room.alt}
									fill
									className="object-cover group-hover:scale-110 transition-transform duration-700"
									sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

								{room.popular && (
									<div className="absolute top-4 left-4 bg-accent text-primary px-3 py-1 rounded-full text-sm font-bold shadow-lg flex items-center gap-1">
										<Star size={14} />
										Popular
									</div>
								)}

								<div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
									<Users size={14} />
									{room.maxOccupancy} guests
								</div>
							</div>

							{/* Room Content */}
							<div className="p-6">
								<div className="mb-4">
									<h3 className="text-xl font-bold text-primary mb-1 group-hover:text-accent transition-colors duration-300">
										{room.name}
									</h3>
									<p className="text-text-muted text-sm">
										{room.type}
									</p>
								</div>

								<p className="text-text-secondary text-sm leading-relaxed mb-6">
									{room.description}
								</p>

								{/* Features */}
								<div className="mb-6">
									<h4 className="font-semibold text-primary mb-3 text-sm">
										Room Features
									</h4>
									<div className="grid grid-cols-2 gap-2">
										{room.features.slice(0, 4).map((feature, idx) => (
											<div
												key={idx}
												className="flex items-center gap-2 text-xs text-text-muted"
											>
												<CheckCircle
													size={12}
													className="text-accent flex-shrink-0"
												/>
												<span>{feature}</span>
											</div>
										))}
									</div>
									{room.features.length > 4 && (
										<p className="text-xs text-accent mt-2">
											+{room.features.length - 4} more features
										</p>
									)}
								</div>

								{/* Price and CTA */}
								<div className="flex items-center justify-between">
									<div>
										<p className="font-bold text-lg text-primary">
											{room.price}
										</p>
										<p className="text-xs text-text-muted">
											per night
										</p>
									</div>
									<a
										href="/contact"
										className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 hover:scale-105"
									>
										Book Now
										<ArrowRight size={14} />
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}