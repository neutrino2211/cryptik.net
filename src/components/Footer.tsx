export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-black text-white py-16 border-t-4 border-cryptik-green/30">
			<div className="max-w-7xl mx-auto px-6">
				{/* Main Footer Content */}
				<div className="grid md:grid-cols-4 gap-10 mb-12 pb-12 border-b border-white/10">
					{/* Brand Section */}
					<div className="md:col-span-2">
						<h3 className="text-2xl font-bold tracking-tight text-white mb-4">
							CRYPTIK
						</h3>
						<p className="text-white/70 mb-8 leading-relaxed">
							Elite cybersecurity services<br />
							powered by industry experts.
						</p>
						<div className="flex gap-3">
							<a
								href="https://twitter.com/cryptik"
								aria-label="Twitter"
								target="_blank"
								rel="noopener noreferrer"
								className="w-10 h-10 bg-white/10 rounded-sm flex items-center justify-center hover:bg-cryptik-green hover:text-black transition-all"
							>
								<svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
									<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
								</svg>
							</a>
							<a
								href="https://linkedin.com/company/cryptik"
								aria-label="LinkedIn"
								target="_blank"
								rel="noopener noreferrer"
								className="w-10 h-10 bg-white/10 rounded-sm flex items-center justify-center hover:bg-cryptik-green hover:text-black transition-all"
							>
								<svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
									<path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
									<circle cx="4" cy="4" r="2"/>
								</svg>
							</a>
							<a
								href="https://github.com/cryptik"
								aria-label="GitHub"
								target="_blank"
								rel="noopener noreferrer"
								className="w-10 h-10 bg-white/10 rounded-sm flex items-center justify-center hover:bg-cryptik-green hover:text-black transition-all"
							>
								<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
									<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" strokeLinecap="round" strokeLinejoin="round"/>
								</svg>
							</a>
						</div>
					</div>

					{/* Services */}
					<div>
						<h4 className="text-lg font-semibold mb-6">Services</h4>
						<ul className="space-y-3">
							<li>
								<a href="/#services" className="text-white/70 hover:text-cryptik-green transition-colors">
									Reverse Engineering
								</a>
							</li>
							<li>
								<a href="/#services" className="text-white/70 hover:text-cryptik-green transition-colors">
									Red Team Operations
								</a>
							</li>
							<li>
								<a href="/#services" className="text-white/70 hover:text-cryptik-green transition-colors">
									Security Training
								</a>
							</li>
							<li>
								<a href="/#contact" className="text-white/70 hover:text-cryptik-green transition-colors">
									Consulting
								</a>
							</li>
						</ul>
					</div>

					{/* Company */}
					<div>
						<h4 className="text-lg font-semibold mb-6">Company</h4>
						<ul className="space-y-3">
							<li>
								<a href="/#about" className="text-white/70 hover:text-cryptik-green transition-colors">
									About Us
								</a>
							</li>
							<li>
								<a href="/#contact" className="text-white/70 hover:text-cryptik-green transition-colors">
									Contact
								</a>
							</li>
							<li>
								<a href="/blog" className="text-white/70 hover:text-cryptik-green transition-colors">
									Blog
								</a>
							</li>
						</ul>
					</div>

					{/* Resources */}
					<div>
						<h4 className="text-lg font-semibold mb-6">Resources</h4>
						<ul className="space-y-3">
							<li>
								<a href="/whitepapers" className="text-white/70 hover:text-cryptik-green transition-colors">
									Research & Whitepapers
								</a>
							</li>
							<li>
								<a href="/blog" className="text-white/70 hover:text-cryptik-green transition-colors">
									Security Blog
								</a>
							</li>
							<li>
								<a href="/#services" className="text-white/70 hover:text-cryptik-green transition-colors">
									Our Services
								</a>
							</li>
						</ul>
					</div>
				</div>

				{/* Footer Bottom */}
				<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-sm">
					<p>&copy; {currentYear} Cryptik. All rights reserved.</p>
					<div className="flex items-center gap-3 flex-wrap justify-center">
						<a href="#privacy" className="hover:text-cryptik-green transition-colors">
							Privacy Policy
						</a>
						<span className="text-white/30">•</span>
						<a href="#terms" className="hover:text-cryptik-green transition-colors">
							Terms of Service
						</a>
						<span className="text-white/30">•</span>
						<a href="#responsible-disclosure" className="hover:text-cryptik-green transition-colors">
							Responsible Disclosure
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
