export default function Contact() {
	return (
		<section id="contact" className="py-24 bg-cryptik-dark">
			<div className="max-w-7xl mx-auto px-8">
				<div className="grid md:grid-cols-2 gap-16 items-start">
					{/* Contact Info */}
					<div>
						<h2 className="text-4xl md:text-5xl font-bold mb-4">
							Let's Secure Your Organization
						</h2>
						<p className="text-xl text-gray-400 mb-12 leading-relaxed">
							Ready to strengthen your security posture? Get in touch with our team
							to discuss your specific needs.
						</p>

						{/* Contact Methods */}
						<div className="space-y-8 mb-12">
							{/* Email */}
							<div className="flex gap-4 items-start">
								<div className="w-12 h-12 bg-cryptik-green rounded-xl flex items-center justify-center flex-shrink-0">
									<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
									</svg>
								</div>
								<div>
									<h4 className="text-lg font-semibold mb-2">Email</h4>
									<a href="mailto:contact@cryptik.ng" className="text-gray-400 hover:text-cryptik-green transition-colors">
										contact@cryptik.ng
									</a>
								</div>
							</div>

							{/* Location */}
							<div className="flex gap-4 items-start">
								<div className="w-12 h-12 bg-cryptik-green rounded-xl flex items-center justify-center flex-shrink-0">
									<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
										<circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
									</svg>
								</div>
								<div>
									<h4 className="text-lg font-semibold mb-2">Location</h4>
									<p className="text-gray-400">Abuja, Nigeria</p>
								</div>
							</div>

							{/* Phone */}
							<div className="flex gap-4 items-start">
								<div className="w-12 h-12 bg-cryptik-green rounded-xl flex items-center justify-center flex-shrink-0">
									<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
									</svg>
								</div>
								<div>
									<h4 className="text-lg font-semibold mb-2">Phone</h4>
									<a href="tel:+234" className="text-gray-400 hover:text-cryptik-green transition-colors">
										+234 XXX XXX XXXX
									</a>
								</div>
							</div>
						</div>

						{/* Response Time */}
						<div className="bg-cryptik-gray/50 p-6 rounded-xl border-l-4 border-cryptik-green">
							<div className="flex items-center gap-3 text-gray-400 font-medium">
								<svg className="w-5 h-5 text-cryptik-green flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
									<path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
								</svg>
								<span className="text-sm">We typically respond within 24 hours</span>
							</div>
						</div>
					</div>

					{/* Contact Form */}
					<div className="bg-cryptik-gray/50 p-10 rounded-2xl">
						<form className="space-y-6">
							{/* Full Name */}
							<div>
								<label htmlFor="name" className="block font-semibold mb-2 text-sm">
									Full Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									required
									placeholder="John Doe"
									className="w-full px-4 py-3 bg-cryptik-dark border-2 border-white/10 rounded-lg focus:border-cryptik-green focus:outline-none focus:ring-2 focus:ring-cryptik-green/20 transition-all"
								/>
							</div>

							{/* Email */}
							<div>
								<label htmlFor="email" className="block font-semibold mb-2 text-sm">
									Email Address
								</label>
								<input
									type="email"
									id="email"
									name="email"
									required
									placeholder="john@company.com"
									className="w-full px-4 py-3 bg-cryptik-dark border-2 border-white/10 rounded-lg focus:border-cryptik-green focus:outline-none focus:ring-2 focus:ring-cryptik-green/20 transition-all"
								/>
							</div>

							{/* Company */}
							<div>
								<label htmlFor="company" className="block font-semibold mb-2 text-sm">
									Company
								</label>
								<input
									type="text"
									id="company"
									name="company"
									placeholder="Your Organization"
									className="w-full px-4 py-3 bg-cryptik-dark border-2 border-white/10 rounded-lg focus:border-cryptik-green focus:outline-none focus:ring-2 focus:ring-cryptik-green/20 transition-all"
								/>
							</div>

							{/* Service */}
							<div>
								<label htmlFor="service" className="block font-semibold mb-2 text-sm">
									Service Interested In
								</label>
								<select
									id="service"
									name="service"
									required
									className="w-full px-4 py-3 bg-cryptik-dark border-2 border-white/10 rounded-lg focus:border-cryptik-green focus:outline-none focus:ring-2 focus:ring-cryptik-green/20 transition-all"
								>
									<option value="">Select a service</option>
									<option value="reverse-engineering">Reverse Engineering</option>
									<option value="red-team">Red Team Operations</option>
									<option value="training">Security Training</option>
									<option value="consultation">Security Consultation</option>
								</select>
							</div>

							{/* Message */}
							<div>
								<label htmlFor="message" className="block font-semibold mb-2 text-sm">
									Message
								</label>
								<textarea
									id="message"
									name="message"
									rows={4}
									required
									placeholder="Tell us about your security needs..."
									className="w-full px-4 py-3 bg-cryptik-dark border-2 border-white/10 rounded-lg focus:border-cryptik-green focus:outline-none focus:ring-2 focus:ring-cryptik-green/20 transition-all resize-y"
								></textarea>
							</div>

							{/* Submit Button */}
							<button
								type="submit"
								className="w-full bg-cryptik-green text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cryptik-gold hover:text-cryptik-dark hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cryptik-green/30 transition-all duration-300"
							>
								Send Message
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
