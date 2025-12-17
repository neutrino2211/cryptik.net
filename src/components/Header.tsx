export default function Header() {
	return (
		<header className="fixed top-0 left-0 right-0 bg-cryptik-gray/95 backdrop-blur-md border-b border-white/10 z-50 py-3">
			<div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
				<div className="logo">
					<a href="/" className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-cryptik-green via-cryptik-gold to-white bg-clip-text text-transparent">
						CRYPTIK
					</a>
				</div>

				<nav className="flex-1 flex justify-center">
					<ul className="hidden md:flex items-center gap-10">
						<li>
							<a
								href="/#services"
								className="font-medium hover:text-cryptik-green transition-colors relative group"
							>
								Services
								<span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-cryptik-green group-hover:w-full transition-all duration-300"></span>
							</a>
						</li>
						<li>
							<a
								href="/#about"
								className="font-medium hover:text-cryptik-green transition-colors relative group"
							>
								About
								<span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-cryptik-green group-hover:w-full transition-all duration-300"></span>
							</a>
						</li>
						<li>
							<a
								href="/blog"
								className="font-medium hover:text-cryptik-green transition-colors relative group"
							>
								Blog
								<span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-cryptik-green group-hover:w-full transition-all duration-300"></span>
							</a>
						</li>
						<li>
							<a
								href="/whitepapers"
								className="font-medium hover:text-cryptik-green transition-colors relative group"
							>
								Research
								<span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-cryptik-green group-hover:w-full transition-all duration-300"></span>
							</a>
						</li>
						<li>
							<a
								href="/#contact"
								className="font-medium hover:text-cryptik-green transition-colors relative group"
							>
								Contact
								<span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-cryptik-green group-hover:w-full transition-all duration-300"></span>
							</a>
						</li>
					</ul>
				</nav>

				<a
					href="/#contact"
					className="bg-cryptik-green text-white px-5 py-2 rounded font-semibold border-2 border-cryptik-green hover:bg-transparent hover:text-cryptik-green hover:-translate-y-0.5 transition-all duration-300"
				>
					Get Started
				</a>
			</div>
		</header>
	);
}
