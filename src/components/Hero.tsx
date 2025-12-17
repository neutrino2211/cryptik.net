export default function Hero() {
	return (
		<section className="min-h-screen flex items-center pt-32 pb-16 bg-gradient-to-br from-cryptik-green/5 to-cryptik-gold/5 relative overflow-hidden">
			{/* Background decoration */}
			<div className="absolute top-[-50%] right-[-20%] w-[70%] h-[140%] bg-cryptik-green/10 rounded-full blur-3xl"></div>

			<div className="max-w-7xl mx-auto px-8 relative z-10">
				<div className="max-w-4xl">
					{/* Badge */}
					<div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-8 shadow-lg border border-white/20">
						🇳🇬 Based in Abuja, Nigeria
					</div>

					{/* Heading */}
					<h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
						Elite Cybersecurity<br />
						<span className="bg-gradient-to-r from-cryptik-green to-cryptik-gold bg-clip-text text-transparent">
							Built by Experts
						</span>
					</h1>

					{/* Description */}
					<p className="text-xl text-gray-300 mb-10 leading-relaxed">
						Industry-leading security professionals delivering world-class reverse engineering,
						red team operations, and cybersecurity training. Protecting organizations across Nigeria
						and beyond.
					</p>

					{/* CTA Buttons */}
					<div className="flex flex-col sm:flex-row gap-4 mb-16">
						<a
							href="#contact"
							className="bg-cryptik-green text-white px-8 py-4 rounded-lg font-semibold text-lg border-2 border-cryptik-green hover:bg-transparent hover:text-cryptik-green hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cryptik-green/30 transition-all duration-300 text-center"
						>
							Start a Conversation
						</a>
						<a
							href="#services"
							className="bg-transparent text-white px-8 py-4 rounded-lg font-semibold text-lg border-2 border-white hover:bg-white hover:text-cryptik-dark hover:-translate-y-0.5 transition-all duration-300 text-center"
						>
							Explore Services
						</a>
					</div>

					{/* Stats */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/10">
						<div>
							<div className="text-4xl font-extrabold text-cryptik-green mb-2">10+</div>
							<div className="text-sm text-gray-400 font-medium">Years Combined Experience</div>
						</div>
						<div>
							<div className="text-4xl font-extrabold text-cryptik-green mb-2">50+</div>
							<div className="text-sm text-gray-400 font-medium">Security Assessments</div>
						</div>
						<div>
							<div className="text-4xl font-extrabold text-cryptik-green mb-2">100%</div>
							<div className="text-sm text-gray-400 font-medium">Client Satisfaction</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
