export default function Hero() {
	return (
		<section className="min-h-screen flex items-center pt-28 pb-12 bg-cryptik-dark relative overflow-hidden">
			{/* Background decoration - subtle geometric shapes */}
			<div className="absolute top-20 right-20 w-64 h-64 bg-cryptik-green/10 border-2 border-cryptik-green/20 rotate-12 rounded-sm"></div>
			<div className="absolute bottom-20 right-40 w-48 h-48 bg-cryptik-gold/10 border-2 border-cryptik-gold/20 -rotate-6 rounded-sm"></div>

			<div className="max-w-7xl mx-auto px-6 relative z-10">
				<div className="max-w-4xl">
					{/* Badge */}
					<div className="inline-block bg-cryptik-green/20 text-cryptik-green px-4 py-2 text-sm font-bold mb-8 border-2 border-cryptik-green rounded-sm">
						🇳🇬 Based in Abuja, Nigeria
					</div>

					{/* Heading */}
					<h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
						Elite Cybersecurity<br />
						<span className="text-cryptik-green">
							Built by Experts
						</span>
					</h1>

					{/* Description */}
					<p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl">
						Industry-leading security professionals delivering world-class reverse engineering,
						red team operations, and cybersecurity training. Protecting organizations across Nigeria
						and beyond.
					</p>

					{/* CTA Buttons */}
					<div className="flex flex-col sm:flex-row gap-4 mb-16">
						<a
							href="#contact"
							className="bg-cryptik-green text-black px-8 py-3.5 rounded-sm font-bold border-2 border-cryptik-green brutal-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all text-center"
						>
							Start a Conversation
						</a>
						<a
							href="#services"
							className="bg-transparent text-white px-8 py-3.5 rounded-sm font-bold border-2 border-white hover:bg-white hover:text-cryptik-dark brutal-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all text-center"
						>
							Explore Services
						</a>
					</div>

					{/* Stats */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
						<div className="bg-cryptik-gray/50 border-2 border-cryptik-green/30 rounded-sm p-6 brutal-shadow-sm">
							<div className="text-4xl font-bold text-cryptik-green mb-2">10+</div>
							<div className="text-sm text-gray-400 font-medium">Years Combined Experience</div>
						</div>
						<div className="bg-cryptik-gray/50 border-2 border-cryptik-green/30 rounded-sm p-6 brutal-shadow-sm">
							<div className="text-4xl font-bold text-cryptik-green mb-2">50+</div>
							<div className="text-sm text-gray-400 font-medium">Security Assessments</div>
						</div>
						<div className="bg-cryptik-gray/50 border-2 border-cryptik-green/30 rounded-sm p-6 brutal-shadow-sm">
							<div className="text-4xl font-bold text-cryptik-green mb-2">100%</div>
							<div className="text-sm text-gray-400 font-medium">Client Satisfaction</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
