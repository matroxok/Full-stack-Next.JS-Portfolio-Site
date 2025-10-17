'use client'

import {
	Navbar,
	NavBody,
	NavItems,
	MobileNav,
	NavbarLogo,
	NavbarButton,
	MobileNavHeader,
	MobileNavToggle,
	MobileNavMenu,
} from '@/components/ui/resizable-navbar'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export function Nav() {
	const navItems = [
		{
			name: 'Home',
			link: '#home',
		},
		{
			name: 'About',
			link: '#about',
		},
		{
			name: 'Expirience',
			link: '#expirience',
		},
		{
			name: 'Portfolio',
			link: '#portfolio',
		},
	]

	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	return (
		<div className="relative xl:px-42 w-full">
			<Navbar>
				{/* Desktop Navigation */}
				<NavBody>
					<NavbarLogo />
					<NavItems className="text-lg" items={navItems} />
					<div className="flex items-center gap-4">
						<Link
							href="#contact-form"
							scroll={true}
							className="relative z-50 pointer-events-auto bg-[#171717] text-white flex items-center justify-center gap-2 hover:bg-[#374151] focus:outline-none focus:ring-0 active:outline-none no-underline rounded-md px-4 py-2 transition-colors duration-200">
							<Image src="/message-dollar.svg" alt="" width={20} height={20} />
							Contact
						</Link>
					</div>
				</NavBody>

				{/* Mobile Navigation */}
				<MobileNav>
					<MobileNavHeader>
						<NavbarLogo />
						<MobileNavToggle isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
					</MobileNavHeader>

					<MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
						{navItems.map((item, idx) => (
							<a
								key={`mobile-link-${idx}`}
								href={item.link}
								onClick={() => setIsMobileMenuOpen(false)}
								className="relative text-neutral-600 dark:text-neutral-300">
								<span className="block">{item.name}</span>
							</a>
						))}
						<div className="flex w-full flex-col gap-4">
							<NavbarButton onClick={() => setIsMobileMenuOpen(false)} variant="primary" className="w-full">
								Contact
							</NavbarButton>
						</div>
					</MobileNavMenu>
				</MobileNav>
			</Navbar>
		</div>
	)
}
