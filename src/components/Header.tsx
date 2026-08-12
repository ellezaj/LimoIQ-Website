import Image from "next/image";

const navLinks = [
	{ label: "About Us", href: "/#about" },
	{ label: "The Platform", href: "/#platform" },
	{ label: "Our Products", href: "/product" },
	{ label: "Pricing", href: "/#pricing" },
	{ label: "Contact Us", href: "/#contact" },
];

export default function Header() {
	return (
		<header className="sticky top-0 z-50 border-b border-panelLine/60 bg-ink/90 backdrop-blur">
			<div className="container-content flex h-16 items-center justify-between">
				<a href="/#" className="font-display text-lg tracking-tight text-cream">
					<Image
						src="/logo transparent.png"
						alt="LIMO IQ"
						width={160}
						height={40}
						className="h-10 w-auto"
						priority
					/>
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
					href="/#contact"
					className="rounded-full border border-brass/60 px-4 py-2 text-sm font-medium text-brass transition-colors hover:bg-brass hover:text-ink"
				>
					Request a Demo
				</a>
			</div>
		</header>
	);
}
