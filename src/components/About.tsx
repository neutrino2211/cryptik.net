export default function About() {
	const reasons = [
		{
			icon: "🎯",
			title: "Real-World Experience",
			description: "Our team has worked on critical security challenges across industries"
		},
		{
			icon: "🔒",
			title: "Proven Methodologies",
			description: "Industry-standard frameworks combined with custom approaches"
		},
		{
			icon: "📚",
			title: "Knowledge Transfer",
			description: "We empower your team with the skills to maintain security long-term"
		},
		{
			icon: "🤝",
			title: "Local Expertise",
			description: "Understanding the unique security landscape of Nigerian organizations"
		}
	];

	const expertise = [
		"OSCP",
		"Malware Analysis",
		"Binary Exploitation",
		"Threat Intelligence",
		"Security Architecture",
		"Incident Response",
		"Secure Coding",
		"Cloud Security"
	];

	return (
		<section id="about" className="py-20 bg-cryptik-gray">
			<div className="max-w-7xl mx-auto px-6">
				{/* Content Grid */}
				<div className="grid md:grid-cols-2 gap-12 mb-16">
					{/* About Content */}
					<div>
						<h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
							Industry Experts You Can Trust
						</h2>
						<p className="text-xl text-cryptik-green font-semibold mb-6 leading-relaxed">
							Cryptik brings together seasoned cybersecurity professionals with deep expertise
							in offensive security, reverse engineering, and security education.
						</p>
						<p className="text-gray-400 mb-5 leading-relaxed">
							Based in Abuja, Nigeria's capital, we serve organizations across Africa and beyond.
							Our team combines years of hands-on experience in real-world security operations,
							threat analysis, and building robust defensive strategies.
						</p>
						<p className="text-gray-400 leading-relaxed">
							We don't just find vulnerabilities—we help you understand them, fix them, and
							prevent them from happening again. Our approach is collaborative, educational,
							and focused on long-term security improvement.
						</p>
					</div>

					{/* Why Choose Us */}
					<div>
						<h3 className="text-3xl font-bold mb-8">Why Choose Cryptik</h3>
						<div className="space-y-6">
							{reasons.map((reason, index) => (
								<div key={index} className="flex gap-4 items-start bg-cryptik-dark/50 border-2 border-cryptik-green/30 rounded-sm p-5 brutal-shadow-sm">
									<div className="text-3xl flex-shrink-0">{reason.icon}</div>
									<div>
										<h4 className="text-lg font-semibold mb-2">{reason.title}</h4>
										<p className="text-gray-400 text-sm leading-relaxed">
											{reason.description}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Expertise Tags */}
				<div className="bg-cryptik-dark/50 border-2 border-cryptik-green/30 rounded-sm p-10 text-center brutal-shadow-lg">
					<h3 className="text-3xl font-bold mb-8">Our Expertise Spans</h3>
					<div className="flex flex-wrap justify-center gap-3">
						{expertise.map((skill, index) => (
							<span
								key={index}
								className="bg-cryptik-green/20 text-cryptik-green px-5 py-2.5 rounded-sm font-semibold text-sm border-2 border-cryptik-green/40 hover:bg-cryptik-green hover:text-black hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-default"
							>
								{skill}
							</span>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
