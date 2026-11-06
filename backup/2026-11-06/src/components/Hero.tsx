import RouteLine from "./RouteLine";
import ReservationWidget from "./ReservationWidget";
import Image from "next/image";

export default function Hero() {
	return (
		<section id="#" className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24">
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
					<div className="mt-6 inline-flex items-center gap-2 rounded-full border border-brass/40 bg-brass/10 px-4 py-2">
						<span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
						<span className="text-xs font-medium text-brass">
						Try it free for 2 weeks — full platform, no card required
						</span>
					</div>
					<div className="mt-9 flex flex-wrap items-center gap-4">
						<a
						href="#pricing"
						className="rounded-full bg-brass px-6 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
						>
							Start Free Trial
						</a>
						{/* <a
						href="/#contact"
						className="rounded-full border border-panelLine px-6 py-3 text-sm font-medium text-cream transition-colors hover:border-brass"
						>
							Request a Demo
						</a> */}
					</div>
					<video src="./hero.mp4" autoPlay preload="auto" loop playsInline disablePictureInPicture disableRemotePlayback muted></video>
				</div>

				<div className="flex justify-center rounded-full">
					{/* <ReservationWidget /> */}
					<Image
						src="/reservation-form.png"
						alt="LIMO IQ reservation form"
						width={420}
						height={640}
						className="cursor-pointer rounded-2xl border border-white/10 shadow-2xl shadow-brass/20 transition-transform hover:-translate-y-1"
					/>
				</div> 
			</div>
		</section>
	);
}
