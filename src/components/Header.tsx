"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { featureGroups } from "@/lib/features";

export default function Header() {
	const [productsOpen, setProductsOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 border-b border-panelLine/60 bg-ink/90 backdrop-blur">
			<div className="container-content flex h-16 items-center justify-between">
				<a href="/#" className="font-display text-lg tracking-tight text-cream">
					<Image
						src="/logo-transparent.png"
						alt="LIMO IQ Logo"
						width={160}
						height={40}
						className="h-10 w-auto"
						priority
					/>
				</a>

				<nav className="hidden items-center gap-8 md:flex">
					<a
						href="/#about"
						className="text-sm text-slate transition-colors hover:text-cream"
					>
						About Us
					</a>
					<a
						href="/#platform"
						className="text-sm text-slate transition-colors hover:text-cream"
					>
						The Platform
					</a>
					{/* Our Products dropdown */}
					<div
						className="relative"
						onMouseEnter={() => setProductsOpen(true)}
						onMouseLeave={() => setProductsOpen(false)}
					>
						<button
							type="button"
							onClick={() => setProductsOpen((v) => !v)}
							aria-expanded={productsOpen}
							aria-haspopup="true"
							className="flex items-center gap-1 text-sm text-slate transition-colors hover:text-cream"
						>
							Our Products
							<ChevronDown
								className={`h-3.5 w-3.5 transition-transform ${
									productsOpen ? "rotate-180" : ""
								}`}
							/>
						</button>

						<div
							className={`absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-3 transition-all duration-150 ${
								productsOpen
									? "pointer-events-auto translate-y-0 opacity-100"
									: "pointer-events-none -translate-y-1 opacity-0"
							}`}
						>
							<div className="overflow-hidden rounded-xl border border-panelLine bg-panel shadow-xl shadow-black/30">
								{featureGroups.map((group) => (
									<a
										key={group.slug}
										href={`/product?tab=${group.slug}#platform`}
										onClick={() => setProductsOpen(false)}
										className="block px-4 py-3 text-sm text-slate transition-colors hover:bg-ink/60 hover:text-cream"
									>
										{group.label}
									</a>
								))}
							</div>
						</div>
					</div>

					<a
						href="/#pricing"
						className="text-sm text-slate transition-colors hover:text-cream"
					>
						Pricing
					</a>
					<a
						href="/#contact"
						className="text-sm text-slate transition-colors hover:text-cream"
					>
						Contact Us
					</a>
				</nav>

				<a
					href="/#contact"
					className="rounded-full border border-brass/60 px-4 py-2 text-sm font-medium text-brass transition-colors hover:bg-brass hover:text-ink"
				>
					Start Free Trial
				</a>
			</div>
		</header>
	);
}
