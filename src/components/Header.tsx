export default function Header() {
	return (
		<header className="fixed top-0 left-0 right-0 bg-cryptik-gray border-b-4 border-cryptik-green/30 z-50 py-4">
			<div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
				<div className="logo">
					<a href="/" className="text-2xl font-bold tracking-tight text-white">
						CRYPTIK
					</a>
				</div>

				<nav className="flex-1 flex justify-center">
					<ul className="hidden md:flex items-center gap-10">
						<li>
							<a
								href="/#services"
								className="font-semibold text-white hover:text-cryptik-green transition-colors"
							>
								Services
							</a>
						</li>
						<li>
							<a
								href="/#about"
								className="font-semibold text-white hover:text-cryptik-green transition-colors"
							>
								About
							</a>
						</li>
						<li>
							<a
								href="/blog"
								className="font-semibold text-white hover:text-cryptik-green transition-colors"
							>
								Blog
							</a>
						</li>
						<li>
							<a
								href="/whitepapers"
								className="font-semibold text-white hover:text-cryptik-green transition-colors"
							>
								Research
							</a>
						</li>
						<li>
							<a
								href="/#contact"
								className="font-semibold text-white hover:text-cryptik-green transition-colors"
							>
								Contact
							</a>
						</li>
					</ul>
				</nav>

				<a
					href="/#contact"
					className="bg-cryptik-green text-black px-6 py-2.5 rounded-sm font-bold border-2 border-cryptik-green hover:bg-transparent hover:text-cryptik-green hover:border-cryptik-green brutal-shadow-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
				>
					Get Started
				</a>
			</div>
		</header>
	);
}
