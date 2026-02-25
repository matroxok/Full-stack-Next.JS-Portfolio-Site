'use client'

import { useState } from 'react'
import Script from 'next/script'
import { SpeedInsights } from '@vercel/speed-insights/next'

import { Nav } from '@/components/navbar'
import Hero from '@/components/hero'
import About from '@/components/about'
import Expirience from '@/components/expirience'
import ContactForm from '@/components/contact-form'
import Skills from '@/components/skills'
import Portfolio from '@/components/portfolio'
import { portfolio } from '@/data/portfolio'

import TerminalWindow from '@/components/ui/succesTerminal'

export default function Home() {
	const [showTerminal, setShowTerminal] = useState(false)

	const handleCloseTerminal = () => {
		setShowTerminal(false)
	}

	const handleSuccess = () => {
		setShowTerminal(true)
	}

	const person = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Mateusz Kozera',
		url: 'https://matrox.dev',
		sameAs: ['https://www.linkedin.com/in/mateusz-kozera-a30566313/', 'https://github.com/matroxok'],
		jobTitle: 'Web Developer, HPC Worker, IT Student',
		worksFor: { '@type': 'Organization', name: 'matrox.dev' },
	}

	const webSite = {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: 'matrox.dev',
		url: 'https://matrox.dev',
		potentialAction: {
			'@type': 'SearchAction',
			target: 'https://matrox.dev/search?q={query}',
			'query-input': 'required name=query',
		},
	}

	return (
		<>
			{showTerminal && (
				<div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xs bg-black/80 transition-opacity duration-300">
					<TerminalWindow onClose={handleCloseTerminal} />
				</div>
			)}
			<div className="text-white w-full h-full">
				<nav className="sticky mt-5 top-0 z-100">
					<Nav></Nav>
				</nav>
				<main>
					<Hero></Hero>
					<About></About>
					<div className="w-full border-t border-dotted border-[#D4D4D4]"></div>
					<Expirience></Expirience>
					<Skills></Skills>
					<Portfolio data={portfolio}></Portfolio>
					<ContactForm onSuccess={handleSuccess}></ContactForm>
				</main>
				<footer></footer>
				<SpeedInsights />
			</div>
			<Script id="ld-person" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
			<Script
				id="ld-website"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(webSite) }}
			/>
		</>
	)
}
