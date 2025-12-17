export default function Services() {
	const services = [
		{
			title: "Reverse Engineering",
			description: "Deep analysis of malware, software, and firmware to uncover vulnerabilities, understand threats, and develop robust defenses.",
			features: [
				"Malware analysis and threat intelligence",
				"Firmware and binary analysis",
				"Vulnerability research",
				"Protocol reverse engineering"
			],
			icon: (
				<svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M9.5 2C7.842 2 6.5 3.342 6.5 5v14c0 1.658 1.342 3 3 3h5c1.658 0 3-1.342 3-3V5c0-1.658-1.342-3-3-3h-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
					<path d="M12 18h.01M8 6h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
				</svg>
			)
		},
		{
			title: "Red Team Operations",
			description: "Simulate real-world attacks to test your organization's security posture and incident response capabilities.",
			features: [
				"Penetration testing and exploitation",
				"Social engineering assessments",
				"Physical security testing",
				"Post-exploitation and lateral movement"
			],
			featured: true,
			icon: (
				<svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
					<path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
				</svg>
			)
		},
		{
			title: "Security Training",
			description: "Hands-on cybersecurity training programs designed to upskill your team and build a security-first culture.",
			features: [
				"Custom security awareness programs",
				"Technical security training",
				"Secure development practices",
				"Incident response workshops"
			],
			icon: (
				<svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
					<path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
					<path d="M9 7h6M9 11h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
				</svg>
			)
		}
	];

	return (
		<section id="services" className="py-16 bg-cryptik-dark">
			<div className="max-w-7xl mx-auto px-6">
				{/* Section Header */}
				<div className="text-center mb-12">
					<h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
					<p className="text-xl text-gray-400 max-w-2xl mx-auto">
						Comprehensive cybersecurity solutions tailored to your organization's needs
					</p>
				</div>

				{/* Services Grid */}
				<div className="grid md:grid-cols-3 gap-6">
					{services.map((service, index) => (
						<div
							key={index}
							className={`group relative p-6 rounded border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
								service.featured
									? 'border-cryptik-green bg-gradient-to-br from-cryptik-green/10 to-cryptik-gold/10'
									: 'border-white/10 bg-cryptik-gray/50 hover:border-cryptik-green'
							}`}
						>
							{/* Featured Badge */}
							{service.featured && (
								<div className="absolute -top-2 right-6 bg-cryptik-green text-white px-3 py-1 rounded-full text-xs font-semibold">
									Most Popular
								</div>
							)}

							{/* Icon */}
							<div className={`w-14 h-14 rounded flex items-center justify-center mb-4 ${
								service.featured
									? 'bg-gradient-to-br from-cryptik-green to-cryptik-gold text-white'
									: 'bg-cryptik-green text-white'
							}`}>
								{service.icon}
							</div>

							{/* Title */}
							<h3 className="text-2xl font-bold mb-4">{service.title}</h3>

							{/* Description */}
							<p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

							{/* Features List */}
							<ul className="space-y-3">
								{service.features.map((feature, idx) => (
									<li key={idx} className="flex items-start text-gray-400">
										<span className="text-cryptik-green font-bold mr-3">✓</span>
										<span className="text-sm">{feature}</span>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
