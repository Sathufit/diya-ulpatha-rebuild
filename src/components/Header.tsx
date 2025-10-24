"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Leaf } from "lucide-react";

const navItems = [
	{ href: "/", label: "Home" },
	{ href: "/about", label: "About" },
	{ href: "/treatments", label: "Treatments" },
	{ href: "/accommodation", label: "Accommodation" },
	{ href: "/packages", label: "Packages" },
	{ href: "/gallery", label: "Gallery" },
	{ href: "/contact", label: "Contact" },
];

export function Header() {
	const [open, setOpen] = useState(false);

	return (
		<header className="bg-surface shadow-lg sticky top-0 z-50 border-b border-border">
			<nav className="container mx-auto flex items-center justify-between py-4 px-4">
				<Link
					href="/"
					className="flex items-center gap-2 font-bold text-2xl text-primary"
				>
					<Leaf className="w-8 h-8 text-primary" />
					<span>Diya Ulpatha</span>
				</Link>

				<button
					className="md:hidden p-2 rounded-lg hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary"
					aria-label={open ? "Close menu" : "Open menu"}
					onClick={() => setOpen(!open)}
				>
					{open ? <X size={24} /> : <Menu size={24} />}
				</button>

				<ul className="hidden md:flex gap-8 items-center">
					{navItems.map((link) => (
						<li key={link.href}>
							<Link
								href={link.href}
								className="font-medium text-text-secondary hover:text-accent focus:text-accent focus:outline-none transition-colors duration-200 px-2 py-1 rounded-lg"
							>
								{link.label}
							</Link>
						</li>
					))}
				</ul>
			</nav>

			{open && (
				<div className="md:hidden bg-surface border-t border-border">
					<ul className="px-4 py-4 space-y-2">
						{navItems.map((link) => (
							<li key={link.href}>
								<Link
									href={link.href}
									className="block py-3 px-4 rounded-lg hover:bg-muted focus:bg-muted/80 focus:outline-none font-medium text-text-secondary"
									onClick={() => setOpen(false)}
								>
									{link.label}
								</Link>
							</li>
						))}
					</ul>
				</div>
			)}
		</header>
	);
}