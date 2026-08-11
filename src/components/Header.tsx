const navLinks = [
	{ label: "About Us", href: "#platform" },
	{ label: "Platform", href: "#platform" },
	{ label: "Product Tour", href: "#pricing" }, // include gallery of screenshots and demo videos
	{ label: "Pricing", href: "#pricing" },
	// { label: "Beta Program", href: "#beta" },
	{ label: "FAQ", href: "#faq" },
	{ label: "Contact Us", href: "#faq" },
];

export default function Header() {
	return (
		<header className="sticky top-0 z-50 border-b border-panelLine/60 bg-ink/90 backdrop-blur">
			<div className="container-content flex h-16 items-center justify-between">
				<a href="#top" className="font-display text-lg tracking-tight text-cream">
					<img src="./logo transparent.png" className="w-40" />
				</a>

				<nav className="hidden gap-8 md:flex">
					{navLinks.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className="text-sm text-slate transition-colors hover:text-cream"
						>
							{link.label}
						</a>
					))}
				</nav>

				<a
					href="#beta"
					className="rounded-full border border-brass/60 px-4 py-2 text-sm font-medium text-brass transition-colors hover:bg-brass hover:text-ink"
				>
					Request a Demo
				</a>
			</div>
		</header>
	);
}
