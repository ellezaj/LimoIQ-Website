import RouteLine from "./RouteLine";

export default function Hero() {
	return (
		<section id="top" className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24">
			<div className="container-content grid items-center gap-12 md:grid-cols-2">
				<div className="hero-container">
					<p className="eyebrow mb-5">Reservation software, reimagined</p>
					<h1 className="text-4xl leading-[1.1] text-cream md:text-5xl">
						The limousine industry deserves better software.
					</h1>
					<p className="mt-6 max-w-md text-base leading-relaxed text-slate">
						LIMO IQ is built by operators who were tired of clunky reservation
						systems. Live tracking, AI-assisted dispatching, and a back office
						that doesn&apos;t fight you — in one platform.
					</p>
					<div className="mt-9 flex flex-wrap items-center gap-4">
						<a
							href="#beta"
							className="rounded-full bg-brass px-6 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
						>
							Request a Demo
						</a>
						<a
							href="#platform"
							className="text-sm font-medium text-cream underline decoration-brass/50 underline-offset-4 hover:decoration-brass"
						>
							See the platform
						</a>
					</div>
					<video src="./hero.mp4" autoPlay preload="auto" loop playsInline disablePictureInPicture disableRemotePlayback webkit-playsinline muted></video>
				</div>

				<div className="flex justify-center">
					<RouteLine />
				</div> 
			</div>
		</section>
	);
}
